///<reference path="Layer.ts"/>
module Layers{
    export class LayerCollection{
        private layers: {[id:string]:Layer} = {};

        public getById(id:string):Layer{
            return this.layers[id];
        }

        public add(id:string, layer:Layer){
            this.layers[id] = layer;
        }

        public remove(id:string){
            this.layers[id] = undefined;
        }

        public getAll():Layer[]{
            var layers = [];

            for (var layer in this.layers){
                layers.push(layer);
            }

            return layers;
        }
    }
}