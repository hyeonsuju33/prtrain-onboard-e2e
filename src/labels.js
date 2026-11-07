// Keep only non-empty labels and trim their surrounding whitespace.
function cleanLabels(labels) {
  return labels.map((label) => label.trim()).filter((label) => label.length > 0);
}
module.exports = { cleanLabels };
