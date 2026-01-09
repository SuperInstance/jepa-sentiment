/**
 * JEPA Real-Time Sentiment Analysis
 *
 * A comprehensive sentiment analysis library for audio and text using
 * JEPA (Joint Embedding Predictive Architecture) with VAD (Valence-Arousal-Dominance) scoring.
 *
 * @packageDocumentation
 */
export type { SentimentCategory, SentimentResult, VADCoordinates, SentimentMetadata, AudioFeatures, SpectralFeatures, ProsodicFeatures, TextSentimentDetection, SentimentPattern, TextContextWindow, SentimentRecording, SentimentStatistics, Statistic, SentimentTrendPattern, SentimentQuery, SentimentModelConfig, SentimentInferenceOptions, SentimentInferenceResult, SentimentAnalysisError, SentimentErrorCode, WebGPUConfig, WebGPUDeviceInfo, WebGPUPerformanceMetrics, WebGPUComputePipeline, WebGPUMemoryBuffers, WebGPUInferenceResult, } from './types';
export { detectSentiment, detectSentimentsBatch, extractEmojis, getSentimentTypes, getSentimentPattern, isPositiveSentiment, isHighArousal, getSentimentIntensity, } from './text-sentiment-analyzer';
export { WebGPUSentimentAnalyzer, isWebGPUAvailable, createWebGPUSentimentAnalyzer, detectSentimentGPU, } from './webgpu-sentiment-analyzer';
export declare const VERSION = "1.0.0";
export declare const PACKAGE_NAME = "@superinstance/jepa-real-time-sentiment-analysis";
//# sourceMappingURL=index.d.ts.map