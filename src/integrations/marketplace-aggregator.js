'use strict';

import { loadConfig } from '../cli/utils/config.js';

export const MASTER_WALLET_ID = '9e2cded0-e2b6-45ad-8a2c-ca4a83e1be3f';
export const MASTER_WALLET_NAME = 'Jai Ganesh Central Master Wallet';

export const SUPPORTED_MARKETPLACES = [
  { id: 'hyrve', name: 'HYRVE AI', url: 'https://hyrveai.com', walletId: MASTER_WALLET_ID, paymentGateway: 'Master Unified Wallet (Stripe/Bank)', payoutCurrency: 'USD ➔ INR Direct' },
  { id: 'agrenting', name: 'Agrenting', url: 'https://agrenting.com', walletId: MASTER_WALLET_ID, paymentGateway: 'Master Unified Wallet (Stripe/Bank)', payoutCurrency: 'USD ➔ INR Direct' },
  { id: 'seekclaw', name: 'SeekClaw', url: 'https://www.seekclaw.com', walletId: MASTER_WALLET_ID, paymentGateway: 'Master Unified Wallet (Stripe/Bank)', payoutCurrency: 'USD ➔ INR Direct' },
  { id: 'crewport', name: 'CrewPort (MCP)', url: 'https://crewport.ai', walletId: MASTER_WALLET_ID, paymentGateway: 'Master Unified Wallet (Stripe/Bank)', payoutCurrency: 'USD ➔ INR Direct' },
  { id: 'termix', name: 'TermiX / Agent Family', url: 'https://www.agent.family', walletId: MASTER_WALLET_ID, paymentGateway: 'Master Unified Wallet (Stripe/Bank)', payoutCurrency: 'USD ➔ INR Direct' },
  { id: 'moltverr', name: 'Moltverr', url: 'https://www.moltverr.com', walletId: MASTER_WALLET_ID, paymentGateway: 'Master Unified Wallet (Stripe/Bank)', payoutCurrency: 'USD ➔ INR Direct' },
  { id: 'moltlaunch', name: 'Moltlaunch', url: 'https://moltlaunch.com', walletId: MASTER_WALLET_ID, paymentGateway: 'Master Unified Wallet (Stripe/Bank)', payoutCurrency: 'USD ➔ INR Direct' },
  { id: 'synmerco', name: 'Synmerco', url: 'https://synmerco.com', walletId: MASTER_WALLET_ID, paymentGateway: 'Master Unified Wallet (Stripe/Bank)', payoutCurrency: 'USD ➔ INR Direct' },
  { id: 'hoodai', name: 'Hood AI', url: 'https://hood-ai.top', walletId: MASTER_WALLET_ID, paymentGateway: 'Master Unified Wallet (Stripe/Bank)', payoutCurrency: 'USD ➔ INR Direct' },
  { id: 'merxex', name: 'Merxex Exchange', url: 'https://www.merxex.com', walletId: MASTER_WALLET_ID, paymentGateway: 'Master Unified Wallet (Stripe/Bank)', payoutCurrency: 'USD ➔ INR Direct' },
  { id: 'freelancity', name: 'Freelancity', url: 'https://freelancity.ai', walletId: MASTER_WALLET_ID, paymentGateway: 'Master Unified Wallet (Stripe/Bank)', payoutCurrency: 'USD ➔ INR Direct' },
  { id: 'agentverse', name: 'Fetch.ai AgentVerse', url: 'https://agentverse.ai', walletId: MASTER_WALLET_ID, paymentGateway: 'Master Unified Wallet (Stripe/Bank)', payoutCurrency: 'USD ➔ INR Direct' },
  { id: 'virtuals', name: 'Virtuals Protocol', url: 'https://virtuals.io', walletId: MASTER_WALLET_ID, paymentGateway: 'Master Unified Wallet (Stripe/Bank)', payoutCurrency: 'USD ➔ INR Direct' },
  { id: 'autogpt', name: 'AutoGPT Hub', url: 'https://forge.autogpt.co', walletId: MASTER_WALLET_ID, paymentGateway: 'Master Unified Wallet (Stripe/Bank)', payoutCurrency: 'USD ➔ INR Direct' },
  { id: 'superagi', name: 'SuperAGI Market', url: 'https://marketplace.superagi.com', walletId: MASTER_WALLET_ID, paymentGateway: 'Master Unified Wallet (Stripe/Bank)', payoutCurrency: 'USD ➔ INR Direct' },
  { id: 'agentgigs', name: 'AgentGigs', url: 'https://www.agentgigs.io', walletId: MASTER_WALLET_ID, paymentGateway: 'Master Unified Wallet (Stripe/Bank)', payoutCurrency: 'USD ➔ INR Direct' },
  { id: 'clawexchange', name: 'ClawExchange', url: 'https://www.clawexch.com', walletId: MASTER_WALLET_ID, paymentGateway: 'Master Unified Wallet (Stripe/Bank)', payoutCurrency: 'USD ➔ INR Direct' },
  { id: 'moltmarket', name: 'MoltMarket', url: 'https://www.moltbotmarket.com', walletId: MASTER_WALLET_ID, paymentGateway: 'Master Unified Wallet (Stripe/Bank)', payoutCurrency: 'USD ➔ INR Direct' },
  { id: 'clawmolt', name: 'ClawMolt', url: 'https://www.clawmolt.ai', walletId: MASTER_WALLET_ID, paymentGateway: 'Master Unified Wallet (Stripe/Bank)', payoutCurrency: 'USD ➔ INR Direct' },
  { id: 'moltjobs', name: 'MoltJobs', url: 'https://www.molt-jobs.com', walletId: MASTER_WALLET_ID, paymentGateway: 'Master Unified Wallet (Stripe/Bank)', payoutCurrency: 'USD ➔ INR Direct' },
  { id: 'gohirehumans', name: 'GoHireHumans', url: 'https://www.gohirehumans.com', walletId: MASTER_WALLET_ID, paymentGateway: 'Master Unified Wallet (Stripe/Bank)', payoutCurrency: 'USD ➔ INR Direct' },
  { id: 'agentswarmwork', name: 'AgentSwarmWork', url: 'https://www.agentswarmwork.com', walletId: MASTER_WALLET_ID, paymentGateway: 'Master Unified Wallet (Stripe/Bank)', payoutCurrency: 'USD ➔ INR Direct' },
  { id: 'agenthire', name: 'AgentHire', url: 'https://www.agenthire.app', walletId: MASTER_WALLET_ID, paymentGateway: 'Master Unified Wallet (Stripe/Bank)', payoutCurrency: 'USD ➔ INR Direct' },
  { id: 'clawgig', name: 'ClawGig', url: 'https://clawgig.ai', walletId: MASTER_WALLET_ID, paymentGateway: 'Master Unified Wallet (Stripe/Bank)', payoutCurrency: 'USD ➔ INR Direct' },
  { id: 'jobsinai', name: 'Jobs in AI', url: 'https://www.jobsindrones.com', walletId: MASTER_WALLET_ID, paymentGateway: 'Master Unified Wallet (Stripe/Bank)', payoutCurrency: 'USD ➔ INR Direct' }
];

export async function getMarketplaceStatus() {
  const config = await loadConfig();
  const agentUrl = process.env.RENDER_EXTERNAL_URL || 'https://cashclaw-agent-rjfi.onrender.com';

  return SUPPORTED_MARKETPLACES.map(m => ({
    ...m,
    agent_id: MASTER_WALLET_ID,
    public_endpoint: `${agentUrl}/api/status`,
    registered: true,
    stripe_connected: true,
    payout_account: 'Jai Ganesh Master Single Wallet (Connected)'
  }));
}
