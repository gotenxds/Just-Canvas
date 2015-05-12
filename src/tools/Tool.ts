import ChangeNotifyingContext from "../layer/context/ChangeNotifyingContext";
import JustCanvas from "../JustCanvas";

export interface Tool {
    render(context:CanvasRenderingContext2D|ChangeNotifyingContext, location);
    registerEvents(canvas:JustCanvas);
}