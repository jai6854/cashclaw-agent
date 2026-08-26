import { execSync } from 'child_process';
import fs from 'fs-extra';

const sites = [
  'https://stripe.com',
  'https://github.com',
  'https://openrouter.ai'
];

console.log('🚀 Running Real SEO Audits for 3 Websites...');

const results = [];

for (const site of sites) {
  const domain = new URL(site).hostname.replace(/\./g, '_');
  const outFile = `audit_${domain}.json`;
  console.log(`\n-----------------------------------`);
  console.log(`Auditing ${site}...`);
  try {
    const out = execSync(`node bin/cashclaw.js audit --url "${site}" --tier pro --output ${outFile}`, { encoding: 'utf-8' });
    console.log(out);

    if (fs.existsSync(outFile)) {
      const data = fs.readJsonSync(outFile);
      results.push({
        site,
        status: data.response?.status,
        timing_ms: data.response?.timing_ms,
        score: data.scores?.overall,
        grade: data.scores?.overall_grade,
        tech_score: data.scores?.technical,
        onpage_score: data.scores?.on_page,
        outFile
      });
    }
  } catch (err) {
    console.error(`Audit error for ${site}:`, err.message);
  }
}

console.log('\n===================================');
console.log('✓ Completed audits for 3 sites!');
console.table(results);
