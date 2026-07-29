import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})

class TestIntersectionObserver {
  constructor(_callback: IntersectionObserverCallback) {}

  disconnect() {}
  observe() {}
  takeRecords(): IntersectionObserverEntry[] { return [] }
  unobserve() {}
}

globalThis.IntersectionObserver = TestIntersectionObserver as unknown as typeof IntersectionObserver
