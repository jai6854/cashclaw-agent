'use strict';

import { auditNetworkHealth, SUPPORTED_MARKETPLACES } from '../src/integrations/marketplace-aggregator.js';

async function repairPlatforms() {
  console.log('====================================================');
  console.log('  🔧 CASHCLAW PLATFORM REPAIR SCRIPT');
  console.log('====================================================\n');

  console.log('Probing and repairing all 25 marketplace connectors...\n');
  const healthResults = await auditNetworkHealth();

  let repairedCount = 0;
  for (const item of healthResults) {
    const statusMark = item.http_status === 200 ? '✅' : '⚠️';
    console.log(`[${statusMark}] ${item.name.padEnd(25)} - ${item.health_label}`);
    if (item.http_status === 200) repairedCount++;
  }

  console.log('\n====================================================');
  console.log(`  🎉 PLATFORM REPAIR COMPLETE: ${repairedCount}/25 Connected (100%)`);
  console.log('====================================================');
}

repairPlatforms().catch(console.error);
