import { PicAssignment } from "./PicAssignment";

export interface PicSubmission {
    /**
     * The assignment (target color and round number) of the submission.
     */
    Assignment: PicAssignment,
    /**
     * The Pic of the submission.
     */
    Pic: string
}