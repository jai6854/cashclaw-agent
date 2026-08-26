'use strict';

/**
 * CASHCLAW KING EDITION - 30 SKILLS / 340+ SUB-CAPABILITIES MASTER TAXONOMY
 */

export const SKILL_FAMILIES_V2 = [
  // 🟢 1. B2B Lead Generation & Data Mining (6 Families)
  {
    family_id: 'cashclaw-lead-generator',
    name: 'B2B Lead Generation',
    category: 'B2B Lead Generation & Data Mining',
    default_price_usd: 29,
    sub_capabilities: [
      'ICP definition', 'Industry targeting', 'Geography targeting', 'Company-size filtering',
      'Revenue/technology filtering', 'Company discovery', 'Decision-maker discovery',
      'Job-title targeting', 'Contact-list generation', 'Lead qualification', 'Lead scoring',
      'Intent-signal identification', 'Prospect prioritization'
    ]
  },
  {
    family_id: 'cashclaw-data-scraper',
    name: 'Web & Data Scraping',
    category: 'B2B Lead Generation & Data Mining',
    default_price_usd: 25,
    sub_capabilities: [
      'Website crawling', 'Directory scraping', 'Search-result extraction', 'Product scraping',
      'Pricing extraction', 'Contact-page extraction', 'Structured-data extraction',
      'Pagination handling', 'JavaScript-rendered pages', 'Dynamic content extraction',
      'Multi-site scraping', 'Scheduled scraping'
    ]
  },
  {
    family_id: 'cashclaw-data-cleaner',
    name: 'Data Cleaning & Enrichment',
    category: 'B2B Lead Generation & Data Mining',
    default_price_usd: 15,
    sub_capabilities: [
      'CSV cleaning', 'Excel cleaning', 'JSON normalization', 'Duplicate removal',
      'Field normalization', 'Name/company normalization', 'Missing-data detection',
      'Data validation', 'Record merging', 'Lead enrichment', 'Dataset restructuring', 'Export formatting'
    ]
  },
  {
    family_id: 'cashclaw-pdf-extractor',
    name: 'Document/Data Extraction',
    category: 'B2B Lead Generation & Data Mining',
    default_price_usd: 29,
    sub_capabilities: [
      'PDF text extraction', 'Table extraction', 'Invoice extraction', 'Contact extraction',
      'Financial-data extraction', 'OCR', 'Document classification', 'Multi-PDF processing',
      'PDF -> CSV', 'PDF -> Excel', 'PDF -> JSON', 'Structured report generation'
    ]
  },
  {
    family_id: 'cashclaw-web-research',
    name: 'Research Intelligence',
    category: 'B2B Lead Generation & Data Mining',
    default_price_usd: 19,
    sub_capabilities: [
      'Company research', 'Market research', 'Competitor research', 'Prospect research',
      'Product research', 'Pricing research', 'Industry research', 'Contact verification',
      'Source collection', 'Fact verification', 'Research summaries', 'Research reports'
    ]
  },
  {
    family_id: 'cashclaw-ecommerce',
    name: 'E-commerce Intelligence',
    category: 'B2B Lead Generation & Data Mining',
    default_price_usd: 29,
    sub_capabilities: [
      'Product discovery', 'Product catalog extraction', 'Price comparison', 'Competitor-store research',
      'Product-data scraping', 'SKU extraction', 'Inventory-data extraction', 'Product categorization',
      'Product-description extraction', 'Marketplace research', 'Catalog cleanup', 'Store-data analysis'
    ]
  },

  // 🔵 2. Technical SEO & Web Audits (5 Families)
  {
    family_id: 'cashclaw-seo-auditor',
    name: 'Technical SEO',
    category: 'Technical SEO & Web Audits',
    default_price_usd: 49,
    sub_capabilities: [
      'Website crawling', 'Indexability analysis', 'Canonical analysis', 'Meta-tag analysis',
      'Heading analysis', 'Internal-link analysis', 'Duplicate-content detection', 'HTTP-status analysis',
      'Redirect analysis', 'Sitemap analysis', 'Robots.txt analysis', 'Technical SEO report'
    ]
  },
  {
    family_id: 'cashclaw-speed-auditor',
    name: 'Core Web Vitals & Performance',
    category: 'Technical SEO & Web Audits',
    default_price_usd: 35,
    sub_capabilities: [
      'LCP analysis', 'INP analysis', 'CLS analysis', 'Page-load analysis', 'Mobile performance',
      'Desktop performance', 'JavaScript analysis', 'CSS optimization analysis', 'Image optimization',
      'Font optimization', 'Cache analysis', 'Performance recommendations'
    ]
  },
  {
    family_id: 'cashclaw-competitor-analyzer',
    name: 'Competitor & Search Intelligence',
    category: 'Technical SEO & Web Audits',
    default_price_usd: 35,
    sub_capabilities: [
      'Competitor discovery', 'Keyword-gap analysis', 'Backlink analysis', 'Content-gap analysis',
      'SERP comparison', 'Traffic-source analysis', 'Ranking comparison', 'Competitor-page analysis',
      'Domain comparison', 'Content strategy analysis', 'Competitive report'
    ]
  },
  {
    family_id: 'cashclaw-landing-page',
    name: 'SEO Landing Pages',
    category: 'Technical SEO & Web Audits',
    default_price_usd: 39,
    sub_capabilities: [
      'Keyword mapping', 'Search-intent analysis', 'Landing-page structure', 'SEO copy',
      'Conversion copy', 'CTA optimization', 'HTML generation', 'Schema markup',
      'Metadata generation', 'Mobile layout', 'Page-speed optimization', 'A/B-test variants'
    ]
  },
  {
    family_id: 'cashclaw-wordpress',
    name: 'WordPress Optimization',
    category: 'Technical SEO & Web Audits',
    default_price_usd: 49,
    sub_capabilities: [
      'WordPress SEO', 'Plugin analysis', 'Theme analysis', 'Technical fixes',
      'Metadata optimization', 'Sitemap configuration', 'Robots configuration', 'Broken-link fixes',
      'Image optimization', 'Cache configuration', 'Core Web Vitals fixes', 'Security/basic configuration'
    ]
  },

  // 🟣 3. SEO Content & Copywriting (7 Families)
  {
    family_id: 'cashclaw-content-writer',
    name: 'SEO Content',
    category: 'SEO Content & Copywriting',
    default_price_usd: 25,
    sub_capabilities: [
      'Keyword research', 'Search-intent analysis', 'Article outlines', 'Long-form articles',
      'Blog posts', 'Product content', 'SEO titles', 'Meta descriptions', 'Internal-link suggestions',
      'Content optimization', 'Content refresh', 'Fact-checking', 'Editorial QA'
    ]
  },
  {
    family_id: 'cashclaw-email-outreach',
    name: 'Sales & Email Copy',
    category: 'SEO Content & Copywriting',
    default_price_usd: 29,
    sub_capabilities: [
      'Cold-email research', 'Personalization', 'Subject-line generation', 'Cold-email writing',
      'Follow-up sequences', 'Sales sequences', 'Newsletter copy', 'CTA optimization',
      'A/B variants', 'Lead segmentation', 'Outreach personalization'
    ]
  },
  {
    family_id: 'cashclaw-proposal-generator',
    name: 'Freelance Proposal Engine',
    category: 'SEO Content & Copywriting',
    default_price_usd: 29,
    sub_capabilities: [
      'Job analysis', 'Requirement extraction', 'Skill matching', 'Client pain-point identification',
      'Proposal generation', 'Personalized opening', 'Scope definition', 'Pricing suggestion',
      'Delivery estimate', 'Portfolio positioning', 'Marketplace-specific formatting', 'Bid quality scoring'
    ]
  },
  {
    family_id: 'cashclaw-video-shorts',
    name: 'Short-Form Content',
    category: 'SEO Content & Copywriting',
    default_price_usd: 29,
    sub_capabilities: [
      'YouTube Shorts scripts', 'TikTok scripts', 'Instagram Reels scripts', 'Hooks',
      'Storyboards', 'Captions', 'Titles', 'Descriptions', 'Hashtags', 'Content repurposing',
      'Long-video -> short conversion'
    ]
  },
  {
    family_id: 'cashclaw-translator',
    name: 'Translation & Localization',
    category: 'SEO Content & Copywriting',
    default_price_usd: 25,
    sub_capabilities: [
      'Translation', 'Tamil <-> English', 'Multilingual localization', 'Website localization',
      'Marketing localization', 'SEO localization', 'Cultural adaptation', 'Subtitle translation',
      'Document translation', 'Terminology consistency', 'Translation QA'
    ]
  },
  {
    family_id: 'cashclaw-presentation',
    name: 'Business Presentation',
    category: 'SEO Content & Copywriting',
    default_price_usd: 59,
    sub_capabilities: [
      'Pitch decks', 'Investor decks', 'Sales decks', 'Company presentations', 'Slide structure',
      'Slide copy', 'Data visualization planning', 'Speaker notes', 'Executive summaries',
      'PowerPoint generation', 'Presentation QA'
    ]
  },
  {
    family_id: 'cashclaw-resume-linkedin',
    name: 'Career Content',
    category: 'SEO Content & Copywriting',
    default_price_usd: 35,
    sub_capabilities: [
      'Resume creation', 'Resume optimization', 'ATS optimization', 'Job-description matching',
      'LinkedIn profile optimization', 'LinkedIn headline', 'LinkedIn summary',
      'Achievement rewriting', 'Cover letters', 'Career positioning', 'Application customization'
    ]
  },

  // 🟠 4. Python Automation & Development (6 Families)
  {
    family_id: 'cashclaw-python-automation',
    name: 'Python Automation',
    category: 'Python Automation & Development',
    default_price_usd: 39,
    sub_capabilities: [
      'Python scripts', 'Data-processing scripts', 'File automation', 'CSV automation',
      'Excel automation', 'Web automation', 'Browser automation', 'API automation',
      'Scheduled scripts', 'CLI tools', 'Workflow automation', 'Debugging'
    ]
  },
  {
    family_id: 'cashclaw-api-integrator',
    name: 'API & Integration',
    category: 'Python Automation & Development',
    default_price_usd: 49,
    sub_capabilities: [
      'REST APIs', 'GraphQL', 'Webhooks', 'Authentication', 'OAuth', 'API data extraction',
      'API-to-API integration', 'JSON transformation', 'Rate-limit handling', 'Error handling',
      'Integration testing', 'Documentation'
    ]
  },
  {
    family_id: 'cashclaw-qa-tester',
    name: 'QA & Testing',
    category: 'Python Automation & Development',
    default_price_usd: 29,
    sub_capabilities: [
      'Website testing', 'API testing', 'Functional testing', 'Regression testing',
      'UI testing', 'Mobile testing', 'Browser testing', 'Bug reproduction',
      'Bug classification', 'Test-case generation', 'Automated tests', 'QA reports'
    ]
  },
  {
    family_id: 'cashclaw-data-analyst',
    name: 'Data Analysis',
    category: 'Python Automation & Development',
    default_price_usd: 39,
    sub_capabilities: [
      'Data cleaning', 'Exploratory analysis', 'Statistical analysis', 'KPI analysis',
      'Trend analysis', 'Forecasting', 'Excel analysis', 'CSV analysis', 'Python/Pandas analysis',
      'Chart generation', 'Business insights', 'Automated reports'
    ]
  },
  {
    family_id: 'cashclaw-core',
    name: 'Mission Orchestration',
    category: 'Python Automation & Development',
    default_price_usd: 19,
    sub_capabilities: [
      'Job intake', 'Requirement extraction', 'Skill selection', 'Sub-skill selection',
      'Agent assignment', 'Workflow planning', 'Multi-agent delegation', 'Job state management',
      'Deliverable tracking', 'Retry handling', 'Completion verification'
    ]
  },
  {
    family_id: 'cashclaw-guard',
    name: 'Agent Security & Cost Control',
    category: 'Python Automation & Development',
    default_price_usd: 19,
    sub_capabilities: [
      'Token-budget control', 'API-cost limits', 'Recursion detection', 'Tool permissions',
      'Rate limiting', 'Dangerous-tool blocking', 'Agent kill switch', 'Audit logs',
      'Failure detection', 'Telegram alerts', 'Spending protection'
    ]
  },

  // 🔴 5. AI Chatbots & Customer Support (6 Families)
  {
    family_id: 'cashclaw-customer-support',
    name: 'AI Customer Support',
    category: 'AI Chatbots & Customer Support',
    default_price_usd: 49,
    sub_capabilities: [
      'FAQ chatbot', 'Ticket classification', 'Ticket routing', 'Response generation',
      'Knowledge-base answers', 'Customer sentiment', 'Escalation detection', 'Support summarization',
      'Email support', 'Chat support', 'Support analytics'
    ]
  },
  {
    family_id: 'cashclaw-whatsapp-manager',
    name: 'WhatsApp Business',
    category: 'AI Chatbots & Customer Support',
    default_price_usd: 49,
    sub_capabilities: [
      'Auto-responses', 'FAQ automation', 'Lead qualification', 'Appointment handling',
      'Customer follow-up', 'Message templates', 'Campaign workflows', 'Conversation routing',
      'Customer segmentation', 'Human escalation'
    ]
  },
  {
    family_id: 'cashclaw-prompt-engineer',
    name: 'AI Workflow Engineering',
    category: 'AI Chatbots & Customer Support',
    default_price_usd: 39,
    sub_capabilities: [
      'System prompts', 'Agent prompts', 'Prompt optimization', 'Structured-output prompts',
      'Tool-use prompts', 'RAG prompts', 'Evaluation prompts', 'Model comparison',
      'AI workflow design', 'Prompt testing', 'Guardrail design'
    ]
  },
  {
    family_id: 'cashclaw-social-media',
    name: 'Social Media',
    category: 'AI Chatbots & Customer Support',
    default_price_usd: 19,
    sub_capabilities: [
      'Content calendars', 'LinkedIn posts', 'Instagram content', 'Facebook content',
      'X/Twitter content', 'Captions', 'Hashtags', 'Comment responses', 'Community management',
      'Content repurposing', 'Engagement analysis'
    ]
  },
  {
    family_id: 'cashclaw-image-processor',
    name: 'Image & Creative Assets',
    category: 'AI Chatbots & Customer Support',
    default_price_usd: 25,
    sub_capabilities: [
      'Image resizing', 'Compression', 'Format conversion', 'Background removal',
      'Image enhancement', 'Thumbnail creation', 'Banner creation', 'Social graphics',
      'Product-image optimization', 'Basic creative variations'
    ]
  },
  {
    family_id: 'cashclaw-invoicer',
    name: 'Payments & Operations',
    category: 'AI Chatbots & Customer Support',
    default_price_usd: 15,
    sub_capabilities: [
      'Invoice generation', 'Payment links', 'Stripe invoices', 'Payment tracking',
      'Payment reminders', 'Receipt generation', 'Refund workflow', 'Subscription tracking',
      'Revenue reporting', 'Client billing records'
    ]
  }
];

/**
 * Dynamically compose a multi-skill workflow pipeline for complex jobs.
 */
export function composeWorkflowPipeline(jobTitle, jobDescription) {
  const fullText = `${jobTitle} ${jobDescription}`.toLowerCase();
  const activeSubCapabilities = [];
  const requiredFamilies = new Set();

  for (const family of SKILL_FAMILIES_V2) {
    let familyMatched = false;
    for (const sub of family.sub_capabilities) {
      if (fullText.includes(sub.toLowerCase())) {
        activeSubCapabilities.push({ family: family.family_id, capability: sub });
        familyMatched = true;
      }
    }
    if (familyMatched) {
      requiredFamilies.add(family.family_id);
    }
  }

  // Fallback to top family if no exact sub-capabilities matched in text
  if (requiredFamilies.size === 0) {
    requiredFamilies.add(SKILL_FAMILIES_V2[0].family_id);
    activeSubCapabilities.push({ family: SKILL_FAMILIES_V2[0].family_id, capability: SKILL_FAMILIES_V2[0].sub_capabilities[0] });
  }

  return {
    pipeline_steps_count: activeSubCapabilities.length,
    required_families: Array.from(requiredFamilies),
    pipeline: activeSubCapabilities
  };
}
