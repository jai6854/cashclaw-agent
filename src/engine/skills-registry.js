'use strict';

/**
 * 100 Specialized AI Skills Master Registry for CashClaw Agent
 */
export const HUNDRED_SKILLS = [
  // Pillar 1: Web & App Development (10)
  { id: 'web-nextjs-dev', name: 'Next.js & React Web App Building', category: 'Development', tier: 'pro', price: 99 },
  { id: 'web-api-integration', name: 'REST & GraphQL API Integration', category: 'Development', tier: 'standard', price: 49 },
  { id: 'web-bug-fixer', name: 'JavaScript & Python Bug Fixing', category: 'Development', tier: 'basic', price: 19 },
  { id: 'web-wordpress-builder', name: 'WordPress & WooCommerce Setup', category: 'Development', tier: 'standard', price: 49 },
  { id: 'web-shopify-custom', name: 'Shopify Store & Liquid Customization', category: 'Development', tier: 'standard', price: 59 },
  { id: 'web-mobile-app-rn', name: 'React Native Cross-Platform App', category: 'Development', tier: 'pro', price: 129 },
  { id: 'web-database-schema', name: 'PostgreSQL & MongoDB Database Design', category: 'Development', tier: 'standard', price: 39 },
  { id: 'web-frontend-ui', name: 'HTML5/Tailwind/CSS3 Component Build', category: 'Development', tier: 'basic', price: 29 },
  { id: 'web-backend-microservice', name: 'Node.js Express / Fastify Backend', category: 'Development', tier: 'standard', price: 69 },
  { id: 'web-performance-tuning', name: 'Core Web Vitals & Speed Optimization', category: 'Development', tier: 'basic', price: 25 },

  // Pillar 2: SEO & Growth Marketing (10)
  { id: 'seo-technical-audit', name: 'Enterprise Technical SEO Audit', category: 'SEO', tier: 'pro', price: 59 },
  { id: 'seo-backlink-miner', name: 'Competitor Backlink Profile Analysis', category: 'SEO', tier: 'standard', price: 35 },
  { id: 'seo-keyword-research', name: 'High-Intent B2B Keyword Research', category: 'SEO', tier: 'basic', price: 19 },
  { id: 'seo-local-gmb', name: 'Google My Business Local SEO Optimizer', category: 'SEO', tier: 'basic', price: 29 },
  { id: 'seo-schema-markup', name: 'Structured Data & Schema JSON-LD', category: 'SEO', tier: 'basic', price: 15 },
  { id: 'seo-content-gap', name: 'Search Intent & Content Gap Analysis', category: 'SEO', tier: 'standard', price: 39 },
  { id: 'seo-ecommerce-cat', name: 'E-commerce Category Page SEO', category: 'SEO', tier: 'standard', price: 45 },
  { id: 'seo-rank-tracker', name: 'Automated Rank Position Monitoring', category: 'SEO', tier: 'basic', price: 19 },
  { id: 'seo-page-speed', name: 'Lighthouse Score 90+ Optimizer', category: 'SEO', tier: 'standard', price: 35 },
  { id: 'seo-site-migration', name: 'SEO-Safe Domain Migration Plan', category: 'SEO', tier: 'pro', price: 79 },

  // Pillar 3: Copywriting & Content (10)
  { id: 'copy-longform-article', name: '2,500-Word SEO In-Depth Article', category: 'Copywriting', tier: 'standard', price: 29 },
  { id: 'copy-landing-page', name: 'High-Converting Landing Page Copy', category: 'Copywriting', tier: 'standard', price: 39 },
  { id: 'copy-email-newsletter', name: 'Weekly Engaging Newsletter Series', category: 'Copywriting', tier: 'basic', price: 15 },
  { id: 'copy-press-release', name: 'Media-Ready Official Press Release', category: 'Copywriting', tier: 'standard', price: 35 },
  { id: 'copy-product-descriptions', name: '50 E-commerce Product Summaries', category: 'Copywriting', tier: 'basic', price: 25 },
  { id: 'copy-ad-variations', name: '20 Facebook / Google Ad Copy Variations', category: 'Copywriting', tier: 'basic', price: 19 },
  { id: 'copy-whitepaper-ebook', name: '10-Page B2B Technical E-Book', category: 'Copywriting', tier: 'pro', price: 99 },
  { id: 'copy-video-script', name: 'Viral YouTube & Reel Video Script', category: 'Copywriting', tier: 'standard', price: 29 },
  { id: 'copy-case-study', name: 'Customer Success Story & Case Study', category: 'Copywriting', tier: 'standard', price: 49 },
  { id: 'copy-brand-story', name: 'Company About Page & Brand Narrative', category: 'Copywriting', tier: 'basic', price: 19 },

  // Pillar 4: Data Engineering & Scraping (10)
  { id: 'data-puppeteer-scraper', name: 'Complex Dynamic Web Scraper', category: 'Data', tier: 'standard', price: 35 },
  { id: 'data-lead-miner', name: 'B2B Targeted Contact Data Miner', category: 'Data', tier: 'standard', price: 29 },
  { id: 'data-price-monitor', name: 'Competitor E-commerce Price Tracker', category: 'Data', tier: 'basic', price: 19 },
  { id: 'data-cleaner-formatter', name: 'Large Dataset Normalizer & Formatter', category: 'Data', tier: 'basic', price: 15 },
  { id: 'data-pdf-parser', name: 'Automated Invoice & PDF Data Extractor', category: 'Data', tier: 'standard', price: 29 },
  { id: 'data-sentiment-analysis', name: 'Social Media & Review Sentiment Model', category: 'Data', tier: 'standard', price: 39 },
  { id: 'data-realestate-scraper', name: 'Real Estate Listings Scraper', category: 'Data', tier: 'pro', price: 59 },
  { id: 'data-financial-statements', name: 'SEC & Company Financial Report Parser', category: 'Data', tier: 'pro', price: 79 },
  { id: 'data-etl-pipeline', name: 'Automated Daily Data ETL Pipeline', category: 'Data', tier: 'pro', price: 89 },
  { id: 'data-social-miner', name: 'Twitter/Reddit Trend Data Scraper', category: 'Data', tier: 'standard', price: 29 },

  // Pillar 5: AI & Machine Learning (10)
  { id: 'ai-prompt-engineering', name: 'System Prompt & Agent Fine-Tuner', category: 'AI Tools', tier: 'standard', price: 39 },
  { id: 'ai-rag-pipeline', name: 'Vector DB RAG Knowledge Base Builder', category: 'AI Tools', tier: 'pro', price: 89 },
  { id: 'ai-chatbot-flow', name: 'Custom Customer Support AI Flow', category: 'AI Tools', tier: 'standard', price: 49 },
  { id: 'ai-vision-pipeline', name: 'Image Recognition & OCR Processing', category: 'AI Tools', tier: 'standard', price: 59 },
  { id: 'ai-agent-workflow', name: 'Autonomous Multi-Agent Task Chain', category: 'AI Tools', tier: 'pro', price: 99 },
  { id: 'ai-benchmark-eval', name: 'LLM Model Accuracy Benchmark Report', category: 'AI Tools', tier: 'standard', price: 39 },
  { id: 'ai-vector-db-setup', name: 'Pinecone / Qdrant Vector DB Manager', category: 'AI Tools', tier: 'standard', price: 45 },
  { id: 'ai-voice-agent-script', name: 'AI Voice Bot Conversation Script', category: 'AI Tools', tier: 'basic', price: 25 },
  { id: 'ai-dataset-labeler', name: 'Automated AI Dataset Annotator', category: 'AI Tools', tier: 'standard', price: 35 },
  { id: 'ai-code-reviewer', name: 'Automated AI Code Quality Guard', category: 'AI Tools', tier: 'basic', price: 19 },

  // Pillar 6: Social Media & Growth (10)
  { id: 'social-twitter-growth', name: 'Twitter/X Threads & Growth Automation', category: 'Social', tier: 'basic', price: 19 },
  { id: 'social-linkedin-ghostwriting', name: 'Executive LinkedIn Ghostwriting (30 Days)', category: 'Social', tier: 'pro', price: 89 },
  { id: 'social-instagram-reels', name: '30-Day Instagram Reel Strategy & Script', category: 'Social', tier: 'standard', price: 49 },
  { id: 'social-youtube-seo', name: 'YouTube Video SEO & Thumbnail Copy', category: 'Social', tier: 'basic', price: 15 },
  { id: 'social-tiktok-viral', name: 'TikTok Viral Hook & Script Pack', category: 'Social', tier: 'basic', price: 19 },
  { id: 'social-discord-bot', name: 'Community Discord Moderation Bot', category: 'Social', tier: 'standard', price: 39 },
  { id: 'social-reddit-marketing', name: 'Organic Reddit Promotion & Thread Builder', category: 'Social', tier: 'standard', price: 29 },
  { id: 'social-influencer-outreach', name: '100 Vetted Niche Influencer List', category: 'Social', tier: 'standard', price: 35 },
  { id: 'social-analytics-report', name: 'Cross-Platform Social Analytics Dashboard', category: 'Social', tier: 'basic', price: 25 },
  { id: 'social-content-calendar', name: 'Full Month Multi-Platform Content Calendar', category: 'Social', tier: 'standard', price: 45 },

  // Pillar 7: B2B Sales & Outreach (10)
  { id: 'sales-lead-verification', name: '100% Email Verification & Hygiene', category: 'B2B Sales', tier: 'basic', price: 15 },
  { id: 'sales-b2b-prospector', name: '500 Verified Decision Maker Leads', category: 'B2B Sales', tier: 'pro', price: 79 },
  { id: 'sales-cold-email-seq', name: '5-Step High-Converting Cold Email Campaign', category: 'B2B Sales', tier: 'standard', price: 29 },
  { id: 'sales-linkedin-sequence', name: 'LinkedIn Connection & Message Flow', category: 'B2B Sales', tier: 'standard', price: 35 },
  { id: 'sales-crm-enrichment', name: 'HubSpot / Salesforce CRM Data Cleaning', category: 'B2B Sales', tier: 'standard', price: 45 },
  { id: 'sales-pitch-deck-copy', name: 'Investor Pitch Deck Structure & Copy', category: 'B2B Sales', tier: 'pro', price: 99 },
  { id: 'sales-cold-call-script', name: 'Objection-Handling Cold Calling Guide', category: 'B2B Sales', tier: 'basic', price: 19 },
  { id: 'sales-lead-scoring', name: 'AI ICP Lead Scoring Model Implementation', category: 'B2B Sales', tier: 'standard', price: 39 },
  { id: 'sales-rfp-proposal', name: 'Enterprise RFP & Proposal Generator', category: 'B2B Sales', tier: 'pro', price: 89 },
  { id: 'sales-competitor-pitch', name: 'Battlecard & Competitor Comparison Matrix', category: 'B2B Sales', tier: 'standard', price: 35 },

  // Pillar 8: DevOps & Infrastructure (10)
  { id: 'devops-docker-builder', name: 'Production Dockerfile & Compose Setup', category: 'DevOps', tier: 'basic', price: 25 },
  { id: 'devops-cicd-actions', name: 'GitHub Actions CI/CD Automated Pipeline', category: 'DevOps', tier: 'standard', price: 49 },
  { id: 'devops-serverless-deploy', name: 'AWS Lambda / Cloudflare Workers Setup', category: 'DevOps', tier: 'standard', price: 45 },
  { id: 'devops-nginx-ssl', name: 'Nginx Reverse Proxy & Let\'s Encrypt SSL', category: 'DevOps', tier: 'basic', price: 19 },
  { id: 'devops-db-backup', name: 'Automated Offsite Database Backup Script', category: 'DevOps', tier: 'basic', price: 19 },
  { id: 'devops-uptime-alerting', name: 'PagerDuty & Slack Uptime Monitoring', category: 'DevOps', tier: 'basic', price: 15 },
  { id: 'devops-cloud-cost-audit', name: 'AWS / GCP Cloud Cost Reduction Audit', category: 'DevOps', tier: 'pro', price: 69 },
  { id: 'devops-security-scan', name: 'Snyk & Vulnerability Patching Audit', category: 'DevOps', tier: 'standard', price: 39 },
  { id: 'devops-k8s-manifests', name: 'Kubernetes Deployment & Helm Charts', category: 'DevOps', tier: 'pro', price: 99 },
  { id: 'devops-api-gateway', name: 'Kong / Cloudflare API Rate-Limiter Gateway', category: 'DevOps', tier: 'standard', price: 49 },

  // Pillar 9: UI/UX & Media Assets (10)
  { id: 'design-figma-wireframe', name: 'Figma Mobile & Web UI Wireframe Pack', category: 'Design', tier: 'pro', price: 79 },
  { id: 'design-landing-layout', name: 'Modern Landing Page UX Blueprint', category: 'Design', tier: 'standard', price: 39 },
  { id: 'design-logo-concepts', name: '5 Modern Vector Logo Concept Packages', category: 'Design', tier: 'standard', price: 35 },
  { id: 'design-ad-banners', name: '10 High-CTR Display Banner Variations', category: 'Design', tier: 'basic', price: 25 },
  { id: 'design-infographic', name: 'Data-Driven Visual Infographic Graphics', category: 'Design', tier: 'standard', price: 45 },
  { id: 'design-brand-kit', name: 'Complete Brand Style & Typography Guide', category: 'Design', tier: 'pro', price: 69 },
  { id: 'design-presentation-deck', name: '15-Slide Professional Keynote/PowerPoint', category: 'Design', tier: 'pro', price: 59 },
  { id: 'design-icon-set', name: 'Custom SVG Vector Icon Pack (25 icons)', category: 'Design', tier: 'basic', price: 29 },
  { id: 'design-social-templates', name: '10 Canva Social Media Post Templates', category: 'Design', tier: 'basic', price: 19 },
  { id: 'design-email-html', name: 'Responsive HTML Email Template Code', category: 'Design', tier: 'basic', price: 25 },

  // Pillar 10: Operations & Compliance (10)
  { id: 'ops-review-management', name: 'Automated 5-Star Customer Review Handler', category: 'Operations', tier: 'standard', price: 35 },
  { id: 'ops-support-ai', name: '24/7 AI Customer Support Ticket Resolver', category: 'Operations', tier: 'pro', price: 79 },
  { id: 'ops-invoice-automation', name: 'Stripe & QuickBooks Automated Invoicer', category: 'Operations', tier: 'basic', price: 19 },
  { id: 'ops-dispute-resolution', name: 'Chargeback & Dispute Evidence Generator', category: 'Operations', tier: 'standard', price: 49 },
  { id: 'ops-brand-monitoring', name: 'Web Brand Mentions & Plagiarism Guard', category: 'Operations', tier: 'basic', price: 19 },
  { id: 'ops-business-plan', name: 'Full Investor Business Plan & Projections', category: 'Operations', tier: 'pro', price: 119 },
  { id: 'ops-executive-summary', name: '1-Page C-Level Project Executive Summary', category: 'Operations', tier: 'basic', price: 15 },
  { id: 'ops-sop-builder', name: 'Standard Operating Procedure Manual (10 SOPs)', category: 'Operations', tier: 'standard', price: 45 },
  { id: 'ops-privacy-tos', name: 'GDPR / CCPA Privacy Policy & ToS Package', category: 'Operations', tier: 'basic', price: 25 },
  { id: 'ops-contract-reviewer', name: 'SaaS SLA & Contractor Agreement Checker', category: 'Operations', tier: 'standard', price: 39 }
];
