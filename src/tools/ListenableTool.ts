///<reference path="Tool.ts"/>

module Tools{
    export interface ListenableTool extends Tool{
        addOnRenderListener(listener: Function);
        removeOnRenderListener(listener: Function);
    }
}