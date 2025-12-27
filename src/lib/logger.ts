/**
 * Production-safe logger
 * Only logs in development, sends to monitoring in production
 */

type LogLevel = 'log' | 'warn' | 'error' | 'info' | 'debug';

class Logger {
  private isProduction = process.env.NODE_ENV === 'production';

  private internalLog(level: LogLevel, ...args: unknown[]) {
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
    this.internalLog('log', ...args);
  }

  warn(...args: unknown[]) {
    this.internalLog('warn', ...args);
  }

  error(...args: unknown[]) {
    this.internalLog('error', ...args);
  }

  info(...args: unknown[]) {
    this.internalLog('info', ...args);
  }

  debug(...args: unknown[]) {
    this.internalLog('debug', ...args);
  }
}

export const logger = new Logger();

