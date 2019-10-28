const { Storage } = require("@google-cloud/storage");

const storage = new Storage();
const bucketName = "nakagawa-files";

async function createBucket() {
  await storage.createBucket(bucketName);
  console.log(`Bucket ${bucketName} created!`);
}

createBucket();
