
const { describe, expect } = require("@jest/globals")
const { fetchedData, employees } = require("../app/Async_Await_N1_E2")

describe('Test Async & await N1 E2', () => {
test('Data is printed', async () => {
    await expect(fetchedData()).resolves.toBe(employees);
});
})

