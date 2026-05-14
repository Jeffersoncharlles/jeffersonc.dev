import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, devices } from '@playwright/test'

const envFilePath = resolve(process.cwd(), '.env.test.local')

const loadEnvFile = (filePath: string) => {
  if (!existsSync(filePath)) return {}

  const content = readFileSync(filePath, 'utf-8')
  const entries: Record<string, string> = {}

  content.split('\n').forEach((line) => {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) return

    const match = trimmed.match(/^([^=:#\s]+)\s*[:=]\s*(.*)$/)
    if (!match) return

    const key = match[1]
    let value = match[2]

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }

    if (!(key in entries)) {
      entries[key] = value
    }
  })

  return entries
}

const envFromFile = loadEnvFile(envFilePath)

for (const [key, value] of Object.entries(envFromFile)) {
  if (!process.env[key]) {
    process.env[key] = value
  }
}

const pickEnv = (keys: string[]) => {
  const selected: Record<string, string> = {}
  for (const key of keys) {
    const value = process.env[key]
    if (typeof value === 'string' && value.length > 0) {
      selected[key] = value
    }
  }
  return selected
}

const PORT = process.env.PORT ?? '3000'
const BASE_URL = `http://localhost:${PORT}`
const envForWebServer = {
  PORT,
  ...pickEnv([
    'NODE_ENV',
    'DATABASE_URL',
    'PAYLOAD_SECRET',
    'NEXT_PUBLIC_SERVER_URL',
    'PAYLOAD_COOKIE_PREFIX',
    'PAYLOAD_COOKIE_DOMAIN',
    'PAYLOAD_COOKIE_SAMESITE',
    'PAYLOAD_COOKIE_SECURE',
    'S3_BUCKET',
    'S3_ACCESS_KEY_ID',
    'S3_SECRET_ACCESS_KEY',
    'S3_ENDPOINT',
    'S3_PUBLIC_URL',
    'RESEND_MAIL_API_KEY',
    'RESEND_API_EMAIL',
  ]),
}

export default defineConfig({
  testDir: './e2e',
  globalSetup: './e2e/global-setup.ts',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  expect: { timeout: process.env.CI ? 15000 : 5000 },
  reporter: 'html',
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    // trace: 'on',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
  webServer: {
    command: process.env.CI ? 'pnpm start' : 'pnpm dev',
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 180 * 1000,
    env: envForWebServer,
  },
})
