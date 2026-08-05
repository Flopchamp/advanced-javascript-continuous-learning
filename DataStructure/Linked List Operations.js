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
  const node = { element, next: null };

  if (isEmpty(list)) {
    list.head = node;
  } else {
    let current = list.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  list.length++;
}

function remove(list, element) {
  let previous = null;
  let current = list.head;

  while (current !== null && current.element !== element) {
    previous = current;
    current = current.next;
  }

  if (current === null) return;

  if (previous !== null) {
    previous.next = current.next;
  } else {
    list.head = current.next;
  }

  list.length--;
}

function contains(list, element) {
  let current = list.head
  while(current){
    
    if(current !== null &&current.element === element){
      return true 
    }
    current = current.next
  }
  return false;
}

function getAt(list, index) {
  if(index < 0 || index >= list.length){
    return undefined
  }
 let current = list.head
 let count = 0;
 while(current !==null && count < index){
  current = current.next
  count ++
 }
 return current.element
}

function insertAt(list, index, element) {
  if(index < 0 || index > list.length){
    return false
  }
  const node ={element,next:null}
  let current = list.head
  if(index===0){
   node.next = list.head;
    list.head = node;
  }else if(index > 0){
    let count = 0;
    while(count < index - 1){
      current = current.next;
      count ++
    }
    node.next =current.next;
    current.next = node

  }
  list.length ++
    return true
}


function removeAt(list, index) {
 if(index <0 || index >= list.length ){
  return null
 }
 let current = list.head;
  let removedElement
 if(index===0){
  removedElement = list.head.element;
  list.head = list.head.next;
 }else if(index >0){
  let count =0
  while(count < index -1){
    current = current.next
    count++
  }
  removedElement = current.next.element;;
  current.next = current.next.next
 }
 list.length--
 return removedElement
}

function clear(list) {
list.head =null;
list.length =0;
}