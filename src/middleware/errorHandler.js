function notFoundHandler(req, res, next) {
  res.status(404).send("not found route");
}

function exceptionHandler(err, req, res, next) {
  console.log(err.stack);

  const status = err.statusCode ?? 500;
  const message = err.message ?? "Internal Server Error";

  res.status(status).json({ status, message });
}

module.exports = { notFoundHandler, exceptionHandler };
