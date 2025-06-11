/**
 * Result of a protected call.
 */
export type Result<T> = {
  /** Status if it succeeded or failed. */
  status: boolean;
  /** Result of the call if it suceeded. */
  result?: T;
  /** Error of the call if it failed. */
  error?: Error;
}
