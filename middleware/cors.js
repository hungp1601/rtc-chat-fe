module.exports = function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:6969')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  next()
}
