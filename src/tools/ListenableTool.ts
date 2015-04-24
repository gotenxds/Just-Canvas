
module Tools{
    export interface ListenableTool{
        addOnRenderListener(listener: Function);
        removeOnRenderListener(listener: Function);
    }
}