import checkout from "./checkout.js";

describe("Checkout", () => {
  it("Should get 0 if nothing is purchased", () => {
    expect(checkout([])).toBe(0);
  });
  
  it("Should throw error if productIDs is not an array", () => {
    expect(() => checkout("001")).toThrow("Product IDs must be an array");
  });

  it("Should get 232.5 if productIDs are ['003', '002', '003', '003', '004']", () => {
    expect(checkout(["003", "002", "003", "003", "004"])).toBe(232.5);
  });

  it("Should get 45 if productIDs are ['001']", () => {
    expect(checkout(["001"])).toBe(45);
  });

  it("Should get 50 if productIDs are ['002']", () => {
    expect(checkout(["002"])).toBe(50);
  });

  it("Should get 55 if productIDs are ['003']", () => {
    expect(checkout(["003"])).toBe(55);
  });

  it("Should get 60 if productIDs are ['004']", () => {
    expect(checkout(["004"])).toBe(60);
  });

  it("Should get 35 if productIDs are ['005']", () => {
    expect(checkout(["005"])).toBe(35);
  });

  it("Should get 227.5 if productIDs are ['003', '004', '003', '003', '004']", () => {
    expect(checkout(["003", "004", "003", "003", "004"])).toBe(227.5);
  });

  it("Should get 140 if productIDs are ['005', '005', '005', '005', '005']", () => {
    expect(checkout(["005", "005", "005", "005", "005"])).toBe(140);
  });

  it("Should get 220 if productIDs are ['001', '002', '003', '004', '005']", () => {
    expect(checkout(["001", "002", "003", "004", "005"])).toBe(220);
  });
});
