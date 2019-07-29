"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// class List {
//   constructor() {
//     this.data = [];
//   }
//   add(data) {
//     this.data.push(data);
//     console.log(this.data);
//   }
// }
// class Todolist extends List {
//   constructor() {
//     super();
//     this.usuario = "Luan";
//   }
//   mostrausuario() {
//     console.log(this.usuario);
//   }
// }
// const minha = new Todolist();
// document.getElementById("novotodo").onclick = function() {
//   minha.add("Novo todo");
// };
// minha.mostrausuario();
var Matematica =
/*#__PURE__*/
function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      return console.log(a + b);
    }
  }]);

  return Matematica;
}();

Matematica.soma(2, 2);
