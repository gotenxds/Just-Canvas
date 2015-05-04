///<reference path="../ListenableTool.ts"/>
///<reference path="../../utils/MouseWheelEventSupport.ts"/>

import MouseWheelEventSupport = Utils.MouseWheelEventSupport;

module Tools {
    export class Zoom implements ListenableTool {
        private canvas:Main.JustCanvas;

        registerEvents(canvas:Main.JustCanvas) {
            this.canvas = canvas;
            canvas.addCanvasEventListener(MouseWheelEventSupport.get(), (e) => {
                this.render(canvas.getContext, e)
            })
        }

        render(context:any, location) {
            var factor = location.wheelDelta > 0 ? 1.1 : 0.9;

            this.canvas.layers.getAll().forEach(layer => {
                layer.context.clearRect(0, 0, 500, 500);
                layer.context.transform(factor, 0, 0, factor, 0, 0);
//                layer.context.setTransform(1, 0, 0, 1, 0, 0);
                layer.redraw();
            });

        }

        addOnRenderListener(listener:Function) {
        }

        removeOnRenderListener(listener:Function) {
        }
    }
}