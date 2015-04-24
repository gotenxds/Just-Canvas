///<reference path="tools/ListenableTool.ts"/>
///<reference path="tools/drawingTool/Pencil.ts"/>

import Pencil = Tools.Pencil;
import Tool = Tools.Tool;

module Main {
    export class JustCanvas {
        private canvas;
        private context;
        private tool:Tool;
        private onChangeListeners = [];
        private currentToolEvents:{[type: string]: Function} = {};
        private onToolRenderListener = (eventArgs) => this.onChangeListeners.forEach(listener => listener(this.tool, eventArgs));

        constructor(divId = 'just-canvas', canvasWidth = '500px', canvasHeight = '500px') {
            var canvasDiv = document.getElementById(divId);
            this.canvas = document.createElement('canvas');
            this.canvas.setAttribute('width', canvasWidth);
            this.canvas.setAttribute('height', canvasHeight);
            this.canvas.setAttribute('id', 'canvas');
            canvasDiv.appendChild(this.canvas);

            this.context = this.canvas.getContext("2d");
        }

        get getContext() {
            return this.context;
        }

        public getCanvasOffset() {
            return {left: this.canvas.offsetLeft, top: this.canvas.offsetTop}
        }

        public addCanvasEventListener(type:string, handler:Function) {
            this.currentToolEvents[type] = handler;

            return this.canvas.addEventListener(type, handler);
        }

        public use(tool:Tool) {
            this.removeCurrentToolEvents(tool);

            tool.registerEvents(this);
            tool.addOnRenderListener(this.onToolRenderListener);
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
                    this.canvas.removeEventListener(event, this.currentToolEvents[event]);
                }
            }
        }
    }
}