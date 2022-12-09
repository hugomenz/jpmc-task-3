import { ServerRespond } from "./data-streamer.interfaces";

export interface IState {
    data: ServerRespond[],
    showGraph: boolean,
  }