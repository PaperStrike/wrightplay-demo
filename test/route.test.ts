import expect from '@storybook/expect';
import { contextRoute } from 'wrightplay';

describe('route', () => {
  it('simply routes', async () => {
    // Route requests to the `hello` path to return `routed!`.
    await contextRoute('hello', (r) => {
      r.fulfill({ body: 'routed!' });
    }, { times: 1 });

    const response = await fetch('hello');
    await expect(response.text()).resolves.toBe('routed!');
  });
});
