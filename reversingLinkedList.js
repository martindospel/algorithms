//reversing a singly linked list

const reverseList = (head) => {
    let previous = null;
    let next = null;
    while (head != null) {
        next = head.next;
        head.next = previous;
        previous = head;
        head = next;
    }
    return previous;
};
