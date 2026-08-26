'use strict';

/**
 * CASHCLAW KING EDITION - 30 FAMILIES (8-6-6-6-4 ALLOCATION) & 340+ EXECUTABLE SUB-CAPABILITIES
 * Full 8-Point Execution Contract per Sub-Capability:
 * capability -> executable -> required_tool -> input_schema -> output_schema -> validation_qa -> est_cost_usd -> marketplace_eligible -> fallback_capability
 */

function buildContract(id, name, requiredTool, estCostUsd, fallbackId = 'llm_general_fallback') {
  return {
    capability: id,
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

export const SKILL_FAMILIES_V3 = [
  // 🔥 AREA 1: B2B Lead Generation & Data Mining (8 Families)
  {
    family_id: 'cashclaw-lead-generator',
    name: 'B2B Lead Generation',
    category: 'B2B Lead Generation & Data Mining',
    priority: 1,
    default_price_usd: 29,
    sub_capabilities: [
      buildContract('icp_definition', 'ICP definition', 'llm-prompt', 0.10),
      buildContract('industry_targeting', 'Industry targeting', 'serp-api', 0.15),
      buildContract('geography_targeting', 'Geography targeting', 'geo-ip-lookup', 0.10),
      buildContract('company_size_filtering', 'Company-size filtering', 'linkedin-api', 0.20),
      buildContract('revenue_tech_filtering', 'Revenue/technology filtering', 'builtwith-api', 0.25),
      buildContract('company_discovery', 'Company discovery', 'crunchbase-scraper', 0.30),
      buildContract('decision_maker_discovery', 'Decision-maker discovery', 'apollo-api', 0.35),
      buildContract('job_title_targeting', 'Job-title targeting', 'linkedin-scraper', 0.25),
      buildContract('contact_list_generation', 'Contact-list generation', 'csv-exporter', 0.15),
      buildContract('lead_qualification', 'Lead qualification', 'llm-evaluator', 0.20),
      buildContract('lead_scoring', 'Lead scoring', 'scoring-algorithm', 0.10),
      buildContract('intent_signal_id', 'Intent-signal identification', 'news-api-scraper', 0.25),
      buildContract('prospect_prioritization', 'Prospect prioritization', 'ranker-engine', 0.15)
    ]
  },
  {
    family_id: 'cashclaw-data-scraper',
    name: 'Web & Data Scraping',
    category: 'B2B Lead Generation & Data Mining',
    priority: 1,
    default_price_usd: 25,
    sub_capabilities: [
      buildContract('website_crawling', 'Website crawling', 'puppeteer-crawler', 0.30),
      buildContract('directory_scraping', 'Directory scraping', 'cheerio-scraper', 0.20),
      buildContract('search_result_extraction', 'Search-result extraction', 'serp-api', 0.15),
      buildContract('product_scraping', 'Product scraping', 'dom-parser', 0.25),
      buildContract('pricing_extraction', 'Pricing extraction', 'regex-price-extractor', 0.10),
      buildContract('contact_page_extraction', 'Contact-page extraction', 'contact-spider', 0.15),
      buildContract('structured_data_extraction', 'Structured-data extraction', 'jsonld-parser', 0.10),
      buildContract('pagination_handling', 'Pagination handling', 'next-page-crawler', 0.20),
      buildContract('js_rendered_pages', 'JavaScript-rendered pages', 'playwright-headless', 0.35),
      buildContract('dynamic_content_extraction', 'Dynamic content extraction', 'websocket-interceptor', 0.30),
      buildContract('multi_site_scraping', 'Multi-site scraping', 'parallel-cluster-scraper', 0.40),
      buildContract('scheduled_scraping', 'Scheduled scraping', 'cron-worker', 0.15)
    ]
  },
  {
    family_id: 'cashclaw-data-cleaner',
    name: 'Data Cleaning & Enrichment',
    category: 'B2B Lead Generation & Data Mining',
    priority: 1,
    default_price_usd: 15,
    sub_capabilities: [
      buildContract('csv_cleaning', 'CSV cleaning', 'pandas-cleaner', 0.10),
      buildContract('excel_cleaning', 'Excel cleaning', 'openpyxl-cleaner', 0.15),
      buildContract('json_normalization', 'JSON normalization', 'json-schema-normalizer', 0.10),
      buildContract('duplicate_removal', 'Duplicate removal', 'dedupe-python', 0.10),
      buildContract('field_normalization', 'Field normalization', 'regex-normalizer', 0.10),
      buildContract('name_company_normalization', 'Name/company normalization', 'fuzzywuzzy-matcher', 0.15),
      buildContract('missing_data_detection', 'Missing-data detection', 'null-checker', 0.05),
      buildContract('data_validation', 'Data validation', 'validator-js', 0.10),
      buildContract('record_merging', 'Record merging', 'record-linker', 0.20),
      buildContract('lead_enrichment', 'Lead enrichment', 'clearbit-api', 0.30),
      buildContract('dataset_restructuring', 'Dataset restructuring', 'melt-pivot-engine', 0.15),
      buildContract('export_formatting', 'Export formatting', 'format-exporter', 0.10)
    ]
  },
  {
    family_id: 'cashclaw-pdf-extractor',
    name: 'Document/Data Extraction',
    category: 'B2B Lead Generation & Data Mining',
    priority: 1,
    default_price_usd: 29,
    sub_capabilities: [
      buildContract('pdf_text_extraction', 'PDF text extraction', 'pdf-parse', 0.10),
      buildContract('table_extraction', 'Table extraction', 'camelot-py', 0.25),
      buildContract('invoice_extraction', 'Invoice extraction', 'tesseract-ocr', 0.30),
      buildContract('contact_extraction', 'Contact extraction', 'regex-contact-parser', 0.15),
      buildContract('financial_data_extraction', 'Financial-data extraction', 'llm-financial-parser', 0.35),
      buildContract('ocr_scanning', 'OCR Scanning', 'tesseract-engine', 0.25),
      buildContract('document_classification', 'Document classification', 'svm-classifier', 0.15),
      buildContract('multi_pdf_processing', 'Multi-PDF processing', 'batch-pdf-processor', 0.30),
      buildContract('pdf_to_csv', 'PDF -> CSV', 'pdf-csv-converter', 0.15),
      buildContract('pdf_to_excel', 'PDF -> Excel', 'pdf-excel-converter', 0.15),
      buildContract('pdf_to_json', 'PDF -> JSON', 'pdf-json-converter', 0.15),
      buildContract('structured_report_gen', 'Structured report generation', 'pdfkit-generator', 0.20)
    ]
  },
  {
    family_id: 'cashclaw-web-research',
    name: 'Research Intelligence',
    category: 'B2B Lead Generation & Data Mining',
    priority: 1,
    default_price_usd: 19,
    sub_capabilities: [
      buildContract('company_research', 'Company research', 'bing-search-api', 0.15),
      buildContract('market_research', 'Market research', 'llm-researcher', 0.25),
      buildContract('competitor_research', 'Competitor research', 'similarweb-scraper', 0.30),
      buildContract('prospect_research', 'Prospect research', 'linkedin-api', 0.20),
      buildContract('product_research', 'Product research', 'amazon-scraper', 0.25),
      buildContract('pricing_research', 'Pricing research', 'price-comparator', 0.20),
      buildContract('industry_research', 'Industry research', 'statista-scraper', 0.30),
      buildContract('contact_verification', 'Contact verification', 'hunter-io-api', 0.20),
      buildContract('source_collection', 'Source collection', 'citation-collector', 0.15),
      buildContract('fact_verification', 'Fact verification', 'fact-check-api', 0.15),
      buildContract('research_summaries', 'Research summaries', 'llm-summarizer', 0.15),
      buildContract('research_reports', 'Research reports', 'markdown-report-builder', 0.20)
    ]
  },
  {
    family_id: 'cashclaw-ecommerce',
    name: 'E-commerce Intelligence',
    category: 'B2B Lead Generation & Data Mining',
    priority: 1,
    default_price_usd: 29,
    sub_capabilities: [
      buildContract('product_discovery', 'Product discovery', 'shopify-store-scraper', 0.25),
      buildContract('product_catalog_extraction', 'Product catalog extraction', 'woocommerce-api', 0.30),
      buildContract('price_comparison', 'Price comparison', 'price-matcher', 0.20),
      buildContract('competitor_store_research', 'Competitor-store research', 'builtwith-tech-analyzer', 0.25),
      buildContract('product_data_scraping', 'Product-data scraping', 'amazon-product-api', 0.30),
      buildContract('sku_extraction', 'SKU extraction', 'sku-parser', 0.10),
      buildContract('inventory_data_extraction', 'Inventory-data extraction', 'stock-level-checker', 0.20),
      buildContract('product_categorization', 'Product categorization', 'ml-category-classifier', 0.15),
      buildContract('product_desc_extraction', 'Product-description extraction', 'html-text-extractor', 0.10),
      buildContract('marketplace_research', 'Marketplace research', 'ebay-api', 0.25),
      buildContract('catalog_cleanup', 'Catalog cleanup', 'data-sanitizer', 0.15),
      buildContract('store_data_analysis', 'Store-data analysis', 'pandas-metrics', 0.20)
    ]
  },
  {
    family_id: 'cashclaw-enrichment-engine',
    name: 'Contact & Phone Enrichment',
    category: 'B2B Lead Generation & Data Mining',
    priority: 1,
    default_price_usd: 35,
    sub_capabilities: [
      buildContract('direct_dial_enrichment', 'Direct Dial Enrichment', 'lusha-api', 0.40),
      buildContract('work_email_lookup', 'Work Email Lookup', 'dropcontact-api', 0.30),
      buildContract('social_url_enrichment', 'Social URL Enrichment', 'fullcontact-api', 0.25),
      buildContract('tech_stack_lookup', 'Tech Stack Lookup', 'wappalyzer-api', 0.20)
    ]
  },
  {
    family_id: 'cashclaw-intent-miner',
    name: 'B2B Buyer Intent & Signal Miner',
    category: 'B2B Lead Generation & Data Mining',
    priority: 1,
    default_price_usd: 39,
    sub_capabilities: [
      buildContract('job_hiring_signal', 'Job Hiring Signal Monitor', 'indeed-api-scraper', 0.30),
      buildContract('funding_event_signal', 'Funding Event Signal Monitor', 'crunchbase-api', 0.35),
      buildContract('tech_adoption_signal', 'Tech Adoption Signal Monitor', 'builtwith-alerts', 0.25)
    ]
  },

  // 🔥 AREA 2: Technical SEO & Web Audits (6 Families)
  {
    family_id: 'cashclaw-seo-auditor',
    name: 'Technical SEO Audit',
    category: 'Technical SEO & Web Audits',
    priority: 2,
    default_price_usd: 49,
    sub_capabilities: [
      buildContract('website_crawling_seo', 'Website crawling', 'screaming-frog-cli', 0.35),
      buildContract('indexability_analysis', 'Indexability analysis', 'google-search-console-api', 0.20),
      buildContract('canonical_analysis', 'Canonical analysis', 'html-canonical-checker', 0.10),
      buildContract('meta_tag_analysis', 'Meta-tag analysis', 'cheerio-meta-parser', 0.10),
      buildContract('heading_analysis', 'Heading analysis', 'heading-hierarchy-checker', 0.10),
      buildContract('internal_link_analysis', 'Internal-link analysis', 'internal-link-spider', 0.20),
      buildContract('duplicate_content_det', 'Duplicate-content detection', 'simhash-analyzer', 0.25),
      buildContract('http_status_analysis', 'HTTP-status analysis', 'http-batch-ping', 0.10),
      buildContract('redirect_chain_analysis', 'Redirect analysis', 'redirect-loop-detector', 0.15),
      buildContract('sitemap_analysis', 'Sitemap analysis', 'xml-sitemap-validator', 0.10),
      buildContract('robots_txt_analysis', 'Robots.txt analysis', 'robots-parser-engine', 0.10),
      buildContract('technical_seo_report', 'Technical SEO report', 'pdf-report-generator', 0.25)
    ]
  },
  {
    family_id: 'cashclaw-speed-auditor',
    name: 'Core Web Vitals & Performance',
    category: 'Technical SEO & Web Audits',
    priority: 2,
    default_price_usd: 35,
    sub_capabilities: [
      buildContract('lcp_analysis', 'LCP analysis', 'lighthouse-cli', 0.25),
      buildContract('inp_analysis', 'INP analysis', 'web-vitals-js', 0.20),
      buildContract('cls_analysis', 'CLS analysis', 'layout-shift-analyzer', 0.20),
      buildContract('page_load_analysis', 'Page-load analysis', 'gtmetrix-api', 0.30),
      buildContract('mobile_performance', 'Mobile performance', 'mobile-emulation-runner', 0.25),
      buildContract('desktop_performance', 'Desktop performance', 'desktop-lighthouse-runner', 0.20),
      buildContract('js_analysis', 'JavaScript analysis', 'coverage-profiler', 0.25),
      buildContract('css_opt_analysis', 'CSS optimization analysis', 'uncss-detector', 0.20),
      buildContract('image_optimization_audit', 'Image optimization', 'sharp-image-analyzer', 0.15),
      buildContract('font_optimization', 'Font optimization', 'font-display-checker', 0.10),
      buildContract('cache_analysis', 'Cache analysis', 'header-cache-control-checker', 0.10),
      buildContract('performance_recs', 'Performance recommendations', 'llm-performance-advisor', 0.15)
    ]
  },
  {
    family_id: 'cashclaw-competitor-analyzer',
    name: 'Competitor & Search Intelligence',
    category: 'Technical SEO & Web Audits',
    priority: 2,
    default_price_usd: 35,
    sub_capabilities: [
      buildContract('competitor_discovery', 'Competitor discovery', 'serp-domain-overlap', 0.25),
      buildContract('keyword_gap_analysis', 'Keyword-gap analysis', 'ahrefs-api', 0.40),
      buildContract('backlink_analysis', 'Backlink analysis', 'majestic-api', 0.35),
      buildContract('content_gap_analysis', 'Content-gap analysis', 'llm-gap-finder', 0.25),
      buildContract('serp_comparison', 'SERP comparison', 'serpapi-runner', 0.20),
      buildContract('traffic_source_analysis', 'Traffic-source analysis', 'similarweb-api', 0.35),
      buildContract('ranking_comparison', 'Ranking comparison', 'rank-tracker-engine', 0.20),
      buildContract('competitor_page_analysis', 'Competitor-page analysis', 'page-structure-analyzer', 0.20),
      buildContract('domain_comparison', 'Domain comparison', 'domain-authority-checker', 0.15),
      buildContract('content_strategy_analysis', 'Content strategy analysis', 'llm-strategy-builder', 0.25),
      buildContract('competitive_report', 'Competitive report', 'pdf-report-builder', 0.20)
    ]
  },
  {
    family_id: 'cashclaw-landing-page',
    name: 'SEO Landing Pages',
    category: 'Technical SEO & Web Audits',
    priority: 2,
    default_price_usd: 39,
    sub_capabilities: [
      buildContract('keyword_mapping', 'Keyword mapping', 'keyword-clustering-algorithm', 0.20),
      buildContract('search_intent_analysis', 'Search-intent analysis', 'llm-intent-mapper', 0.15),
      buildContract('landing_page_structure', 'Landing-page structure', 'ux-wireframe-builder', 0.25),
      buildContract('seo_copywriting', 'SEO copy', 'llm-gpt-4o', 0.35),
      buildContract('conversion_copy', 'Conversion copy', 'copywriting-engine', 0.30),
      buildContract('cta_optimization', 'CTA optimization', 'cta-variant-generator', 0.15),
      buildContract('html_generation', 'HTML generation', 'tailwind-html-generator', 0.35),
      buildContract('schema_markup', 'Schema markup', 'schema-jsonld-builder', 0.15),
      buildContract('metadata_generation', 'Metadata generation', 'meta-tag-builder', 0.10),
      buildContract('mobile_layout_opt', 'Mobile layout', 'responsive-viewport-checker', 0.15),
      buildContract('pagespeed_optimization', 'Page-speed optimization', 'asset-minifier', 0.20),
      buildContract('ab_test_variants', 'A/B-test variants', 'multivariate-copy-builder', 0.25)
    ]
  },
  {
    family_id: 'cashclaw-wordpress',
    name: 'WordPress Optimization',
    category: 'Technical SEO & Web Audits',
    priority: 2,
    default_price_usd: 49,
    sub_capabilities: [
      buildContract('wordpress_seo_config', 'WordPress SEO', 'yoast-rankmath-configurator', 0.25),
      buildContract('plugin_analysis', 'Plugin analysis', 'wp-plugin-audit-tool', 0.20),
      buildContract('theme_analysis', 'Theme analysis', 'wp-theme-auditor', 0.20),
      buildContract('technical_fixes', 'Technical fixes', 'wp-db-optimizer', 0.30),
      buildContract('wp_metadata_opt', 'Metadata optimization', 'wp-cli-runner', 0.20),
      buildContract('sitemap_configuration', 'Sitemap configuration', 'xml-sitemap-generator', 0.15),
      buildContract('robots_configuration', 'Robots configuration', 'robots-editor', 0.10),
      buildContract('broken_link_fixes', 'Broken-link fixes', 'wp-redirect-manager', 0.20),
      buildContract('image_optimization_wp', 'Image optimization', 'imagify-wp-cli', 0.20),
      buildContract('cache_configuration', 'Cache configuration', 'wprocket-configurator', 0.25),
      buildContract('cwv_fixes_wp', 'Core Web Vitals fixes', 'wp-speed-fixer', 0.35),
      buildContract('security_basic_config', 'Security/basic configuration', 'wordfence-configurator', 0.25)
    ]
  },
  {
    family_id: 'cashclaw-backlink-auditor',
    name: 'Backlink Profile & Toxic Link Audit',
    category: 'Technical SEO & Web Audits',
    priority: 2,
    default_price_usd: 39,
    sub_capabilities: [
      buildContract('toxic_backlink_detector', 'Toxic Backlink Detector', 'moz-spam-score-api', 0.30),
      buildContract('disavow_file_builder', 'Disavow File Builder', 'google-disavow-generator', 0.20),
      buildContract('anchor_text_analyzer', 'Anchor Text Distribution Analyzer', 'anchor-text-parser', 0.15)
    ]
  },

  // 🔥 AREA 3: SEO Content & Copywriting (6 Families)
  {
    family_id: 'cashclaw-content-writer',
    name: 'SEO Content',
    category: 'SEO Content & Copywriting',
    priority: 3,
    default_price_usd: 25,
    sub_capabilities: [
      buildContract('kw_research_content', 'Keyword research', 'kw-planner-api', 0.20),
      buildContract('search_intent_content', 'Search-intent analysis', 'llm-intent-analyzer', 0.15),
      buildContract('article_outlines', 'Article outlines', 'llm-outline-generator', 0.20),
      buildContract('long_form_articles', 'Long-form articles', 'llm-claude-3.5-sonnet', 0.50),
      buildContract('blog_posts', 'Blog posts', 'llm-gpt-4o', 0.35),
      buildContract('product_content', 'Product content', 'llm-copy-writer', 0.25),
      buildContract('seo_titles_content', 'SEO titles', 'title-tag-generator', 0.10),
      buildContract('meta_descriptions_content', 'Meta descriptions', 'meta-desc-generator', 0.10),
      buildContract('internal_link_suggestions', 'Internal-link suggestions', 'semantic-link-matcher', 0.20),
      buildContract('content_optimization_qa', 'Content optimization', 'surfer-seo-evaluator', 0.30),
      buildContract('content_refresh', 'Content refresh', 'text-refresh-engine', 0.25),
      buildContract('fact_checking_writer', 'Fact-checking', 'bing-fact-checker', 0.20),
      buildContract('editorial_qa', 'Editorial QA', 'grammarly-api', 0.15)
    ]
  },
  {
    family_id: 'cashclaw-email-outreach',
    name: 'Sales & Email Copy',
    category: 'SEO Content & Copywriting',
    priority: 3,
    default_price_usd: 29,
    sub_capabilities: [
      buildContract('cold_email_research', 'Cold-email research', 'prospect-context-scraper', 0.20),
      buildContract('personalization_engine', 'Personalization', 'llm-personalizer', 0.25),
      buildContract('subject_line_gen', 'Subject-line generation', 'subject-line-evaluator', 0.15),
      buildContract('cold_email_writing', 'Cold-email writing', 'llm-copywriter', 0.30),
      buildContract('followup_sequences', 'Follow-up sequences', 'drip-sequence-builder', 0.25),
      buildContract('sales_sequences', 'Sales sequences', 'sales-cadence-generator', 0.30),
      buildContract('newsletter_copy', 'Newsletter copy', 'newsletter-editor', 0.20),
      buildContract('cta_opt_email', 'CTA optimization', 'cta-button-writer', 0.10),
      buildContract('ab_variants_email', 'A/B variants', 'ab-copy-splitter', 0.20),
      buildContract('lead_segmentation', 'Lead segmentation', 'segment-classifier', 0.15),
      buildContract('outreach_personalization', 'Outreach personalization', 'custom-snippet-generator', 0.20)
    ]
  },
  {
    family_id: 'cashclaw-proposal-generator',
    name: 'Freelance Proposal Engine',
    category: 'SEO Content & Copywriting',
    priority: 3,
    default_price_usd: 29,
    sub_capabilities: [
      buildContract('job_analysis', 'Job analysis', 'nlp-job-parser', 0.15),
      buildContract('requirement_extraction', 'Requirement extraction', 'req-extractor-engine', 0.15),
      buildContract('skill_matching_proposal', 'Skill matching', 'skill-matcher', 0.15),
      buildContract('client_pain_point_id', 'Client pain-point identification', 'llm-painpoint-analyzer', 0.20),
      buildContract('proposal_generation', 'Proposal generation', 'llm-proposal-writer', 0.30),
      buildContract('personalized_opening', 'Personalized opening', 'hook-writer', 0.15),
      buildContract('scope_definition', 'Scope definition', 'sow-builder', 0.20),
      buildContract('pricing_suggestion', 'Pricing suggestion', 'pricing-calculator', 0.10),
      buildContract('delivery_estimate', 'Delivery estimate', 'timeline-estimator', 0.10),
      buildContract('portfolio_positioning', 'Portfolio positioning', 'case-study-matcher', 0.15),
      buildContract('marketplace_formatting', 'Marketplace-specific formatting', 'upwork-fiverr-formatter', 0.15),
      buildContract('bid_quality_scoring', 'Bid quality scoring', 'bid-score-evaluator', 0.10)
    ]
  },
  {
    family_id: 'cashclaw-video-shorts',
    name: 'Short-Form Content',
    category: 'SEO Content & Copywriting',
    priority: 3,
    default_price_usd: 29,
    sub_capabilities: [
      buildContract('yt_shorts_scripts', 'YouTube Shorts scripts', 'llm-scriptwriter', 0.25),
      buildContract('tiktok_scripts', 'TikTok scripts', 'tiktok-viral-scriptwriter', 0.25),
      buildContract('reels_scripts', 'Instagram Reels scripts', 'reels-scriptwriter', 0.25),
      buildContract('hooks_video', 'Hooks', 'viral-hook-generator', 0.15),
      buildContract('storyboards', 'Storyboards', 'visual-prompt-designer', 0.20),
      buildContract('captions_video', 'Captions', 'whisper-caption-generator', 0.20),
      buildContract('titles_video', 'Titles', 'clickthrough-title-writer', 0.10),
      buildContract('descriptions_video', 'Descriptions', 'video-seo-desc-builder', 0.15),
      buildContract('hashtags_video', 'Hashtags', 'hashtag-researcher', 0.10),
      buildContract('content_repurposing', 'Content repurposing', 'long-to-short-repurposer', 0.30),
      buildContract('long_to_short_conv', 'Long-video -> short conversion', 'transcript-summarizer', 0.30)
    ]
  },
  {
    family_id: 'cashclaw-translator',
    name: 'Translation & Localization',
    category: 'SEO Content & Copywriting',
    priority: 3,
    default_price_usd: 25,
    sub_capabilities: [
      buildContract('text_translation', 'Translation', 'deepl-api', 0.20),
      buildContract('tamil_english_conv', 'Tamil <-> English', 'indic-trans-api', 0.25),
      buildContract('multilingual_local', 'Multilingual localization', 'i18n-locales-builder', 0.30),
      buildContract('website_localization', 'Website localization', 'po-mo-file-translator', 0.25),
      buildContract('marketing_localization', 'Marketing localization', 'transcreation-engine', 0.30),
      buildContract('seo_localization', 'SEO localization', 'local-kw-translator', 0.20),
      buildContract('cultural_adaptation', 'Cultural adaptation', 'llm-cultural-editor', 0.25),
      buildContract('subtitle_translation', 'Subtitle translation', 'srt-vtt-translator', 0.20),
      buildContract('document_translation', 'Document translation', 'docx-pdf-translator', 0.25),
      buildContract('terminology_consistency', 'Terminology consistency', 'glossary-checker', 0.15),
      buildContract('translation_qa', 'Translation QA', 'bleu-score-evaluator', 0.15)
    ]
  },
  {
    family_id: 'cashclaw-resume-linkedin',
    name: 'Career & Executive Content',
    category: 'SEO Content & Copywriting',
    priority: 3,
    default_price_usd: 35,
    sub_capabilities: [
      buildContract('resume_creation', 'Resume creation', 'latex-resume-builder', 0.30),
      buildContract('resume_optimization', 'Resume optimization', 'ats-resume-scanner', 0.25),
      buildContract('ats_optimization', 'ATS optimization', 'jobscan-api', 0.25),
      buildContract('jd_matching', 'Job-description matching', 'match-score-analyzer', 0.20),
      buildContract('linkedin_opt', 'LinkedIn profile optimization', 'linkedin-profile-builder', 0.30),
      buildContract('linkedin_headline', 'LinkedIn headline', 'headline-copywriter', 0.15),
      buildContract('linkedin_summary', 'LinkedIn summary', 'about-section-writer', 0.20),
      buildContract('achievement_rewriting', 'Achievement rewriting', 'action-verb-enhancer', 0.15),
      buildContract('cover_letters', 'Cover letters', 'tailored-cover-letter-writer', 0.25),
      buildContract('career_positioning', 'Career positioning', 'executive-narrative-builder', 0.25),
      buildContract('app_customization', 'Application customization', 'application-packager', 0.20)
    ]
  },

  // 🔥 AREA 4: Python Automation & Development (6 Families)
  {
    family_id: 'cashclaw-python-automation',
    name: 'Python Automation',
    category: 'Python Automation & Development',
    priority: 4,
    default_price_usd: 39,
    sub_capabilities: [
      buildContract('python_scripts', 'Python scripts', 'python3-executor', 0.35),
      buildContract('data_processing_scripts', 'Data-processing scripts', 'pandas-engine', 0.30),
      buildContract('file_automation', 'File automation', 'os-file-manager', 0.20),
      buildContract('csv_automation', 'CSV automation', 'csv-processor', 0.15),
      buildContract('excel_automation', 'Excel automation', 'openpyxl-runner', 0.25),
      buildContract('web_automation', 'Web automation', 'playwright-driver', 0.40),
      buildContract('browser_automation', 'Browser automation', 'selenium-driver', 0.40),
      buildContract('api_automation', 'API automation', 'axios-http-client', 0.20),
      buildContract('scheduled_scripts', 'Scheduled scripts', 'cron-scheduler', 0.15),
      buildContract('cli_tools', 'CLI tools', 'argparse-cli-builder', 0.25),
      buildContract('workflow_automation', 'Workflow automation', 'airflow-task-runner', 0.35),
      buildContract('python_debugging', 'Debugging', 'python-pdb-analyzer', 0.20)
    ]
  },
  {
    family_id: 'cashclaw-api-integrator',
    name: 'API & Integration',
    category: 'Python Automation & Development',
    priority: 4,
    default_price_usd: 49,
    sub_capabilities: [
      buildContract('rest_apis', 'REST APIs', 'express-router-builder', 0.30),
      buildContract('graphql_integration', 'GraphQL', 'apollo-client-builder', 0.35),
      buildContract('webhooks_handling', 'Webhooks', 'webhook-listener', 0.25),
      buildContract('auth_implementation', 'Authentication', 'jwt-passport-builder', 0.30),
      buildContract('oauth_implementation', 'OAuth', 'oauth2-client', 0.35),
      buildContract('api_data_extraction', 'API data extraction', 'rest-fetcher', 0.20),
      buildContract('api_to_api_integration', 'API-to-API integration', 'zapier-n8n-bridge', 0.40),
      buildContract('json_transformation', 'JSON transformation', 'jq-json-transformer', 0.15),
      buildContract('rate_limit_handling', 'Rate-limit handling', 'bottleneck-limiter', 0.20),
      buildContract('error_handling_api', 'Error handling', 'circuit-breaker', 0.20),
      buildContract('integration_testing', 'Integration testing', 'supertest-runner', 0.25),
      buildContract('api_documentation', 'Documentation', 'swagger-openapi-generator', 0.25)
    ]
  },
  {
    family_id: 'cashclaw-qa-tester',
    name: 'QA & Testing',
    category: 'Python Automation & Development',
    priority: 4,
    default_price_usd: 29,
    sub_capabilities: [
      buildContract('website_testing', 'Website testing', 'playwright-test-runner', 0.30),
      buildContract('api_testing', 'API testing', 'postman-newman-cli', 0.25),
      buildContract('functional_testing', 'Functional testing', 'jest-runner', 0.25),
      buildContract('regression_testing', 'Regression testing', 'cypress-runner', 0.35),
      buildContract('ui_testing', 'UI testing', 'appium-ui-tester', 0.35),
      buildContract('mobile_testing', 'Mobile testing', 'browserstack-api', 0.40),
      buildContract('browser_testing', 'Browser testing', 'saucelabs-runner', 0.35),
      buildContract('bug_reproduction', 'Bug reproduction', 'error-log-parser', 0.20),
      buildContract('bug_classification', 'Bug classification', 'severity-classifier', 0.15),
      buildContract('test_case_generation', 'Test-case generation', 'llm-testcase-writer', 0.25),
      buildContract('automated_tests', 'Automated tests', 'ci-test-runner', 0.30),
      buildContract('qa_reports', 'QA reports', 'allure-report-generator', 0.25)
    ]
  },
  {
    family_id: 'cashclaw-data-analyst',
    name: 'Data Analysis',
    category: 'Python Automation & Development',
    priority: 4,
    default_price_usd: 39,
    sub_capabilities: [
      buildContract('data_cleaning_analyst', 'Data cleaning', 'pandas-cleaner-engine', 0.20),
      buildContract('exploratory_analysis', 'Exploratory analysis', 'ydata-profiling', 0.30),
      buildContract('statistical_analysis', 'Statistical analysis', 'scipy-stats-runner', 0.30),
      buildContract('kpi_analysis', 'KPI analysis', 'kpi-metric-calculator', 0.20),
      buildContract('trend_analysis', 'Trend analysis', 'statsmodels-trend-analyzer', 0.25),
      buildContract('forecasting', 'Forecasting', 'prophet-forecaster', 0.40),
      buildContract('excel_analysis', 'Excel analysis', 'openpyxl-formula-runner', 0.25),
      buildContract('csv_analysis', 'CSV analysis', 'duckdb-csv-query', 0.20),
      buildContract('pandas_analysis', 'Python/Pandas analysis', 'pandas-code-runner', 0.30),
      buildContract('chart_generation', 'Chart generation', 'matplotlib-seaborn-generator', 0.25),
      buildContract('business_insights', 'Business insights', 'llm-insight-generator', 0.25),
      buildContract('automated_reports_data', 'Automated reports', 'html-report-exporter', 0.25)
    ]
  },
  {
    family_id: 'cashclaw-core',
    name: 'Mission Orchestration',
    category: 'Python Automation & Development',
    priority: 4,
    default_price_usd: 19,
    sub_capabilities: [
      buildContract('job_intake', 'Job intake', 'webhook-intake-listener', 0.10),
      buildContract('requirement_extraction_core', 'Requirement extraction', 'nlp-req-parser', 0.15),
      buildContract('skill_selection', 'Skill selection', 'family-matcher-engine', 0.10),
      buildContract('sub_skill_selection', 'Sub-skill selection', 'capability-decomposer', 0.15),
      buildContract('agent_assignment', 'Agent assignment', 'agent-router', 0.10),
      buildContract('workflow_planning', 'Workflow planning', 'graph-dag-planner', 0.20),
      buildContract('multi_agent_delegation', 'Multi-agent delegation', 'subagent-dispatcher', 0.25),
      buildContract('job_state_management', 'Job state management', 'state-machine-runner', 0.10),
      buildContract('deliverable_tracking', 'Deliverable tracking', 'artifact-tracker', 0.10),
      buildContract('retry_handling', 'Retry handling', 'exponential-backoff-retry', 0.10),
      buildContract('completion_verification', 'Completion verification', 'qa-validator', 0.15)
    ]
  },
  {
    family_id: 'cashclaw-guard',
    name: 'Agent Security & Cost Control',
    category: 'Python Automation & Development',
    priority: 4,
    default_price_usd: 19,
    sub_capabilities: [
      buildContract('token_budget_control', 'Token-budget control', 'token-counter', 0.05),
      buildContract('api_cost_limits', 'API-cost limits', 'cost-budget-guard', 0.05),
      buildContract('recursion_detection', 'Recursion detection', 'depth-limit-checker', 0.05),
      buildContract('tool_permissions', 'Tool permissions', 'acl-permission-guard', 0.05),
      buildContract('rate_limiting_guard', 'Rate limiting', 'token-bucket-limiter', 0.05),
      buildContract('dangerous_tool_blocking', 'Dangerous-tool blocking', 'security-blacklister', 0.05),
      buildContract('agent_kill_switch', 'Agent kill switch', 'process-killer', 0.05),
      buildContract('audit_logs', 'Audit logs', 'jsonl-audit-logger', 0.05),
      buildContract('failure_detection', 'Failure detection', 'exception-monitor', 0.05),
      buildContract('telegram_alerts', 'Telegram alerts', 'telegram-notifier', 0.10),
      buildContract('spending_protection', 'Spending protection', 'hard-cap-enforcer', 0.05)
    ]
  },

  // 🔥 AREA 5: AI Chatbots & Customer Support (4 Families)
  {
    family_id: 'cashclaw-customer-support',
    name: 'AI Customer Support',
    category: 'AI Chatbots & Customer Support',
    priority: 5,
    default_price_usd: 49,
    sub_capabilities: [
      buildContract('faq_chatbot', 'FAQ chatbot', 'rag-vector-search', 0.30),
      buildContract('ticket_classification', 'Ticket classification', 'zero-shot-classifier', 0.15),
      buildContract('ticket_routing', 'Ticket routing', 'rule-engine-router', 0.10),
      buildContract('response_generation', 'Response generation', 'llm-gpt-4o', 0.25),
      buildContract('knowledge_base_answers', 'Knowledge-base answers', 'qdrant-vector-db', 0.25),
      buildContract('customer_sentiment', 'Customer sentiment', 'vader-sentiment-tool', 0.10),
      buildContract('escalation_detection', 'Escalation detection', 'urgency-detector', 0.15),
      buildContract('support_summarization', 'Support summarization', 'llm-summarizer', 0.20),
      buildContract('email_support', 'Email support', 'nodemailer-smtp', 0.20),
      buildContract('chat_support', 'Chat support', 'websocket-relay', 0.25),
      buildContract('support_analytics', 'Support analytics', 'chartjs-exporter', 0.20)
    ]
  },
  {
    family_id: 'cashclaw-whatsapp-manager',
    name: 'WhatsApp Business',
    category: 'AI Chatbots & Customer Support',
    priority: 5,
    default_price_usd: 49,
    sub_capabilities: [
      buildContract('auto_responses', 'Auto-responses', 'whatsapp-cloud-api', 0.25),
      buildContract('faq_automation_wa', 'FAQ automation', 'dialogflow-cx-bridge', 0.30),
      buildContract('lead_qual_wa', 'Lead qualification', 'conversation-qualifier', 0.20),
      buildContract('appointment_handling', 'Appointment handling', 'calendly-api', 0.25),
      buildContract('customer_follow_up', 'Customer follow-up', 'scheduled-whatsapp-sender', 0.20),
      buildContract('message_templates', 'Message templates', 'meta-template-validator', 0.15),
      buildContract('campaign_workflows', 'Campaign workflows', 'broadcast-sequence-runner', 0.30),
      buildContract('conversation_routing', 'Conversation routing', 'live-agent-handoff', 0.20),
      buildContract('customer_segmentation_wa', 'Customer segmentation', 'tag-manager', 0.15),
      buildContract('human_escalation', 'Human escalation', 'slack-alert-bridge', 0.15)
    ]
  },
  {
    family_id: 'cashclaw-prompt-engineer',
    name: 'AI Workflow Engineering',
    category: 'AI Chatbots & Customer Support',
    priority: 5,
    default_price_usd: 39,
    sub_capabilities: [
      buildContract('system_prompts', 'System prompts', 'prompt-template-builder', 0.20),
      buildContract('agent_prompts', 'Agent prompts', 'multiagent-prompt-architect', 0.25),
      buildContract('prompt_optimization', 'Prompt optimization', 'dspy-prompt-optimizer', 0.35),
      buildContract('structured_output_prompts', 'Structured-output prompts', 'json-schema-prompt-enforcer', 0.20),
      buildContract('tool_use_prompts', 'Tool-use prompts', 'function-calling-prompt-builder', 0.25),
      buildContract('rag_prompts', 'RAG prompts', 'retrieval-context-injector', 0.25),
      buildContract('evaluation_prompts', 'Evaluation prompts', 'llm-as-a-judge', 0.30),
      buildContract('model_comparison', 'Model comparison', 'omniroute-benchmark-runner', 0.35),
      buildContract('ai_workflow_design', 'AI workflow design', 'langchain-flow-builder', 0.40),
      buildContract('prompt_testing', 'Prompt testing', 'promptfoo-evaluator', 0.25),
      buildContract('guardrail_design', 'Guardrail design', 'nemo-guardrails-builder', 0.30)
    ]
  },
  {
    family_id: 'cashclaw-image-processor',
    name: 'Image & Creative Assets',
    category: 'AI Chatbots & Customer Support',
    priority: 5,
    default_price_usd: 25,
    sub_capabilities: [
      buildContract('image_resizing', 'Image resizing', 'sharp-resizer', 0.10),
      buildContract('compression', 'Compression', 'tinypng-api', 0.10),
      buildContract('format_conversion', 'Format conversion', 'sharp-converter', 0.10),
      buildContract('background_removal', 'Background removal', 'removebg-api', 0.20),
      buildContract('image_enhancement', 'Image enhancement', 'replicate-upscaler', 0.30),
      buildContract('thumbnail_creation', 'Thumbnail creation', 'canva-api-builder', 0.25),
      buildContract('banner_creation', 'Banner creation', 'svg-banner-generator', 0.25),
      buildContract('social_graphics', 'Social graphics', 'html2canvas-exporter', 0.20),
      buildContract('product_image_opt', 'Product-image optimization', 'ecommerce-image-pipeline', 0.25),
      buildContract('creative_variations', 'Basic creative variations', 'midjourney-dalle-bridge', 0.40)
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

  for (const family of SKILL_FAMILIES_V3) {
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
    requiredFamilies.add(SKILL_FAMILIES_V3[0].family_id);
    const defaultSub = SKILL_FAMILIES_V3[0].sub_capabilities[0];
    activeSubCapabilities.push({
      family: SKILL_FAMILIES_V3[0].family_id,
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
