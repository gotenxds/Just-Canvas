///<reference path="ChangeNotifyingContext.ts"/>
///<reference path="RedrawableContext/RedrawableContext.ts"/>
///<reference path="../../mixin/Mixin.ts"/>
module Layers {
    export class JustContext implements ChangeNotifyingContext, RedrawableContext {
        listeners:Function[];
        operationStack = [];
        redrawing = false;

        public addChangeListener:(listener:Function) => void;
        public removeChangeListener:(listener:Function) => void;
        public fireChange:(args:any) => void;
        public redraw:() => void;
    }

    Mixin.applyMixins(JustContext, [ChangeNotifyingContext, RedrawableContext]);
}