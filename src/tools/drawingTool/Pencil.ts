import JustCanvas from "../../JustCanvas";
import ChangeNotifyingContext from "../../layer/context/ChangeNotifyingContext";
import {DrawingTool, LineJoin} from "../tools";

export class Pencil extends DrawingTool {
    private isDrawing:boolean = false;

    constructor(color:string = "#000", lineJoin:LineJoin = LineJoin.round, lineWidth:number = 5) {
        super(color, lineJoin, lineWidth);
    }

    public registerEvents(canvas:JustCanvas) {
        canvas.addCanvasEventListener('mousedown', (e) => {
            var canvasOffset = canvas.getCanvasOffset();

            this.render(canvas.getContext, {x: e.pageX - canvasOffset.left, y: e.pageY - canvasOffset.top});
        });

        canvas.addCanvasEventListener('mousemove', (e) => {
            if (this.isDrawing) {
                var canvasOffset = canvas.getCanvasOffset();

                this.render(canvas.getContext, {x: e.pageX - canvasOffset.left, y: e.pageY - canvasOffset.top});
            }
        });

        canvas.addCanvasEventListener('mouseup', () => {
            this.isDrawing = false;
        });
        canvas.addCanvasEventListener('mouseleave', () => {
            this.isDrawing = false;
        });
    }

    public render(context:CanvasRenderingContext2D|ChangeNotifyingContext, location:{x:number; y:number}) {

        context.strokeStyle = this.color;
        context.lineJoin = LineJoin[this.lineJoin];
        context.lineWidth = this.lineWidth;

        if (!this.isDrawing) {
            context.beginPath();
            context.moveTo(location.x, location.y);
            this.isDrawing = true;
        } else {
            context.lineTo(location.x, location.y);
            context.stroke();
        }

        this.fireOnRender({location: location, color: this.color, lineJoin: this.lineJoin, lineWidth: this.lineWidth})
    }
}
