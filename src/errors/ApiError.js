import NestedError from 'nested-error-stacks';

export default class ApiError extends NestedError {
  httpStatus;

  errorCode;

  messageOnly;

  data;

  warning;

  constructor(httpStatus, errorCode, { message, data, nestedError, warning = false, logMessage }) {
    let msg = `${logMessage || message} code=${errorCode}`;
    if (data) {
      msg += ` data=${JSON.stringify(data)}`;
    }
    super(msg, nestedError);

    this.httpStatus = httpStatus;
    this.errorCode = errorCode;
    this.messageOnly = message;
    this.data = data;
    this.warning = warning;
  }
}
ApiError.prototype.name = 'ApiError';
