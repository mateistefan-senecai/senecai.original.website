'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';

/* ============ QUESTION MODEL (verbatim from the SenecAI reference) ============ */
const YN = ['Yes', 'No', 'Unsure'];

const STAGES: any[] = [
    {
        id: 'general', cls: '', pn: 'Step 1', title: 'General',
        note: 'Basic information about your company, product and market. Answered by anyone — no lookup needed.',
        sections: [
            { name: 'Company', qs: [
                { id: 'G1', text: 'Company name and website.', fields: [{ k: 'v', t: 'text' }] },
                { id: 'G2', text: 'Which legal entity operates the AI system, and in which country is it registered?', fields: [{ k: 'v', t: 'text' }] },
                { id: 'G3', text: 'Company size.', fields: [{ k: 'v', t: 'choice', opts: ['1–10', '11–50', '51–200', '201–1000', '1000+'] }] },
                { id: 'G4', text: 'How large is the engineering team, and who owns infrastructure and data topics?', fields: [{ k: 'v', t: 'area' }] },
            ] },
            { name: 'Product & market', qs: [
                { id: 'G5', text: 'In one or two sentences: what does the system do, and what decision does its output feed into?', fields: [{ k: 'v', t: 'area' }] },
                { id: 'G6', text: "Who are your clients (sectors, size, countries), and who are the individuals affected by the system's output (e.g. job candidates, end users)?", fields: [{ k: 'v', t: 'area' }] },
                { id: 'G7', text: "What is the system's status, and how many client deployments are live, in which countries?", fields: [
                    { k: 'status', t: 'choice', label: 'Status', opts: ['Production', 'Pilot', 'Development'] },
                    { k: 'deploy', t: 'area', label: 'Deployments + countries (EU vs non-EU)' }] },
            ] },
            { name: 'Engagement', qs: [
                { id: 'G8', text: 'What is driving the compliance work, and is there a hard deadline?', fields: [
                    { k: 'drivers', t: 'multi', label: 'Drivers (select all that apply)', opts: ['Client requirement', 'Procurement deadline', 'Investor due diligence', 'Regulator contact', 'General readiness', 'Other'] },
                    { k: 'deadline', t: 'text', label: 'Hard deadline, if any' }] },
                { id: 'G9', text: 'What are you looking for from this engagement — an audit/review of where you stand, or also the implementation work to close the gaps?', fields: [
                    { k: 'scope', t: 'choice', label: 'Scope', opts: ['Audit / gap review only', 'Audit + implementation', 'Implementation only (audit already done)', 'Not decided yet'] },
                    { k: 'who', t: 'choice', label: 'If implementation is needed, who would carry it out?', opts: ['Our own team', 'Your team', 'Mixed', 'Not decided yet'] },
                    { k: 'cap', t: 'text', label: 'Notes on internal capacity or expectations' }] },
            ] },
        ],
    },
    {
        id: 'legal', cls: '', pn: 'Step 2', title: 'Legal Compliance',
        note: "Yes/no plus a short note is enough — we count what exists, we don't review it yet. Answered by legal / operations.",
        sections: [
            { name: 'Risk classification', qs: [
                { id: 'L1', text: "Have you self-assessed the system's AI Act risk classification? Is this documented in writing anywhere (memo, internal note, legal opinion)?", fields: [
                    { k: 'yn', t: 'yesno', label: 'Assessment done?' },
                    { k: 'class', t: 'choice', label: 'If assessed — result', opts: ['High-risk', 'Limited-risk', 'Out of scope', 'Unsure'] },
                    { k: 'where', t: 'text', label: 'Where documented (if anywhere)' }] },
                { id: 'L2', text: "Does the system infer or attempt to infer candidates' emotional state, personality traits, or other characteristics from voice, tone, or speech patterns during the interview?", fields: [{ k: 'yn', t: 'yesno' }, { k: 'd', t: 'area', label: "If yes — what is inferred and how it's used" }] },
            ] },
            { name: 'GDPR', qs: [
                { id: 'L3', text: 'Do you have a Record of Processing Activities (RoPA) covering the AI system? When was it last updated?', fields: [{ k: 'yn', t: 'yesno' }, { k: 'd', t: 'text', label: 'Last updated' }] },
                { id: 'L4', text: 'Do you have a Data Protection Impact Assessment (DPIA) for this system? Who prepared it (internal / external counsel / consultant), and when?', fields: [{ k: 'yn', t: 'yesno' }, { k: 'd', t: 'text', label: 'Prepared by + when' }] },
                { id: 'L5', text: 'Do you have Data Processing Agreements (DPAs) in place with all relevant sub-processors?', fields: [{ k: 'yn', t: 'yesno' }, { k: 'd', t: 'text', label: 'Notes' }] },
                { id: 'L6', text: "Has a Legitimate Interest Assessment (LIA) or equivalent lawful-basis analysis been completed for processing affected individuals' data?", fields: [{ k: 'yn', t: 'yesno' }, { k: 'd', t: 'text', label: 'Notes' }] },
                { id: 'L7', text: "Is there a current, published Privacy Policy that specifically reflects this system's data processing (not a generic template)?", fields: [{ k: 'yn', t: 'yesno' }] },
                { id: 'L8', text: 'Are affected individuals informed, before or during the interaction, about how their data is used, retained, and who it is shared with?', fields: [{ k: 'yn', t: 'yesno' }, { k: 'd', t: 'text', label: 'How' }] },
            ] },
            { name: 'Data governance & testing', qs: [
                { id: 'L9', text: 'What data has the model been trained on, and who sources/provides this data (e.g. internal data collected over time, a third-party vendor, licensed datasets, public datasets)?', fields: [{ k: 'v', t: 'area' }] },
                { id: 'L10', text: 'Is there any documentation describing this training/testing data — whether it was checked for quality, relevance, or representativeness across affected subgroups?', fields: [{ k: 'yn', t: 'yesno' }, { k: 'd', t: 'text', label: 'What exists' }] },
                { id: 'L11', text: "Has the system's accuracy ever been measured or tested, including whether performance is consistent across different subgroups (e.g. by gender, accent, language, age)? Is this documented anywhere?", fields: [{ k: 'yn', t: 'yesno' }, { k: 'd', t: 'area', label: 'What was tested' }] },
                { id: 'L12', text: 'Has accuracy or bias testing specifically checked performance across accents, dialects, and non-native speakers of the interview language?', fields: [{ k: 'yn', t: 'yesno' }, { k: 'd', t: 'text', label: 'What was tested' }] },
                { id: 'L13', text: 'Has the system been tested for robustness — how it behaves with unusual inputs, edge cases, or unexpected responses? Is this documented anywhere?', fields: [{ k: 'yn', t: 'yesno' }, { k: 'd', t: 'text', label: 'Notes' }] },
                { id: 'L14', text: 'Does the system automatically log its operations and decisions (e.g. what inputs led to what output), in a way that could reconstruct a specific outcome after the fact? Is this documented?', fields: [{ k: 'yn', t: 'yesno' }, { k: 'd', t: 'text', label: 'Notes' }] },
            ] },
            { name: 'Governance & documentation', qs: [
                { id: 'L15', text: 'Is there a documented risk management process for this system (identified risks, mitigations, residual risk)? Or has risk been considered only informally?', fields: [{ k: 'v', t: 'choice', opts: ['Documented process', 'Informal only', 'Nothing yet'] }, { k: 'd', t: 'text', label: 'Notes' }] },
                { id: 'L16', text: 'Do you have any documented internal process (formal or informal) that governs how changes to the AI system are reviewed and approved before deployment?', fields: [{ k: 'yn', t: 'yesno' }, { k: 'd', t: 'text', label: 'Notes' }] },
                { id: 'L17', text: 'Is there a document retention/version control system for AI-related policies and technical documentation, so that changes over time can be traced?', fields: [{ k: 'yn', t: 'yesno' }] },
                { id: 'L18', text: 'Are quality/compliance responsibilities for this system assigned to specific roles, or handled ad hoc by whoever is available?', fields: [{ k: 'v', t: 'choice', opts: ['Assigned to specific roles', 'Ad hoc'] }, { k: 'd', t: 'text', label: 'Who' }] },
                { id: 'L19', text: 'Is there a named person or team internally responsible for AI Act compliance? Is this documented as a role/responsibility anywhere?', fields: [{ k: 'yn', t: 'yesno' }, { k: 'd', t: 'text', label: 'Who' }] },
                { id: 'L20', text: "Do you have technical documentation describing the system's architecture, intended purpose, and limitations, in any form? If yes, list the documents comprising the technical documentation.", fields: [{ k: 'yn', t: 'yesno' }, { k: 'd', t: 'area', label: 'If yes — list documents' }] },
            ] },
            { name: 'Transparency & oversight', qs: [
                { id: 'L21', text: 'Do you provide deployers/clients with instructions for use — capabilities, limitations, correct interpretation of outputs?', fields: [{ k: 'yn', t: 'yesno' }] },
                { id: 'L22', text: 'Are affected individuals explicitly told, before or during the interaction, that they are interacting with an AI system?', fields: [{ k: 'yn', t: 'yesno' }] },
                { id: 'L23', text: 'Are candidates told before the interview that it is conducted by an AI rather than a human, and is a non-AI alternative offered to candidates who prefer not to interact with the AI system?', fields: [{ k: 'told', t: 'yesno', label: 'Told in advance?' }, { k: 'alt', t: 'yesno', label: 'Alternative offered?' }] },
                { id: 'L24', text: 'Can a human currently review, override, or escalate an AI-generated assessment? Is this workflow documented anywhere, or does it only exist informally/verbally?', fields: [{ k: 'yn', t: 'yesno', label: 'Possible?' }, { k: 'doc', t: 'choice', label: 'Documented?', opts: ['Documented', 'Informal/verbal only', 'No workflow'] }] },
                { id: 'L25', text: 'In practice, are negative outcomes (e.g. a rejection) ever generated and acted on without a human reviewing that specific case, or does a human always review negative outcomes before they reach the candidate?', fields: [{ k: 'v', t: 'choice', opts: ['Human always reviews negative outcomes', 'Sometimes fully automated', 'Always fully automated', 'Unsure'] }, { k: 'd', t: 'text', label: 'Notes' }] },
                { id: 'L26', text: "Is there any existing process for tracking the system's performance, accuracy, or complaint patterns once live (post-market monitoring)?", fields: [{ k: 'yn', t: 'yesno' }, { k: 'd', t: 'text', label: 'Notes' }] },
                { id: 'L27', text: 'Is there an existing incident response process (security or otherwise) that could be extended to cover AI-specific incidents?', fields: [{ k: 'yn', t: 'yesno' }, { k: 'd', t: 'text', label: 'Notes' }] },
            ] },
            { name: 'Marketing claims', qs: [
                { id: 'L28', text: 'Do your marketing materials use terms like "unbiased", "fair", or "AI Act compliant"? If so, what internal testing, audit, or documentation currently substantiates these claims?', fields: [{ k: 'yn', t: 'yesno', label: 'Such claims made?' }, { k: 'd', t: 'area', label: 'If yes — what substantiates them' }] },
            ] },
        ],
    },
    {
        id: 'ai', cls: '', pn: 'Step 3', title: 'AI Assessment',
        note: 'The technical shape of the system — stack, data and volumes. Answered by engineering. Names and rough numbers are enough.',
        sections: [
            { name: 'Stack', qs: [
                { id: 'A1', text: 'Which third-party services power the system — LLM provider(s), speech/voice, telephony, hosting? Names are enough.', fields: [{ k: 'v', t: 'area' }] },
                { id: 'A2', text: 'Is anything trained or fine-tuned in-house — any model, embedding, classifier, or scoring logic?', fields: [{ k: 'yn', t: 'yesno' }, { k: 'd', t: 'area', label: 'If yes — what, briefly' }] },
                { id: 'A3', text: "If any scoring or ranking logic was trained or fine-tuned in-house, was it trained on the company's own historical hiring outcomes or decisions?", fields: [{ k: 'yn', t: 'yesno' }, { k: 'd', t: 'area', label: 'If yes — describe the data and outcomes used' }] },
                { id: 'A4', text: 'Are model versions pinned to a specific version, or set to auto-update / "latest"?', fields: [{ k: 'v', t: 'choice', opts: ['Pinned', 'Auto-update / latest', 'Mixed', 'Unsure'] }] },
                { id: 'A5', text: 'Which integrations are actually live today (vs planned): e.g. ATS/CRM, WhatsApp, SMS, email, voice?', fields: [{ k: 'v', t: 'area' }] },
            ] },
            { name: 'Data & volumes', qs: [
                { id: 'A6', text: 'Rough usage volume to date and current monthly run rate (e.g. interviews, sessions, transactions), split by language/market if relevant.', fields: [{ k: 'v', t: 'area' }] },
                { id: 'A7', text: 'What is stored per interaction (audio, transcripts, scores, logs, metadata), and roughly for how long?', fields: [{ k: 'v', t: 'area' }] },
                { id: 'A8', text: 'Where is the data hosted (cloud provider and region) — any processing outside the EEA that you know of?', fields: [
                    { k: 'host', t: 'text', label: 'Cloud provider + region' },
                    { k: 'eea', t: 'yesno', label: 'Any processing outside the EEA?' }] },
                { id: 'A9', text: 'Is any demographic data about affected individuals collected (e.g. gender, age, nationality)?', fields: [{ k: 'yn', t: 'yesno' }, { k: 'd', t: 'text', label: 'If yes — what' }] },
            ] },
        ],
    },
    {
        id: 'cyber', cls: 'cyber', pn: 'Step 4', title: 'Cyber',
        note: 'Complete this part when security testing (pentest / red-team) is in scope. Answered by engineering / security.',
        sections: [
            { name: 'Engagement Overview', qs: [
                { id: 'C1', text: 'What is the name/description of the GenAI application/system?', fields: [{ k: 'v', t: 'text' }] },
                { id: 'C2', text: 'What business purpose does it serve?', fields: [{ k: 'v', t: 'area' }] },
                { id: 'C3', text: 'Is the target internal facing, external facing, or embedded in another product?', fields: [{ k: 'v', t: 'choice', opts: ['Internal facing', 'External facing', 'Embedded in another product'] }] },
            ] },
            { name: 'Architecture & Deployment', qs: [
                { id: 'C4', text: 'Please provide a high-level architecture diagram.', fields: [{ k: 'v', t: 'area', label: 'Link or note on how it will be shared' }] },
                { id: 'C5', text: 'Describe the GenAI system architecture.', fields: [{ k: 'v', t: 'area' }] },
                { id: 'C6', text: 'Is the system a single LLM app, an agent/multi-agent framework, a tool-using assistant, an autonomous workflow/orchestration, or a hybrid AI pipeline?', fields: [{ k: 'v', t: 'choice', opts: ['Single LLM app', 'Agent/multi-agent framework', 'Tool-using assistant', 'Autonomous workflow/orchestration', 'Hybrid AI pipeline'] }] },
                { id: 'C7', text: 'Is the application a web application, API only, mobile application, desktop application, Slack/Teams/Discord bot, embedded widget, voice interface, or other?', fields: [{ k: 'v', t: 'multi', opts: ['Web application', 'API only', 'Mobile application', 'Desktop application', 'Slack/Teams/Discord bot', 'Embedded widget', 'Voice interface', 'Other'] }] },
            ] },
            { name: 'Model Information', qs: [
                { id: 'C8', text: 'Which models are used (e.g. OpenAI GPT-4.1/GPT-4o/o-series, Anthropic Claude, Google Gemini, Meta Llama, a self-hosted OSS model, or a proprietary fine-tuned model)?', fields: [{ k: 'v', t: 'area' }] },
                { id: 'C9', text: 'Are models hosted by a vendor API, self-hosted, hosted in a cloud VPC/private endpoint, or on-premise?', fields: [{ k: 'v', t: 'multi', opts: ['Vendor API', 'Self-hosted', 'Cloud VPC/private endpoint', 'On-premise'] }] },
                { id: 'C10', text: 'Are any models fine-tuned/custom-trained? If yes, please describe the training/fine-tuning process.', fields: [{ k: 'yn', t: 'yesno' }, { k: 'd', t: 'area', label: 'If yes — describe' }] },
                { id: 'C11', text: 'Are multiple models used in routing/chains? If yes, please explain the orchestration logic.', fields: [{ k: 'yn', t: 'yesno' }, { k: 'd', t: 'area', label: 'If yes — explain' }] },
            ] },
            { name: 'Prompting / System Design', qs: [
                { id: 'C12', text: 'Can you provide system prompts, developer prompts, hidden instructions, and prompt templates?', fields: [{ k: 'yn', t: 'yesno' }, { k: 'd', t: 'text', label: 'Notes' }] },
                { id: 'C13', text: 'Is a prompt templating framework used (e.g. LangChain, LlamaIndex, Semantic Kernel, or a custom framework)?', fields: [{ k: 'yn', t: 'yesno' }, { k: 'd', t: 'text', label: 'Which one' }] },
            ] },
            { name: 'RAG / Information Retrieval', qs: [
                { id: 'C14', text: 'Does the application use RAG (Retrieval-Augmented Generation)?', fields: [{ k: 'yn', t: 'yesno' }] },
                { id: 'C15', text: 'What data sources feed the RAG pipeline (internal documents, customer documents, database records, web search, third-party APIs, uploaded files, other)?', fields: [{ k: 'v', t: 'area' }] },
                { id: 'C16', text: 'What vector DB / retrieval system is used (e.g. Pinecone, Weaviate, Chroma, Elasticsearch, PGVector, other)?', fields: [{ k: 'v', t: 'text' }] },
                { id: 'C17', text: 'How is ingestion performed (manual upload, automated sync, API ingestion, user uploads)?', fields: [{ k: 'v', t: 'multi', opts: ['Manual upload', 'Automated sync', 'API ingestion', 'User uploads'] }] },
            ] },
            { name: 'Agent / Tool / Plugin Capabilities', qs: [
                { id: 'C18', text: 'Does the model invoke tools/functions?', fields: [{ k: 'yn', t: 'yesno' }] },
                { id: 'C19', text: 'List all available tools/functions/plugins. For each: name, purpose, required permissions, and side effects (read/write/delete/send).', fields: [{ k: 'v', t: 'area' }] },
                { id: 'C20', text: 'Can the AI send emails, create tickets, modify data, execute code, query databases, access internal APIs, trigger workflows, or access cloud resources?', fields: [{ k: 'v', t: 'multi', opts: ['Send emails', 'Create tickets', 'Modify data', 'Execute code', 'Query databases', 'Access internal APIs', 'Trigger workflows', 'Access cloud resources', 'None of these'] }] },
                { id: 'C21', text: 'Are tool calls user-confirmed before execution?', fields: [{ k: 'yn', t: 'yesno' }] },
                { id: 'C22', text: 'Are there role/permission boundaries for tool access?', fields: [{ k: 'yn', t: 'yesno' }, { k: 'd', t: 'text', label: 'Notes' }] },
            ] },
            { name: 'Memory / Context Handling', qs: [
                { id: 'C23', text: 'Does the system store conversation memory (session only, persistent per user, or shared/global memory)?', fields: [{ k: 'v', t: 'choice', opts: ['Session only', 'Persistent per user', 'Shared/global memory', 'No memory'] }] },
                { id: 'C24', text: 'How long is memory retained?', fields: [{ k: 'v', t: 'text' }] },
                { id: 'C25', text: 'Is memory isolated between users/tenants?', fields: [{ k: 'yn', t: 'yesno' }] },
                { id: 'C26', text: 'Can users edit/delete stored memory?', fields: [{ k: 'yn', t: 'yesno' }] },
            ] },
            { name: 'Authentication / Authorization', qs: [
                { id: 'C27', text: 'What authentication mechanisms protect the application (SSO, OAuth, JWT, API keys, none/public)?', fields: [{ k: 'v', t: 'multi', opts: ['SSO', 'OAuth', 'JWT', 'API keys', 'None / public'] }] },
                { id: 'C28', text: 'Are there multiple user roles/tiers?', fields: [{ k: 'yn', t: 'yesno' }, { k: 'd', t: 'text', label: 'Which roles' }] },
                { id: 'C29', text: 'Is RBAC/ABAC enforced on prompts, retrieved data, tool access, and generated outputs?', fields: [{ k: 'yn', t: 'yesno' }, { k: 'd', t: 'text', label: 'Notes' }] },
            ] },
            { name: 'Security Controls / Guardrails', qs: [
                { id: 'C30', text: 'What protections are implemented (prompt filtering, moderation API, input sanitization, output filtering, jailbreak detection, prompt injection detection, policy engine, human approval workflows)?', fields: [{ k: 'v', t: 'multi', opts: ['Prompt filtering', 'Moderation API', 'Input sanitization', 'Output filtering', 'Jailbreak detection', 'Prompt injection detection', 'Policy engine', 'Human approval workflows', 'None'] }] },
                { id: 'C31', text: 'Are guardrails applied pre-prompt, pre-tool, post-output, or via continuous/agent loop controls?', fields: [{ k: 'v', t: 'multi', opts: ['Pre-prompt', 'Pre-tool', 'Post-output', 'Continuous/agent loop controls'] }] },
                { id: 'C32', text: 'Are there rate limits / abuse protections?', fields: [{ k: 'yn', t: 'yesno' }, { k: 'd', t: 'text', label: 'Notes' }] },
            ] },
            { name: 'Environment / Access for Testing', qs: [
                { id: 'C33', text: 'Which environment will be tested (production, staging, QA, dedicated test)?', fields: [{ k: 'v', t: 'choice', opts: ['Production', 'Staging', 'QA', 'Dedicated test'] }] },
                { id: 'C34', text: 'Will testers receive user accounts, admin accounts, API keys, documentation, and/or source code / white-box access?', fields: [{ k: 'v', t: 'multi', opts: ['User accounts', 'Admin accounts', 'API keys', 'Documentation', 'Source code / white-box access'] }] },
                { id: 'C35', text: 'Are there IP allowlisting requirements?', fields: [{ k: 'yn', t: 'yesno' }, { k: 'd', t: 'text', label: 'Details' }] },
                { id: 'C36', text: 'Are there test window restrictions?', fields: [{ k: 'yn', t: 'yesno' }, { k: 'd', t: 'text', label: 'Details' }] },
            ] },
            { name: 'Rules of Engagement', qs: [
                { id: 'C37', text: 'Are destructive tests permitted?', fields: [{ k: 'yn', t: 'yesno' }] },
                { id: 'C38', text: 'Is data exfiltration proof-of-concept allowed?', fields: [{ k: 'yn', t: 'yesno' }] },
                { id: 'C39', text: 'Are automated fuzzing / high-volume attacks allowed?', fields: [{ k: 'yn', t: 'yesno' }] },
                { id: 'C40', text: 'Are model-cost-generating tests restricted?', fields: [{ k: 'yn', t: 'yesno' }, { k: 'd', t: 'text', label: 'Details' }] },
                { id: 'C41', text: 'Are there any prohibited actions or sensitive systems?', fields: [{ k: 'yn', t: 'yesno' }, { k: 'd', t: 'area', label: 'If yes — list them' }] },
            ] },
        ],
    },
    {
        id: 'export', cls: '', pn: 'Step 5', title: 'Export',
        note: "Review what's still open, then export your answers as a PDF and send them over.",
        sections: [],
    },
];

