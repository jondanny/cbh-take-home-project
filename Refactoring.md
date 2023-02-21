# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

After analyzing the original code, I made the following changes to make it more readable and clean:

- Replaced if-else statements with ternary operators when possible to make the code more concise
- Extracted constant values outside of the function to make them reusable and easier to understand
- Removed redundant conditional statements and unnecessary variable assignments
- Changed the variable name "candidate" to "partitionKey" to make it more descriptive

```
const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

exports.deterministicPartitionKey = (event) => {
  const partitionKey = event?.partitionKey || crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");

  return (typeof partitionKey === "string" ? partitionKey : JSON.stringify(partitionKey)).substring(0, MAX_PARTITION_KEY_LENGTH) || TRIVIAL_PARTITION_KEY;
};
```

The original code was already pretty concise, so my main goal was to make the code easier to read and understand. By extracting constants outside of the function and removing redundant conditional statements, I was able to make the code more straightforward and less cluttered. By replacing if-else statements with ternary operators, I was able to reduce the amount of code without sacrificing readability. Finally, by changing the variable name "candidate" to "partitionKey", I was able to make the code more descriptive and easier to understand. Overall, my refactored version is more readable than the original because it's easier to understand at a glance and has fewer lines of code.
