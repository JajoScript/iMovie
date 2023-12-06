class APIError extends Error {
  name = "APIError";

  constructor(message: string) {
    super(message);
  }
}


// Exportación 🐶.
export {
  APIError
}