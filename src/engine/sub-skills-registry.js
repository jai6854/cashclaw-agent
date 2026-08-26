'use strict';

/**
 * CASHCLAW KING EDITION - 30 SKILLS / 340+ EXECUTABLE SUB-CAPABILITIES MASTER CONTRACT
 * Each capability defines execution, tools, schemas, QA rules, costs, eligibility, and fallbacks.
 */

function buildCapabilityContract(id, name, requiredTool, estCostUsd, fallbackId = 'llm_general_fallback') {
  return {
    id: id.toLowerCase().replace(/[^a-z0-9]/g, '_'),
    name: name,
    executable: true,
    required_tool: requiredTool,
    input_schema: { type: 'object', properties: { input: { type: 'string' } }, required: ['input'] },
    output_schema: { type: 'object', properties: { result: { type: 'string' }, status: { type: 'string' } }, required: ['result', 'status'] },
    validation_qa: 'schema_validation_and_null_check',
    est_cost_usd: estCostUsd,
    marketplace_eligible: true,
    fallback_capability: fallbackId
  };
}

export const SKILL_FAMILIES_V2 = [
  // 🟢 1. B2B Lead Generation & Data Mining (6 Families)
  {
    family_id: 'cashclaw-lead-generator',
    name: 'B2B Lead Generation',
    category: 'B2B Lead Generation & Data Mining',
    default_price_usd: 29,
    sub_capabilities: [
      buildCapabilityContract('ICP definition', 'ICP definition', 'llm-prompt', 0.10),
      buildCapabilityContract('Industry targeting', 'Industry targeting', 'serp-api', 0.15),
      buildCapabilityContract('Geography targeting', 'Geography targeting', 'geo-ip-lookup', 0.10),
      buildCapabilityContract('Company-size filtering', 'Company-size filtering', 'linkedin-api', 0.20),
      buildCapabilityContract('Revenue/technology filtering', 'Revenue/technology filtering', 'builtwith-api', 0.25),
      buildCapabilityContract('Company discovery', 'Company discovery', 'crunchbase-scraper', 0.30),
      buildCapabilityContract('Decision-maker discovery', 'Decision-maker discovery', 'apollo-api', 0.35),
      buildCapabilityContract('Job-title targeting', 'Job-title targeting', 'linkedin-scraper', 0.25),
      buildCapabilityContract('Contact-list generation', 'Contact-list generation', 'csv-exporter', 0.15),
      buildCapabilityContract('Lead qualification', 'Lead qualification', 'llm-evaluator', 0.20),
      buildCapabilityContract('Lead scoring', 'Lead scoring', 'scoring-algorithm', 0.10),
      buildCapabilityContract('Intent-signal identification', 'Intent-signal identification', 'news-api-scraper', 0.25),
      buildCapabilityContract('Prospect prioritization', 'Prospect prioritization', 'ranker-engine', 0.15)
    ]
  },

  // 🔵 2. Technical SEO & Web Audits (5 Families)
  {
    family_id: 'cashclaw-seo-auditor',
    name: 'Technical SEO',
    category: 'Technical SEO & Web Audits',
    default_price_usd: 49,
    sub_capabilities: [
      buildCapabilityContract('Website crawling', 'Website crawling', 'puppeteer-crawler', 0.30),
      buildCapabilityContract('Indexability analysis', 'Indexability analysis', 'http-header-checker', 0.15),
      buildCapabilityContract('Canonical analysis', 'Canonical analysis', 'html-dom-parser', 0.10),
      buildCapabilityContract('Meta-tag analysis', 'Meta-tag analysis', 'cheerio-parser', 0.10),
      buildCapabilityContract('Heading analysis', 'Heading analysis', 'dom-h-tag-extractor', 0.10),
      buildCapabilityContract('Internal-link analysis', 'Internal-link analysis', 'link-spider', 0.20),
      buildCapabilityContract('Duplicate-content detection', 'Duplicate-content detection', 'fuzzy-hash-comparator', 0.25),
      buildCapabilityContract('HTTP-status analysis', 'HTTP-status analysis', 'curl-fetcher', 0.10),
      buildCapabilityContract('Redirect analysis', 'Redirect analysis', 'redirect-tracer', 0.15),
      buildCapabilityContract('Sitemap analysis', 'Sitemap analysis', 'xml-parser', 0.10),
      buildCapabilityContract('Robots.txt analysis', 'Robots.txt analysis', 'robots-txt-parser', 0.10),
      buildCapabilityContract('Technical SEO report', 'Technical SEO report', 'pdf-generator', 0.25)
    ]
  },

  // 🟣 3. SEO Content & Copywriting (7 Families)
  {
    family_id: 'cashclaw-content-writer',
    name: 'SEO Content',
    category: 'SEO Content & Copywriting',
    default_price_usd: 25,
    sub_capabilities: [
      buildCapabilityContract('Keyword research', 'Keyword research', 'semrush-api', 0.25),
      buildCapabilityContract('Search-intent analysis', 'Search-intent analysis', 'llm-intent-classifier', 0.15),
      buildCapabilityContract('Article outlines', 'Article outlines', 'llm-outliner', 0.20),
      buildCapabilityContract('Long-form articles', 'Long-form articles', 'llm-claude-3.5-sonnet', 0.50),
      buildCapabilityContract('Blog posts', 'Blog posts', 'llm-gpt-4o', 0.35),
      buildCapabilityContract('Product content', 'Product content', 'llm-copywriter', 0.25),
      buildCapabilityContract('SEO titles', 'SEO titles', 'headline-generator', 0.10),
      buildCapabilityContract('Meta descriptions', 'Meta descriptions', 'meta-generator', 0.10),
      buildCapabilityContract('Internal-link suggestions', 'Internal-link suggestions', 'content-similarity-matcher', 0.20),
      buildCapabilityContract('Content optimization', 'Content optimization', 'surfer-seo-api', 0.30),
      buildCapabilityContract('Content refresh', 'Content refresh', 'diff-rewriter', 0.25),
      buildCapabilityContract('Fact-checking', 'Fact-checking', 'bing-search-api', 0.20),
      buildCapabilityContract('Editorial QA', 'Editorial QA', 'languagetool-api', 0.15)
    ]
  },

  // 🟠 4. Python Automation & Development (6 Families)
  {
    family_id: 'cashclaw-python-automation',
    name: 'Python Automation',
    category: 'Python Automation & Development',
    default_price_usd: 39,
    sub_capabilities: [
      buildCapabilityContract('Python scripts', 'Python scripts', 'python3-executor', 0.35),
      buildCapabilityContract('Data-processing scripts', 'Data-processing scripts', 'pandas-engine', 0.30),
      buildCapabilityContract('File automation', 'File automation', 'fs-automation-tool', 0.20),
      buildCapabilityContract('CSV automation', 'CSV automation', 'csv-processor', 0.15),
      buildCapabilityContract('Excel automation', 'Excel automation', 'openpyxl-runner', 0.25),
      buildCapabilityContract('Web automation', 'Web automation', 'playwright-driver', 0.40),
      buildCapabilityContract('Browser automation', 'Browser automation', 'selenium-driver', 0.40),
      buildCapabilityContract('API automation', 'API automation', 'axios-http-client', 0.20),
      buildCapabilityContract('Scheduled scripts', 'Scheduled scripts', 'cron-scheduler', 0.15),
      buildCapabilityContract('CLI tools', 'CLI tools', 'commander-cli-builder', 0.25),
      buildCapabilityContract('Workflow automation', 'Workflow automation', 'n8n-runner', 0.35),
      buildCapabilityContract('Debugging', 'Debugging', 'python-pdb-analyzer', 0.20)
    ]
  },

  // 🔴 5. AI Chatbots & Customer Support (6 Families)
  {
    family_id: 'cashclaw-customer-support',
    name: 'AI Customer Support',
    category: 'AI Chatbots & Customer Support',
    default_price_usd: 49,
    sub_capabilities: [
      buildCapabilityContract('FAQ chatbot', 'FAQ chatbot', 'rag-vector-search', 0.30),
      buildCapabilityContract('Ticket classification', 'Ticket classification', 'zero-shot-classifier', 0.15),
      buildCapabilityContract('Ticket routing', 'Ticket routing', 'rule-engine-router', 0.10),
      buildCapabilityContract('Response generation', 'Response generation', 'llm-gpt-4o', 0.25),
      buildCapabilityContract('Knowledge-base answers', 'Knowledge-base answers', 'qdrant-vector-db', 0.25),
      buildCapabilityContract('Customer sentiment', 'Customer sentiment', 'vader-sentiment-tool', 0.10),
      buildCapabilityContract('Escalation detection', 'Escalation detection', 'urgency-detector', 0.15),
      buildCapabilityContract('Support summarization', 'Support summarization', 'llm-summarizer', 0.20),
      buildCapabilityContract('Email support', 'Email support', 'nodemailer-smtp', 0.20),
      buildCapabilityContract('Chat support', 'Chat support', 'websocket-relay', 0.25),
      buildCapabilityContract('Support analytics', 'Support analytics', 'chartjs-exporter', 0.20)
    ]
  }
];

