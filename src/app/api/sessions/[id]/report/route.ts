import { NextRequest, NextResponse } from 'next/server';
import { store } from '@/lib/store';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const report = store.getReport(id);
  if (!report) {
    return NextResponse.json({ error: 'Report not found' }, { status: 404 });
  }

  // Find previous report for the same role to compute skill deltas
  const userReports = store.getReportsByUser(report.userName);
  let previousSkillScores: { skill: string; score: number }[] | undefined;
  for (let i = userReports.length - 1; i >= 0; i--) {
    const prev = userReports[i];
    if (prev.sessionId !== id && prev.role === report.role && prev.interviewType === report.interviewType) {
      previousSkillScores = prev.skillScores.map((s) => ({ skill: s.skill, score: s.score }));
      break;
    }
  }

  return NextResponse.json({ ...report, previousSkillScores });
}
