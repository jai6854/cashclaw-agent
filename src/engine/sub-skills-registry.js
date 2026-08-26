'use strict';

/**
 * CashClaw KING Edition v2.0 - 30 Skill Families & 100+ Sub-Capabilities Architecture
 */

export const SKILL_FAMILIES = [
  // FAMILY 1: Lead Generation & Prospecting
  {
    family_id: 'cashclaw-lead-generator',
    name: 'B2B Lead Generation & Prospecting',
    category: 'Lead Generation',
    default_price_usd: 29,
    sub_capabilities: [
      { id: 'icp_builder', name: 'Ideal Customer Profile (ICP) Builder', est_cost_usd: 0.10 },
      { id: 'company_discovery', name: 'Target Company Search & Discovery', est_cost_usd: 0.20 },
      { id: 'decision_maker_finder', name: 'C-Level & VP Decision Maker Finder', est_cost_usd: 0.25 },
      { id: 'email_finder', name: 'Verified Professional Email Finder', est_cost_usd: 0.30 },
      { id: 'email_verification', name: 'SMTP & MX Email Verification & Hygiene', est_cost_usd: 0.15 },
      { id: 'phone_enrichment', name: 'Phone & Direct Dial Enrichment', est_cost_usd: 0.40 },
      { id: 'linkedin_research', name: 'LinkedIn Executive Profile Mining', est_cost_usd: 0.35 },
      { id: 'lead_qualification', name: 'Lead Intent & Revenue Scoring', est_cost_usd: 0.20 },
      { id: 'data_scraping', name: 'Web Directory & Map Data Scraper', est_cost_usd: 0.30 },
      { id: 'data_dedup', name: 'Dataset Deduplication & Cleaning', est_cost_usd: 0.10 }
    ]
  },

  // FAMILY 2: Technical SEO & Website Audits
  {
    family_id: 'cashclaw-seo-auditor',
    name: 'Technical SEO & Website Audits',
    category: 'Technical SEO',
    default_price_usd: 49,
    sub_capabilities: [
      { id: 'seo_crawler', name: 'Deep Technical Site Crawler', est_cost_usd: 0.30 },
      { id: 'web_vitals_analyzer', name: 'Core Web Vitals & Speed Auditor', est_cost_usd: 0.20 },
      { id: 'broken_link_checker', name: '404 & Broken Redirect Analyzer', est_cost_usd: 0.15 },
      { id: 'sitemap_robots_audit', name: 'XML Sitemap & Robots.txt Auditor', est_cost_usd: 0.10 },
      { id: 'schema_structured_data', name: 'Schema.org & JSON-LD Validator', est_cost_usd: 0.15 },
      { id: 'onpage_keyword_audit', name: 'On-Page H1/Title/Meta Optimizer', est_cost_usd: 0.25 },
      { id: 'backlink_analyzer', name: 'Backlink Profile & Toxic Link Audit', est_cost_usd: 0.40 },
      { id: 'competitor_seo_audit', name: 'Competitor SERP Rank Matrix', est_cost_usd: 0.35 },
      { id: 'wordpress_seo_opt', name: 'WordPress & Yoast/RankMath Config', est_cost_usd: 0.25 },
      { id: 'seo_report_generator', name: 'Executive White-Label PDF Generator', est_cost_usd: 0.20 }
    ]
  },

  // FAMILY 3: Content Writing & Copywriting
  {
    family_id: 'cashclaw-content-writer',
    name: 'SEO Content & Copywriting',
    category: 'Content Writing',
    default_price_usd: 25,
    sub_capabilities: [
      { id: 'seo_article_writer', name: '2,500-Word SEO In-Depth Article', est_cost_usd: 0.40 },
      { id: 'product_desc_writer', name: 'E-commerce Product Description Copy', est_cost_usd: 0.20 },
      { id: 'newsletter_writer', name: 'Engaging Email Newsletter Writer', est_cost_usd: 0.15 },
      { id: 'press_release_writer', name: 'Media-Grade Official Press Release', est_cost_usd: 0.30 },
      { id: 'sales_copywriter', name: 'High-Converting Sales Page Copywriter', est_cost_usd: 0.50 },
      { id: 'email_sequence_writer', name: '5-Part Cold Email Drip Sequence', est_cost_usd: 0.35 },
      { id: 'fact_checker_editor', name: 'AI Content Fact-Checker & Proofreader', est_cost_usd: 0.15 },
      { id: 'translation_localizer', name: 'Multi-Language Localization Engine', est_cost_usd: 0.25 }
    ]
  },

  // FAMILY 4: Python Automation & Web Scraping
  {
    family_id: 'cashclaw-python-automation',
    name: 'Python Automation & Web Scraping',
    category: 'Python Automation',
    default_price_usd: 39,
    sub_capabilities: [
      { id: 'python_script_builder', name: 'Custom Python Script Architect', est_cost_usd: 0.35 },
      { id: 'puppeteer_selenium_scraper', name: 'Dynamic Headless Browser Scraper', est_cost_usd: 0.45 },
      { id: 'api_integrator', name: 'REST/GraphQL API Wrapper Generator', est_cost_usd: 0.30 },
      { id: 'json_csv_converter', name: 'Data Transformer & ETL Parser', est_cost_usd: 0.15 },
      { id: 'automated_qa_guard', name: 'Unit Test & Lint Safety Guard', est_cost_usd: 0.20 },
      { id: 'cron_automation_scheduler', name: 'Background Job Cron Scheduler', est_cost_usd: 0.25 }
    ]
  },

  // FAMILY 5: AI Support & Chatbot Automation
  {
    family_id: 'cashclaw-customer-support',
    name: 'AI Support & Chatbot Automation',
    category: 'AI Chatbots',
    default_price_usd: 49,
    sub_capabilities: [
      { id: 'chatbot_flow_designer', name: 'Customer Support Flow Designer', est_cost_usd: 0.30 },
      { id: 'whatsapp_autoresponder', name: 'WhatsApp Business API Bot', est_cost_usd: 0.40 },
      { id: 'system_prompt_engineer', name: 'LLM Prompt Engineering Specialist', est_cost_usd: 0.25 },
      { id: 'social_moderator', name: 'Social Media Comment Auto-Moderator', est_cost_usd: 0.20 },
      { id: 'design_asset_creator', name: 'Image Banner & Visual Graphic Creator', est_cost_usd: 0.35 },
      { id: 'invoice_stripe_automator', name: 'Automated Stripe Invoicing & Receipts', est_cost_usd: 0.15 }
    ]
  },

  // FAMILY 6: Competitor Analysis & Market Intelligence
  {
    family_id: 'cashclaw-competitor-analyzer',
    name: 'Competitor Analysis & Market Research',
    category: 'Market Intelligence',
    default_price_usd: 35,
    sub_capabilities: [
      { id: 'competitor_traffic_audit', name: 'Competitor Web Traffic Estimator', est_cost_usd: 0.25 },
      { id: 'swot_matrix_builder', name: 'Strategic SWOT Analysis Generator', est_cost_usd: 0.20 },
      { id: 'pricing_strategy_tracker', name: 'Competitor Price Tracker', est_cost_usd: 0.30 },
      { id: 'market_gap_finder', name: 'Unmet Market Needs Finder', est_cost_usd: 0.25 }
    ]
  },

  // FAMILY 7: Data Scraping & Extraction
  {
    family_id: 'cashclaw-data-scraper',
    name: 'Web Data Scraping & Extraction',
    category: 'Data Engineering',
    default_price_usd: 25,
    sub_capabilities: [
      { id: 'dom_parser', name: 'HTML DOM Selector Scraper', est_cost_usd: 0.20 },
      { id: 'pagination_crawler', name: 'Multi-Page Infinite Scroll Crawler', est_cost_usd: 0.35 },
      { id: 'captcha_bypasser', name: 'Proxy & Request Headers Rotator', est_cost_usd: 0.30 }
    ]
  },

  // FAMILY 8: Email Outreach Campaigns
  {
    family_id: 'cashclaw-email-outreach',
    name: 'B2B Cold Email Outreach Campaigns',
    category: 'Outreach',
    default_price_usd: 29,
    sub_capabilities: [
      { id: 'subject_line_optimizer', name: 'A/B Test Subject Line Generator', est_cost_usd: 0.15 },
      { id: 'outreach_personalizer', name: 'Dynamic Variable Email Personalizer', est_cost_usd: 0.25 },
      { id: 'bounce_prevention', name: 'Domain Reputation & SPF/DKIM Checker', est_cost_usd: 0.20 }
    ]
  },

  // FAMILY 9: Landing Page Copy & HTML
  {
    family_id: 'cashclaw-landing-page',
    name: 'Landing Page Copywriting & HTML',
    category: 'Development & Copy',
    default_price_usd: 39,
    sub_capabilities: [
      { id: 'hero_section_copy', name: 'High-Impact Hero Section Copywriter', est_cost_usd: 0.20 },
      { id: 'social_proof_builder', name: 'Testimonial & Social Proof Structurer', est_cost_usd: 0.15 },
      { id: 'cta_optimizer', name: 'Conversion-Focused CTA Button Copy', est_cost_usd: 0.10 },
      { id: 'html_css_generator', name: 'Responsive Tailwind HTML Page Build', est_cost_usd: 0.40 }
    ]
  },

  // FAMILY 10: Reputation & Review Management
  {
    family_id: 'cashclaw-reputation-manager',
    name: 'Online Reputation & Review Management',
    category: 'Reputation Management',
    default_price_usd: 35,
    sub_capabilities: [
      { id: 'review_sentiment_analyzer', name: 'Customer Review Sentiment Classifier', est_cost_usd: 0.20 },
      { id: 'response_generator', name: 'Empathetic Review Response Writer', est_cost_usd: 0.15 },
      { id: 'crisis_alert_system', name: 'Negative Feedback Spike Monitor', est_cost_usd: 0.25 }
    ]
  },

  // FAMILY 11: Social Media Management
  {
    family_id: 'cashclaw-social-media',
    name: 'Social Media Management & Strategy',
    category: 'Social Media',
    default_price_usd: 19,
    sub_capabilities: [
      { id: 'content_calendar_builder', name: '30-Day Content Calendar Planner', est_cost_usd: 0.25 },
      { id: 'caption_hashtag_generator', name: 'Engaging Caption & Hashtag Researcher', est_cost_usd: 0.15 }
    ]
  },

  // FAMILY 12: WhatsApp Business Management
  {
    family_id: 'cashclaw-whatsapp-manager',
    name: 'WhatsApp Business Messaging & Bots',
    category: 'Messaging',
    default_price_usd: 49,
    sub_capabilities: [
      { id: 'whatsapp_template_writer', name: 'Approved WhatsApp Campaign Templates', est_cost_usd: 0.20 },
      { id: 'auto_reply_rules', name: 'Instant Keyword Auto-Reply Engine', est_cost_usd: 0.25 }
    ]
  },

  // FAMILY 13: Invoicing & Billing
  {
    family_id: 'cashclaw-invoicer',
    name: 'Stripe & PDF Automated Invoicing',
    category: 'Financial Ops',
    default_price_usd: 15,
    sub_capabilities: [
      { id: 'pdf_invoice_renderer', name: 'Custom Branded PDF Invoice Generator', est_cost_usd: 0.15 },
      { id: 'stripe_payment_link', name: 'Stripe Checkout Link Creator', est_cost_usd: 0.10 }
    ]
  },

  // FAMILY 14: Web Research
  {
    family_id: 'cashclaw-web-research',
    name: 'Deep Web Research & Fact-Finding',
    category: 'Research',
    default_price_usd: 19,
    sub_capabilities: [
      { id: 'source_verifier', name: 'Multi-Source Fact Verification', est_cost_usd: 0.20 },
      { id: 'executive_summary_builder', name: 'Synthesized Executive Research Summary', est_cost_usd: 0.25 }
    ]
  },

  // FAMILY 15: Data Cleaning & Deduplication
  {
    family_id: 'cashclaw-data-cleaner',
    name: 'Data Cleaning, Formatting & Deduplication',
    category: 'Data Engineering',
    default_price_usd: 15,
    sub_capabilities: [
      { id: 'schema_standardizer', name: 'Column & Data Format Standardizer', est_cost_usd: 0.15 },
      { id: 'fuzzy_matcher', name: 'Fuzzy Duplicate Entity Resolver', est_cost_usd: 0.20 }
    ]
  },

  // FAMILY 16: PDF Data Extraction
  {
    family_id: 'cashclaw-pdf-extractor',
    name: 'PDF & Scanned Document Data Extraction',
    category: 'Data Engineering',
    default_price_usd: 29,
    sub_capabilities: [
      { id: 'ocr_table_extractor', name: 'OCR Table to Excel/CSV Extractor', est_cost_usd: 0.30 },
      { id: 'receipt_invoice_parser', name: 'Receipt & Invoice Field Extractor', est_cost_usd: 0.25 }
    ]
  },

  // FAMILY 17: Data Analysis & Visualization
  {
    family_id: 'cashclaw-data-analyst',
    name: 'Data Analysis, Metrics & Charting',
    category: 'Analytics',
    default_price_usd: 39,
    sub_capabilities: [
      { id: 'pandas_stat_analyzer', name: 'Python Pandas Statistical Profiler', est_cost_usd: 0.30 },
      { id: 'chart_graphic_generator', name: 'Matplotlib / Chart.js Visualizer', est_cost_usd: 0.25 }
    ]
  },

  // FAMILY 18: API Integration & Webhooks
  {
    family_id: 'cashclaw-api-integrator',
    name: 'REST/GraphQL API & Webhook Integration',
    category: 'Development',
    default_price_usd: 49,
    sub_capabilities: [
      { id: 'oauth_handler', name: 'OAuth2 Authentication Flow Implementer', est_cost_usd: 0.35 },
      { id: 'webhook_receiver', name: 'Real-Time Webhook Listener Builder', est_cost_usd: 0.30 }
    ]
  },

  // FAMILY 19: WordPress & WooCommerce
  {
    family_id: 'cashclaw-wordpress',
    name: 'WordPress Development & Optimization',
    category: 'Development',
    default_price_usd: 49,
    sub_capabilities: [
      { id: 'plugin_configurator', name: 'WordPress Plugin Setup & Security', est_cost_usd: 0.25 },
      { id: 'theme_customizer', name: 'Elementor / Gutenberg Theme Adjuster', est_cost_usd: 0.30 }
    ]
  },

  // FAMILY 20: QA Testing & Code Audit
  {
    family_id: 'cashclaw-qa-tester',
    name: 'Automated QA Testing & Code Audit',
    category: 'Quality Assurance',
    default_price_usd: 29,
    sub_capabilities: [
      { id: 'unit_test_generator', name: 'Jest / PyTest Automated Test Generator', est_cost_usd: 0.25 },
      { id: 'vulnerability_checker', name: 'Security & Dependency Vulnerability Checker', est_cost_usd: 0.20 }
    ]
  },

  // FAMILY 21: Translation & Localization
  {
    family_id: 'cashclaw-translator',
    name: 'Multi-Language Translation & Localization',
    category: 'Localization',
    default_price_usd: 25,
    sub_capabilities: [
      { id: 'i18n_json_translator', name: 'Software i18n JSON File Translator', est_cost_usd: 0.20 },
      { id: 'cultural_adapter', name: 'Cultural Tone & Nuance Adaptor', est_cost_usd: 0.25 }
    ]
  },

  // FAMILY 22: Image Processing & Banner Design
  {
    family_id: 'cashclaw-image-processor',
    name: 'AI Image Editing, Resizing & Graphic Assets',
    category: 'Design',
    default_price_usd: 25,
    sub_capabilities: [
      { id: 'background_remover', name: 'AI Product Background Remover', est_cost_usd: 0.15 },
      { id: 'banner_ad_designer', name: 'Display Banner Ad Asset Designer', est_cost_usd: 0.30 }
    ]
  },

  // FAMILY 23: Video Shorts & Reels Scripts
  {
    family_id: 'cashclaw-video-shorts',
    name: 'Viral Video Shorts & TikTok Scripting',
    category: 'Media Production',
    default_price_usd: 29,
    sub_capabilities: [
      { id: 'hook_generator', name: '3-Second Viral Hook Writer', est_cost_usd: 0.15 },
      { id: 'storyboard_creator', name: 'Visual Scene & Voiceover Storyboard', est_cost_usd: 0.25 }
    ]
  },

  // FAMILY 24: Presentation & Slide Decks
  {
    family_id: 'cashclaw-presentation',
    name: 'Investor Pitch Decks & Slide Presentations',
    category: 'Business Design',
    default_price_usd: 59,
    sub_capabilities: [
      { id: 'slide_outline_architect', name: '10-Slide Investor Narrative Structure', est_cost_usd: 0.30 },
      { id: 'data_visual_presenter', name: 'Key Metrics & Financial Slide Formatting', est_cost_usd: 0.35 }
    ]
  },

  // FAMILY 25: Resume & LinkedIn Profile Optimization
  {
    family_id: 'cashclaw-resume-linkedin',
    name: 'Executive Resume & LinkedIn Profile Optimization',
    category: 'Career Services',
    default_price_usd: 35,
    sub_capabilities: [
      { id: 'ats_resume_optimizer', name: 'ATS Keyword Resume Optimizer', est_cost_usd: 0.25 },
      { id: 'linkedin_headline_writer', name: 'High-Impact LinkedIn Headline & About Writer', est_cost_usd: 0.20 }
    ]
  },

  // FAMILY 26: E-commerce Product Listings
  {
    family_id: 'cashclaw-ecommerce',
    name: 'Amazon & Shopify Product Listing Optimization',
    category: 'E-commerce',
    default_price_usd: 29,
    sub_capabilities: [
      { id: 'amazon_seo_bullets', name: 'Amazon A9 Algorithm Bullet Points Writer', est_cost_usd: 0.25 },
      { id: 'shopify_meta_tags', name: 'Shopify Product Meta Titles & Schema', est_cost_usd: 0.20 }
    ]
  },

  // FAMILY 27: 24/7 AI Customer Support
  {
    family_id: 'cashclaw-customer-support',
    name: '24/7 AI Customer Support Ticket Resolver',
    category: 'Support Automation',
    default_price_usd: 49,
    sub_capabilities: [
      { id: 'knowledge_base_indexer', name: 'Helpdesk Article Indexer & Matcher', est_cost_usd: 0.25 },
      { id: 'ticket_auto_responder', name: 'Empathetic Customer Inquiry Resolver', est_cost_usd: 0.20 }
    ]
  },

  // FAMILY 28: LLM Prompt Engineering & Tuning
  {
    family_id: 'cashclaw-prompt-engineer',
    name: 'System Prompt Engineering & LLM Tuning',
    category: 'AI Engineering',
    default_price_usd: 39,
    sub_capabilities: [
      { id: 'few_shot_prompt_builder', name: 'Few-Shot Example & Persona Prompt Designer', est_cost_usd: 0.30 },
      { id: 'prompt_evaluator', name: 'LLM Response Accuracy Evaluator', est_cost_usd: 0.25 }
    ]
  },

  // FAMILY 29: Automated Proposal Generation
  {
    family_id: 'cashclaw-proposal-generator',
    name: 'High-Win Client Proposal & Bid Writer',
    category: 'B2B Sales',
    default_price_usd: 29,
    sub_capabilities: [
      { id: 'proposal_customizer', name: 'Tailored Scope-of-Work Proposal Writer', est_cost_usd: 0.25 },
      { id: 'pricing_estimator', name: 'Project Milestone & Pricing Calculator', est_cost_usd: 0.20 }
    ]
  },

  // FAMILY 30: Core Orchestrator & Guard
  {
    family_id: 'cashclaw-core',
    name: 'Core Master Orchestrator & Execution Guard',
    category: 'Core System',
    default_price_usd: 19,
    sub_capabilities: [
      { id: 'task_orchestrator', name: 'Multi-Step Execution Pipeline Manager', est_cost_usd: 0.15 },
      { id: 'security_sanitizer', name: 'Input & Output Security Sanitizer', est_cost_usd: 0.10 }
    ]
  }
];

/**
 * Get total sub-capabilities count across all 30 families.
 */
export function getTotalSubCapabilitiesCount() {
  return SKILL_FAMILIES.reduce((acc, fam) => acc + fam.sub_capabilities.length, 0);
}
