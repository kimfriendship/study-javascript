// Date Constructor -------------------------------------------------------
// 1. new Date()
let date = new Date();
console.log(date); // 2020-03-26T10:56:58.146Z


// 2. new Date(milliseconds)
date = new Date(86400000);
console.log(date); // 1970-01-02T00:00:00.000Z


// 3. new Date(dqteString)
date = new Date('March 26, 2020 19:58:00');
console.log(date); // 2020-03-26T10:58:00.000Z

date = new Date('2020/03/29/20:00:05');
console.log(date); // 2020-03-29T11:00:05.000Z


// 4. new Dqte(year, month [, day, hour, minute, second, millisecond])
date = new Date(2020, 10);
console.log(date); // 2020-10-31T15:00:00.000Z

date = new Date(2020, 12, 24, 11, 59, 00, 15);
console.log(date); // 2021-01-24T02:59:00.015Z


// 5. Date()
date = Date();
console.log(typeof date, date); //string Thu Mar 26 2020 20:07:00 GMT+0900 (GMT+09:00)


// Date Methods -----------------------------------------------------------
// 1. Date.now
let now = Date.now();
console.log(now); // 1585220904644


// 2. Date.parse
now = Date.parse('Mar 3, 1990 00:00:00 UTC');
console.log(now); // 636422400000

now = Date.parse('2000/01/01/09:00:00');
console.log(now); // 946684800000


// 3. Date.UTC
now = Date.UTC(2010, 0, 10);
console.log(now); // 1263081600000


// 4. Date.prototype.getFullYear
now = new Date();
console.log(now.getFullYear()); // 2020


// 5. Date.prototype.setFullYear
now.setFullYear(2000);
console.log(now); // 2000-03-26T11:30:18.669Z

now.setFullYear(1900, 0, 1);
console.log(now); // 1900-01-01T12:03:09.183Z


// 6. Date.prototype.getMonth
console.log(now.getMonth()); // 0


// 7. Date.prototype.setMonth
now.setMonth(10);
console.log(now); // 1900-11-01T12:05:41.323Z

now.setMonth(10, 10);
console.log(now); // 1900-11-10T12:05:41.323Z


// 8. Date.prototype.getDate
console.log(now.getDate()); // 10


// 9. Date.prototype.setDate
now.setDate(30); 
console.log(now); // 1900-11-30T12:07:25.305Z


// 10. Date.prototype.getDay
console.log(now.getDay()); // 5 (Friday)


// 11. Date.prototype.getHours
console.log(now);
console.log(now.getHours()); // 20


// 12. Date.prototype.setHours
now.setHours(9);
console.log(now); // 1900-11-30T01:09:16.648Z

now.setHours(0, 0, 0, 0);
console.log(now);