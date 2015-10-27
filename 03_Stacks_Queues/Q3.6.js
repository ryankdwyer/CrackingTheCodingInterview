function sortStack(stack) {
    var temp;
    var check = true;
    var sorted = [];
    while (stack.length) {
        temp = stack.pop();
        while (check) {
            if (sorted.length === 0) {
                check = false;
            } else if (sorted[sorted.length - 1] >= temp) {
                check = false;
            } else {
                stack.push(sorted.pop());
            }
        }
        sorted.push(temp);
        check = true;
    }
    return sorted;
}
