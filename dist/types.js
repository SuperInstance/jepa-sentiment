/**
 * JEPA (Joint Embedding Predictive Architecture) - Sentiment Analysis Types
 *
 * Type definitions for sentiment analysis from audio and text.
 * Uses VAD (Valence-Arousal-Dominance) model for sentiment classification.
 */
// ============================================================================
// ERROR TYPES
// ============================================================================
/**
 * Sentiment analysis error
 */
export class SentimentAnalysisError extends Error {
    constructor(message, code, originalError) {
        super(message);
        this.code = code;
        this.originalError = originalError;
        this.name = 'SentimentAnalysisError';
    }
}
