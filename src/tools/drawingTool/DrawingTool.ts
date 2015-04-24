/// <reference path="../Tool.ts" />
///<reference path="../LineJoin.ts"/>
///<reference path="../ListenableTool.ts"/>

module Tools {
    export class DrawingTool implements Tool{
        protected color: string;
        protected lineJoin: LineJoin;
        protected lineWidth: number;
        protected onRenderListeners = [];

        constructor(color: string = "#000", lineJoin: LineJoin = LineJoin.round, lineWidth:number = 5) {
            this.color = color;
            this.lineJoin = lineJoin;
            this.lineWidth = lineWidth;
        }

        render(context: CanvasRenderingContext2D, location){
            throw new Error('This method is abstract');
        }
        addOnRenderListener(listener: Function){
            this.onRenderListeners.push(listener);
        }
        removeOnRenderListener(listener: Function){
            var index = this.onRenderListeners.indexOf(listener);

            if (index > -1) {
                this.onRenderListeners.splice(index, 1);
            }
        }
        registerEvents(canvas: JustCanvas){
            throw new Error('This method is abstract');
        }

        protected fireOnRender(eventArgs: {location: {x:number; y:number}; color:string; lineJoin: LineJoin; lineWidth: number}){
            this.onRenderListeners.forEach(listener => listener(eventArgs))
        }
    }
}