import {Tool} from "./tools";

export interface ListenableTool extends Tool {
    addOnRenderListener(listener:Function);
    removeOnRenderListener(listener:Function);
}