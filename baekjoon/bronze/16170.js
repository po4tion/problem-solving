const dateUTC = new Date();

console.log(dateUTC.getFullYear());
console.log(
    dateUTC.getMonth() + 1 < 10
        ? '0' + (dateUTC.getMonth() + 1)
        : dateUTC.getMonth() + 1,
);
console.log(
    dateUTC.getDate() < 10 ? '0' + dateUTC.getDate() : dateUTC.getDate(),
);
