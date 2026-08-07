function insertionSort(arr){
    // Loop through the array starting from the second element
    for(let i = 1; i < arr.length; i++){
        // Store the current element in a variable called key
        let key = arr[i];
        let j = i - 1; // Initialize j to the index of the previous element 
        // Move elements of arr[0..i-1], that are greater than key, to one position ahead of their current position
        while(j >= 0 && arr[j] > key){
            // Shift the element at index j to the right
            arr[j + 1] = arr[j];
            j--;
        }
        // Place the key in its correct position
        arr[j + 1] = key;
    }   
    return arr;
}

console.log(insertionSort([5,4,3,2,1]))