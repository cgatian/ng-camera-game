https://stackoverflow.com/questions/9018016/how-to-compare-two-colors-for-similarity-difference
https://en.wikipedia.org/wiki/Color_difference
https://gist.github.com/ryancat/9972419b2a78f329ce3aebb7f1a09152

Current Implementation Notes:
PicAssignment - composed of the (assigned) PicColor, the "round" of the assignment (ex. 3 of 8), and a score
PicColor - composed of a label (name) of a color, (color) value
PicColorState - composed of a PicColor and an enabled boolean
PicSet - composed of a set of (data url) strings of pictures taken

PicSubmission - composed of a PicAssigment and pic (string)
PicSubmissionResult - composed of a PicSubmission, a Passed boolean and a Score (number)

TODO remove score from PicAssignment