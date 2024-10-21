function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        const delimiter = parts[0].slice(2);
        numbers = parts[1].replace(new RegExp(delimiter, 'g'), ",");
    } else {
        numbers = numbers.replace(/\n/g, ",");
    }

    return numbers.split(",").reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = { add };
