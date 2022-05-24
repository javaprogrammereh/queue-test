// Queue module
import { Queue } from "@craigbuckler/queue-mongodb";

// initialize queue named 'news'
const newsQ = new Queue("news");

let qItem;

do {
  qItem = await newsQ.receive();

  if (qItem) {
    console.log("\nreceive", qItem);

    // ... process qItem.data ...
    console.log(qItem.data.email);
  }
} while (qItem);

// number of items remaining in queue
console.log("items queued:", await newsQ.count());

await newsQ.close();