/* ============ CSS (verbatim from the SenecAI reference) ============ */
const CSS = `
:root{
  --gold:#D4AF37;--gold-deep:#C9A02D;--gold-light:#F6D173;--gold-pale:#FBE9B9;--gold-wash:#FDF4DC;--gold-tint:rgba(212,175,55,.10);
  --paper:#FFFFFF;--shell:#FAFAF9;--card:#FFFFFF;--ink:#111827;--ink-mid:#374151;--ink-soft:#4B5563;--ink-faint:#9CA3AF;--line:#E5E7EB;--line-soft:#F3F4F6;--danger:#B91C1C;
  --accent:var(--gold);--accent-soft:var(--gold-wash);--cyber:#1F2937;--cyber-soft:#F3F4F6;
  --radius:12px;--font:'Space Grotesk',system-ui,-apple-system,sans-serif;
}
.senecai-compliance *{box-sizing:border-box;margin:0;padding:0}
body{background:var(--shell)}
.senecai-compliance{background:var(--shell);color:var(--ink);font:15px/1.6 var(--font);-webkit-font-smoothing:antialiased;min-height:100vh}
.senecai-compliance .wrap{max-width:860px;margin:0 auto;padding:0 24px 120px}

.senecai-compliance .brandbar{background:#fff;border-bottom:1px solid var(--line)}
.senecai-compliance .brandbar-in{max-width:960px;margin:0 auto;padding:14px 24px;display:flex;align-items:center;gap:12px}
.senecai-compliance .brandlogo{height:40px;width:auto;display:block}
.senecai-compliance .brandcta{margin-left:auto;font-size:13px;font-weight:600;color:#111827;background:linear-gradient(135deg,var(--gold-light),var(--gold-deep));padding:9px 20px;border-radius:999px;text-decoration:none;border:1px solid var(--gold-deep);transition:filter .15s,box-shadow .15s;white-space:nowrap}
.senecai-compliance .brandcta:hover{filter:brightness(1.05);box-shadow:0 4px 14px rgba(212,175,55,.35)}
@media(max-width:480px){.senecai-compliance .brandlogo{height:34px}.senecai-compliance .brandcta{padding:8px 15px;font-size:12px}}

.senecai-compliance header{padding:44px 0 24px}
.senecai-compliance .kicker{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--gold-deep);font-weight:600}
.senecai-compliance h1{font-weight:700;font-size:33px;line-height:1.12;letter-spacing:-.02em;margin:12px 0 10px}
.senecai-compliance .rule{width:52px;height:3px;background:linear-gradient(90deg,var(--gold),var(--gold-light));border-radius:2px;margin-bottom:16px}
.senecai-compliance .sub{color:var(--ink-soft);max-width:62ch;font-size:15px}

.senecai-compliance .stepbar{position:sticky;top:0;z-index:50;background:rgba(250,250,249,.96);backdrop-filter:blur(10px);margin:0 -24px;padding:12px 24px 0;border-bottom:1px solid var(--line)}
.senecai-compliance .steps{display:flex;gap:6px;max-width:860px;margin:0 auto}
.senecai-compliance .step{flex:1;display:flex;align-items:center;justify-content:center;gap:8px;padding:11px 12px;font-size:13px;color:var(--ink-soft);cursor:pointer;background:var(--line-soft);border:1px solid var(--line);border-bottom:none;border-radius:9px 9px 0 0;position:relative;bottom:-1px;user-select:none;font-family:var(--font);transition:background .15s,color .15s}
.senecai-compliance .step:hover{background:#fff;color:var(--ink)}
.senecai-compliance .step .sn{display:inline-flex;width:21px;height:21px;border:1.5px solid var(--line);border-radius:50%;align-items:center;justify-content:center;font-size:11px;font-weight:700;background:#fff;flex:none;transition:all .2s}
.senecai-compliance .step.done .sn{background:linear-gradient(135deg,var(--gold),var(--gold-deep));border-color:var(--gold-deep);color:#fff}
.senecai-compliance .step.cy.done .sn{background:var(--cyber);border-color:var(--cyber);color:#fff}
.senecai-compliance .step.active{background:var(--shell);color:var(--ink);font-weight:600;border-color:var(--line);box-shadow:inset 0 3px 0 var(--gold)}
.senecai-compliance .step.cy.active{box-shadow:inset 0 3px 0 var(--cyber)}
.senecai-compliance .step.active::after{content:'';position:absolute;left:0;right:0;bottom:-1px;height:2px;background:var(--shell)}
.senecai-compliance .step.active .sn{border-color:var(--gold)}
.senecai-compliance .step.cy.active .sn{border-color:var(--cyber)}
.senecai-compliance .step .sc{font-size:11px;opacity:.6;font-variant-numeric:tabular-nums;font-weight:500}
@media(max-width:680px){.senecai-compliance .step{flex-direction:column;gap:3px;padding:9px 6px}.senecai-compliance .step .lbl{font-size:11px}}
@media(max-width:420px){.senecai-compliance .step .lbl{display:none}}

.senecai-compliance .stage{display:none}
.senecai-compliance .stage.active{display:block;animation:senecai-fade .25s ease}
@keyframes senecai-fade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.senecai-compliance .stage-head{margin:36px 0 6px;display:flex;align-items:baseline;gap:14px;border-left:3px solid var(--gold);padding-left:16px}
.senecai-compliance .stage.cyber .stage-head{border-left-color:var(--cyber)}
.senecai-compliance .stage-head .pn{font-size:11px;letter-spacing:.14em;text-transform:uppercase;font-weight:600;color:var(--gold-deep)}
.senecai-compliance .stage.cyber .stage-head .pn{color:var(--cyber)}
.senecai-compliance .stage-head h2{font-weight:700;font-size:24px;letter-spacing:-.02em}
.senecai-compliance .stage-note{color:var(--ink-soft);font-size:14px;padding-left:19px;max-width:66ch;margin-bottom:8px}

.senecai-compliance .section-title{font-size:11px;letter-spacing:.14em;text-transform:uppercase;font-weight:600;color:var(--ink-faint);margin:32px 0 14px;display:flex;align-items:center;gap:12px}
.senecai-compliance .section-title::after{content:'';flex:1;height:1px;background:var(--line)}

.senecai-compliance .q{background:var(--card);border:1px solid var(--line);border-radius:var(--radius);padding:20px 22px;margin-bottom:12px;transition:box-shadow .2s,border-color .2s}
.senecai-compliance .q:focus-within{border-color:var(--gold);box-shadow:0 0 0 3px var(--gold-tint)}
.senecai-compliance .stage.cyber .q:focus-within{border-color:var(--cyber);box-shadow:0 0 0 3px rgba(31,41,55,.08)}
.senecai-compliance .q.answered{border-left:3px solid var(--gold)}
.senecai-compliance .stage.cyber .q.answered{border-left-color:var(--cyber)}
.senecai-compliance .q-top{display:flex;gap:12px;align-items:flex-start}
.senecai-compliance .q-num{font-size:11px;font-weight:600;color:var(--gold-deep);padding-top:4px;min-width:34px;letter-spacing:.04em}
.senecai-compliance .stage.cyber .q-num{color:var(--ink-faint)}
.senecai-compliance .q-text{font-weight:600;font-size:15px;flex:1;line-height:1.45}
.senecai-compliance .q-body{margin:14px 0 0 46px;display:flex;flex-direction:column;gap:12px}
@media(max-width:600px){.senecai-compliance .q-body{margin-left:0}}

.senecai-compliance textarea,.senecai-compliance input[type=text]{width:100%;font:inherit;font-size:14px;padding:10px 12px;border:1px solid var(--line);border-radius:8px;background:var(--shell);color:var(--ink);resize:vertical;transition:border-color .15s,background .15s}
.senecai-compliance textarea{min-height:62px}
.senecai-compliance textarea:focus,.senecai-compliance input[type=text]:focus{outline:none;border-color:var(--gold);background:#fff}
.senecai-compliance .stage.cyber textarea:focus,.senecai-compliance .stage.cyber input[type=text]:focus{border-color:var(--cyber)}
.senecai-compliance .sublabel{font-size:10.5px;color:var(--ink-faint);letter-spacing:.1em;text-transform:uppercase;font-weight:600;margin-bottom:-6px}

.senecai-compliance .seg{display:flex;flex-wrap:wrap;gap:8px}
.senecai-compliance .seg label{border:1px solid var(--line);border-radius:8px;padding:8px 17px;font-size:13.5px;font-weight:500;cursor:pointer;background:var(--shell);transition:all .15s;user-select:none}
.senecai-compliance .seg label:hover{border-color:var(--gold-light)}
.senecai-compliance .seg input{position:absolute;opacity:0;pointer-events:none}
.senecai-compliance .seg label:has(input:checked){background:linear-gradient(135deg,var(--gold),var(--gold-deep));border-color:var(--gold-deep);color:#fff;font-weight:600}
.senecai-compliance .stage.cyber .seg label:has(input:checked){background:var(--cyber);border-color:var(--cyber)}
.senecai-compliance .seg label:has(input:focus-visible){outline:2px solid var(--gold);outline-offset:2px}

.senecai-compliance .checks{display:flex;flex-direction:column;gap:6px}
.senecai-compliance .checks label{display:flex;gap:10px;align-items:center;font-size:14px;padding:9px 12px;border:1px solid var(--line);border-radius:8px;background:var(--shell);cursor:pointer;transition:all .15s}
.senecai-compliance .checks label:hover{border-color:var(--gold-light)}
.senecai-compliance .checks label:has(input:checked){background:var(--gold-wash);border-color:var(--gold)}
.senecai-compliance .stage.cyber .checks label:has(input:checked){background:var(--cyber-soft);border-color:var(--cyber)}
.senecai-compliance .checks input{width:16px;height:16px;accent-color:var(--gold-deep);flex:none}
.senecai-compliance .stage.cyber .checks input{accent-color:var(--cyber)}
.senecai-compliance .checks.grid{display:grid;grid-template-columns:1fr 1fr;gap:6px}
@media(max-width:600px){.senecai-compliance .checks.grid{grid-template-columns:1fr}}

.senecai-compliance .stage-nav{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-top:32px;padding-top:20px;border-top:1px solid var(--line)}
.senecai-compliance button{font:inherit;cursor:pointer;font-family:var(--font)}
.senecai-compliance .btn{padding:11px 24px;border-radius:9px;border:1px solid var(--ink);background:var(--ink);color:#fff;font-weight:600;font-size:14px;transition:all .15s}
.senecai-compliance .btn:hover{background:#000;border-color:#000}
.senecai-compliance .btn.gold{background:linear-gradient(135deg,var(--gold),var(--gold-deep));border-color:var(--gold-deep);color:#111827}
.senecai-compliance .btn.gold:hover{filter:brightness(1.06);box-shadow:0 4px 14px rgba(212,175,55,.35)}
.senecai-compliance .btn.ghost{background:transparent;color:var(--ink-soft);border-color:var(--line)}
.senecai-compliance .btn.ghost:hover{background:var(--line-soft);color:var(--ink);border-color:var(--line)}
.senecai-compliance .btn.ghost:disabled{opacity:.35;cursor:default;background:transparent}
.senecai-compliance .stage-count{font-size:12px;color:var(--ink-faint);font-variant-numeric:tabular-nums;text-align:center}

.senecai-compliance .finish{border:1px solid var(--gold);border-radius:16px;background:linear-gradient(180deg,var(--gold-wash),#fff 60%);padding:36px 32px;text-align:center;margin-top:36px}
.senecai-compliance .finish h2{font-weight:700;font-size:24px;letter-spacing:-.02em;margin-bottom:8px}
.senecai-compliance .finish p{color:var(--ink-soft);max-width:54ch;margin:0 auto 18px;font-size:14.5px}
.senecai-compliance .finish .status{font-size:13px;margin-bottom:20px;line-height:1.75;color:var(--ink-mid)}
.senecai-compliance .finish .status .ok{color:var(--gold-deep);font-weight:600}
.senecai-compliance .finish .status .warn{color:var(--danger);font-weight:600}
.senecai-compliance .btn-big{padding:15px 36px;font-size:15px;border-radius:10px}
.senecai-compliance .finish .fine{font-size:12px;color:var(--ink-faint);margin-top:16px;line-height:1.6}
.senecai-compliance .finish .fine button{background:none;border:none;color:var(--ink-faint);text-decoration:underline;font-size:12px;padding:0}
.senecai-compliance .finish .fine button:hover{color:var(--ink-soft)}

.senecai-compliance .pagefoot{margin-top:48px;padding-top:20px;border-top:1px solid var(--line);display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;font-size:12px;color:var(--ink-faint)}
.senecai-compliance .pagefoot a{color:var(--gold-deep);text-decoration:none}
.senecai-compliance .pagefoot a:hover{text-decoration:underline}

.senecai-compliance .cookies{position:fixed;bottom:16px;left:16px;right:16px;max-width:540px;margin:0 auto;background:#0F1419;color:#fff;border-radius:14px;padding:20px 22px;z-index:200;box-shadow:0 16px 48px rgba(0,0,0,.35);border-top:2px solid var(--gold);display:none}
.senecai-compliance .cookies.show{display:block}
.senecai-compliance .cookies strong{color:var(--gold)}
.senecai-compliance .cookies p{font-size:13px;line-height:1.55;color:rgba(255,255,255,.78);margin-bottom:14px}
.senecai-compliance .cookies .row{display:flex;gap:8px;justify-content:flex-end}
.senecai-compliance .cookies .btn{border-color:var(--gold-deep);background:linear-gradient(135deg,var(--gold),var(--gold-deep));color:#111827}
.senecai-compliance .cookies .btn:hover{filter:brightness(1.06)}
.senecai-compliance .cookies .btn.ghost{background:transparent;color:rgba(255,255,255,.8);border-color:rgba(255,255,255,.25)}
.senecai-compliance .cookies .btn.ghost:hover{background:rgba(255,255,255,.08);color:#fff}
.senecai-compliance .toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(80px);background:#0F1419;color:#fff;padding:11px 22px;border-radius:9px;font-size:13px;transition:transform .25s;z-index:300;border-left:3px solid var(--gold)}
.senecai-compliance .toast.show{transform:translateX(-50%) translateY(0)}

#pdfHost{position:absolute;left:-10000px;top:0;width:720px}
#pdfDoc{width:720px;background:#fff;color:#111827;font-family:'Space Grotesk',Arial,sans-serif;font-size:11.5px;line-height:1.5;padding:44px 50px}
#pdfDoc .ph-brand{display:flex;align-items:center;gap:9px;margin-bottom:16px}
#pdfDoc .ph-brand .bn{font-weight:700;font-size:16px;color:#111827}
#pdfDoc .ph-brand .bn i{color:#C9A02D;font-style:normal}
#pdfDoc .ph-kicker{font-size:8.5px;letter-spacing:.16em;text-transform:uppercase;color:#C9A02D;font-weight:700}
#pdfDoc h1{font-size:22px;font-weight:700;letter-spacing:-.02em;margin:5px 0 3px}
#pdfDoc .ph-meta{font-size:9.5px;color:#6B7280;margin-bottom:18px;padding-bottom:12px;border-bottom:2px solid #D4AF37}
#pdfDoc h2{font-size:14px;font-weight:700;margin:24px 0 4px;padding:7px 11px;background:#FDF4DC;border-left:4px solid #D4AF37;letter-spacing:-.01em}
#pdfDoc h2.cyb{background:#F3F4F6;border-left-color:#1F2937}
#pdfDoc h3{font-size:9px;letter-spacing:.13em;text-transform:uppercase;color:#9CA3AF;font-weight:700;margin:16px 0 7px}
#pdfDoc .pq{margin:0 0 11px;page-break-inside:avoid}
#pdfDoc .pq .pq-t{font-weight:600;color:#111827}
#pdfDoc .pq .pq-t .pq-id{color:#C9A02D;font-size:9.5px;font-weight:700;margin-right:6px;letter-spacing:.04em}
#pdfDoc .pq .pq-a{margin:3px 0 0 17px;padding-left:9px;border-left:2px solid #E5E7EB}
#pdfDoc .pq .pq-a div{margin-bottom:2px;color:#374151}
#pdfDoc .pq .pq-a .lbl{font-size:8.5px;color:#9CA3AF;text-transform:uppercase;letter-spacing:.07em;font-weight:700}
#pdfDoc .miss{font-size:9.5px;color:#B91C1C;margin:6px 0}
#pdfDoc .ph-foot{margin-top:26px;padding-top:11px;border-top:1px solid #E5E7EB;font-size:8.5px;color:#9CA3AF;display:flex;justify-content:space-between}
`;

