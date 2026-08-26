import fs from 'fs-extra';
import path from 'path';
import { loadConfig, saveConfig } from '../cli/utils/config.js';

const DEFAULT_OMNIROUTE_URL = 'http://localhost:8000/v1';

export const DEFAULT_MODEL_MAPPING = {
  seo_audit: 'gpt-4o',
  content_writing: 'gpt-4o',
  lead_generation: 'gpt-4o-mini',
  data_scraping: 'deepseek-chat',
  competitor_analysis: 'gemini-1.5-pro',
  social_media: 'gpt-4o-mini',
  email_outreach: 'gpt-4o-mini',
  reputation_management: 'gpt-4o-mini',
  whatsapp_management: 'gpt-4o-mini',
  landing_page: 'gpt-4o',
  default: 'gpt-4o-mini',
};

/**
 * Configure OmniRoute settings in CashClaw config.
 */
export async function connectOmniRoute({ url = DEFAULT_OMNIROUTE_URL, apiKey = '', models = {} }) {
  const config = (await loadConfig()) || {};

  config.omniroute = {
    enabled: true,
    base_url: url.replace(/\/$/, ''),
    api_key: apiKey,
    models: { ...DEFAULT_MODEL_MAPPING, ...models },
    connected_at: new Date().toISOString(),
  };

  await saveConfig(config);

  // Apply to environment variables for current process
  applyOmniRouteEnv(config.omniroute);

  return config.omniroute;
}

/**
 * Disconnect OmniRoute integration.
 */
export async function disconnectOmniRoute() {
  const config = (await loadConfig()) || {};
  if (config.omniroute) {
    config.omniroute.enabled = false;
    await saveConfig(config);
  }

  delete process.env.OPENAI_BASE_URL;
  return true;
}

/**
 * Apply OmniRoute environment variables to the active Node runtime.
 */
export function applyOmniRouteEnv(omnirouteConfig) {
  if (!omnirouteConfig || !omnirouteConfig.enabled) return;

  if (omnirouteConfig.base_url) {
    process.env.OPENAI_BASE_URL = omnirouteConfig.base_url;
  }
  if (omnirouteConfig.api_key) {
    process.env.OPENAI_API_KEY = omnirouteConfig.api_key;
  }
}

/**
 * Get the target model for a given CashClaw service type.
 */
export async function getModelForService(serviceType) {
  const config = await loadConfig();
  const models = config?.omniroute?.models || DEFAULT_MODEL_MAPPING;
  return models[serviceType] || models.default || 'gpt-4o-mini';
}

/**
 * Test connectivity to the OmniRoute proxy server.
 */
export async function testOmniRouteConnection(baseUrl = DEFAULT_OMNIROUTE_URL, apiKey = '') {
  const targetUrl = `${baseUrl.replace(/\/$/, '')}/models`;
  const headers = {};
  if (apiKey) {
    headers['Authorization'] = `Bearer ${apiKey}`;
  }

  try {
    const response = await fetch(targetUrl, { method: 'GET', headers });
    if (response.ok) {
      const data = await response.json();
      return {
        success: true,
        status: response.status,
        models_count: Array.isArray(data?.data) ? data.data.length : 0,
        models: Array.isArray(data?.data) ? data.data.map(m => m.id) : [],
      };
    } else {
      return {
        success: false,
        status: response.status,
        error: `HTTP ${response.status}: ${response.statusText}`,
      };
    }
  } catch (err) {
    return {
      success: false,
      error: err.message,
    };
  }
}
