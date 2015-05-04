module Utils {
    export class MouseWheelEventSupport {
        static get():string {
            return "onwheel" in document.createElement("div") ? 'wheel' : // Modern browsers support "wheel"
                document.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
                    'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox
        }
    }
}