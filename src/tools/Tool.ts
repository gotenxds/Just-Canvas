///<reference path="../JustCanvas.ts"/>

import JustCanvas = Main.JustCanvas;

module Tools{
    export interface Tool extends ListenableTool{

        render(context: CanvasRenderingContext2D, location);
        registerEvents(canvas: JustCanvas);
    }
}