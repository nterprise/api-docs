/**
 * @fileOverview Sort object by keys
 */

module.exports.sortObjectKeys = (obj) => Object.keys(obj).
    sort().
    reduce(
        (accumulator, currentValue) => {
            accumulator[currentValue] = obj[currentValue];
            return accumulator;
        },
        {},
    );
