//this decorator decorates the doSomething function by customing/appending/changing the functionality of with the custom user function
//we do this add to have our own code and can be used(resued) with out chnaging the core functionality of the doSomething function
//like in this example for say i want to log some addition info like to log which function is executing before if gets executed everytime

function logThis(target: Object, key: string, descriptor: PropertyDescriptor) {
  //The three variables are defined as follows
  // target: Here target is an object containing the method being decorated
  // key :Key is the name of the method
  // descriptor: Descriptor has the details about the method, including its original value (the function itself)

  const originalMethod = descriptor.value; //here originalMethod("somestring") will the same result as doSomethinf("some string does") as this is called before .apply method

  descriptor.value = function (...args: any[]) {
    console.log(`Logging before method call:${key} and ${args}`);
    const result = originalMethod.apply(this, args);
    console.log(`Logging after method call: ${key} and ${args}`);
    return result;
  };
  console.log(
    "🚀 ~ file: decorator_learning.ts:23 ~ logThis ~ descriptor:",
    descriptor
  );
  return descriptor;
}

class Logger_service {
  //lets add a decorator below whcih decorates the method doSOmething with new features that logs additional customer info
  @logThis
  doSomething(msg: string) {
    console.log("🚀 ~ Logger_service ~ doSomething ~ msg:", msg);
  }
}

const newLogger = new Logger_service();
newLogger.doSomething("passed arg");

//output

// 🚀 ~ file: decorator_learning.ts:23 ~ logThis ~ descriptor: {
//   value: [Function (anonymous)],
//   writable: true,
//   enumerable: false,
//   configurable: true
// }
// Logging before method call:doSomething and passed arg
// 🚀 ~ Logger_service ~ doSomething ~ msg: passed arg
// Logging after method call: doSomething and passed arg

//Explanation:
//so when the "newLogger.doSomething("passed arg");" is invoked the descriptor log is invoked which shows the different properties of the descriptor but mainly the decorator will log before and after the doSomething method's log .
//the "originalMethod.apply(this, args);" is the place our doSomething method will be invoked and is executed
