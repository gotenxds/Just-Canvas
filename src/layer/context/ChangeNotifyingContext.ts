///<reference path="../Layer.ts"/>
module Layers{
    export class ChangeNotifyingContext{
        private layer:Layer;
        private listeners: Function[] = [];
        private context:CanvasRenderingContext2D;

        constructor(layer:Layer, context:CanvasRenderingContext2D){
            this.layer = layer;
            this.context = context;
        }

        public addChangeListener(listener: Function){
            this.listeners.push(listener);
        }

        public removeChangeListener(listener: Function){
            this.listeners.push(this.listeners[this.listeners.indexOf(listener)]);
        }

        public fireChange(args){
            this.listeners.forEach(listener => listener(args));
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
        set lineJoin(lineJoin:string){
            this.context.lineJoin = lineJoin;
        }
        get lineWidth(){
            return this.context.lineWidth;
        }
        set lineWidth(lineWidth:number){
            this.context.lineWidth = lineWidth;
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
            this.fireChange({layer:this.layer, arguments: arguments, methodName: 'drawImage'});

            if(dHeight !== undefined){
                this.context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
            }else if (sHeight !== undefined){
                this.context.drawImage(image, sx, sy, sWidth, sHeight);
            }else{
                this.context.drawImage(image, sx, sy);
            }
        }

        public fill(path?, fillRule?:string):void{
            this.fireChange({layer:this.layer, arguments: arguments, methodName: 'drawImage'});

            this.context.fill(path, fillRule);
        }

        public fillRect(x:number, y:number, width:number, height:number):void{
            this.fireChange({layer:this.layer, arguments: arguments, methodName: 'drawImage'});

            this.context.fillRect(x, y, width, height);
        }

        public fillText(text:string, x:number, y:number , maxWidth?:number):void{
            this.fireChange({layer:this.layer, arguments: arguments, methodName: 'drawImage'});

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
            this.context.putImageData(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight);
        }

        public quadraticCurveTo(cpx:number, cpy:number, x:number, y:number):void{
            this.context.quadraticCurveTo(cpx, cpy, x, y);
        }

        public rect(x:number, y:number, width:number, height:number):void{
            this.context.rect(x, y , width, height);
        }

        public restore():void{
            this.fireChange({layer:this.layer, arguments: arguments, methodName: 'drawImage'});

            this.context.restore();
        }

        public rotate(angle:number):void{
            this.fireChange({layer:this.layer, arguments: arguments, methodName: 'drawImage'});

            this.context.rotate(angle);
        }

        public save():void{
            this.context.save();
        }

        public scale(x:number, y:number):void{
            this.fireChange({layer:this.layer, arguments: arguments, methodName: 'drawImage'});

            this.context.scale(x, y)
        }

        public setLineDash(segments:number[]):void{
            this.context.setLineDash(segments);
        }

        public setTransform(a:number, b:number, c:number, d:number, e:number, f:number):void{
            this.fireChange({layer:this.layer, arguments: arguments, methodName: 'drawImage'});

            this.context.setTransform(a, b, c, d, e, f);
        }

        public stroke():void{
            this.fireChange({layer:this.layer, arguments: arguments, methodName: 'drawImage'});

            this.context.stroke();
        }

        public strokeRect(x:number, y:number, width:number, height:number):void{
            this.fireChange({layer:this.layer, arguments: arguments, methodName: 'drawImage'});

            this.context.strokeRect(x, y, width, height);
        }

        public strokeText(text:string, x:number, y:number , maxWidth?:number):void{
            this.fireChange({layer:this.layer, arguments: arguments, methodName: 'drawImage'});

            this.context.strokeText(text, x, y, maxWidth);
        }

        public transform(a:number, b:number, c:number, d:number, e:number, f:number):void{
            this.fireChange({layer:this.layer, arguments: arguments, methodName: 'drawImage'});

            this.context.transform(a, b, c, d, e, f);
        }

        public translate(x:number, y:number):void{
            this.fireChange({layer:this.layer, arguments: arguments, methodName: 'drawImage'});

            this.context.translate(x, y);
        }
    }
}