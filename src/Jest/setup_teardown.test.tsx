// repeating setup

beforeEach(() => {
  //   initializeCityDatabase();
});

afterEach(() => {
  //   clearCityDatabase();
});

test("city database has Vienna", () => {
  //   expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  //   expect(isCity("San Juan")).toBeTruthy();
});


//onetime setup
beforeAll(() => {
//   return initializeCityDatabase();
});

afterAll(() => {
//   return clearCityDatabase();
});

test("city database has Vienna", () => {
//   expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
//   expect(isCity("San Juan")).toBeTruthy();
});



