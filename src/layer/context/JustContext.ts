import ChangeNotifyingContext from "./ChangeNotifyingContext";
import RedrawableContext from "./RedrawableContext/RedrawableContext";
import ContextDecorator from "./ContextDecorator";
import applyMixins from "../../mixin/Mixin";
export default class JustContext extends ContextDecorator implements ChangeNotifyingContext, RedrawableContext {
    listeners:Function[];
    operationStack = [];
    redrawing = false;

    public addChangeListener:(listener:Function) => void;
    public removeChangeListener:(listener:Function) => void;
    fireChange:(args:any) => void;
    public redraw:() => void;
}

applyMixins(JustContext, [ChangeNotifyingContext, RedrawableContext]);