const { returnTwo, greeting, add } = require("./functions.js");

test("Test should run and 2 should equal 2", () => {
	expect(returnTwo()).toBe(2);
});

describe("Greeting tests", () => {
	test("Greeting returns name James", () => {
		expect(greeting("James")).toBe("Hello, James.");
	});

	test("Greeting returns name Jill", () => {
		expect(greeting("Jill")).toBe("Hello, Jill.");
	});
});

describe("add tests", () => {
	test("1 and 2 equals 3", () => {
		expect(add(1, 2)).toBe(3);
	});

	test("5 and 9 equals 14", () => {
		expect(add(5, 9)).toBe(14);
	});
});
