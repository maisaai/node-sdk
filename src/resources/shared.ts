// File generated from our OpenAPI spec by Stainless.

/**
 * Texts Comparator Response.
 */
export interface TextComparator {
  /**
   * The extracted data from the text.
   */
  extracted_data: unknown;
}

/**
 * Text Extraction Response.
 */
export interface TextExtractor {
  /**
   * The extracted data from the text.
   */
  extracted_data: unknown;
}

/**
 * Text Summary Request.
 */
export interface TextSummary {
  /**
   * The summarized version of the provided text.
   */
  summary: string;
}
