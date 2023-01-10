import { operadors } from "../app/operadors";


test('Sum calculator data is correct', () => {
    const result = operadors.sum(1, 2);
    expect(result).toBe(3);
})
test('Sum calculator data is not a number ', () => {
    const result = operadors.sum(1, 'a');
    expect(result).toStrictEqual('All input data should be a number')
})

test('Rest calculator', () => {
    const result = operadors.rest(1, 2);
    expect(result).toBe(-1);
})
test('Rest calculator data is not a number ', () => {
    const result = operadors.rest(1, 'a');
    expect(result).toStrictEqual('All input data should be a number')
})
test('Mult calculator', () => {
    const result = operadors.mult(1, 2);
    expect(result).toBe(2);
})
test('Mult calculator data is not a number ', () => {
    const result = operadors.mult(1, 'a');
    expect(result).toStrictEqual('All input data should be a number')
})
test('Div calculator', () => {
    const result = operadors.div(1, 2);
    expect(result).toBe(0.5);
})
test('Div calculator data is not a number ', () => {
    const result = operadors.div(1, 'a');
    expect(result).toStrictEqual('All input data should be a number')
})

test('Any of the Div calculator data is not a 0 ', () => {
    const result = operadors.div(2,0);
    expect(result).toStrictEqual('You can not divide between 0')
})