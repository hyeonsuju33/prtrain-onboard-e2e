// Keep only non-empty labels and trim their surrounding whitespace.
function cleanLabels(labels) {
  return labels.map((label) => label.trim());
}
module.exports = { cleanLabels };
