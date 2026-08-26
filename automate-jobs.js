'use strict';

import { auditNetworkHealth } from './src/integrations/marketplace-aggregator.js';
import { processSmartBid } from './src/engine/smart-bidder.js';

export class JobAutomation {
  constructor(options = {}) {
    this.platforms = options.platforms || ['hyrve', 'agrenting', 'seekclaw', 'freelancity', 'upwork', 'fiverr'];
    this.intervalMs = 3600000; // 1 hour default (or 30s daemon)
    this.maxJobs = options.max_jobs || 50;
    this.filters = options.filters || { min_price: 20, max_price: 200, categories: ['seo', 'content', 'marketing'] };
    this.isRunning = false;
  }

  async runScan() {
    console.log(`[JobAutomation] Running automated job acquisition scan across ${this.platforms.length} platforms...`);
    const health = await auditNetworkHealth();
    let acquired = 0;

    for (const connector of health) {
      if (connector.jobs_found > 0) {
        acquired += connector.jobs_found;
      }
    }

    console.log(`[JobAutomation] Scan complete — ${acquired} jobs processed.`);
  }

  start() {
    this.isRunning = true;
    console.log('✅ Job automation started - checking continuously 24/7');
    this.runScan();
    setInterval(() => this.runScan(), this.intervalMs);
  }
}

// Auto-run if executed directly
if (import.meta.url === `file:///${process.argv[1].replace(/\\/g, '/')}`) {
  const automation = new JobAutomation();
  automation.start();
}
