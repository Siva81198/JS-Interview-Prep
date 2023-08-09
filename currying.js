//A function that takes one argument at a time and returns new function excepting next argument.
//Curried functions are constructed by chaining closures by immediately returning their inner function simultaneously.

//Why should we use currying?

//Ex 1:- sum(2)(6)(1)
function sum(a) {
    return function (b) {
      return function (c) {
        return a + b + c;
      };
    };
  }
  
  // console.log(sum(2)(6)(1));
  
  //Ex 2:-
  //Evaluate:-("sum")(4)(2)
  //("multiply")(4)(2)
  //("divide")(4)(2)
  //("subtract")(4)(2)
  
  function evaluate(a) {
    if (a === "sum") {
      return function (b) {
        return function (c) {
          return b + c;
        };
      };
    } else if (a === "subtract") {
      return function (b) {
        return function (c) {
          return b - c;
        };
      };
    } else if (a === "multiply") {
      return function (b) {
        return function (c) {
          return b * c;
        };
      };
    } else if (a === "divide") {
      return function (b) {
        return function (c) {
          return b / c;
        };
      };
    } else {
      return "Invalid Operation";
    }
  }
  
  console.log(evaluate("sum")(4)(2));
  console.log(evaluate("multiply")(4)(2));
  console.log(evaluate("divide")(4)(2));
  console.log(evaluate("subtract")(4)(2));
  
  const mul = evaluate("multiply"); //returns the multiply function
  console.log(mul(2)(5)); //We can use mul variable anywhere and can pass any arguments.
  
  //Ex 3:-
  //Infinite Currying -> sum(1)(2)(3)...(n)
  function add(a) {
    return function (b) {
      if (b) return add(a + b);
      return a;
    };
  }
  
  console.log(add(2)(3)()); //5
  console.log(add(2)(3)(6)()); //11
  
  //Ex 4:- Currying vs Partial Application
  
  function sum(a) {
    return function (b, c) {
      return a + b + c;
    };
  }
  
  console.log(sum(2)(3, 4));
  //This is the example of partial application where the number of nested function(return function) is less than the arguments passed.
  //The above example is not a currying example.
  
  //If we pass three arguments and return three functions, then it is a currying.
  
  //Ex 4:-
  //Manipulating DOM
  function updateElementText(id) {
    return function (content) {
      document.querySelector("#" + id).textContent = content;
    };
  }
  
  const headingContent = updateElementText("heading");
  headingContent("Avis");//Content change on Function called.
  
  //Ex 5:- Curry() Implementation
  //Convert f(a,b,c) into f(a)(b)(c)
  
  //Need to Learn