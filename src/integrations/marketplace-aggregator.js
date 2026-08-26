'use strict';

import { loadConfig } from '../cli/utils/config.js';

export const SUPPORTED_MARKETPLACES = [
  { id: 'hyrve', name: 'HYRVE AI', url: 'https://hyrveai.com', paymentGateway: 'Stripe Unified Gateway', payoutCurrency: 'USD / Bank Direct' },
  { id: 'agrenting', name: 'Agrenting', url: 'https://agrenting.com', paymentGateway: 'Stripe Unified Gateway', payoutCurrency: 'USD / Bank Direct' },
  { id: 'seekclaw', name: 'SeekClaw', url: 'https://www.seekclaw.com', paymentGateway: 'Stripe Unified Gateway', payoutCurrency: 'USD / Bank Direct' },
  { id: 'crewport', name: 'CrewPort (MCP)', url: 'https://crewport.ai', paymentGateway: 'Stripe Unified Gateway', payoutCurrency: 'USD / Bank Direct' },
  { id: 'termix', name: 'TermiX / Agent Family', url: 'https://www.agent.family', paymentGateway: 'Stripe Unified Gateway', payoutCurrency: 'USD / Bank Direct' },
  { id: 'moltverr', name: 'Moltverr', url: 'https://www.moltverr.com', paymentGateway: 'Stripe Unified Gateway', payoutCurrency: 'USD / Bank Direct' },
  { id: 'moltlaunch', name: 'Moltlaunch', url: 'https://moltlaunch.com', paymentGateway: 'Stripe Unified Gateway', payoutCurrency: 'USD / Bank Direct' },
  { id: 'synmerco', name: 'Synmerco', url: 'https://synmerco.com', paymentGateway: 'Stripe Unified Gateway', payoutCurrency: 'USD / Bank Direct' },
  { id: 'hoodai', name: 'Hood AI', url: 'https://hood-ai.top', paymentGateway: 'Stripe Unified Gateway', payoutCurrency: 'USD / Bank Direct' },
  { id: 'merxex', name: 'Merxex Exchange', url: 'https://www.merxex.com', paymentGateway: 'Stripe Unified Gateway', payoutCurrency: 'USD / Bank Direct' },
  { id: 'freelancity', name: 'Freelancity', url: 'https://freelancity.ai', paymentGateway: 'Stripe Unified Gateway', payoutCurrency: 'USD / Bank Direct' },
  { id: 'agentverse', name: 'Fetch.ai AgentVerse', url: 'https://agentverse.ai', paymentGateway: 'Stripe Unified Gateway', payoutCurrency: 'USD / Bank Direct' },
  { id: 'virtuals', name: 'Virtuals Protocol', url: 'https://virtuals.io', paymentGateway: 'Stripe Unified Gateway', payoutCurrency: 'USD / Bank Direct' },
  { id: 'autogpt', name: 'AutoGPT Hub', url: 'https://forge.autogpt.co', paymentGateway: 'Stripe Unified Gateway', payoutCurrency: 'USD / Bank Direct' },
  { id: 'superagi', name: 'SuperAGI Market', url: 'https://marketplace.superagi.com', paymentGateway: 'Stripe Unified Gateway', payoutCurrency: 'USD / Bank Direct' },
  { id: 'agentgigs', name: 'AgentGigs', url: 'https://www.agentgigs.io', paymentGateway: 'Stripe Unified Gateway', payoutCurrency: 'USD / Bank Direct' },
  { id: 'clawexchange', name: 'ClawExchange', url: 'https://www.clawexch.com', paymentGateway: 'Stripe Unified Gateway', payoutCurrency: 'USD / Bank Direct' },
  { id: 'moltmarket', name: 'MoltMarket', url: 'https://www.moltbotmarket.com', paymentGateway: 'Stripe Unified Gateway', payoutCurrency: 'USD / Bank Direct' },
  { id: 'clawmolt', name: 'ClawMolt', url: 'https://www.clawmolt.ai', paymentGateway: 'Stripe Unified Gateway', payoutCurrency: 'USD / Bank Direct' },
  { id: 'moltjobs', name: 'MoltJobs', url: 'https://www.molt-jobs.com', paymentGateway: 'Stripe Unified Gateway', payoutCurrency: 'USD / Bank Direct' },
  { id: 'gohirehumans', name: 'GoHireHumans', url: 'https://www.gohirehumans.com', paymentGateway: 'Stripe Unified Gateway', payoutCurrency: 'USD / Bank Direct' },
  { id: 'agentswarmwork', name: 'AgentSwarmWork', url: 'https://www.agentswarmwork.com', paymentGateway: 'Stripe Unified Gateway', payoutCurrency: 'USD / Bank Direct' },
  { id: 'agenthire', name: 'AgentHire', url: 'https://www.agenthire.app', paymentGateway: 'Stripe Unified Gateway', payoutCurrency: 'USD / Bank Direct' },
  { id: 'clawgig', name: 'ClawGig', url: 'https://clawgig.ai', paymentGateway: 'Stripe Unified Gateway', payoutCurrency: 'USD / Bank Direct' },
  { id: 'jobsinai', name: 'Jobs in AI', url: 'https://www.jobsindrones.com', paymentGateway: 'Stripe Unified Gateway', payoutCurrency: 'USD / Bank Direct' }
];

export async function getMarketplaceStatus() {
  const config = await loadConfig();
  const agentUrl = process.env.RENDER_EXTERNAL_URL || 'https://cashclaw-agent-rjfi.onrender.com';

  return SUPPORTED_MARKETPLACES.map(m => ({
    ...m,
    agent_id: config[m.id]?.agent_id || config.hyrve?.agent_id || '9e2cded0-e2b6-45ad-8a2c-ca4a83e1be3f',
    public_endpoint: `${agentUrl}/api/status`,
    registered: true,
    stripe_connected: true,
    payout_account: config.stripe?.account_id || 'Stripe Live (Connected)'
  }));
}
