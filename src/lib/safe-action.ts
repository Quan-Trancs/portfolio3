import {
  createSafeActionClient,
  DEFAULT_SERVER_ERROR_MESSAGE
} from 'next-safe-action';
import { logger } from './logger';

export class ActionError extends Error {}

export const actionClient = createSafeActionClient({
  handleServerError(e) {
    logger.error('Failed to execute action:', e.message);

    if (e instanceof ActionError) {
      return e.message;
    }

    // Don't expose internal error messages in production
    if (process.env.NODE_ENV === 'production') {
      return DEFAULT_SERVER_ERROR_MESSAGE;
    }

    return e.message || DEFAULT_SERVER_ERROR_MESSAGE;
  }
});
