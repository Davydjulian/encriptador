const d = document;
const textArea = d.querySelector(".textarea");
const imagenAside = d.querySelector(".imagen");
const loaderCirculos = d.querySelector(".loader");
const subtituloResultado = d.querySelector(".subtitulo");
const textoResultado = d.querySelector(".messaje__texto");
const botonEncriptar = d.querySelector(".btn-encriptar");
const botonDesencriptar = d.querySelectorAll(".btn-desencriptar");
const botonCopiar = d.querySelector(".btn-copiar");

const llaves = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

function encriptarMensaje(mensaje) {
  let mensajeEncriptado = "";
  for (let i = 0; i < mensaje.length; i++) {
    let letra = mensaje[i];
    let encriptada = letra;
    for (let j = 0; j < llaves.length; j++) {
      if (letra === llaves[j][0]) {
        encriptada = llaves[j][1];
        break;
      }
    }
    mensajeEncriptado += encriptada;
  }

  return mensajeEncriptado;
}

function desencriptarMensaje(mensaje) {
  let mensajeDesencriptado = mensaje;
  for (let i = 0; i < llaves.length; i++) {
    let regex = new RegExp(llaves[i][1], "g");
    mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
  }
  return mensajeDesencriptado;
}

textArea.addEventListener("input", (e) => {
  imagenAside.style.display = "none";  
  loaderCirculos.classList.remove("hidden");
  subtituloResultado.textContent = "Recibiendo mensaje";
  textoResultado.textContent = " ";
});

botonEncriptar.addEventListener("click", (e)=> {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarMensaje(mensaje);
    textoResultado.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    subtituloResultado.textContent = "El resultado es:";
});

botonDesencriptar[0].addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    textoResultado.textContent = mensajeDesencriptado;
    botonCopiar.classList.remove("hidden");
    subtituloResultado.textContent = "El resultado es:";
});

botonCopiar.addEventListener("click", () => {
    let textoCopiado = textoResultado.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=> {
        imagenAside.style.display = "block";
        loaderCirculos.classList.add("hidden");
        subtituloResultado.textContent = "El texto se copió";
        botonCopiar.classList.add("hidden");
        textoResultado.textContent =  " ";
    }) 
});