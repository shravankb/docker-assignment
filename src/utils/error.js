class ErrorHandler extends Error {
    constructor(name, message, statusCode,errorType) {
      super();
      this.statusCode = statusCode;
      this.message = message;
      this.type = errorType;
      this.name = name;

    }
  }
  
module.exports = ErrorHandler;
