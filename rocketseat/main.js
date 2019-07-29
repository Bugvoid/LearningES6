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

// class Matematica {
//   static soma(a, b) {
//     return console.log((a + b));
//   }
// }

// Matematica.soma(2, 2);

// const a = 1;
// a = 3;

const usuario = { nome: "luan" };

usuario.nome = "Paulinha";

console.log(usuario);