/* ============ STATIC SHELL (verbatim markup from the reference body) ============ */
const SHELL = `
<div class="brandbar">
  <div class="brandbar-in">
    <img class="brandlogo" src="/logo.svg" alt="SenecAI Consulting" />
    <a class="brandcta" href="https://senecai.eu" target="_blank" rel="noopener">senecai.eu</a>
  </div>
</div>

<div class="wrap">

<header>
  <div class="kicker">Discovery · Pre-engagement scoping</div>
  <h1>AI Act Compliance Discovery Questionnaire</h1>
  <div class="rule"></div>
  <p class="sub">These questions help us size your project — scope, phases and effort. They do not test your compliance. Short answers from memory or a quick lookup are perfect; "doesn't exist yet" is a fully valid answer.</p>
</header>

<div class="stepbar">
  <div class="steps" id="steps"></div>
</div>

<div id="form"></div>

<div class="pagefoot">
  <span>© 2026 SenecAI Consulting</span>
  <span>Questions while filling this in? <a href="mailto:matei.stefan@senecai.eu">matei.stefan@senecai.eu</a> · <a href="https://senecai.eu" target="_blank" rel="noopener">senecai.eu</a></span>
</div>

</div>

<div class="cookies" id="cookieBanner">
  <p><strong>Save your progress?</strong> This form can store your answers in your browser (local storage on this device only — nothing is sent to SenecAI or anyone else until you export the PDF and email it yourself). Accept to enable saving, or decline to keep answers in memory for this session only.</p>
  <div class="row">
    <button class="btn ghost" id="ckNo">Decline</button>
    <button class="btn" id="ckYes">Accept &amp; save progress</button>
  </div>
</div>

<div class="toast" id="toast"></div>
<div id="pdfHost"><div id="pdfDoc"></div></div>
`;

