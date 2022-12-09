import { Table } from "@finos/perspective";
import { ServerRespond } from "./data-streamer.interfaces";

export interface IProps {
    data: ServerRespond[],
}

export interface PerspectiveViewerElement extends HTMLElement {
    load: (table: Table) => void,
}