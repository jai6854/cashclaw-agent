import fs from 'fs-extra';
import path from 'path';
import os from 'os';

/**
 * Returns the path to the CashClaw config directory: ~/.cashclaw/
 */
export function getConfigDir() {
  return path.join(os.homedir(), '.cashclaw');
}

/**
 * Returns the path to the main config file: ~/.cashclaw/config.json
 */
export function getConfigPath() {
  return path.join(getConfigDir(), 'config.json');
}

/**
 * Ensures ~/.cashclaw/ and its subdirectories exist.
 */
export async function ensureConfigDir() {
  const configDir = getConfigDir();
  await fs.ensureDir(configDir);
  await fs.ensureDir(path.join(configDir, 'missions'));
  return configDir;
}

/**
 * Returns the full default configuration with active setup and pricing.
 */
export function getDefaultConfig() {
  return {
    agent: {
      name: 'CashClawAgent',
      owner: 'Jai Ganesh',
      email: 'jai6854@gmail.com',
      currency: 'USD',
      country: 'IN',
      payout_currency: 'INR',
      export_purpose_code: 'P0802',
      created_at: new Date().toISOString(),
    },
    stripe: {
      secret_key: process.env.STRIPE_SECRET_KEY || '',
      publishable_key: process.env.STRIPE_PUBLISHABLE_KEY || '',
      connected: true,
      mode: 'live',
      account_country: 'IN',
      payout_currency: 'INR',
      export_purpose_code: 'P0802'
    },
    server: {
      port: process.env.PORT ? parseInt(process.env.PORT) : 3847,
      host: '0.0.0.0',
    },
    services: {
      seo_audit: {
        enabled: true,
        pricing: { basic: 9, standard: 29, pro: 59 },
        description: 'Automated SEO audits with actionable recommendations',
      },
      content_writing: {
        enabled: true,
        pricing: { post_500: 5, post_1500: 12, newsletter: 9 },
        description: 'AI-powered blog posts, articles, and newsletters',
      },
      lead_generation: {
        enabled: true,
        pricing: { starter_25: 9, standard_50: 15, pro_100: 25 },
        description: 'Targeted lead lists with contact info and scoring',
      },
      whatsapp_management: {
        enabled: true,
        pricing: { setup: 19, monthly: 49 },
        description: 'WhatsApp Business setup and automated responses',
      },
      social_media: {
        enabled: true,
        pricing: { weekly_1: 9, weekly_3: 19, monthly_full: 49 },
        description: 'Social media content creation and scheduling',
      },
      email_outreach: {
        enabled: true,
        pricing: { basic: 9, standard: 19, pro: 29 },
        description: 'Cold email sequences and outreach campaigns',
      },
      competitor_analysis: {
        enabled: true,
        pricing: { basic: 19, standard: 35, pro: 49 },
        description: 'Competitor analysis reports with market insights',
      },
      landing_page: {
        enabled: true,
        pricing: { basic: 15, standard: 29, pro: 39 },
        description: 'Landing page copy and HTML generation',
      },
      data_scraping: {
        enabled: true,
        pricing: { basic: 9, standard: 19, pro: 25 },
        description: 'Web data extraction and structuring',
      },
      reputation_management: {
        enabled: true,
        pricing: { basic: 19, standard: 35, pro: 49 },
        description: 'Online review monitoring and response',
      },
    },
    hyrve: {
      api_key: 'hk_live_9e2cded0_e2b6_45ad_8a2c_ca4a83e1be3f',
      agent_id: '9e2cded0-e2b6-45ad-8a2c-ca4a83e1be3f',
      dashboard_url: 'https://app.hyrveai.com',
      api_url: 'https://api.hyrveai.com/v1',
      enabled: true,
      registered: true,
    },
    omniroute: {
      api_key: process.env.OPENROUTER_API_KEY || '',
      connected: true,
    },
    openclaw: {
      workspace: '',
      skills_dir: '',
      auto_detected: true,
    },
    heartbeat: {
      enabled: true,
      interval_ms: 60000,
    },
    stats: {
      total_missions: 14,
      completed_missions: 14,
      total_earned: 329.00,
    },
  };
}

/**
 * Loads config from ~/.cashclaw/config.json.
 * Returns default config if file does not exist.
 */
export async function loadConfig() {
  const configPath = getConfigPath();
  try {
    const exists = await fs.pathExists(configPath);
    if (!exists) {
      const defaults = getDefaultConfig();
      await ensureConfigDir();
      await saveConfig(defaults);
      return defaults;
    }
    const raw = await fs.readFile(configPath, 'utf-8');
    const loaded = JSON.parse(raw);
    const defaults = getDefaultConfig();

    return deepMerge(defaults, loaded);
  } catch (err) {
    return getDefaultConfig();
  }
}

/**
 * Saves config to ~/.cashclaw/config.json.
 */
export async function saveConfig(config) {
  await ensureConfigDir();
  const configPath = getConfigPath();
  await fs.writeJson(configPath, config, { spaces: 2 });
}

/**
 * Simple deep merge utility.
 */
function deepMerge(target, source) {
  const output = { ...target };
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = deepMerge(target[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
}

function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}
