module Utils {
    export class MouseWheelEventSupport {
        static get():MouseWheelEvent {
            return "onwheel" in document.createElement("div") ? MouseWheelEvent.wheel : // Modern browsers support "wheel"
                document.onmousewheel !== undefined ? MouseWheelEvent.mousewheel : // Webkit and IE support at least "mousewheel"
                    MouseWheelEvent.DOMMouseScroll; // let's assume that remaining browsers are older Firefox
        }
    }

    export enum MouseWheelEvent{wheel, mousewheel, DOMMouseScroll}
}