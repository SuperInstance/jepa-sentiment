/**
 * JEPA (Joint Embedding Predictive Architecture) - Sentiment Analysis Types
 *
 * Type definitions for sentiment analysis from audio and text.
 * Uses VAD (Valence-Arousal-Dominance) model for sentiment classification.
 */
/**
 * Sentiment categories based on VAD (Valence-Arousal-Dominance) model
 *
 * These categories represent different sentiment states in a multi-dimensional
 * affective space:
 * - Valence: Positive vs Negative (0 = negative, 1 = positive)
 * - Arousal: High vs Low energy/intensity (0 = calm, 1 = excited/agitated)
 * - Dominance: Control vs Submissive (0 = weak, 1 = dominant/powerful)
 */
export type SentimentCategory = 'excited' | 'happy' | 'calm' | 'relaxed' | 'neutral' | 'bored' | 'sad' | 'angry' | 'anxious' | 'tense';
/**
 * Sentiment analysis result from JEPA model
 *
 * Represents a complete sentiment assessment with VAD coordinates
 * and categorical classification.
 */
export interface SentimentResult {
    /**
     * Valence (positive/negative) score (0-1)
     * 0 = most negative, 1 = most positive
     */
    valence: number;
    /**
     * Arousal (intensity) score (0-1)
     * 0 = calm/relaxed, 1 = excited/agitated
     */
    arousal: number;
    /**
     * Dominance (control) score (0-1)
     * 0 = submissive/weak, 1 = dominant/powerful
     */
    dominance: number;
    /**
     * Categorized sentiment label
     */
    sentiment: SentimentCategory;
    /**
     * Confidence score (0-1)
     * Higher values indicate greater certainty in the classification
     */
    confidence: number;
    /**
     * Detected language (optional)
     * ISO 639-1 language code (e.g., 'en', 'es', 'fr')
     */
    language?: string;
}
/**
 * VAD (Valence-Arousal-Dominance) coordinates
 *
 * Raw dimensional representation of sentiment without categorization
 */
export interface VADCoordinates {
    valence: number;
    arousal: number;
    dominance: number;
}
/**
 * Sentiment metadata for storage
 *
 * Additional context information for sentiment recordings
 */
export interface SentimentMetadata {
    recordingId: string;
    timestamp: number;
    duration: number;
    language: string;
    conversationId?: string;
    agentId?: string;
}
/**
 * Audio features for sentiment analysis
 *
 * Extracted acoustic features used as input to the sentiment model
 */
export interface AudioFeatures {
    mfcc: number[];
    spectral: SpectralFeatures;
    prosodic: ProsodicFeatures;
}
/**
 * Spectral features from audio
 *
 * Frequency-domain characteristics of the audio signal
 */
export interface SpectralFeatures {
    centroid: number;
    bandwidth: number;
    flux: number;
    rolloff: number;
    zcr: number;
}
/**
 * Prosodic features from audio
 *
 * Melody, rhythm, and intonation characteristics
 */
export interface ProsodicFeatures {
    energy: number;
    pitch: number;
    jitter: number;
    shimmer: number;
}
/**
 * Sentiment pattern for text analysis
 *
 * Defines keyword, emoji, and punctuation patterns associated with each sentiment
 */
export interface SentimentPattern {
    /** Words/phrases indicating this sentiment */
    keywords: string[];
    /** Emojis indicating this sentiment */
    emojis: string[];
    /** Punctuation patterns */
    punctuation?: string[];
    /** Weight for this pattern (higher = stronger signal) */
    weight: number;
    /** VAD values for this sentiment */
    vad: {
        valence: number;
        arousal: number;
        dominance: number;
    };
    /** Type identifier */
    type?: string;
    /** Description */
    description?: string;
    /** Confidence score */
    confidence?: number;
}
/**
 * Sentiment detection from text
 *
 * Result of analyzing text for sentiment content
 */
export interface TextSentimentDetection {
    /** Primary sentiment detected */
    sentiment: SentimentCategory;
    /** Secondary sentiments detected (if any) */
    secondarySentiments?: Array<{
        sentiment: SentimentCategory;
        confidence: number;
    }>;
    /** Valence: positive (0.6-1.0) vs negative (0.0-0.4) */
    valence: number;
    /** Arousal: energy/intensity (0.0-1.0) */
    arousal: number;
    /** Dominance: confidence/assertiveness (0.0-1.0) */
    dominance: number;
    /** Overall confidence in detection (0.0-1.0) */
    confidence: number;
    /** Evidence supporting this detection */
    evidence: string[];
}
/**
 * Context window for text sentiment analysis
 *
 * Provides conversation context for more accurate sentiment detection
 */
export interface TextContextWindow {
    /** Previous messages in conversation */
    previousMessages: Array<{
        text: string;
        sentiment?: SentimentCategory;
        speaker?: string;
    }>;
    /** Current speaker */
    speaker: string;
    /** Conversation topic (if known) */
    topic?: string;
}
/**
 * Sentiment recording for storage
 *
 * Complete sentiment data with metadata for persistence
 */
export interface SentimentRecording {
    id: string;
    timestamp: number;
    duration: number;
    valence: number;
    arousal: number;
    dominance: number;
    sentiment: string;
    confidence: number;
    conversationId?: string;
    agentId?: string;
    language: string;
    hasAudio: boolean;
    audioPath?: string;
    transcript?: string;
}
/**
 * Sentiment statistics
 *
 * Aggregated statistics across multiple sentiment recordings
 */
