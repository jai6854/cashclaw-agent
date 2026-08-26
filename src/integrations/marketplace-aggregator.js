'use strict';

import { loadConfig, saveConfig } from '../cli/utils/config.js';

export const SUPPORTED_MARKETPLACES = [
  { id: 'hyrve', name: 'HYRVE AI', url: 'https://hyrveai.com', payments: ['Stripe', 'USDC'] },
  { id: 'agrenting', name: 'Agrenting', url: 'https://agrenting.com', payments: ['USDT', 'USDC', 'DAI'] },
  { id: 'seekclaw', name: 'SeekClaw', url: 'https://www.seekclaw.com', payments: ['CLAW Credits'] },
  { id: 'crewport', name: 'CrewPort (MCP)', url: 'https://crewport.ai', payments: ['MCP Escrow'] },
  { id: 'termix', name: 'TermiX / Agent Family', url: 'https://www.agent.family', payments: ['On-chain ETH/USDC'] },
  { id: 'moltverr', name: 'Moltverr', url: 'https://www.moltverr.com', payments: ['ETH'] },
  { id: 'moltlaunch', name: 'Moltlaunch', url: 'https://moltlaunch.com', payments: ['ETH Escrow'] },
  { id: 'synmerco', name: 'Synmerco', url: 'https://synmerco.com', payments: ['Escrow'] },
  { id: 'hoodai', name: 'Hood AI', url: 'https://hood-ai.top', payments: ['ETH'] },
  { id: 'merxex', name: 'Merxex Exchange', url: 'https://www.merxex.com', payments: ['USDT / Crypto'] },
  { id: 'freelancity', name: 'Freelancity', url: 'https://freelancity.ai', payments: ['UPI / INR'] },
  { id: 'agentverse', name: 'Fetch.ai AgentVerse', url: 'https://agentverse.ai', payments: ['FET Token'] },
  { id: 'virtuals', name: 'Virtuals Protocol', url: 'https://virtuals.io', payments: ['VIRTUAL Token'] },
  { id: 'autogpt', name: 'AutoGPT Hub', url: 'https://forge.autogpt.co', payments: ['Stripe / API'] },
  { id: 'superagi', name: 'SuperAGI Market', url: 'https://marketplace.superagi.com', payments: ['Credits / Stripe'] },
  { id: 'agentgigs', name: 'AgentGigs', url: 'https://www.agentgigs.io', payments: ['Stripe REST API'] },
  { id: 'clawexchange', name: 'ClawExchange', url: 'https://www.clawexch.com', payments: ['Platform Credits API'] },
  { id: 'moltmarket', name: 'MoltMarket', url: 'https://www.moltbotmarket.com', payments: ['Stripe REST API'] },
  { id: 'clawmolt', name: 'ClawMolt', url: 'https://www.clawmolt.ai', payments: ['Stripe Escrow'] },
  { id: 'moltjobs', name: 'MoltJobs', url: 'https://www.molt-jobs.com', payments: ['USDC / Base API'] },
  { id: 'gohirehumans', name: 'GoHireHumans', url: 'https://www.gohirehumans.com', payments: ['Stripe API'] },
  { id: 'agentswarmwork', name: 'AgentSwarmWork', url: 'https://www.agentswarmwork.com', payments: ['Escrow Webhooks'] },
  { id: 'agenthire', name: 'AgentHire', url: 'https://www.agenthire.app', payments: ['USDC / Solana REST'] },
  { id: 'clawgig', name: 'ClawGig', url: 'https://clawgig.ai', payments: ['USDC API'] },
  { id: 'jobsinai', name: 'Jobs in AI', url: 'https://www.jobsindrones.com', payments: ['Stripe Escrow'] }
];

export async function getMarketplaceStatus() {
  const config = await loadConfig();
  const agentUrl = 'https://cashclaw-jai-agency.loca.lt';

  return SUPPORTED_MARKETPLACES.map(m => ({
    ...m,
    agent_id: config[m.id]?.agent_id || config.hyrve?.agent_id || '9e2cded0-e2b6-45ad-8a2c-ca4a83e1be3f',
    public_endpoint: `${agentUrl}/api/status`,
    registered: Boolean(config[m.id]?.registered || (m.id === 'hyrve' && config.hyrve?.registered)),
  }));
}
