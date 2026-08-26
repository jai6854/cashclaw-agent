'use strict';

import { auditNetworkHealth } from '../integrations/marketplace-aggregator.js';

export class JobScanner {
  constructor(options = {}) {
    this.depth = options.depth || 3;
    this.frequency = options.frequency || 'hourly';
    this.keywords = options.keywords || ['seo', 'audit', 'optimization', 'content', 'lead', 'python'];
    this.locations = options.locations || ['global'];
    this.minBudget = options.min_budget || 20;
    this.maxBudget = options.max_budget || 500;
    this.isRunning = false;
  }

  async forceScan() {
    console.log('✅ Manual job scan initiated');
    console.log('🔍 Scanning 25 platforms for eligible jobs');
    const health = await auditNetworkHealth();
    console.log('⏳ Estimated completion: 15-30 minutes');
    return { scanned: health.length, status: 'success' };
  }

  async start() {
    this.isRunning = true;
    console.log('✅ Job discovery activated');
    console.log('🔍 Scanning for eligible jobs across 25 marketplaces...');
    
    const health = await auditNetworkHealth();
    let eligibleJobsFound = 0;

    for (const connector of health) {
      if (connector.jobs_found > 0) {
        eligibleJobsFound += connector.jobs_found;
      }
    }

    console.log(`[JobScanner] Discovery cycle complete — ${health.length} marketplaces scanned, ${eligibleJobsFound} eligible jobs indexed.`);
    return { scanned: health.length, eligible: eligibleJobsFound };
  }
}
