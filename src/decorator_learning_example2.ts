import { logThis } from "./decorator_learning_example1";

export function decorator2(
  target: Object,
  key: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log("🚀 new logger before ", key);

    const result = originalMethod.apply(this, args);

    console.log("🚀 new logger after ", key);

    return result;
  };

  return descriptor;
}

export class Logger_service {
  //In TypeScript or JavaScript, you can apply multiple decorators to a single function or method.

  //Just remember that the decorators are applied from the bottom up (in terms of their placement in the code), meaning the decorator closest to the function declaration (@logThis in this case) will be applied first, followed by the decorator above it (@decorator2).

  //As such, the following steps are performed when evaluating multiple decorators on a single declaration in TypeScript:

  // The expressions for each decorator are evaluated top-to-bottom.
  // The results are then called as functions from bottom-to-top.

  //we can call multiple decorators in a single line or in multiple line
  //in a single line it is called as @decorator2 @logThislogThis doSomething

  @decorator2
  @logThis
  doSomething(msg: string) {
    console.log("🚀 ~ 10000000000000000000", msg);
  }
}

const newLogger = new Logger_service();
newLogger.doSomething("fax");

//output:
// Logging before method call:doSomething and passed arg
// 🚀 ~ Logger_service ~ doSomething ~ msg: passed arg
// Logging after method call: doSomething and passed arg
// 🚀 new logger before  doSomething
// Logging before method call:doSomething and fax
// 🚀 ~ 10000000000000000000 fax
// Logging after method call: doSomething and fax
// 🚀 new logger after  doSomething