export default function ComplianceForm() {
    useEffect(() => {
        // html2canvas mis-scales the brand SVG (it declares width/height 100%), so we
        // pre-rasterize the logo to a fixed-size PNG that embeds cleanly in the PDF.
        const LOGO_W = 132, LOGO_H = 38;
        let logoDataUrl = '';
        function ensureLogo(): Promise<string> {
            if (logoDataUrl) return Promise.resolve(logoDataUrl);
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                    try {
                        const s = 3; // hi-dpi
                        const c = document.createElement('canvas');
                        c.width = LOGO_W * s; c.height = LOGO_H * s;
                        c.getContext('2d')!.drawImage(img, 0, 0, LOGO_W * s, LOGO_H * s);
                        logoDataUrl = c.toDataURL('image/png');
                    } catch { logoDataUrl = ''; }
                    resolve(logoDataUrl);
                };
                img.onerror = () => resolve('');
                img.src = '/logo.svg';
            });
        }
        ensureLogo(); // warm it up

        const STORE_KEY = 'aiact-discovery-answers-v2';
        const CONSENT_KEY = 'aiact-discovery-consent';
        const store = {
            get(k: string) { try { return localStorage.getItem(k); } catch { return null; } },
            set(k: string, v: string) { try { localStorage.setItem(k, v); return true; } catch { return false; } },
            del(k: string) { try { localStorage.removeItem(k); } catch { /* ignore */ } },
        };
        let consent = store.get(CONSENT_KEY);
        let saveTimer: ReturnType<typeof setTimeout> | null = null;
        function scheduleSave() {
            if (consent !== 'yes') return;
            if (saveTimer) clearTimeout(saveTimer);
            saveTimer = setTimeout(() => store.set(STORE_KEY, JSON.stringify(state)), 400);
        }
        function loadSaved() {
            if (consent !== 'yes') return null;
            try { const raw = store.get(STORE_KEY); return raw ? JSON.parse(raw) : null; } catch { return null; }
        }
        const state: Record<string, any> = loadSaved() || {};

        const formEl = document.getElementById('form');
        const stepsEl = document.getElementById('steps');
        if (!formEl || !stepsEl) return;
        // idempotent rebuild (handles React StrictMode double-invoke)
        formEl.innerHTML = '';
        stepsEl.innerHTML = '';
        const allQs: any[] = [];
        let current = 0;

        function el(tag: string, cls?: string) { const d = document.createElement(tag); if (cls) d.className = cls; return d; }

        STAGES.forEach((stage: any, si: number) => {
            const sb = el('button', `step ${stage.id === 'cyber' ? 'cy' : ''}`) as HTMLButtonElement;
            sb.type = 'button';
            sb.innerHTML = `<span class="sn">${si + 1}</span><span class="lbl">${stage.title}</span><span class="sc" id="sc-${stage.id}"></span>`;
            sb.setAttribute('role', 'tab');
            sb.addEventListener('click', () => go(si));
            stepsEl!.appendChild(sb);

            const pDiv = el('div', `stage ${stage.cls}`); pDiv.id = 'stage-' + stage.id;
            pDiv.innerHTML = `<div class="stage-head"><span class="pn">${stage.pn} of 5</span><h2>${stage.title}</h2></div><p class="stage-note">${stage.note}</p>`;
            stage.sections.forEach((sec: any) => {
                const st = el('div', 'section-title'); st.textContent = sec.name; pDiv.appendChild(st);
                sec.qs.forEach((q: any) => {
                    q.stage = stage.id; q.stageTitle = stage.title; q.section = sec.name;
                    allQs.push(q);
                    pDiv.appendChild(renderQ(q));
                });
            });

            const nav = el('div', 'stage-nav');
            const back = el('button', 'btn ghost') as HTMLButtonElement; back.type = 'button'; back.textContent = '← Back';
            back.disabled = si === 0;
            back.addEventListener('click', () => go(si - 1));
            const count = el('span', 'stage-count'); count.id = 'count-' + stage.id;
            nav.appendChild(back); nav.appendChild(count);
            if (si < STAGES.length - 1) {
                const next = el('button', 'btn gold') as HTMLButtonElement; next.type = 'button'; next.textContent = 'Next: ' + STAGES[si + 1].title + ' →';
                next.addEventListener('click', () => go(si + 1));
                nav.appendChild(next);
            } else {
                nav.appendChild(el('span'));
            }
            pDiv.appendChild(nav);

            if (stage.id === 'export') {
                const fin = el('div', 'finish');
                fin.innerHTML = `<h2>Ready to send it over?</h2>
          <p>When you've answered everything you can, export your answers as a PDF and email it to <strong>matei.stefan@senecai.eu</strong>. "Doesn't exist yet" and "unsure" are perfectly good answers — please don't leave questions blank because of them.</p>
          <div class="status" id="finishStatus"></div>
          <button class="btn gold btn-big" id="btnPdf">Save &amp; export PDF</button>
          <div class="fine">Your answers are saved in this browser as you type (if you accepted cookies), so you can close this page and continue later on the same device. · <button id="btnClear" type="button">Clear saved answers</button></div>`;
                pDiv.appendChild(fin);
            }
            formEl!.appendChild(pDiv);
        });

        function renderQ(q: any) {
            const card = el('div', 'q'); card.id = 'card-' + q.id;
            card.innerHTML = `<div class="q-top"><span class="q-num">${q.id}</span><span class="q-text">${q.text}</span></div>`;
            const body = el('div', 'q-body');
            q.fields.forEach((f: any) => {
                if (f.label) { const l = el('div', 'sublabel'); l.textContent = f.label; body.appendChild(l); }
                body.appendChild(renderField(q, f));
            });
            card.appendChild(body);
            return card;
        }

        function renderField(q: any, f: any) {
            const saved = state[q.id]?.[f.k];
            const set = (v: any) => { (state[q.id] ||= {})[f.k] = v; refresh(); scheduleSave(); };
            if (f.t === 'text' || f.t === 'area') {
                const i = document.createElement(f.t === 'text' ? 'input' : 'textarea') as HTMLInputElement | HTMLTextAreaElement;
                if (f.t === 'text') (i as HTMLInputElement).type = 'text';
                if (typeof saved === 'string') i.value = saved;
                i.addEventListener('input', () => set(i.value.trim()));
                return i;
            }
            if (f.t === 'yesno' || f.t === 'choice') {
                const opts = f.t === 'yesno' ? YN : f.opts;
                const g = el('div', 'seg'); const name = q.id + '-' + f.k;
                opts.forEach((o: string) => {
                    const lab = el('label'); const r = document.createElement('input');
                    r.type = 'radio'; r.name = name; r.value = o;
                    if (saved === o) r.checked = true;
                    r.addEventListener('change', () => set(o));
                    lab.appendChild(r); lab.appendChild(document.createTextNode(o));
                    g.appendChild(lab);
                });
                return g;
            }
            // multi
            const g = el('div', f.opts.length > 4 ? 'checks grid' : 'checks');
            f.opts.forEach((o: string) => {
                const lab = el('label'); const c = document.createElement('input');
                c.type = 'checkbox'; c.value = o;
                if (Array.isArray(saved) && saved.includes(o)) c.checked = true;
                c.addEventListener('change', () => {
                    const cur = new Set<string>((state[q.id]?.[f.k]) || []);
                    c.checked ? cur.add(o) : cur.delete(o);
                    set([...cur]);
                });
                lab.appendChild(c); lab.appendChild(document.createTextNode(o));
                g.appendChild(lab);
            });
            return g;
        }

        function go(i: number) {
            if (i < 0 || i >= STAGES.length) return;
            current = i;
            STAGES.forEach((s: any, si: number) => {
                document.getElementById('stage-' + s.id)?.classList.toggle('active', si === i);
                (stepsEl!.children[si] as HTMLElement).classList.toggle('active', si === i);
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });
            refresh();
        }

        function isAnswered(q: any) {
            const s = state[q.id]; if (!s) return false;
            return Object.values(s).some((v: any) => Array.isArray(v) ? v.length : v);
        }

        function refresh() {
            STAGES.forEach((s: any, si: number) => {
                const qs = allQs.filter((q) => q.stage === s.id);
                const n = qs.filter(isAnswered).length;
                qs.forEach((q) => document.getElementById('card-' + q.id)?.classList.toggle('answered', isAnswered(q)));
                const scEl = document.getElementById('sc-' + s.id);
                const cEl = document.getElementById('count-' + s.id);
                if (qs.length === 0) {
                    const allDone = allQs.every(isAnswered);
                    if (scEl) scEl.textContent = allDone ? '✓' : '';
                    (stepsEl!.children[si] as HTMLElement).classList.toggle('done', allDone);
                    if (cEl) cEl.textContent = '';
                } else {
                    if (scEl) scEl.textContent = n + '/' + qs.length;
                    (stepsEl!.children[si] as HTMLElement).classList.toggle('done', n === qs.length);
                    if (cEl) cEl.textContent = n + '/' + qs.length + ' answered in this step';
                }
            });
            const missing = allQs.filter((q) => !isAnswered(q));
            const fs = document.getElementById('finishStatus');
            if (fs) {
                if (missing.length === 0) {
                    fs.innerHTML = '<span class="ok">✓ All ' + allQs.length + ' questions answered — ready to export.</span>';
                } else {
                    fs.innerHTML = '<span class="warn">' + missing.length + ' question' + (missing.length > 1 ? 's' : '') + ' still open:</span> ' + missing.map((q) => q.id).join(', ') + '<br>You can still export — open questions will be marked in the PDF.';
                }
            }
        }

        function esc(s: string) { const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
        function buildPdfDoc() {
            const d = new Date().toISOString().slice(0, 10);
            const answered = allQs.filter(isAnswered).length;
            const company = esc(state['G1']?.v || 'Client');
            let h = `<div class="ph-brand">
          ${logoDataUrl ? `<img src="${logoDataUrl}" width="${LOGO_W}" height="${LOGO_H}" style="width:${LOGO_W}px;height:${LOGO_H}px;display:block" alt="SenecAI Consulting" />` : ''}
        </div>
        <div class="ph-kicker">Discovery · Pre-engagement scoping</div>
        <h1>AI Act Compliance Discovery Brief</h1>
        <div class="ph-meta">${company} · Completed ${d} · ${answered}/${allQs.length} questions answered</div>`;
            STAGES.forEach((stage: any) => {
                if (!stage.sections.length) return;
                h += `<h2${stage.id === 'cyber' ? ' class="cyb"' : ''}>${esc(stage.pn + ' — ' + stage.title)}</h2>`;
                stage.sections.forEach((sec: any) => {
                    h += `<h3>${esc(sec.name)}</h3>`;
                    const open: string[] = [];
                    sec.qs.forEach((q: any) => {
                        if (!isAnswered(q)) { open.push(q.id); return; }
                        const lines = q.fields.map((f: any) => {
                            const v = state[q.id]?.[f.k];
                            if (v == null || v === '' || (Array.isArray(v) && !v.length)) return null;
                            const val = Array.isArray(v) ? v.join(', ') : v;
                            return `<div>${f.label ? `<span class="lbl">${esc(f.label)}:</span> ` : ''}${esc(val)}</div>`;
                        }).filter(Boolean).join('');
                        h += `<div class="pq"><div class="pq-t"><span class="pq-id">${q.id}</span>${esc(q.text)}</div><div class="pq-a">${lines}</div></div>`;
                    });
                    if (open.length) h += `<div class="miss">Not answered: ${open.join(', ')}</div>`;
                });
            });
            h += `<div class="ph-foot"><span>SenecAI Consulting · senecai.eu</span><span>Prepared for discovery scoping — not a compliance assessment</span></div>`;
            return h;
        }

        async function onDocClick(e: MouseEvent) {
            const target = e.target as HTMLElement;
            if (target.id === 'btnPdf') {
                const doc = document.getElementById('pdfDoc')!;
                await ensureLogo();
                doc.innerHTML = buildPdfDoc();
                const d = new Date().toISOString().slice(0, 10);
                const co = (state['G1']?.v || 'Client').replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || 'Client';
                let html2pdf: any;
                try { html2pdf = (await import('html2pdf.js')).default; } catch { html2pdf = undefined; }
                if (!html2pdf) {
                    toast("PDF library unavailable — use your browser's Print → Save as PDF");
                    window.print();
                    return;
                }
                toast('Generating PDF…');
                html2pdf().set({
                    margin: [10, 0, 12, 0],
                    filename: `SenecAI-Discovery-${co}-${d}.pdf`,
                    html2canvas: { scale: 2, useCORS: true },
                    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
                    pagebreak: { mode: ['css', 'avoid-all'] },
                }).from(doc).save().then(() => toast('PDF downloaded — please email it to matei.stefan@senecai.eu'));
            }
            if (target.id === 'btnClear') {
                if (!confirm('Delete all saved answers from this browser? The form will reset.')) return;
                store.del(STORE_KEY); store.del(CONSENT_KEY);
                location.reload();
            }
        }
        document.addEventListener('click', onDocClick);

        const banner = document.getElementById('cookieBanner');
        if (consent === null) banner?.classList.add('show');
        const ckYes = document.getElementById('ckYes');
        const ckNo = document.getElementById('ckNo');
        function onYes() {
            consent = 'yes'; store.set(CONSENT_KEY, 'yes');
            banner?.classList.remove('show');
            store.set(STORE_KEY, JSON.stringify(state));
            toast('Progress will be saved on this device');
        }
        function onNo() {
            consent = 'no'; store.set(CONSENT_KEY, 'no');
            banner?.classList.remove('show');
            toast('Answers kept in memory for this session only');
        }
        ckYes?.addEventListener('click', onYes);
        ckNo?.addEventListener('click', onNo);

        let toastTimer: ReturnType<typeof setTimeout> | null = null;
        function toast(msg: string) {
            const t = document.getElementById('toast'); if (!t) return;
            t.textContent = msg; t.classList.add('show');
            if (toastTimer) clearTimeout(toastTimer);
            toastTimer = setTimeout(() => t.classList.remove('show'), 1800);
        }

        go(0);

        return () => {
            document.removeEventListener('click', onDocClick);
            ckYes?.removeEventListener('click', onYes);
            ckNo?.removeEventListener('click', onNo);
            if (saveTimer) clearTimeout(saveTimer);
            if (toastTimer) clearTimeout(toastTimer);
        };
    }, []);

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: CSS }} />
            <div className="senecai-compliance" dangerouslySetInnerHTML={{ __html: SHELL }} />
        </>
    );
}
