module.exports = function (req) {
  return (req.headers["x-requested-with"] === 'XMLHttpRequest');
};