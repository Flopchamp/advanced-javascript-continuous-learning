function initList() {
    return {
        head: null,
        length: 0
    };
}

function isEmpty(list) {
  return list.length === 0;
}

function add(list, element) {
    // Create a new node with the given element
    const node = {
        element: element,
        next: null
    };

    if (isEmpty(list)) {
        list.head = node;
    } else {
        // Traverse to the end of the list and add the new node
        let current = list.head;
        // Find the last node
        while (current.next !== null) {
            current = current.next;
        }
        current.next = node;
    }

    list.length++;
}

function remove(list, element) {
    // Check if the list is empty
    if (isEmpty(list)) {
        return;
    }
// Initialize pointers to traverse the list
    let previous = null;
    let current = list.head;
// Traverse the list to find the node to remove
    while (current !== null && current.element !== element) {
        previous = current;
        current = current.next; 
    }
// If the element is not found, return
    if (current === null) {
        return;
    }
// Remove the node by updating the next pointer of the previous node
    if(previous !== null) {
        previous.next = current.next;
    } else {
        list.head = current.next;
    }
// Decrease the length of the list
    list.length--;
    
}

const myList = initList();
console.log(isEmpty(myList));
add(myList, 42);
add(myList, 43);
add(myList, 44);
console.log(myList);
console.log(isEmpty(myList));
remove(myList,42)
console.log(JSON.stringify(myList, null, 2))