import { getEmployee } from "../app/P&C_N2_E1";

test('Number introduced is employee 1', () => {
    return getEmployee(1).then(data => {
        expect(data).toStrictEqual({'id': 1,'name': 'Linux Torvalds'});
    });
});

test('Number introduced is employee 2', () => {
    return getEmployee(2).then(data => {
        expect(data).toStrictEqual({ "id": 2, "name": "Bill Gates" });
    });
});

test('Number introduced is employee 3', () => {
    return getEmployee(3).then(data => {
        expect(data).toStrictEqual({'id': 3,'name': 'Jeff Bezos'});
    });
});

test('Data introduced is not a number', () => {
    return getEmployee().catch(data => {
        expect(data).toStrictEqual('This Id does not exist.');
    });
});
