import { PicSubmission } from "./PicSubmission";

/**
 * Models the result of a PicSubmission.
 */
export interface PicSubmissionResult {
    /**
     * The Submission described by this object.
     */
    Submission: PicSubmission,
    /**
     * True if the submission passed, otherwise false.
     */
    Passed: boolean,
    /**
     * The score of the submission (points)
     */
    Score: number
}