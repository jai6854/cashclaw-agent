import { Command } from 'commander';
import chalk from 'chalk';
import Table from 'cli-table3';
import { loadConfig } from '../utils/config.js';
import { connectOmniRoute, disconnectOmniRoute, testOmniRouteConnection, DEFAULT_MODEL_MAPPING } from '../../integrations/omniroute-bridge.js';

const teal = chalk.hex('#00B4D8');
const green = chalk.hex('#16C784');
const dim = chalk.dim;

function header() {
  console.log('');
  console.log(teal.bold('  CashClaw OmniRoute Router') + dim('  v1.7.0'));
  console.log(dim('  ──────────────────────────────────────'));
}

export function createOmniRouteCommand() {
  const cmd = new Command('omniroute')
    .description('Manage OmniRoute LLM Router integration');

  // cashclaw omniroute connect
  cmd
    .command('connect')
    .description('Connect CashClaw to OmniRoute proxy endpoint')
    .option('-u, --url <url>', 'OmniRoute Base URL', 'http://localhost:8000/v1')
    .option('-k, --key <key>', 'OmniRoute API key / Bearer Token', '')
    .action(async (options) => {
      header();
      console.log(`  Connecting to OmniRoute at ${chalk.cyan(options.url)}...`);

      const testResult = await testOmniRouteConnection(options.url, options.key);

      if (!testResult.success) {
        console.log(chalk.yellow(`  ! Warning: Cloud check to ${options.url} returned: ${testResult.error || 'Connection failed'}`));
        console.log(chalk.dim('    Saving configuration anyway. Make sure OmniRoute server is running.'));
      } else {
        console.log(green(`  ✓ Successfully connected! Found ${testResult.models_count} routed models.`));
      }

      const omniConfig = await connectOmniRoute({
        url: options.url,
        apiKey: options.key,
      });

      console.log(green(`\n  ✓ OmniRoute is now active in CashClaw.`));
      console.log(dim(`    Base URL:  ${omniConfig.base_url}`));
      console.log(dim(`    Status:    ${omniConfig.enabled ? 'Enabled' : 'Disabled'}\n`));
    });

  // cashclaw omniroute status
  cmd
    .command('status')
    .description('Show OmniRoute integration status and model mappings')
    .action(async () => {
      header();
      const config = await loadConfig();
      const omni = config?.omniroute;

      if (!omni || !omni.enabled) {
        console.log(chalk.yellow('  Status: ') + chalk.bold('Disabled / Not Configured'));
        console.log(dim('  Run `cashclaw omniroute connect --url http://localhost:8000/v1` to enable.\n'));
        return;
      }

      console.log(`  Status:      ${green('Active')}`);
      console.log(`  Base URL:    ${chalk.cyan(omni.base_url)}`);
      console.log(`  API Key:     ${omni.api_key ? chalk.green('Configured (*****)') : dim('None')}`);
      console.log(`  Connected:   ${dim(omni.connected_at || 'Recently')}\n`);

      console.log(chalk.bold('  Service Model Routing Map:'));

      const table = new Table({
        head: [dim('Service Type'), dim('Routed Model')],
        colWidths: [26, 26],
        style: { head: [] },
      });

      const models = omni.models || DEFAULT_MODEL_MAPPING;
      for (const [service, model] of Object.entries(models)) {
        table.push([service, chalk.cyan(model)]);
      }

      console.log(table.toString() + '\n');
    });

  // cashclaw omniroute test
  cmd
    .command('test')
    .description('Test connection to OmniRoute proxy endpoint')
    .action(async () => {
      header();
      const config = await loadConfig();
      const omni = config?.omniroute;

      const url = omni?.base_url || 'http://localhost:8000/v1';
      const key = omni?.api_key || '';

      console.log(`  Testing OmniRoute server at ${chalk.cyan(url)}...`);
      const res = await testOmniRouteConnection(url, key);

      if (res.success) {
        console.log(green(`  ✓ OmniRoute Server Reachable (HTTP ${res.status})`));
        console.log(`  Models Available (${res.models_count}): ${dim(res.models.slice(0, 5).join(', ') + (res.models.length > 5 ? '...' : ''))}\n`);
      } else {
        console.log(chalk.red(`  ✗ OmniRoute Test Failed: ${res.error}`));
        console.log(dim('    Ensure OmniRoute is running on port 8000 or check firewall settings.\n'));
      }
    });

  // cashclaw omniroute disconnect
  cmd
    .command('disconnect')
    .description('Disconnect OmniRoute router')
    .action(async () => {
      header();
      await disconnectOmniRoute();
      console.log(green('  ✓ OmniRoute integration disabled.\n'));
    });

  return cmd;
}
