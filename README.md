<img src="https://repository-images.githubusercontent.com/657740231/7a6b015e-0013-4f20-990e-01fa1f8e2968" align="left"  width="100" height="100" />
<span><h1 ><a href="https://www.typescriptlang.org/docs/handbook/decorators.html" target=”_blank”>Decorators</a></h1></span>
<div>
<article>
  <h2>Explanation</h2>
  <p>TypeScript decorators are an extension that allows adding annotation and metaprogramming to class declarations and their members in TypeScript</p>
  <p>To put it in simple terms "decorators" decorates the wrapping function by customing/appending/changing the functionality of wrappable function with  the custom user functionality,
we do this to add our own extra spin on already existing functionality of class or method or change the property or the parameter 
</p>
  <p>Decorators are functions that are prefixed with an '@' symbol and are applied to declarations</p> 
</article>

<article>
  <h2>Enabling decorators</h2>
  <p>Most importantly Typescript decorators are still in their experimental phase so if you want to work with it we have to uncomment/enable to compiler option </p>
  <p>We can enable the decorators in onw or two ways</p>
  <ol>
  <li>By uncommenting the <strong><i><u>experimentalDecorators</u></i></strong> compiler option in the tsconfig.json</li>
  <li>
    Or Command line using the below command<br>
    <code>tsc --target ES5 --experimentalDecorators</code>
  </li>
    <div style="padding: 10px;">
    <h3>Your <u>tsconfig.json</u> should look something like this:</h3>
    <p>{
  "compilerOptions": {
      ...,
    "experimentalDecorators": true
  }
}</p>
  </div>
   
</ol>  
</article>
<article>
  
  <h2>Example</h2>
  <p>like in this example for say i want to log some addition info like to log which function is executing before if gets executed everytime</p>
</article>

<article>
  <h2>Different forms of decorators</h2>
  <ul>
    <li>Class decorators : Applied to classes.</li>
    <li>Method decorators : Applied to methods inside classes.</li>
    <li>Property decorators : Applied to properties within classes</li>
    <li>Parameter decorators : Applied to constructor parameters or method parameters within classes.</li>
  </ul>
</article>

<article>
  <h2>Paramets of decorators</h2>
  <p>The decorator basically has three pararmeters that it takes. They are as follows:</p>
  <ul>
    <li>target: Here target is an object containing the method being decorated</li>
    <li>key :Key is the name of the method</li>
    <li>descriptor: Descriptor has the details about the method, including its original value (the function itself)</li>
  </ul>
</article>
</div>
