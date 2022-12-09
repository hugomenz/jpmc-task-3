import { RowApiToVm } from "../interfaces/data-manipulator.interfaces";
import { ServerRespond } from "../interfaces/data-streamer.interfaces";

export class DataManipulator {
  static generateRow(serverRespond: ServerRespond[]): RowApiToVm {
    // to calculate ratio we need the mean prices of the stocks
    const priceStockABC = (serverRespond[0].top_ask.price + serverRespond[0].top_bid.price) / 2;
    const priceStockDEF = (serverRespond[1].top_ask.price + serverRespond[1].top_bid.price) / 2;
    const ratio = priceStockABC / priceStockDEF;

    const boundTop = 1 + 0.05;
    const boundBottom = 1 - 0.05;

    const triggerCondition = ratio < boundBottom || ratio > boundTop 

    return {
        price_abc: priceStockABC,
        price_def: priceStockDEF,
        ratio,
        timestamp: serverRespond[0].timestamp > serverRespond[1].timestamp ?
            serverRespond[0].timestamp : serverRespond[1].timestamp,
        upper_bound: boundTop,
        lower_bound: boundBottom,
        trigger_alert: triggerCondition ? ratio : undefined,
    };
}
}
