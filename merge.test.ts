import { merge } from './merge';

test('merge two sorted arrays', () => {
    let array1 = [0, 1, 3];
    let array2 = [2, 4, 5];
    let merged = merge(array1, array2);
    expect(merged).toEqual([0, 1, 2, 3, 4, 5]);
});
