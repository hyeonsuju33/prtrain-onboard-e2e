function total(items) {
  return items.reduce((s, i) => s + i.price * i.qty, 0);
}
module.exports = { total };
