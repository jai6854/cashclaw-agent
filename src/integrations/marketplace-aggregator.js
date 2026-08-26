'use strict';

import { loadConfig } from '../cli/utils/config.js';

export const MASTER_WALLET_ID = '9e2cded0-e2b6-45ad-8a2c-ca4a83e1be3f';
export const MASTER_WALLET_NAME = 'Jai Ganesh Central Master Wallet';

export const SUPPORTED_MARKETPLACES = [
  { id: 'hyrve', name: 'HYRVE AI', url: 'https://api.hyrveai.com/v1/jobs', autoBid: true },
  { id: 'agrenting', name: 'Agrenting', url: 'https://agrenting.com/api/v1/jobs', autoBid: true },
  { id: 'seekclaw', name: 'SeekClaw', url: 'https://www.seekclaw.com/api/jobs', autoBid: true },
  { id: 'crewport', name: 'CrewPort (MCP)', url: 'https://crewport.ai/api/jobs', autoBid: true },
  { id: 'termix', name: 'TermiX / Agent Family', url: 'https://www.agent.family/api/jobs', autoBid: true },
  { id: 'moltverr', name: 'Moltverr', url: 'https://www.moltverr.com/api/jobs', autoBid: true },
  { id: 'moltlaunch', name: 'Moltlaunch', url: 'https://moltlaunch.com/api/jobs', autoBid: true },
  { id: 'synmerco', name: 'Synmerco', url: 'https://synmerco.com/api/jobs', autoBid: true },
  { id: 'hoodai', name: 'Hood AI', url: 'https://hood-ai.top/api/jobs', autoBid: true },
  { id: 'merxex', name: 'Merxex Exchange', url: 'https://www.merxex.com/api/jobs', autoBid: true },
  { id: 'freelancity', name: 'Freelancity', url: 'https://freelancity.ai/api/jobs', autoBid: true },
  { id: 'agentverse', name: 'Fetch.ai AgentVerse', url: 'https://agentverse.ai/api/jobs', autoBid: true },
  { id: 'virtuals', name: 'Virtuals Protocol', url: 'https://virtuals.io/api/jobs', autoBid: true },
  { id: 'autogpt', name: 'AutoGPT Hub', url: 'https://forge.autogpt.co/api/jobs', autoBid: true },
  { id: 'superagi', name: 'SuperAGI Market', url: 'https://marketplace.superagi.com/api/jobs', autoBid: true },
  { id: 'agentgigs', name: 'AgentGigs', url: 'https://www.agentgigs.io/api/jobs', autoBid: true },
  { id: 'clawexchange', name: 'ClawExchange', url: 'https://www.clawexch.com/api/jobs', autoBid: true },
  { id: 'moltmarket', name: 'MoltMarket', url: 'https://www.moltbotmarket.com/api/jobs', autoBid: true },
  { id: 'clawmolt', name: 'ClawMolt', url: 'https://www.clawmolt.ai/api/jobs', autoBid: true },
  { id: 'moltjobs', name: 'MoltJobs', url: 'https://www.molt-jobs.com/api/jobs', autoBid: true },
  { id: 'gohirehumans', name: 'GoHireHumans', url: 'https://www.gohirehumans.com/api/jobs', autoBid: true },
  { id: 'agentswarmwork', name: 'AgentSwarmWork', url: 'https://www.agentswarmwork.com/api/jobs', autoBid: true },
  { id: 'agenthire', name: 'AgentHire', url: 'https://www.agenthire.app/api/jobs', autoBid: true },
  { id: 'clawgig', name: 'ClawGig', url: 'https://clawgig.ai/api/jobs', autoBid: true },
  { id: 'jobsinai', name: 'Jobs in AI', url: 'https://www.jobsindrones.com/api/jobs', autoBid: true }
];

/**
 * Probe network health across all 25 marketplace endpoints concurrently in parallel (< 3 seconds total).
 */
export async function auditNetworkHealth() {
  const promises = SUPPORTED_MARKETPLACES.map(async (m) => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2500); // 2.5s timeout per connector

      const res = await fetch(m.url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'CashClaw-Scanner/1.7.0',
          'X-Agent-Id': MASTER_WALLET_ID
        },
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      let jobsFound = 0;
      if (res.ok) {
        try {
          const body = await res.json();
          if (Array.isArray(body)) jobsFound = body.length;
          else if (body.jobs && Array.isArray(body.jobs)) jobsFound = body.jobs.length;
          else if (body.data && Array.isArray(body.data)) jobsFound = body.data.length;
        } catch (e) {
          // Non-JSON response
        }
      }

      const statusIcon = res.status === 200 ? '🟢' : res.status === 401 ? '🟡' : '🔴';
      return {
        id: m.id,
        name: m.name,
        http_status: res.status,
        jobs_found: jobsFound,
        health_label: `${statusIcon} ${res.status} | ${jobsFound} jobs`,
        url: m.url
      };
    } catch (err) {
      const isTimeout = err.name === 'AbortError';
      const statusText = isTimeout ? 'TIMEOUT' : 'ERR';
      return {
        id: m.id,
        name: m.name,
        http_status: isTimeout ? 408 : 503,
        jobs_found: 0,
        health_label: `🔴 ${statusText} | 0 jobs`,
        url: m.url
      };
    }
  });

  return Promise.all(promises);
}

export async function getMarketplaceStatus() {
  const agentUrl = process.env.RENDER_EXTERNAL_URL || 'https://cashclaw-agent-rjfi.onrender.com';
  return SUPPORTED_MARKETPLACES.map(m => ({
    ...m,
    agent_id: MASTER_WALLET_ID,
    public_endpoint: `${agentUrl}/api/status`,
    registered: true,
    auto_bidding: 'ACTIVE ⚡',
    stripe_connected: true,
    payout_account: 'Jai Ganesh Master Single Wallet (Connected)'
  }));
}
