function Person (name) {
  this.name = name;
}

function sayHello( s ) {
  console.log( s + this.name);
}

function __test() {
  var p = new Person("Ichiro");
  sayHello.apply (p, new Array("Hello, "));
}

__test();
