///<reference path="../../Layer.ts"/>
///<reference path="ContextRedrawer.ts"/>
module Layers {
    export class RedrawableContext extends ContextDecorator {
        operationStack = [];
        redrawing = false;

        public redraw():void {
            ContextRedrawer.redraw(this, this.operationStack);
        }

        set lineWidth(lineWidth:number) {
            if (!this.redrawing && RedrawableContext.newValue(this.lineWidth, lineWidth))
                this.operationStack.push({operation: "set", handler: "lineWidth", value: lineWidth});

            super.setLineWidth(lineWidth);
        }

        public beginPath():void {
            this.operationStack.push({operation: "call", handler: "beginPath", value: undefined});

            super.beginPath();
        }

        public drawImage(image, sx:number, sy:number, sWidth?:number, sHeight?:number, dx?:number, dy?:number, dWidth?:number, dHeight?:number):void {
            this.operationStack.push({operation: "call", handler: "drawImage", value: arguments});

            super.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        }

        public lineTo(x:number, y:number):void {
            this.operationStack.push({operation: "call", handler: "lineTo", value: arguments});

            super.lineTo(x, y);
        }

        public moveTo(x:number, y:number):void {
            this.operationStack.push({operation: "call", handler: "moveTo", value: arguments});

            super.moveTo(x, y);
        }

        public setTransform(a:number, b:number, c:number, d:number, e:number, f:number):void {
            this.operationStack.push({operation: "call", handler: "setTransform", value: arguments});

            super.setTransform(a, b, c, d, e, f);
        }

        public stroke():void {
            this.operationStack.push({operation: "call", handler: "stroke", value: undefined});

            super.stroke();
        }

        private static newValue(oldVal, newVal):boolean {
            return oldVal !== newVal;
        }
    }
}