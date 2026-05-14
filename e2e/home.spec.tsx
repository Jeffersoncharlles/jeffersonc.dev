import { expect, type Page, test } from '@playwright/test'

test.describe('Home Page', () => {
  test('should loading page home', async ({ page }: { page: Page }) => {
    await page.goto('/')

    const heading = page.locator('h1')
    await expect(heading).toHaveText('Jefferson Charlles')
  })
})
