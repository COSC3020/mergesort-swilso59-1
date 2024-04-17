function mergesort(array) {
   
    // Get the length of the input array.
    const n = array.length;

    // Start loop for subarrays 
    for (let subArrSize = 1; subArrSize < n; subArrSize *= 2) {
        
        // Iterate over subarrays with the current size
        for (let leftStartIndex = 0; leftStartIndex < n; leftStartIndex += 2 * subArrSize) {
            
            // Calculate mid and right indices for merging
            const mid = Math.min(leftStartIndex + subArrSize - 1, n - 1);
            const rightEndIndex = Math.min(leftStartIndex + 2 * subArrSize - 1, n - 1);

            // Call the merge function for the current subarray
            merge(array, leftStartIndex, mid, rightEndIndex);
        }
    }

    // Merge function to combine two sorted subarrays
    function merge(array, left, mid, right) {
        let i = left;
        let j = mid + 1;

        while (i <= mid && j <= right) {
            
            // Compare elements and move them to a temporary array
            if (array[i] <= array[j]) {
                i++;
            } else {
                const temp = array[j];
                let k = j;

                // Shift elements to make space for the larger element
                while (k !== i) {
                    array[k] = array[k - 1];
                    k--;
                }

                // Insert the larger element into its correct position
                array[i] = temp;
                i++;
                mid++;
                j++;
            }
        }
    } 
    return array;
}

console.log(mergesort([4, 3, 8, 5, 9, 2, 5, 1, 7, 10, 8, 0, 3]));
