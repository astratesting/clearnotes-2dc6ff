export interface DemoScript {
  input: string;
  topics: {
    label: string;
    color: string;
    subtopics: { name: string; note: string }[];
    tags?: string[];
  }[];
}

export const demoScripts: DemoScript[] = [
  {
    input:
      "ok so the q3 launch — Sarah said push to oct 15?? need to check with legal re gdpr stuff also reminder to read that hbr article on pricing tiers and the design team needs final copy by friday don't forget to follow up with mike about the API docs",
    topics: [
      {
        label: 'Q3 Launch',
        color: 'violet',
        subtopics: [
          { name: 'Timeline', note: 'Sarah said push to Oct 15' },
          { name: 'Legal review', note: 'Check with legal re GDPR compliance' },
        ],
      },
      {
        label: 'Reading list',
        color: 'coral',
        subtopics: [
          { name: 'Articles', note: 'HBR article on pricing tiers' },
        ],
      },
      {
        label: 'Action items',
        color: 'honey',
        subtopics: [
          { name: 'Design', note: 'Design team needs final copy by Friday' },
          { name: 'Engineering', note: 'Follow up with Mike about API docs' },
        ],
        tags: ['#follow-up', '#this-week'],
      },
    ],
  },
  {
    input:
      "research competitor pricing for the YC application — linear charges $8/user, notion $10, obsidian is free for personal use. need to check if our margins work at $8. also the investor deck needs a market size slide, ask jenna about the TAM numbers from last quarter. oh and i should schedule that coffee with alex from stripe",
    topics: [
      {
        label: 'YC Application',
        color: 'violet',
        subtopics: [
          { name: 'Pricing research', note: 'Linear $8/user, Notion $10, Obsidian free' },
          { name: 'Unit economics', note: 'Check margins at $8 price point' },
        ],
      },
      {
        label: 'Investor Deck',
        color: 'coral',
        subtopics: [
          { name: 'Market size', note: 'Ask Jenna about TAM numbers from last quarter' },
        ],
      },
      {
        label: 'Networking',
        color: 'honey',
        subtopics: [
          { name: 'Meetings', note: 'Schedule coffee with Alex from Stripe' },
        ],
        tags: ['#networking'],
      },
    ],
  },
  {
    input:
      "lecture notes from today's machine learning class — prof talked about transformer architecture, attention mechanism is Q times K transpose divided by sqrt of d_k, then softmax. need to review the backprop section before midterm. also homework 4 is due next tuesday and the study group meets thursday at 3pm in the library basement",
    topics: [
      {
        label: 'Machine Learning',
        color: 'violet',
        subtopics: [
          { name: 'Transformers', note: 'Attention: Q × K^T / √d_k, then softmax' },
          { name: 'Review needed', note: 'Backpropagation section before midterm' },
        ],
      },
      {
        label: 'Assignments',
        color: 'coral',
        subtopics: [
          { name: 'Homework', note: 'Homework 4 due next Tuesday' },
        ],
      },
      {
        label: 'Study Group',
        color: 'honey',
        subtopics: [
          { name: 'Schedule', note: 'Thursday 3pm, library basement' },
        ],
        tags: ['#academic', '#this-week'],
      },
    ],
  },
];
