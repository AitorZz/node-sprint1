import { fetchedData, employees } from "../app/Async_Await_N1_E2";

test('Data is printed', async () => {
    await expect(fetchedData()).resolves.toBe(employees);
});

