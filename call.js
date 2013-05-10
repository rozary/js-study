var sys = require("sys");
var http = require("http");

function Person (name) {
  this.name = name;
}

function sayHello ( s ) {
  sys.log(s + this.name);
}

function __test() {
    var p = new Person("ichiro");
    //pをsyaHelloに渡す。
    //sayHello内でthisとして利用できる。
    sayHello.call (p,"Hello,");
}

var server = http.createServer(
  function (request,response) {
    response.writeHead(200,{"Content-Type": "text/plain"});
    response.write("hello world\n");
    __test();
    response.end();
  }
).listen(8124);

sys.log('Server running at http:127.0.0.1:8124');
