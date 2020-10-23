import NestedError from 'nested-error-stacks';

export default class AppError extends NestedError {
  data;

  constructor() {
    if (new.target === AppError) {
      throw new TypeError('Cannot construct AppError instance directly.');
    }

    let message;
    let nestedError;
    let data;

    // eslint-disable-next-line
    for (const arg of arguments) {
      if (arg instanceof Error) {
        nestedError = arg;
      } else if (typeof arg === 'string') {
        if (!message) {
          message = arg;
        } else if (!data) {
          data = arg;
        }
      } else if (!data) {
        data = arg;
      }
    }

    if (!message && nestedError) {
      message = nestedError.message;
    }
    if (!data && nestedError) {
      data = nestedError.data;
    }

    super(message || '', nestedError);
    this.data = data;
  }
}
