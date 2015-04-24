///<reference path="LayerIdSupplier.ts"/>

module Layers {
    export class Layer {
        private _canvas;
        private _context:CanvasRenderingContext2D;
        private zIndex:number|string;

        constructor(divId:string, zIndex:number|string, canvasWidth:string, canvasHeight:string, canvasId:any = LayerIdSupplier.getNext()) {
            var canvasDiv = document.getElementById(divId);
            this._canvas = document.createElement('canvas');
            this._canvas.setAttribute('width', canvasWidth);
            this._canvas.setAttribute('height', canvasHeight);
            this._canvas.setAttribute('position', 'absolute');
            this._canvas.setAttribute('z-index', zIndex.toString());
            this._canvas.setAttribute('id', 'canvas-layer-' + canvasId);
            canvasDiv.appendChild(this._canvas);

            this._context = this._canvas.getContext("2d");
            this.zIndex = zIndex;
        }

        get canvas(){
            return this._canvas;
        }
        get context() {
            return this._context;
        }
    }
}