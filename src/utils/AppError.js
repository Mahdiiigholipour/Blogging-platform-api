// src/utils/AppError.js
class AppError extends Error {
  constructor(message, statusCode, errors = []) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;
    this.errors = errors; // ← آرایه‌ی جزئیات خطاها

    Error.captureStackTrace(this, this.constructor);
  }

  static notFoundHandler(req, res, next) {
    next(new AppError(`مسیر ${req.originalUrl} پیدا نشد`, 404));
  }

  static globalErrorHandler(err, req, res, next) {
    if (!(err instanceof AppError)) {
      err = new AppError(
        err.message || "خطای داخلی سرور",
        err.statusCode || 500
      );
      err.isOperational = false;
    }

    const response = {
      status: err.status,
      message: err.message,
    };

    // تنها اگر جزئیات وجود داشته باشه، اضافه‌اش کن
    if (err.errors && err.errors.length) {
      response.errors = err.errors;
    }

    res.status(err.statusCode).json(response);
  }
}

module.exports = AppError;
