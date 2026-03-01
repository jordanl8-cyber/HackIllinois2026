import { TechnicalSkill, BehavioralSkill, InterviewType, Skill, SweCategory, ConsultingCategory, QuestionCategory } from './types';

export const TECHNICAL_SKILLS: TechnicalSkill[] = [
  'problem_solving', 'tradeoff_reasoning', 'system_design',
  'edge_case_handling', 'time_complexity', 'communication_clarity',
];

export const BEHAVIORAL_SKILLS: BehavioralSkill[] = [
  'star_structure', 'specificity', 'ownership', 'reflection', 'quantification',
];

export const ALL_SKILLS: Skill[] = [...TECHNICAL_SKILLS, ...BEHAVIORAL_SKILLS];

export const SKILL_LABELS: Record<string, string> = {
  problem_solving: 'Problem Solving',
  tradeoff_reasoning: 'Tradeoff Reasoning',
  system_design: 'System Design',
  edge_case_handling: 'Edge Case Handling',
  time_complexity: 'Time Complexity Analysis',
  communication_clarity: 'Communication Clarity',
  star_structure: 'STAR Structure',
  specificity: 'Specificity',
  ownership: 'Ownership & Agency',
  reflection: 'Reflection & Learning',
  quantification: 'Quantification',
};

export const INTERVIEW_PHASES: Record<InterviewType, string[]> = {
  swe: ['coding_problem', 'follow_up', 'behavioral'],
  consulting: ['case_prompt', 'analysis', 'recommendation'],
  product: ['product_sense', 'metrics', 'behavioral'],
  behavioral: ['intro', 'leadership', 'reflection'],
  generic: ['intro', 'skill_probe', 'behavioral'],
};

export const SKILLS_BY_TYPE: Record<InterviewType, Skill[]> = {
  swe: ['problem_solving', 'tradeoff_reasoning', 'system_design', 'edge_case_handling', 'time_complexity', 'communication_clarity'],
  consulting: ['problem_solving', 'tradeoff_reasoning', 'communication_clarity', 'specificity', 'quantification'],
  product: ['problem_solving', 'tradeoff_reasoning', 'communication_clarity', 'specificity', 'quantification', 'ownership'],
  behavioral: ['star_structure', 'specificity', 'ownership', 'reflection', 'quantification', 'communication_clarity'],
  generic: ['problem_solving', 'communication_clarity', 'star_structure', 'specificity', 'ownership'],
};

export const MAX_QUESTIONS = 3;

// Question categories by interview type
export const SWE_CATEGORIES: SweCategory[] = [
  'arrays_strings', 'hash_maps', 'linked_lists', 'stacks_queues',
  'trees', 'graphs', 'dynamic_programming', 'recursion_backtracking', 'heaps_priority_queues',
];

export const CONSULTING_CATEGORIES: ConsultingCategory[] = [
  'revenue_problems', 'cost_problems', 'strategic_decisions',
  'investment_decisions', 'operational_bottlenecks',
];

export const ACCOUNTING_CATEGORIES: string[] = [
  'technical_proficiency', 'behavioral_star', 'software_process', 'industry_specific',
];

export const CATEGORY_LABELS: Record<string, string> = {
  arrays_strings: 'Arrays / Strings',
  hash_maps: 'Hash Maps',
  linked_lists: 'Linked Lists',
  stacks_queues: 'Stacks / Queues',
  trees: 'Trees',
  graphs: 'Graphs',
  dynamic_programming: 'Dynamic Programming',
  recursion_backtracking: 'Recursion / Backtracking',
  heaps_priority_queues: 'Heaps / Priority Queues',
  revenue_problems: 'Revenue Problems',
  cost_problems: 'Cost Problems',
  strategic_decisions: 'Strategic Decisions',
  investment_decisions: 'Investment Decisions',
  operational_bottlenecks: 'Operational Bottlenecks',
  technical_proficiency: 'Technical Proficiency (GAAP/IFRS)',
  behavioral_star: 'Behavioral (STAR-based)',
  software_process: 'Software / Process (Excel, ERP)',
  industry_specific: 'Industry-Specific (AP/AR)',
  product_sense: 'Product Sense',
  metrics: 'Metrics',
  tradeoffs: 'Tradeoffs',
  prioritization: 'Prioritization',
  leadership: 'Leadership',
  conflict: 'Conflict',
  failure: 'Failure',
  teamwork: 'Teamwork',
  growth: 'Growth',
};

export const CATEGORIES_BY_TYPE: Record<InterviewType, QuestionCategory[]> = {
  swe: SWE_CATEGORIES,
  consulting: CONSULTING_CATEGORIES,
  product: ['product_sense', 'metrics', 'tradeoffs', 'prioritization'],
  behavioral: ['leadership', 'conflict', 'failure', 'teamwork', 'growth'],
  generic: ['problem_solving', 'communication', 'scenario', 'depth'],
};

// Phases that count as the technical question
export const TECHNICAL_PHASES = new Set([
  'coding_problem', 'follow_up',
  'case_prompt', 'analysis',
  'product_sense', 'metrics',
  'skill_probe',
]);
