/**
 * JEPA Real-Time Sentiment Analysis
 *
 * A comprehensive sentiment analysis library for audio and text using
 * JEPA (Joint Embedding Predictive Architecture) with VAD (Valence-Arousal-Dominance) scoring.
 *
 * @packageDocumentation
 */
// ============================================================================
// TEXT SENTIMENT ANALYSIS EXPORTS
// ============================================================================
export { detectSentiment, detectSentimentsBatch, extractEmojis, getSentimentTypes, getSentimentPattern, isPositiveSentiment, isHighArousal, getSentimentIntensity, } from './text-sentiment-analyzer';
// ============================================================================
// WEBGPU SENTIMENT ANALYSIS EXPORTS
// ============================================================================
export { WebGPUSentimentAnalyzer, isWebGPUAvailable, createWebGPUSentimentAnalyzer, detectSentimentGPU, } from './webgpu-sentiment-analyzer';
// ============================================================================
// VERSION
// ============================================================================
export const VERSION = '1.0.0';
export const PACKAGE_NAME = '@superinstance/jepa-real-time-sentiment-analysis';
