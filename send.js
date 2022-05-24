// Queue module
import { Queue } from '@craigbuckler/queue-mongodb';

// initialize queue named 'news'
const newsQ = new Queue('news');

// random name
const name = String.fromCharCode(65 + Math.random() * 26).repeat(1 + Math.random() * 10);

// add object to queue
const send = await newsQ.send({
  name:     name,
  email:    `${ name.toLowerCase() }@test.com`,
  date:     new Date(),
  message:  `Hey there, ${ name }!`
});

console.log('send', send);

// get number of items remaining in queue
console.log('items queued:', await newsQ.count());

// close connection and quit
await newsQ.close();