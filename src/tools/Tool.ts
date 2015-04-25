///<reference path="../JustCanvas.ts"/>
///<reference path="../layer/context/ChangeNotifyingContext.ts"/>
import ChangeNotifyingContext = Layers.ChangeNotifyingContext;
import JustCanvas = Main.JustCanvas;

module Tools{
    export interface Tool extends ListenableTool{
        render(context: CanvasRenderingContext2D|ChangeNotifyingContext, location);
        registerEvents(canvas: JustCanvas);
    }
}