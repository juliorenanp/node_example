//Common Js (require/exports)
const os = require('os');
const{freemem, totalmem} = os;


const total = parseInt(totalmem() / 1024 / 1024);
const mem = parseInt(freemem()/1024/1024)
const percents = parseInt((mem/total) * 100);

// console.log( ` ${parseInt(freemem()/1024/1024)} MB`, `${parseInt(totalmem() / 1024 / 1024)} MB`);
 const stats ={
     free: `${mem}MB`,
     total: `${total}MB`,
     usage: `${percents}%`,
 } 

console.log('=== PC STATS ===')
console.table(stats);



