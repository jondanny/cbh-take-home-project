const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it('returns the event.partitionKey if it exists', () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "1234" })
    expect(trivialKey).toEqual("1234")
  })

  it('returns the sha3-512 hash of the JSON representation of the event if event.partitionKey does not exist', () => {
    const trivialKey = deterministicPartitionKey({ name: "John", age: 30 })
    expect(trivialKey).toEqual(expect.any(String))
  })

  it('returns the JSON representation of candidate if it is not a string', () => {
    const trivialKey = deterministicPartitionKey(12345)
    expect(trivialKey).toEqual(expect.any(String))
  })

  it('returns the sha3-512 hash of candidate if its length is greater than 256', () => {
    const longString = "a".repeat(257)
    const trivialKey = deterministicPartitionKey(longString)
    expect(trivialKey).toEqual(expect.any(String))
  })
});
