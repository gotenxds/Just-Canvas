///<reference path="../JustCanvas.ts"/>

import JustCanvas = Main.JustCanvas;

module Tools{
    export interface Tool{

        render(context: CanvasRenderingContext2D, location)
        registerEvents(canvas: JustCanvas)
    }
}