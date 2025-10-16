// DOM – Soluciones simples 1–15 (JS básico)

// 1
let e1P = document.getElementById("e1-p");
let e1Btn = document.getElementById("e1-btn");
e1Btn.addEventListener("click", function () {
  e1P.textContent = "¡Texto cambiado!";
});

// 2
let e2Box = document.getElementById("e2-box");
let e2Btn = document.getElementById("e2-btn");
e2Btn.addEventListener("click", function () {
  e2Box.style.backgroundColor = "yellow";
});

// 3
let e3Btn = document.getElementById("e3-btn");
e3Btn.addEventListener("click", function () {
  console.log("Hola desde el ejercicio 3");
});

// 4
let e4Lista = document.getElementById("e4-lista");
let e4BtnAdd = document.getElementById("e4-btn-add");
e4BtnAdd.addEventListener("click", function () {
  let t = prompt("Nuevo elemento:");
  if (t === null)  return;
  let li = document.createElement("li");
  li.textContent = t;
  e4Lista.append(li);
});

// 5
let e5Lista = document.getElementById("e5-lista");
let e5BtnDel = document.getElementById("e5-btn-del");
e5BtnDel.addEventListener("click", function () {
  let ultimo = e5Lista.lastElementChild;
  if (ultimo) ultimo.remove();
});

// 6
let e6Img = document.getElementById("e6-img");
e6Img.addEventListener("click", function () {
  if (e6Img.src.indexOf("img1.jpg") !== -1) {
    e6Img.src = "img2.jpg";
    e6Img.alt = "Imagen 2";
  } else {
    e6Img.src = "img1.jpg";
    e6Img.alt = "Imagen 1";
  }
});

// 7
let e7Btn = document.getElementById("e7-btn");
let e7Out = document.getElementById("e7-out");
let e7Count = 0;
e7Btn.addEventListener("click", function () {
  e7Count = e7Count + 1;
  e7Out.textContent = e7Count;
});

// 8
let e8Texto = document.getElementById("e8-texto");
let e8Mostrar = document.getElementById("e8-mostrar");
let e8Ocultar = document.getElementById("e8-ocultar");
e8Mostrar.addEventListener("click", function () {
  e8Texto.style.display = "block";
});
e8Ocultar.addEventListener("click", function () {
  e8Texto.style.display = "none";
});

// 9
let e9A = document.getElementById("e9-a");
let e9B = document.getElementById("e9-b");
let e9Btn = document.getElementById("e9-btn");
e9Btn.addEventListener("click", function () {
  let tmp = e9A.textContent;
  e9A.textContent = e9B.textContent;
  e9B.textContent = tmp;
});

// 10
let e10P = document.getElementById("e10-p");
let e10Inc = document.getElementById("e10-inc");
let e10Dec = document.getElementById("e10-dec");
let e10Size = 16;
e10Inc.addEventListener("click", function () {
  e10Size = e10Size + 2;
  e10P.style.fontSize = e10Size + "px";
});
e10Dec.addEventListener("click", function () {
  e10Size = e10Size - 2;
  if (e10Size < 8) e10Size = 8;
  e10P.style.fontSize = e10Size + "px";
});

// 12
let e13Lista = document.getElementById("e13-lista");
let e13Btn = document.getElementById("e13-btn");
e13Btn.addEventListener("click", function () {
  while (true) {
    let nombre = prompt("Nombre (fin para terminar):");
    if (nombre === null) break;
    if (nombre === "" || nombre.toLowerCase() === "fin") break;
    let li = document.createElement("li");
    li.textContent = nombre;
    e13Lista.append(li);
  }
});

// 13
let e14Lista = document.getElementById("e14-lista");
let e14Btn = document.getElementById("e14-btn");
e14Btn.addEventListener("click", function () {
  alert("Elementos: " + e14Lista.children.length);
});

// 14
let e15Btn = document.getElementById("e15-btn");
let e15Bloque = document.getElementById("e15-bloque");
e15Btn.addEventListener("click", function () {
  let parrafos = e15Bloque.querySelectorAll("p");
  for (let i = 0; i < parrafos.length; i = i + 1) {
    parrafos[i].textContent = "Actualizado " + (i + 1);
  }
});
