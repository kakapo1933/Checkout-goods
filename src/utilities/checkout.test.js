import checkout from "./checkout.js";

const mockDatabase = {
  "products": {
    "001": {
      "name": "Cola",
      "price": 45
    },
    "002": {
      "name": "Royal",
      "price": 50
    },
    "003": {
      "name": "Sprite",
      "price": 55
    },
    "004": {
      "name": "Fanta",
      "price": 60
    },
    "005": {
      "name": "Lemon Tea",
      "price": 35
    }
  }
}

describe("Checkout", () => {
  it("Should get 0 if nothing is purchased", () => {
    expect(checkout([], mockDatabase)).toBe(0);
  });
  
  it("Should throw error if productIDs is not an array", () => {
    expect(() => checkout("001", mockDatabase)).toThrow("Product IDs must be an array");
  });

  it("Should get 232.5 if productIDs are ['003', '002', '003', '003', '004']", () => {
    expect(checkout(["003", "002", "003", "003", "004"], mockDatabase)).toBe(232.5);
  });

  it("Should get 45 if productIDs are ['001']", () => {
    expect(checkout(["001"], mockDatabase)).toBe(45);
  });

  it("Should get 50 if productIDs are ['002']", () => {
    expect(checkout(["002"], mockDatabase)).toBe(50);
  });

  it("Should get 55 if productIDs are ['003']", () => {
    expect(checkout(["003"], mockDatabase)).toBe(55);
  });

  it("Should get 60 if productIDs are ['004']", () => {
    expect(checkout(["004"], mockDatabase)).toBe(60);
  });

  it("Should get 35 if productIDs are ['005']", () => {
    expect(checkout(["005"], mockDatabase)).toBe(35);
  });

  it("Should get 227.5 if productIDs are ['003', '004', '003', '003', '004']", () => {
    expect(checkout(["003", "004", "003", "003", "004"], mockDatabase)).toBe(227.5);
  });

  it("Should get 140 if productIDs are ['005', '005', '005', '005', '005']", () => {
    expect(checkout(["005", "005", "005", "005", "005"], mockDatabase)).toBe(140);
  });

  it("Should get 220 if productIDs are ['001', '002', '003', '004', '005']", () => {
    expect(checkout(["001", "002", "003", "004", "005"], mockDatabase)).toBe(220);
  });
});
