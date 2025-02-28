import { Hono } from './hono'

declare global {
  class ExtendableEvent extends Event {
    constructor(type: string, init?: EventInit)
    waitUntil(promise: Promise<void>): void
  }
  abstract class FetchEvent extends ExtendableEvent {
    readonly request: Request
    respondWith(promise: Response | Promise<Response>): void
    passThroughOnException(): void
  }
  interface ExecutionContext {
    waitUntil(promise: Promise<void>): void
    passThroughOnException(): void
  }
}

export type {
  Next,
  ContextVariableMap,
  MiddlewareHandler,
  ErrorHandler,
  NotFoundHandler,
} from './types'
import type { CustomHandler } from './types'
export type { CustomHandler as Handler }
export type { Context } from './context'
export { Hono }

// Router
export { RegExpRouter } from './router/reg-exp-router'
export { TrieRouter } from './router/trie-router'
export { StaticRouter } from './router/static-router'
export { SmartRouter } from './router/smart-router'

// Validator
export type { Validator } from './validator/validator'
