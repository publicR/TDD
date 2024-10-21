function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    // Replace new lines with commas
    numbers = numbers.replace(/\n/g, ",");
    return numbers.split(",").reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = { add };
