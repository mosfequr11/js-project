// Before Arrow:

hello = function () {
  return "Hello World! without Arrow";
};
document.getElementById("idName1").innerHTML = hello();

// With Arrow Function:
hello = () => {
  return "Hello World! with Arrow";
};
document.getElementById("idName2").innerHTML = hello();

// It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:
hello = () => "Hello World! with Arrow has only one statement ";
document.getElementById("idName3").innerHTML = hello();

// If you have parameters, you pass them inside the parentheses:
hello = (val) => "Hello World!" + val;
document.getElementById("idName4").innerHTML = hello(" Universe!");

// In fact, if you have only one parameter, you can skip the parentheses as well:
hello = val => "Hello World!" + val;
document.getElementById("idName5").innerHTML = hello(" Universe Area");
