export default function getGeoLocation(options?: PositionOptions) {
  return new Promise<GeolocationCoordinates>((resolve, reject) => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      // To verify that we are not simply
      // generating 100% code coverage, we add this check.
      if (!position.coords) {
        reject(new Error('Should not happen, should not be covered'));
        return;
      }

      resolve(position.coords);
    }, reject, options);
  });
}