export interface SentimentStatistics {
    valence: Statistic;
    arousal: Statistic;
    dominance: Statistic;
    sentimentDistribution: Record<string, number>;
}
/**
 * Statistical measures
 */
export interface Statistic {
    mean: number;
    std: number;
    min: number;
    max: number;
    median: number;
}
/**
 * Sentiment trend pattern detected over time
 *
 * Recurrent patterns in sentiment data
 */
export interface SentimentTrendPattern {
    type: string;
    description: string;
    confidence: number;
    hour?: number;
    dayOfWeek?: string;
    suggestions?: string[];
}
/**
 * Query for sentiment data
 *
 * Filters for querying stored sentiment recordings
 */
export interface SentimentQuery {
    startDate?: Date;
    endDate?: Date;
    conversationId?: string;
    agentId?: string;
    sentiment?: string;
    minValence?: number;
    maxValence?: number;
    minArousal?: number;
    maxArousal?: number;
}
/**
 * Model configuration for JEPA sentiment model
 */
export interface SentimentModelConfig {
    modelSize: 'tiny' | 'base' | 'small' | 'medium' | 'large';
    sampleRate: number;
    bufferSize: number;
    enableStreaming: boolean;
}
/**
 * Inference options
 */
export interface SentimentInferenceOptions {
    includeSecondarySentiments?: boolean;
    minimumConfidence?: number;
    timeout?: number;
}
/**
 * Inference result
 */
export interface SentimentInferenceResult {
    sentiment: SentimentCategory;
    vad: VADCoordinates;
    confidence: number;
    inferenceTime: number;
    featureExtractionTime: number;
}
/**
 * Sentiment analysis error
 */
export declare class SentimentAnalysisError extends Error {
    code: SentimentErrorCode;
    originalError?: Error | undefined;
    constructor(message: string, code: SentimentErrorCode, originalError?: Error | undefined);
}
export type SentimentErrorCode = 'MODEL_NOT_LOADED' | 'FEATURE_EXTRACTION_FAILED' | 'INFERENCE_FAILED' | 'INVALID_AUDIO_FORMAT' | 'STORAGE_ERROR' | 'QUERY_FAILED' | 'WEBGPU_NOT_SUPPORTED' | 'WEBGPU_INIT_FAILED' | 'FALLBACK_TO_CPU';
/**
 * WebGPU device and memory information
 */
export interface WebGPUDeviceInfo {
    /** GPU adapter name */
    adapter: string;
    /** GPU vendor */
    vendor: string;
    /** Architecture description */
    architecture: string;
    /** Available device memory in bytes */
    availableMemory: number;
    /** WebGPU feature support */
    features: string[];
}
/**
 * WebGPU backend configuration
 */
export interface WebGPUConfig {
    /** Preferred device (default: first available) */
    devicePreference?: 'discrete-gpu' | 'integrated-gpu' | 'cpu';
    /** Enable timestamp queries for performance tracking */
    enableTimestamps?: boolean;
    /** Maximum buffer size in bytes (default: 256MB) */
    maxBufferSize?: number;
    /** Enable memory mapping for faster transfers */
    useMappedBuffers?: boolean;
    /** Force CPU fallback even if WebGPU is available */
    forceCPUFallback?: boolean;
}
/**
 * WebGPU performance metrics
 */
export interface WebGPUPerformanceMetrics {
    /** Total GPU execution time in milliseconds */
    gpuExecutionTime: number;
    /** Total CPU execution time in milliseconds */
    cpuExecutionTime: number;
    /** Memory transfer time in milliseconds */
    memoryTransferTime: number;
    /** Speedup factor (GPU time / CPU time) */
    speedupFactor: number;
    /** Peak memory usage in bytes */
    peakMemoryUsage: number;
    /** Average throughput (samples per second) */
    throughput: number;
    /** Device utilization (0-1) */
    deviceUtilization: number;
}
/**
 * WebGPU compute pipeline for sentiment analysis
 */
export interface WebGPUComputePipeline {
    /** Compute pipeline handle */
    pipeline: any;
    /** Bind group layout */
    bindGroupLayout: any;
    /** Pipeline layout */
    pipelineLayout: any;
    /** Compute shader module */
    shaderModule: any;
}
/**
 * WebGPU memory buffers for sentiment inference
 */
export interface WebGPUMemoryBuffers {
    /** Input text tokens buffer */
    inputBuffer: any;
    /** Keyword weights buffer */
    keywordWeightsBuffer: any;
    /** Emoji weights buffer */
    emojiWeightsBuffer: any;
    /** Output sentiment scores buffer */
    outputBuffer: any;
    /** Temporary computation buffer */
    tempBuffer: any;
}
/**
 * WebGPU inference result with performance data
 */
export interface WebGPUInferenceResult extends TextSentimentDetection {
    /** Performance metrics */
    performance?: WebGPUPerformanceMetrics;
    /** Whether GPU was used for this inference */
    usedGPU: boolean;
    /** Device information (if GPU was used) */
    deviceInfo?: WebGPUDeviceInfo;
}
//# sourceMappingURL=types.d.ts.map