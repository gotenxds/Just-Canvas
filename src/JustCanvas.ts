module Main{
    export class JustCanvas{
        private canvas;
        private context;
        private isPainting = false;
        private isMouseDown = false;

        constructor(divId = 'just-canvas', canvasWidth = '500px', canvasHeight = '500px') {
            var canvasDiv = document.getElementById(divId);
            this.canvas = document.createElement('canvas');
            this.canvas.setAttribute('width', canvasWidth);
            this.canvas.setAttribute('height', canvasHeight);
            this.canvas.setAttribute('id', 'canvas');
            canvasDiv.appendChild(this.canvas);

            this.context = this.canvas.getContext("2d");

            this.initializeCanvasEvents();
        }

        private initializeCanvasEvents() : void {
            this.addCanvasEventListener('mousedown', (e) => {
                this.isMouseDown = true;
                var canvasOffset = this.getCanvasOffset();

                this.drawOn(e.pageX - canvasOffset.left, e.pageY - canvasOffset.top);
            });

            this.addCanvasEventListener('mousemove', (e) => {
                if(this.isPainting){
                    var canvasOffset = this.getCanvasOffset();

                    this.drawOn(e.pageX - canvasOffset.left, e.pageY - canvasOffset.top);
                }
            });

            this.addCanvasEventListener('mouseup', () => {this.isPainting = this.isMouseDown = false;});
            this.addCanvasEventListener('mouseleave', () => {this.isPainting = this.isMouseDown = false;});
        }

        private getCanvasOffset(){
            return {left: this.canvas.offsetLeft, top: this.canvas.offsetTop}
        }

        private drawOn(x: number, y:number){
            this.context.strokeStyle = "#df4b26";
            this.context.lineJoin = "round";
            this.context.lineWidth = 1;

            if(!this.isPainting){
                this.context.beginPath();
                this.context.moveTo(x, y);
                this.isPainting = true;
            }else{
                this.context.lineTo(x, y);
                this.context.stroke();
            }
        }

        public addCanvasEventListener(type: string, handler: Function){
            return this.canvas.addEventListener(type, handler);
        }
    }
}