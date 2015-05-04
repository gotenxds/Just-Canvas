///<reference path="../Layer.ts"/>
module Layers{
    export class ContextDecorator{
        private _layer:Layer;
        private context:CanvasRenderingContext2D;

        constructor(layer:Layer, context:any){
            this._layer = layer;
            this.context = context;
        }

        get strokeStyle(){
            return this.context.strokeStyle;
        }
        set strokeStyle(strokeStyle:string){
            this.context.strokeStyle = strokeStyle;
        }
        get lineJoin(){
            return this.context.lineJoin;
        }
        get canvas(){
            return this.layer.canvas;
        }
        set lineJoin(lineJoin:string){
            this.context.lineJoin = lineJoin;
        }
        public get lineWidth(){
            return this.context.lineWidth;
        }
        public set lineWidth(lineWidth:number){
            this.context.lineWidth = lineWidth;
        }

        // Typescript yet supports super on accessors so I'm using this java style accessor (Sorry).
        public setLineWidth(lineWidth:number){
            this.lineWidth = lineWidth;
        }

        get layer(){
            return this._layer;
        }

        public arc(x:number, y:number, radius:number, startAngle:number, endAngle:number, anticlockwise?:boolean):void{
            this.context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        }

        public arcTo(x1:number, y1:number, x2:number, y2:number, radius:number):void{
            this.context.arcTo(x1, y1, x2, y2, radius);
        }

        public beginPath():void{
            this.context.beginPath();
        }

        public bezierCurveTo(controlPoint1x:number, controlPoint1y:number, controlPoint2x:number, controlPoint2y:number, x:number, y:number):void{
            this.context.bezierCurveTo(controlPoint1x, controlPoint1y, controlPoint2x, controlPoint2y, x, y);
        }

        public clearRect(x:number, y:number, width:number, height:number):void{
            this.context.clearRect(x, y, width, height);
        }

        public clip(path?, fillRule?:string):void{
            this.context.clip(path, fillRule);
        }

        public closePath():void{
            this.context.closePath();
        }

        public createImageData(imageData:any, width?:number, height?:number):ImageData{
            return this.context.createImageData(imageData, width, height);
        }

        public createLinearGradient(x0:number, y0:number, x1:number, y1:number):CanvasGradient{
            return this.context.createLinearGradient(x0, y0, x1, y1);
        }

        public createPattern(image, repetition:string):CanvasPattern{
            return this.context.createPattern(image, repetition);
        }

        public createRadialGradient(x0:number, y0:number, r0:number, x1:number, y1:number, r1:number):CanvasGradient{
            return this.context.createRadialGradient(x0, y0, r0, x1, y1, r1);
        }

        public drawFocusIfNeeded(path, element?):void{
            return this.context.drawFocusIfNeeded(path, element);
        }

        public drawImage(image, sx:number, sy:number, sWidth?:number, sHeight?:number, dx?:number, dy?:number, dWidth?:number, dHeight?:number):void{
            if(dHeight !== undefined){
                this.context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
            }else if (sHeight !== undefined){
                this.context.drawImage(image, sx, sy, sWidth, sHeight);
            }else{
                this.context.drawImage(image, sx, sy);
            }
        }

        public fill(path?, fillRule?:string):void{
            this.context.fill(path, fillRule);
        }

        public fillRect(x:number, y:number, width:number, height:number):void{
            this.context.fillRect(x, y, width, height);
        }

        public fillText(text:string, x:number, y:number , maxWidth?:number):void{
            this.context.fillText(text, x, y , maxWidth);
        }

        public getImageData(sx, sy, sw, sh):ImageData{
            return this.context.getImageData(sx, sy, sw, sh);
        }

        public getLineDash():number[]{
            return this.context.getLineDash();
        }

        public isPointInPath(x:number, y:number, fillRule?:string):boolean{
            return this.context.isPointInPath(x, y, fillRule);
        }

        public isPointInStroke(x:number, y:number):boolean{
            return this.context.isPointInStroke(x, y);
        }

        public lineTo(x:number, y:number):void{
            this.context.lineTo(x, y);
        }

        public measureText(text:string):TextMetrics{
            return this.context.measureText(text);
        }

        public moveTo(x:number, y:number):void{
            this.context.moveTo(x, y);
        }

        public putImageData(imagedata:ImageData, dx:number, dy:number, dirtyX?:number, dirtyY?:number, dirtyWidth?:number, dirtyHeight?:number):void{
            if(dirtyHeight !== undefined){
                this.context.putImageData(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight);
            }else if(dirtyY !== undefined){
                this.context.putImageData(imagedata, dx, dy, dirtyX, dirtyY);
            }else{
                this.context.putImageData(imagedata, dx, dy);
            }
        }

        public quadraticCurveTo(cpx:number, cpy:number, x:number, y:number):void{
            this.context.quadraticCurveTo(cpx, cpy, x, y);
        }

        public rect(x:number, y:number, width:number, height:number):void{
            this.context.rect(x, y , width, height);
        }

        public restore():void{
            this.context.restore();
        }

        public rotate(angle:number):void{
            this.context.rotate(angle);
        }

        public save():void{
            this.context.save();
        }

        public scale(x:number, y:number):void{
            this.context.scale(x, y)
        }

        public setLineDash(segments:number[]):void{
            this.context.setLineDash(segments);
        }

        public setTransform(a:number, b:number, c:number, d:number, e:number, f:number):void{
            this.context.setTransform(a, b, c, d, e, f);
        }

        public stroke():void{
            this.context.stroke();
        }

        public strokeRect(x:number, y:number, width:number, height:number):void{
            this.context.strokeRect(x, y, width, height);
        }

        public strokeText(text:string, x:number, y:number , maxWidth?:number):void{
            this.context.strokeText(text, x, y, maxWidth);
        }

        public transform(a:number, b:number, c:number, d:number, e:number, f:number):void{
            this.context.transform(a, b, c, d, e, f);
        }

        public translate(x:number, y:number):void{
            this.context.translate(x, y);
        }
    }
}