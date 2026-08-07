function quicksort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: an array of length 0 or 1 is already sorted
    }

    let pivot = arr[Math.floor(arr.length / 2)]; // Choose the middle element as the pivot
    let left = []; // Array to store elements less than the pivot
    let right = []; // Array to store elements greater than the pivot
    let equal = []; // Array to store elements equal to the pivot

    for (let element of arr) {
        if (element < pivot) {
            left.push(element);
        } else if (element > pivot) {
            right.push(element);
        } else {
            equal.push(element);
        }
    }

    // Recursively sort the left and right subarrays
    return [...quicksort(left), ...equal, ...quicksort(right)];
}

console.log(quicksort([5, 4, 3, 2, 1]));