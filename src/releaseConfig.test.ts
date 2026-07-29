import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const projectRoot = process.cwd()
const readProjectFile = (path: string) => readFileSync(resolve(projectRoot, path), 'utf8')

describe('release configuration', () => {
  it('reads Vite base from BASE_PATH with a root-path fallback', () => {
    const viteConfig = readProjectFile('vite.config.ts')

    expect(viteConfig).toMatch(/base:\s*process\.env\.BASE_PATH\s*\|\|\s*'\/'/)
  })

  it('builds, tests, and lints before uploading and deploying the Pages artifact', () => {
    const workflowPath = resolve(projectRoot, '.github/workflows/deploy-pages.yml')

    expect(existsSync(workflowPath)).toBe(true)

    const workflow = readProjectFile('.github/workflows/deploy-pages.yml')
    const testIndex = workflow.indexOf('npm run test -- --run')
    const lintIndex = workflow.indexOf('npm run lint')
    const buildIndex = workflow.indexOf('npm run build')
    const uploadIndex = workflow.indexOf('actions/upload-pages-artifact@')
    const deployIndex = workflow.indexOf('actions/deploy-pages@')

    expect(testIndex).toBeGreaterThan(-1)
    expect(lintIndex).toBeGreaterThan(testIndex)
    expect(buildIndex).toBeGreaterThan(lintIndex)
    expect(uploadIndex).toBeGreaterThan(buildIndex)
    expect(deployIndex).toBeGreaterThan(uploadIndex)
  })
})
