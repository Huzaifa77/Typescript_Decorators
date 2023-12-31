class Logger_service {
  //lets add a decorator below whcih decorates the method doSOmething with new features that logs additional customer info

  doSomething(msg: string) {
    console.log("🚀 ~ Logger_service ~ doSomething ~ msg:", msg);
  }
}

const newLogger = new Logger_service();
newLogger.doSomething("passed message");
