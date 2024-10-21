function add(numbers) {
    if (numbers === "") {
        return 0;
    } else if (numbers.includes(",")) {
        return numbers.split(",").reduce((sum, num) => sum + parseInt(num), 0);
    }
    return parseInt(numbers);
}

module.exports = { add };
