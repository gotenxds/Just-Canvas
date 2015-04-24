///<reference path="layer/Layer.ts"/>
///<reference path="tools/ListenableTool.ts"/>
///<reference path="tools/drawingTool/Pencil.ts"/>

import Layer = Layers.Layer;
import Pencil = Tools.Pencil;
import Tool = Tools.Tool;

module Main {
    export class JustCanvas {
        private mainLayer:Layer;
        private backgroundLayer:Layer;
        private tool:Tool;
        private onChangeListeners = [];
        private currentToolEvents:{[type: string]: Function} = {};
        private onToolRenderListener = (eventArgs) => this.onChangeListeners.forEach(listener => listener(this.tool, eventArgs));

        constructor(divId = 'just-canvas', canvasWidth = '500px', canvasHeight = '500px') {
            this.mainLayer = new Layer(divId, 0, canvasWidth, canvasHeight, "main");
            this.backgroundLayer = new Layer(divId, -99, canvasWidth, canvasHeight, "background");
        }

        get getContext() {
            return this.mainLayer.context;
        }

        public getCanvasOffset() {
            return {left: this.mainLayer.canvas.offsetLeft, top: this.mainLayer.canvas.offsetTop}
        }

        public addCanvasEventListener(type:string, handler:Function) {
            this.currentToolEvents[type] = handler;

            return this.mainLayer.canvas.addEventListener(type, handler);
        }

        public use(tool:Tool) {
            this.removeCurrentToolEvents(tool);

            tool.registerEvents(this);
            tool.addOnRenderListener(this.onToolRenderListener);
        }

        public setBackgroundImage(src){
            var imageObj = new Image();

            imageObj.onload = () => this.backgroundLayer.context.drawImage(imageObj, 0, 0);

            imageObj.src = src;
        }

        public addOnChangeListener(listener:Function) {
            this.onChangeListeners.push(listener);
        }

        public removeOnChangeListener(listener:Function) {
            this.tool.removeOnRenderListener(this.onToolRenderListener);
            var index = this.onChangeListeners.indexOf(listener);

            if (index > -1) {
                this.onChangeListeners.splice(index, 1);
            }
        }

        private removeCurrentToolEvents(tool) {
            if (tool) {
                for (var event in this.currentToolEvents) {
                    this.mainLayer.canvas.removeEventListener(event, this.currentToolEvents[event]);
                }
            }
        }
    }
}