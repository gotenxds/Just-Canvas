///<reference path="../ChangeNotifyingContext.ts"/>
///<reference path="RedrawableContext.ts"/>
module Layers {
    export class ContextRedrawer {
        public static redraw(context:ContextDecorator, operationStack:any[]):void {

            var operations = Layers.ContextRedrawer.rebuildStack(operationStack);

            this.applyOperations(operations, context);
        }

        private static rebuildStack(operationStack:any[]):any[]{
            var operations = [];

            for (var index = 0, len = operationStack.length; index < len; index++) {
                if (!Layers.ContextRedrawer.shouldBeRemoved(index, operationStack)) {
                    operations.push(operationStack[index]);
                }
            }

            return operations;
        }

        private static applyOperations(operations, context) {
            for (var index = 0, len = operations.length; index < len; index++)
                if (operations[index].operation === "call") {
                    context[operations[index].handler].apply(context, operations[index].value);
                } else if (operations[index].operation === "set") {
                    context[operations[index].handler] = operations[index].value;
                }
        }

        private static shouldBeRemoved(index:number, operationStack:any[]):boolean {
            return operationStack[index].handler === "stroke" && (operationStack[index + 1] && operationStack[index + 1].handler === 'lineTo');
        }
    }
}