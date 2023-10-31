import expect from '@storybook/expect';
import { contextHandle } from 'wrightplay';

describe('handle', () => {
  it('creates a usable handle', async () => {
    /**
     * A handle that represents the Playwright
     * [Browser](https://playwright.dev/docs/api/class-browser) object of the current test context.
     */
    const browserHandle = await contextHandle.evaluateHandle((context) => context.browser()!);

    // Get the browser version via the created handle.
    const version = await browserHandle.evaluate((b) => b.version());

    // Expect the returned version to be a string of numbers and dots.
    expect(version).toMatch(/^[0-9.]+$/);
  });
});