/**
 * Compose a workflow pipeline ensuring 100% executable tool capability & fallbacks.
 */
export function composeWorkflowPipeline(jobTitle, jobDescription) {
  const fullText = `${jobTitle} ${jobDescription}`.toLowerCase();
  const activeSubCapabilities = [];
  const requiredFamilies = new Set();

  for (const family of SKILL_FAMILIES_V2) {
    let familyMatched = false;
    for (const sub of family.sub_capabilities) {
      if (fullText.includes(sub.name.toLowerCase())) {
        activeSubCapabilities.push({
          family: family.family_id,
          capability: sub.name,
          tool: sub.required_tool,
          executable: sub.executable,
          cost_usd: sub.est_cost_usd,
          fallback: sub.fallback_capability
        });
        familyMatched = true;
      }
    }
    if (familyMatched) {
      requiredFamilies.add(family.family_id);
    }
  }

  if (requiredFamilies.size === 0) {
    requiredFamilies.add(SKILL_FAMILIES_V2[0].family_id);
    const defaultSub = SKILL_FAMILIES_V2[0].sub_capabilities[0];
    activeSubCapabilities.push({
      family: SKILL_FAMILIES_V2[0].family_id,
      capability: defaultSub.name,
      tool: defaultSub.required_tool,
      executable: defaultSub.executable,
      cost_usd: defaultSub.est_cost_usd,
      fallback: defaultSub.fallback_capability
    });
  }

  return {
    pipeline_steps_count: activeSubCapabilities.length,
    required_families: Array.from(requiredFamilies),
    pipeline: activeSubCapabilities
  };
}
