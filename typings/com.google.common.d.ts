declare namespace com {
    export namespace google {
        export namespace common {
            export namespace util {
                export namespace concurrent {
                    export class ListenableFuture { }
                    export class Futures { 
                        public static addCallback(param0: ListenableFuture, param1: FutureCallback);
                    }
                    export class FutureCallback { 
                        constructor(implementation: any);
                    }
                }
            }
        }
    }
}