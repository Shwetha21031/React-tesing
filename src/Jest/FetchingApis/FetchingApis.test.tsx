const api1 = {
  name: "abc",
  desig: "trainee",
};

const api2 = {
  name: "def",
  desig: "senior",
};


describe("fetching apis", () => {
  it("fetchig api1 by mocking", () => {
    const mockedapi1 = jest.fn(() =>
      Promise.resolve({
        data: {
          name: "abc",
          desig: "trainee",
        },
        statusCode: 200,
      })
    );

    // const statuscode = mockedapi1().then(res=>res.statusCode)
    // expect(statuscode).toBe(200)
    const result1 = mockedapi1().then((res) => res.data);
    expect(result1).resolves.toEqual(api1);
  });

  it("fetchig api2 by mocking", () => {
    const mockedapi2 = jest.fn(() =>
      Promise.resolve({
        data: {
          name: "def",
          desig: "senior",
        },
        statusCode: 200,
      })
    );

    const result2 = mockedapi2().then((res) => res.data);
    expect(result2).resolves.toEqual(api2);
  });

  it("for rejected api response", () => {
    const mockedapi3 = jest.fn(() =>
      Promise.reject(new Error("meow, something went wrong"))
    );

    const result3 = mockedapi3().catch((error) => {
      throw new Error(error.message);
    });

    expect(result3).rejects.toThrow("meow, something went wrong");
  });

});
