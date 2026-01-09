/**
 * Enhanced Text-Based Sentiment Analyzer
 *
 * Advanced sentiment detection from text with:
 * - More nuanced sentiment categories (15+ sentiments)
 * - Emoji analysis
 * - Punctuation analysis
 * - Context awareness (conversation history)
 * - Confidence metrics
 * - Pattern matching with weighted scoring
 *
 * @module text-sentiment-analyzer
 */
import type { TextSentimentDetection, SentimentCategory, SentimentPattern, TextContextWindow } from './types';
export type EmotionType = SentimentCategory;
export declare const SENTIMENT_PATTERNS: Record<SentimentCategory, SentimentPattern>;
/**
 * Extract emojis from text
 */
export declare function extractEmojis(text: string): string[];
/**
 * Detect sentiment from text with full analysis
 */
export declare function detectSentiment(text: string, context?: TextContextWindow): TextSentimentDetection;
/**
 * Batch detect sentiments for multiple messages
 */
export declare function detectSentimentsBatch(messages: Array<{
    text: string;
    speaker: string;
}>): TextSentimentDetection[];
/**
 * Get all available sentiment types
 */
export declare function getSentimentTypes(): SentimentCategory[];
/**
 * Get sentiment pattern data
 */
export declare function getSentimentPattern(sentiment: SentimentCategory): SentimentPattern | undefined;
/**
 * Check if sentiment is positive
 */
export declare function isPositiveSentiment(sentiment: SentimentCategory): boolean;
/**
 * Check if sentiment is high arousal
 */
export declare function isHighArousal(sentiment: SentimentCategory): boolean;
/**
 * Get sentiment intensity category
 */
export declare function getSentimentIntensity(sentiment: SentimentCategory): 'low' | 'medium' | 'high';
//# sourceMappingURL=text-sentiment-analyzer.d.ts.map