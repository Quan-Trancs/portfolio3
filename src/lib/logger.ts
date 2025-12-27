/**
 * Production-safe logger
 * Only logs in development, sends to monitoring in production
 */

type LogLevel = 'log' | 'warn' | 'error' | 'info' | 'debug';

class Logger {
  private isProduction = process.env.NODE_ENV === 'production';

  private log(level: LogLevel, ...args: unknown[]) {
    if (this.isProduction) {
      // In production, send to monitoring service
      // TODO: Integrate with Sentry, LogRocket, or similar
      if (level === 'error') {
        // Critical errors should be logged/monitored
        console.error(...args);
      }
      // Other logs are suppressed in production
      return;
    }

    // Development: use console
    console[level](...args);
  }

  log(...args: unknown[]) {
    this.log('log', ...args);
  }

  warn(...args: unknown[]) {
    this.log('warn', ...args);
  }

  error(...args: unknown[]) {
    this.log('error', ...args);
  }

  info(...args: unknown[]) {
    this.log('info', ...args);
  }

  debug(...args: unknown[]) {
    this.log('debug', ...args);
  }
}

export const logger = new Logger();

