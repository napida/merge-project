export function merge(collection_1: number[], collection_2: number[]): number[] {
    let merged: number[] = [];
    let i = 0, j = 0;
    let n1 = collection_1.length, n2 = collection_2.length

    while (i < n1 && j < n2) {
        if (collection_1[i] < collection_2[j]) {
            merged.push(collection_1[i++]);
        } else {
            merged.push(collection_2[j++]);
        }
    }

    while (i < n1) {
        merged.push(collection_1[i++]);
    }

    while (j < n2) {
        merged.push(collection_2[j++]);
    }

    return merged;
}
