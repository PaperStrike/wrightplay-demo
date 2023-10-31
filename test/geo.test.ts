import expect from '@storybook/expect';
import { contextHandle } from 'wrightplay';
import getGeoLocation from '../src/getGeoLocation';

describe('geo demo', () => {
  before(async () => {
    // Grant geolocation permission
    await contextHandle.evaluate((context) => context.grantPermissions(['geolocation']));
  });

  it('gets the current position', async () => {
    // Demo location
    const location = { latitude: 59.95, longitude: 30.31667 };

    // Set location
    await contextHandle.evaluate((context, loc) => context.setGeolocation(loc), location);

    // Get location
    const gotLocation = await getGeoLocation({ enableHighAccuracy: true });

    // Check location
    expect(gotLocation.latitude).toBeCloseTo(location.latitude);
    expect(gotLocation.longitude).toBeCloseTo(location.longitude);
  });
});
