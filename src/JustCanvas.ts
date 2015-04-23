///<reference path="tools/Tool.ts"/>
///<reference path="tools/drawingTool/Pencil.ts"/>

import Pencil = Tools.Pencil;
import Tool = Tools.Tool;

module Main{
    export class JustCanvas{
        private canvas;
        private context;
        private tool: Tool;
        private currentToolEvents: {[type: string]: Function} = {};

        constructor(divId = 'just-canvas', canvasWidth = '500px', canvasHeight = '500px') {
            var canvasDiv = document.getElementById(divId);
            this.canvas = document.createElement('canvas');
            this.canvas.setAttribute('width', canvasWidth);
            this.canvas.setAttribute('height', canvasHeight);
            this.canvas.setAttribute('id', 'canvas');
            canvasDiv.appendChild(this.canvas);

            this.context = this.canvas.getContext("2d");
        }

        get getContext(){
            return this.context;
        }

        public getCanvasOffset(){
            return {left: this.canvas.offsetLeft, top: this.canvas.offsetTop}
        }

        public addCanvasEventListener(type: string, handler: Function){
            this.currentToolEvents[type] = handler;

            return this.canvas.addEventListener(type, handler);
        }

        public use(tool: Tool){
            this.removeCurrentToolEvents(tool);

            tool.registerEvents(this);
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