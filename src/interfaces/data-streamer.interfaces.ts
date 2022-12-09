export interface Order {
    price: number,
    size: number,
  }
  export interface ServerRespond {
    stock: string,
    top_bid: Order,
    top_ask: Order,
    timestamp: Date,
  }