///<reference path="../utils/Supplier.ts"/>
import Supplier = Utils.Supplier;


module Layers {
    export class LayerIdSupplier{
        private static id:number = 0;

        public static getNext() : number{
            return LayerIdSupplier.id++;
        }
    }
}