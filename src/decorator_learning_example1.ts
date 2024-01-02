//this decorator decorates the doSomething function by customing/appending/changing the functionality of with the custom user function
//we do this add to have our own code and can be used(resued) with out chnaging the core functionality of the doSomething function
//like in this example for say i want to log some addition info like to log which function is executing before if gets executed everytime

export function logThis(
  target: Object,
  key: string,
  descriptor: PropertyDescriptor
) {
  //The three variables are defined as follows
  // target: Here target is an object containing the method being decorated
  // key :Key is the name of the method
  // descriptor: Descriptor has the details about the method, including its original value (the function itself)

  const originalMethod = descriptor.value; //here originalMethod("somestring") will the same result as doSomethinf("some string does") as this is called before .apply method

  //create a new function and assign that to the descriptor.value and inside this new function we can execute the originalMethod with the arguments as well as customize and finall return the descriptor with our new changes

  //the descriptor.value is replaced with a new functiion below that acts as a warpper around the origin method

  descriptor.value = function (...args: any[]) {
    console.log(`Logging before method call:${key} and ${args}`);

    // Assigning to result captures the output for potential use within the decorator and preparation for returning.
    const result = originalMethod.apply(this, args);

    console.log(`Logging after method call: ${key} and ${args}`);

    // The result of the original method call is stored in the result variable and then returned from the new function. This ensures that the decorator doesn’t interfere with the original method's behavior but instead augments it by providing additional functionality (logging in this case).
    return result;
  };

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

// Logging before method call:doSomething and passed arg
// 🚀 ~ Logger_service ~ doSomething ~ msg: passed arg
// Logging after method call: doSomething and passed arg

//Explanation:
//so when the "newLogger.doSomething("passed arg");" is invoked the descriptor log is invoked which shows the different properties of the descriptor but mainly the decorator will log before and after the doSomething method's log .
//the "originalMethod.apply(this, args);" is the place our doSomething method will be invoked and is executed
