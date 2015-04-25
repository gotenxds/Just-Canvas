///<reference path="layer/Layer.ts"/>
///<reference path="layer/LayerCollection.ts"/>
///<reference path="tools/ListenableTool.ts"/>
///<reference path="tools/drawingTool/Pencil.ts"/>

import Layer = Layers.Layer;
import LayerCollection = Layers.LayerCollection;
import Pencil = Tools.Pencil;
import Tool = Tools.Tool;

module Main {
    export class JustCanvas {
        private layers:LayerCollection;
        private tool:Tool;
        private onChangeListeners = [];
        private currentToolEvents:{[type: string]: Function} = {};
        private onLayerChaneListener = (layer, args, method) => this.onChangeListeners.forEach(listener => listener(layer, args, method));

        constructor(divId = 'just-canvas', canvasWidth = '500px', canvasHeight = '500px') {
            this.layers = new LayerCollection();
            
            this.addLayer("main", new Layer(divId, 0, canvasWidth, canvasHeight, "main"));
            this.addLayer("background", new Layer(divId, -99, canvasWidth, canvasHeight, "background"));
        }

        get getContext() {
            return this.layers.getById("main").context;
        }

        public getCanvasOffset() {
            return {left: this.layers.getById("main").canvas.offsetLeft, top: this.layers.getById("main").canvas.offsetTop}
        }

        public addCanvasEventListener(type:string, handler:Function) {
            this.currentToolEvents[type] = handler;

            return this.layers.getById("main").canvas.addEventListener(type, handler);
        }

        public use(tool:Tool) {
            this.removeCurrentToolEvents(tool);

            tool.registerEvents(this);
        }

        public setBackgroundImage(src){
            var imageObj = new Image();

            imageObj.onload = () => this.layers.getById("background").context.drawImage(imageObj, 0, 0);

            imageObj.src = src;
        }

        public addOnChangeListener(listener:Function) {
            this.onChangeListeners.push(listener);
        }

        public removeOnChangeListener(listener:Function) {
            var index = this.onChangeListeners.indexOf(listener);

            if (index > -1) {
                this.onChangeListeners.splice(index, 1);
            }
        }

        public addLayer(id:string, layer:Layer){
            this.layers.add(id, layer);
            layer.addChangeListeners(this.onLayerChaneListener);
        }

        public removeLayer(id:string){
            this.layers.getById(id).removeChangeListeners(this.onLayerChaneListener);
            this.layers.remove(id);
        }

        private removeCurrentToolEvents(tool) {
            if (tool) {
                for (var event in this.currentToolEvents) {
                    this.layers.getById("main").canvas.removeEventListener(event, this.currentToolEvents[event]);
                }
            }
        }
    }
}