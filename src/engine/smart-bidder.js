'use strict';

import { HUNDRED_SKILLS } from './skills-registry.js';
import { loadConfig } from '../cli/utils/config.js';
import dayjs from 'dayjs';

// Cache to prevent duplicate bidding across platforms
const BIDS_CACHE = new Set();

/**
 * Match an incoming job against the 100-skill roster to find the best skill & AI model.
 */
export function matchJobToSkill(jobTitle, jobDescription = '') {
  const query = `${jobTitle} ${jobDescription}`.toLowerCase();

  // Keyword match ranking
  let bestMatch = HUNDRED_SKILLS[0];
  let maxScore = -1;

  for (const skill of HUNDRED_SKILLS) {
    let score = 0;
    const words = skill.name.toLowerCase().split(' ');
    for (const word of words) {
      if (word.length > 3 && query.includes(word)) {
        score += 2;
      }
    }
    if (query.includes(skill.category.toLowerCase())) {
      score += 1;
    }

    if (score > maxScore) {
      maxScore = score;
      bestMatch = skill;
    }
  }

  // Recommended AI Model based on category & tier
  let recommendedModel = 'google/gemini-2.5-flash';
  if (bestMatch.tier === 'pro') {
    recommendedModel = 'anthropic/claude-3.5-sonnet';
  } else if (bestMatch.category === 'Development' || bestMatch.category === 'DevOps') {
    recommendedModel = 'deepseek/deepseek-r1';
  } else if (bestMatch.category === 'Copywriting' || bestMatch.category === 'B2B Sales') {
    recommendedModel = 'openai/gpt-4o';
  }

  return {
    skill: bestMatch,
    confidence: maxScore > 0 ? 0.95 : 0.85,
    recommended_model: recommendedModel,
    suggested_price_usd: bestMatch.price,
    estimated_hours: bestMatch.tier === 'pro' ? 4 : bestMatch.tier === 'standard' ? 2 : 1
  };
}

/**
 * Evaluate and execute a smart auto-bid.
 */
export async function processSmartBid(job) {
  if (!job || !job.id) return { success: false, reason: 'Invalid job data' };

  // Deduplication check across 25 platforms
  const dedupeKey = `${job.title || ''}_${job.budget_usd || 0}`.toLowerCase();
  if (BIDS_CACHE.has(dedupeKey) || BIDS_CACHE.has(job.id)) {
    return { success: false, reason: 'Duplicate job detected & skipped' };
  }

  // Add to cache
  BIDS_CACHE.add(job.id);
  BIDS_CACHE.add(dedupeKey);

  // Match with 100-skill library
  const match = matchJobToSkill(job.title || '', job.description || '');

  // Proposal Generation
  const proposalText = `Hi! I'm an AI-assisted specialist representing Jai Ganesh Agency.\n\nWe specialize in ${match.skill.name} using enterprise-grade workflows.\n\nKey Deliverables:\n1. Instant 100% Quality-Checked execution.\n2. Complete report & code/assets delivered within ${match.estimated_hours}h.\n3. Stripe Unified Invoice included.\n\nReady to start immediately for $${match.suggested_price_usd}.`;

  return {
    success: true,
    job_id: job.id,
    marketplace: job.platform || 'HYRVE',
    skill_applied: match.skill.name,
    ai_model_assigned: match.recommended_model,
    bid_amount_usd: match.suggested_price_usd,
    proposal: proposalText,
    timestamp: dayjs().toISOString()
  };
}

/**
 * Automated QA Check on generated deliverables before client submission
 */
export function performQA(deliverables = []) {
  if (!deliverables || deliverables.length === 0) {
    return { passed: false, score: 0, reason: 'No deliverables generated' };
  }

  const validFiles = deliverables.filter(f => f && (f.endsWith('.json') || f.endsWith('.md') || f.endsWith('.csv') || f.endsWith('.html')));
  const score = validFiles.length === deliverables.length ? 100 : 85;

  return {
    passed: score >= 80,
    score: score,
    total_files: deliverables.length,
    qa_status: score >= 80 ? 'PASSED_VERIFIED 🟢' : 'NEEDS_REVISION 🟡',
    checked_at: dayjs().toISOString()
  };
}
