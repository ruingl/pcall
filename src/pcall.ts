import { Result } from './types';

/**
 * Calls a function protected from errors. (Async)
 * @param fn - Function to call.
 * @param args - Arguments of function to call.
 * @returns Result of the function called.
 */
export async function pcall<T extends (...args: unknown[]) => unknown>(
  fn: T,
  ...args: Parameters<T>
): Promise<Result<Awaited<ReturnType<T>>>> {
  try {
    const result = await fn(...args) as Awaited<ReturnType<T>>;
    return {
      status: true,
      result: result
    }
  } catch (error) {
    return {
      status: false,
      error: error instanceof Error ? error : new Error(String(error))
    }
  }
}

/**
 * Calls a function protected from errors. (Sync)
 * @param fn - Function to call.
 * @param args - Arguments of function to call.
 * @returns Result of function called.
 */
export function pcallSync<T extends (...args: unknown[]) => unknown>(
  fn: T,
  ...args: Parameters<T>
): Result<ReturnType<T>> {
  try {
    const result = fn(...args) as ReturnType<T>;
    return {
      status: true,
      result: result
    }
  } catch (error) {
    return {
      status: false,
      error: error instanceof Error ? error : new Error(String(error))
    }
  }
}
