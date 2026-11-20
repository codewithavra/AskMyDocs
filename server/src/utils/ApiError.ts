export class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public code: string = "API_ERROR",
    public details?: unknown,
  ) {
    super(message);
    this.name = "ApiError";
    Error.captureStackTrace(this, this.constructor);
  }

  static badRequest(message = "Bad request", details?: unknown) {
    return new ApiError(400, message, "BAD_REQUEST", details);
  }
  static unauthorized(message = "Unauthorized") {
    return new ApiError(401, message, "UNAUTHORIZED");
  }
  static forbidden(message = "Forbidden") {
    return new ApiError(403, message, "FORBIDDEN");
  }
  static notFound(message = "Not found") {
    return new ApiError(404, message, "NOT_FOUND");
  }
  static conflict(message = "Conflict") {
    return new ApiError(409, message, "CONFLICT");
  }
  static tooManyRequests(message = "Too many requests") {
    return new ApiError(429, message, "TOO_MANY_REQUESTS");
  }
}