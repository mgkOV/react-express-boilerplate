const requestHandler = (req, res) => {
  res.send('../build/index.html');
};

module.exports = requestHandler;
