function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        JSON.stringify({
          name: "Jon Snow",
          age: 30,
          email: "jonsnow@housestark.com",
        })
      );
    }, 1000);
  });
}


test("fetchData returns the correct data", () => {
  return expect(fetchData()).resolves.toBe(
    JSON.stringify({
      name: "Jon Snow",
      age: 30,
      email: "jonsnow@housestark.com",
    })
  );
});