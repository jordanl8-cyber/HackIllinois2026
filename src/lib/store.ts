import { Session, SessionReport, CategoryRecord } from './types';

// Attach Maps to globalThis so they survive Next.js HMR module re-evaluation in dev mode.
// In production this is a no-op — the process never restarts mid-request.
declare global {
  // eslint-disable-next-line no-var
  var __sessions: Map<string, Session> | undefined;
  // eslint-disable-next-line no-var
  var __reports: Map<string, SessionReport> | undefined;
  // eslint-disable-next-line no-var
  var __categoryHistory: Map<string, CategoryRecord[]> | undefined;
}

const sessions: Map<string, Session> =
  globalThis.__sessions ?? (globalThis.__sessions = new Map());
const reports: Map<string, SessionReport> =
  globalThis.__reports ?? (globalThis.__reports = new Map());
const categoryHistoryByUser: Map<string, CategoryRecord[]> =
  globalThis.__categoryHistory ?? (globalThis.__categoryHistory = new Map());

export const store = {
  getSession: (id: string) => sessions.get(id),
  setSession: (id: string, session: Session) => sessions.set(id, session),

  getReport: (id: string) => reports.get(id),
  setReport: (id: string, report: SessionReport) => reports.set(id, report),

  getReportsByUser: (userName: string): SessionReport[] => {
    const userReports: SessionReport[] = [];
    reports.forEach((r) => {
      if (r.userName === userName) userReports.push(r);
    });
    return userReports.sort((a, b) => a.createdAt - b.createdAt);
  },

  // Local category history — primary source for stats + adaptive logic
  getCategoryHistory: (userName: string): CategoryRecord[] => {
    return categoryHistoryByUser.get(userName) || [];
  },

  addCategoryRecord: (userName: string, record: CategoryRecord): void => {
    const history = categoryHistoryByUser.get(userName) || [];
    history.push(record);
    categoryHistoryByUser.set(userName, history);
  },

  clearUser: (userName: string): void => {
    const sessionIdsToDelete: string[] = [];
    sessions.forEach((s, id) => {
      if (s.config.userName === userName) sessionIdsToDelete.push(id);
    });
    for (const id of sessionIdsToDelete) {
      sessions.delete(id);
      reports.delete(id);
    }
    categoryHistoryByUser.delete(userName);
  },
};
