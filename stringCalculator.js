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

    const nums = numbers.split(",");
    const negatives = nums.filter(num => parseInt(num) < 0);

    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(', ')}`);
    }

    return nums.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = { add };
