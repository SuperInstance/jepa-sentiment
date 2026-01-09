/**
 * WebGPU-Accelerated Sentiment Analyzer
 *
 * High-performance sentiment analysis using WebGPU compute shaders.
 * Provides 5-10x speedup over CPU-only implementation with automatic
 * fallback for unsupported devices.
 *
 * @module webgpu-sentiment-analyzer
 */
import type { WebGPUConfig, WebGPUDeviceInfo, WebGPUInferenceResult } from './types';
/**
 * Check if WebGPU is available in the current environment
 */
export declare function isWebGPUAvailable(): boolean;
/**
 * WebGPU-accelerated sentiment analyzer
 *
 * Provides GPU-accelerated sentiment inference with automatic CPU fallback.
 */
export declare class WebGPUSentimentAnalyzer {
    private device;
    private deviceInfo;
    private config;
    private isInitialized;
    private useCPU;
    private performanceHistory;
    private keywordWeights;
    private emojiWeights;
    constructor(config?: WebGPUConfig);
    /**
     * Initialize WebGPU device and resources
     */
    initialize(): Promise<void>;
    /**
     * Initialize GPU-specific resources
     */
    private initializeGPUResources;
    /**
     * Initialize CPU-specific resources
     */
    private initializeCPUResources;
    /**
     * Analyze sentiment with GPU acceleration
     */
    analyze(text: string): Promise<WebGPUInferenceResult>;
    /**
     * Analyze sentiment using GPU
     */
    private analyzeGPU;
    /**
     * Analyze sentiment using CPU (fallback)
     */
    private analyzeCPU;
    /**
     * Extract features from text
     */
    private extractFeatures;
    /**
     * Compute sentiment scores using GPU
     */
    private computeSentimentScoresGPU;
    /**
     * Classify sentiment from scores
     */
    private classifySentiment;
    /**
     * Calculate speedup factor
     */
    private calculateSpeedup;
    /**
     * Estimate memory usage
     */
    private estimateMemoryUsage;
    /**
     * Batch analyze multiple texts
     */
    analyzeBatch(texts: string[]): Promise<WebGPUInferenceResult[]>;
    /**
     * Get performance statistics
     */
    getPerformanceStats(): {
        averageSpeedup: number;
        averageThroughput: number;
        gpuUtilizationRate: number;
        totalInferences: number;
    };
    /**
     * Get device information
     */
    getDeviceInfo(): WebGPUDeviceInfo | null;
    /**
     * Check if using GPU
     */
    isUsingGPU(): boolean;
    /**
     * Cleanup resources
     */
    cleanup(): Promise<void>;
}
/**
 * Create a WebGPU sentiment analyzer with default configuration
 */
export declare function createWebGPUSentimentAnalyzer(config?: WebGPUConfig): Promise<WebGPUSentimentAnalyzer>;
/**
 * Quick analyze function with automatic GPU acceleration
 */
export declare function detectSentimentGPU(text: string, config?: WebGPUConfig): Promise<WebGPUInferenceResult>;
//# sourceMappingURL=webgpu-sentiment-analyzer.d.ts.map