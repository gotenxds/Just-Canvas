import {Supplier} from "../utils/Supplier";


export default class LayerIdSupplier {
    private static id:number = 0;

    public static getNext():number {
        return LayerIdSupplier.id++;
    }
}