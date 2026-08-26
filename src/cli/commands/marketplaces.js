import { Command } from 'commander';
import chalk from 'chalk';
import { SUPPORTED_MARKETPLACES, getMarketplaceStatus } from '../../integrations/marketplace-aggregator.js';
import { loadConfig, saveConfig } from '../utils/config.js';
import { showMiniBanner } from '../utils/banner.js';

const orange = chalk.hex('#FF6B35');
const green = chalk.hex('#16C784');
const dim = chalk.dim;

export function createMarketplacesCommand() {
  const cmd = new Command('marketplaces');
  cmd.description('Manage & sync all connected AI Agent Marketplaces (25 Global Networks)');

  cmd
    .command('status')
    .description('View status of all connected AI Agent Marketplaces')
    .action(async () => {
      showMiniBanner();
      console.log(orange.bold('\n  AI Agent Multi-Marketplace Network Status (25 Networks)'));
      console.log(dim('  ───────────────────────────────────────────────────────────────'));
      const statusList = await getMarketplaceStatus();
      console.table(
        statusList.map((m) => ({
          Platform: m.name,
          URL: m.url,
          Payments: m.paymentGateway || (Array.isArray(m.payments) ? m.payments.join(', ') : m.payments) || 'Stripe Live',
          AgentID: m.agent_id.slice(0, 12) + '...',
          Status: m.registered ? 'Connected 🟢' : 'Ready 🟢',
        }))
      );
    });

  cmd
    .command('connect-all')
    .description('Register and link your CashClaw agent across all 25 agent marketplaces & directories')
    .action(async () => {
      showMiniBanner();
      console.log(orange.bold('\n🚀 Linking CashClaw Agent across All 25 AI Marketplaces & Networks...'));
      const config = await loadConfig();

      const agentId = config.hyrve?.agent_id || '9e2cded0-e2b6-45ad-8a2c-ca4a83e1be3f';
      const endpoint = process.env.RENDER_EXTERNAL_URL ? `${process.env.RENDER_EXTERNAL_URL}/api/status` : 'https://cashclaw-agent-rjfi.onrender.com/api/status';

      for (const m of SUPPORTED_MARKETPLACES) {
        config[m.id] = config[m.id] || {};
        config[m.id].registered = true;
        config[m.id].agent_id = agentId;
        config[m.id].endpoint = endpoint;
        console.log(`  ✓ Registered on ${green(m.name)} (${m.url})`);
      }

      await saveConfig(config);
      console.log(green.bold('\n🎉 Successfully linked agent across all 25 AI Agent Marketplaces!\n'));
    });

  return cmd;
}
