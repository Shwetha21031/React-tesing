test("returns undefined by default", () => {
  const mock = jest.fn();
  let result = mock("foo");
  mock('baz')
  // mock('abc')
  expect(result).toBeUndefined();
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith("foo");
  // expect(mock).toHaveBeenLastCalledWith('abc')
  expect(mock).toHaveBeenCalledTimes(2);
});

test("mock implementation", () => {
  const mock = jest.fn((a) => "bar");
  expect(mock("foo")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");
});

test("also mock implementation", () => {
  const mock = jest.fn().mockImplementation(() => "bar");
  expect(mock("foo")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");
});

test("mock implementation one time", () => {
  const mock = jest.fn().mockImplementationOnce(() => "bar");
  expect(mock("foo")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");
  expect(mock("baz")).toBe(undefined);
  expect(mock).toHaveBeenCalledWith("baz");
});

test("mock return value", () => {
  const mock = jest.fn();
  mock.mockReturnValue("bar");
  expect(mock("foo")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");
});

test("mock promise resolution", () => {
  const mock = jest.fn();
  mock.mockResolvedValue("bar");
  expect(mock("foo")).resolves.toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");
});


