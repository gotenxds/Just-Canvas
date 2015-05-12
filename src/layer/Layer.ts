import {LayerIdSupplier, JustContext} from "./layers";

export default class Layer {
    private _id:string;
    private _canvas;
    private _context:JustContext;
    private zIndex:number|string;

    constructor(divId:string, zIndex:number|string, canvasWidth:string, canvasHeight:string, canvasId:any = LayerIdSupplier.getNext()) {
        var canvasDiv = document.getElementById(divId);
        this._canvas = document.createElement('canvas');
        this._canvas.setAttribute('id', 'canvas-layer-' + canvasId);
        this._canvas.setAttribute('width', canvasWidth);
        this._canvas.setAttribute('height', canvasHeight);
        this._canvas.style.position = 'absolute';
        this._canvas.style.zIndex = zIndex;

        canvasDiv.appendChild(this._canvas);

        this._id = canvasId;
        this._context = new JustContext(this, this._canvas.getContext("2d"));
        this.zIndex = zIndex;
    }

    get id() {
        return this._id;
    }

    get canvas() {
        return this._canvas;
    }

    get context() {
        return this._context;
    }

    public addChangeListeners(listener:Function):void {
        this._context.addChangeListener(listener);
    }

    public removeChangeListeners(listener:Function):void {
        this._context.removeChangeListener(listener);
    }

    public redraw():void {
        this._context.redraw();
    }
}
