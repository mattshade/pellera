export interface SlideData {
  id: number;
  chapter: string;
  headline: string;
  subtitle?: string;
  audience?: string;
  tone?: string;
  bullets?: string[];
  visualType: 'hero' | 'ribbon' | 'cards' | 'canvas' | 'timeline' | 'tiles' | 'roadmap' | 'process' | 'architecture' | 'curve' | 'matrix' | 'scale' | 'dashboard' | 'final';
  visualData?: any;
  notes: string;
}

export const presentationData: SlideData[] = [
  {
    id: 0,
    chapter: "Title",
    headline: "From Sales Handoff Chaos to Opportunity Orchestration",
    subtitle: "A 90-day modernization plan for improving AI/Data consulting opportunity quality, speed, and accountability.",
    audience: "Hiring panel, design leadership, delivery leadership, and business stakeholders.",
    tone: "Confident, strategic, practical, customer-ready, executive-friendly.",
    visualType: 'hero',
    notes: "Welcome everyone. Thank you for the opportunity to share this strategy with you today. This presentation outlines a 90-day modernization plan focused on a critical point of friction in our consulting lifecycle: the handoff between Sales and Delivery for AI and Data opportunities. We're going to talk about moving from a chaotic, reactive process to one that is orchestrated, clear, and sets our teams up for success."
  },
  {
    id: 1,
    chapter: "1. Opening",
    headline: "From fragmented handoffs to confident delivery",
    bullets: [
      "Sales, delivery, and clients are currently operating from different versions of the truth.",
      "The biggest problem is not effort. It is timing, context, and accountability.",
      "The recommendation is to create an opportunity orchestration layer across Salesforce, intake, discovery, and SOW generation."
    ],
    visualType: 'ribbon',
    notes: "Let's start with the reality on the ground. Right now, our teams are working incredibly hard, but they are operating from different versions of the truth. Sales is moving fast to capture intent, Delivery is trying to size work they don't fully understand, and clients feel the disconnect. The root problem isn't a lack of effort—it's timing, context loss, and unclear accountability. My recommendation is to solve this by building a dedicated opportunity orchestration layer."
  },
  {
    id: 2,
    chapter: "2. Problem Statement",
    headline: "The handoff is happening too late, with too little structure",
    bullets: [
      "Salesforce opportunities are created after key delivery work has already started.",
      "AEs lose context and rely on delivery to reconstruct opportunity history.",
      "Delivery teams are pulled into poorly qualified opportunities.",
      "Client confidence suffers when early discovery, pricing, and delivery framing are inconsistent."
    ],
    visualType: 'cards',
    notes: "When we look closely at the friction, a few key themes emerge. First, Salesforce isn't capturing the reality—opportunities are being logged after Delivery has already started solutioning. AEs are losing context between calls, forcing Delivery to act as historians. This leads to Delivery being pulled into deals that aren't real yet. Ultimately, the client feels this inconsistency, which erodes trust before the project even begins."
  },
  {
    id: 3,
    chapter: "3. Discovery Approach",
    headline: "Discovery should clarify workflow reality, not just collect opinions",
    bullets: [
      "Interview AEs, delivery leads, and operations stakeholders.",
      "Map the current path from first client signal to SOW generation.",
      "Identify decision gates, missing artifacts, and moments where context is lost.",
      "Validate which problems are behavioral, procedural, or technology-driven."
    ],
    visualType: 'canvas',
    notes: "To solve this, we can't just guess. Our discovery needs to map the actual workflow, not just how we wish it worked. We need to interview the people on the ground—AEs, Delivery Leads, Ops—and trace the true path from the very first client signal to the signed SOW. By identifying exactly where context drops and gates are bypassed, we can figure out whether the fix needs to be a behavior change, a process update, or a new piece of technology."
  },
  {
    id: 4,
    chapter: "4. Current-State Journey",
    headline: "Today's process rewards urgency but creates downstream drag",
    visualData: {
      steps: [
        "Opportunity identified", "AI/Data classification", "Informal delivery outreach", 
        "Client discovery", "Draft proposal", "Client pricing alignment", 
        "Salesforce opportunity", "SOW workflow"
      ],
      frictions: [
        { step: 2, label: "No enforced qualification gate" },
        { step: 3, label: "Context lives in calls, Slack, email, and memory" },
        { step: 4, label: "Delivery estimates before commercial readiness" },
        { step: 6, label: "Salesforce entered too late" }
      ]
    },
    visualType: 'timeline',
    notes: "This is what the journey looks like today. Notice how much happens before anything hits a system of record. An AE identifies a lead, informally pings Delivery, and we immediately jump into client discovery and drafting proposals. Only later does it hit Salesforce. We have no qualification gate, context is scattered across Slack and memory, and we are estimating work before we know if the client has budget."
  },
  {
    id: 5,
    chapter: "5. Design Principles",
    headline: "A better workflow should be structured, lightweight, and hard to bypass",
    bullets: [
      "Capture context once, reuse everywhere",
      "Qualify before delivery effort scales",
      "Make ownership visible",
      "Meet teams where they already work",
      "Automate documentation, not judgment"
    ],
    visualType: 'tiles',
    notes: "As we design the future state, we need to adhere to a few core principles. It can't be a heavy administrative burden. We must capture context once and reuse it. We must qualify deals before Delivery spends hours on them. We need clear ownership. We should integrate with the tools teams already use, like Slack and Salesforce. And crucially, we should use technology to automate the documentation, but leave the strategic judgment to our experts."
  },
  {
    id: 6,
    chapter: "6. Short-Term Wins 0–90 Days",
    headline: "Stabilize the workflow before overbuilding the platform",
    bullets: [
      "Require a lightweight opportunity intake before delivery engagement.",
      "Create a Salesforce “pre-opportunity” or qualification stage.",
      "Standardize an AI/Data opportunity scorecard.",
      "Introduce a shared discovery brief template.",
      "Add Slack/Teams reminders for stale opportunities.",
      "Define a simple RACI across AE, Delivery Lead, and Ops."
    ],
    visualType: 'roadmap',
    notes: "We don't need a massive IT project to start seeing value. In the first 90 days, our focus is stabilization. We'll introduce a mandatory, lightweight intake form before Delivery can be engaged. We'll add a 'pre-opportunity' stage in Salesforce. We'll roll out a standardized scorecard and discovery brief. And we'll clarify the RACI model so everyone knows exactly what they own."
  },
  {
    id: 7,
    chapter: "7. Proposed Workflow",
    headline: "Create one source of truth before the first client-facing recommendation",
    bullets: [
      "AE captures initial signal",
      "Intake form creates Salesforce pre-opportunity",
      "Qualification score determines delivery involvement",
      "Delivery adds discovery notes and solution framing",
      "Proposal is generated from shared structured data",
      "Client approval promotes opportunity and triggers SOW automation"
    ],
    visualType: 'process',
    notes: "Here is the proposed future state. It's cleaner and highly gated. The AE captures the initial signal via a structured intake form, which automatically creates the pre-opportunity in Salesforce. A qualification score dictates if Delivery steps in. If they do, they work from the exact same structured data record. When it's time for a proposal, it's generated from this shared truth. No more recreating the wheel."
  },
  {
    id: 8,
    chapter: "8. Technology Recommendations",
    headline: "Use technology to reinforce the operating model",
    bullets: [
      "Salesforce as the system of record",
      "Structured intake form embedded in Salesforce or connected via form tooling",
      "AI-assisted opportunity brief generation",
      "CRM-triggered reminders and stale-opportunity alerts",
      "Proposal/SOW content generated from approved structured fields",
      "Dashboard for opportunity health, handoff age, and delivery load"
    ],
    visualType: 'architecture',
    notes: "To support this new workflow, we'll leverage our existing technology stack more intelligently. Salesforce remains the system of record, but we'll feed it via embedded intake forms. We can introduce AI to help summarize call transcripts into opportunity briefs. We'll use CRM automations to flag stale deals, and generate our SOWs directly from the structured fields that both Sales and Delivery have approved."
  },
  {
    id: 9,
    chapter: "9. Long-Term Roadmap 90 Days+",
    headline: "Move from process cleanup to intelligent opportunity orchestration",
    bullets: [
      "Build a guided opportunity workspace for AEs and delivery.",
      "Introduce AI-assisted solution framing and reusable proposal blocks.",
      "Implement dynamic qualification scoring and executive dashboards."
    ],
    visualType: 'curve',
    notes: "Beyond the first 90 days, we move from just cleaning up the process to true intelligent orchestration. We can build a unified workspace where AEs and Delivery collaborate. We can use AI to recommend solution architectures based on past successful projects. We'll implement dynamic scoring that factors in Delivery capacity, and build out executive dashboards to track not just win rate, but win quality."
  },
  {
    id: 10,
    chapter: "10. Ownership Model",
    headline: "The process only works if accountability is explicit",
    bullets: [
      "AE owns commercial context, client urgency, budget signal, and Salesforce hygiene.",
      "Delivery Lead owns solution feasibility, team shape, assumptions, and estimate quality.",
      "Operations owns workflow governance, reporting, and SOW readiness.",
      "Design/Product owns usability of the intake and handoff experience.",
      "Leadership owns enforcement and adoption."
    ],
    visualType: 'matrix',
    notes: "Process without ownership is just a suggestion. Here is exactly who owns what. The AE owns the commercial reality and system hygiene. Delivery owns the technical feasibility and estimates. Ops owns the governance. Product and Design own making sure the tools are actually easy to use. And Leadership must own the enforcement—if it's not in the system, it doesn't exist."
  },
  {
    id: 11,
    chapter: "11. Risks & Tradeoffs",
    headline: "The greatest risk is making the process heavier without making it clearer",
    bullets: [
      "Too much required intake could slow sales momentum.",
      "Too little structure keeps delivery trapped in rework.",
      "AI-generated content could create false confidence without review.",
      "Salesforce enforcement may be resisted if the UX feels punitive.",
      "Dashboards can expose problems without fixing ownership."
    ],
    visualType: 'scale',
    notes: "We have to be honest about the risks. If we make intake too heavy, Sales will rebel. If we make it too light, Delivery continues to suffer. If the Salesforce UX is clunky, people will work around it. The key tradeoff is balancing speed with quality. We will start lightweight, measure adoption closely, and only automate what we have proven works manually."
  },
  {
    id: 12,
    chapter: "12. Success Metrics",
    headline: "Measure whether the handoff is becoming faster, clearer, and more reliable",
    bullets: [
      "Time from first client signal to Salesforce opportunity",
      "Percentage of opportunities with complete intake",
      "Delivery confidence score",
      "Win quality, not just win rate"
    ],
    visualType: 'dashboard',
    notes: "How will we know this is working? We won't just look at revenue. We'll look at cycle times—how fast do we get to a real opportunity? What percentage of deals actually follow the intake process? Are we reducing proposal rework? And most importantly, we'll introduce a Delivery Confidence Score to measure how prepared our teams feel when they are handed a new project."
  },
  {
    id: 13,
    chapter: "13. Closing Recommendation",
    headline: "The path forward is not another tool. It is a clearer operating system.",
    bullets: [
      "Establish the qualification gate.",
      "Capture structured context once.",
      "Make ownership visible.",
      "Automate from trusted data.",
      "Use AI to accelerate synthesis, not replace expertise."
    ],
    visualType: 'final',
    notes: "In closing, the solution to handoff chaos isn't buying a new tool. It's establishing a clearer operating system. By enforcing a qualification gate, capturing context once, and automating based on trusted data, we create a scalable model. This improves client confidence, protects our Delivery teams, and ultimately helps Sales move faster with less ambiguity. Thank you."
  }
];
