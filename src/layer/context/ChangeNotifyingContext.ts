import ContextDecorator from "./ContextDecorator";

export default class ChangeNotifyingContext extends ContextDecorator {
    listeners:Function[] = [];

    public addChangeListener(listener:Function) {
        this.listeners.push(listener);
    }

    public removeChangeListener(listener:Function) {
        this.listeners.push(this.listeners[this.listeners.indexOf(listener)]);
    }

    fireChange(args) {
        this.listeners.forEach(listener => listener(args));
    }

    public drawImage(image, sx:number, sy:number, sWidth?:number, sHeight?:number, dx?:number, dy?:number, dWidth?:number, dHeight?:number):void {
        this.fireChange({layer: this.layer, arguments: arguments, methodName: 'drawImage'});

        super.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    }

    public fill(path?, fillRule?:string):void {
        this.fireChange({layer: this.layer, arguments: arguments, methodName: 'drawImage'});

        super.fill(path, fillRule);
    }

    public fillRect(x:number, y:number, width:number, height:number):void {
        this.fireChange({layer: this.layer, arguments: arguments, methodName: 'drawImage'});

        super.fillRect(x, y, width, height);
    }

    public fillText(text:string, x:number, y:number, maxWidth?:number):void {
        this.fireChange({layer: this.layer, arguments: arguments, methodName: 'drawImage'});

        super.fillText(text, x, y, maxWidth);
    }

    public restore():void {
        this.fireChange({layer: this.layer, arguments: arguments, methodName: 'drawImage'});

        super.restore();
    }

    public rotate(angle:number):void {
        this.fireChange({layer: this.layer, arguments: arguments, methodName: 'drawImage'});

        super.rotate(angle);
    }

    public scale(x:number, y:number):void {
        this.fireChange({layer: this.layer, arguments: arguments, methodName: 'drawImage'});

        super.scale(x, y)
    }

    public setTransform(a:number, b:number, c:number, d:number, e:number, f:number):void {
        this.fireChange({layer: this.layer, arguments: arguments, methodName: 'drawImage'});

        super.setTransform(a, b, c, d, e, f);
    }

    public stroke():void {
        this.fireChange({layer: this.layer, arguments: arguments, methodName: 'stroke'});

        super.stroke();
    }

    public strokeRect(x:number, y:number, width:number, height:number):void {
        this.fireChange({layer: this.layer, arguments: arguments, methodName: 'drawImage'});

        super.strokeRect(x, y, width, height);
    }

    public strokeText(text:string, x:number, y:number, maxWidth?:number):void {
        this.fireChange({layer: this.layer, arguments: arguments, methodName: 'drawImage'});

        super.strokeText(text, x, y, maxWidth);
    }

    public transform(a:number, b:number, c:number, d:number, e:number, f:number):void {
        this.fireChange({layer: this.layer, arguments: arguments, methodName: 'drawImage'});

        super.transform(a, b, c, d, e, f);
    }

    public translate(x:number, y:number):void {
        this.fireChange({layer: this.layer, arguments: arguments, methodName: 'drawImage'});

        super.translate(x, y);
    }
}