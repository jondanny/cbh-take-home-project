const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

exports.deterministicPartitionKey = (event) => {
  const partitionKey = event?.partitionKey || crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");

  return (typeof partitionKey === "string" ? partitionKey : JSON.stringify(partitionKey)).substring(0, MAX_PARTITION_KEY_LENGTH) || TRIVIAL_PARTITION_KEY;
};