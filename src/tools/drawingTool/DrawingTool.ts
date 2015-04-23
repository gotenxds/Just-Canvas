/// <reference path="../Tool.ts" />
///<reference path="../LineJoin.ts"/>

module Tools {
    export class DrawingTool implements Tool{
        protected color: string;
        protected lineJoin: LineJoin;
        protected lineWidth: number;

        constructor(color: string = "#000", lineJoin: LineJoin = LineJoin.round, lineWidth:number = 5) {
            this.color = color;
            this.lineJoin = lineJoin;
            this.lineWidth = lineWidth;
        }

        render(context: CanvasRenderingContext2D, location){
            throw new Error('This method is abstract');
        }
        registerEvents(canvas: JustCanvas){
            throw new Error('This method is abstract');
        }
    }
}