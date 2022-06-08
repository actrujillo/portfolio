let item = document.querySelector(".item");
let popup = document.querySelector(".popup");
let cerrar = document.querySelector(".cerrar");

let backDark = document.querySelector(".back-dark");
let clickMe = document.querySelector(".clickMe");
let me = document.querySelector(".me");
let hero = document.querySelector(".hero");

const proyectos = [];

fetch("/proyectos.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((elemento) => {
      proyectos.push(elemento);
    });
    // for (let i = 0; i < proyectos.length; i++) {
    //   let nuevo = "nombre: " + proyectos[i].nombre;
    //   item.innerHTML += nuevo;
    // }
    let newProyecto = proyectos.map((proyecto) => {
      return `      
      <div class="card animado">
        <div class="img-proyecto">
          <img src=images/${proyecto.img} width="100%" height="225" alt="imagen proyecto" />
        </div>
        <div class="card-info">
          <h4 class="text-title">${proyecto.nombre}</h4>
          <p>${proyecto.descripcion}</p>
          <button class="card-button">
          <a href="${proyecto.url}" target="_blank">Ver proyecto</a>
          </button>
        </div>
      </div>`;
    });
    item.innerHTML = newProyecto.join("");
  });

// variable para dejare el fondo sin opacidad y reutilizar
let backOpacity = () => {
  popup.style.display = "none";
  backDark.style.opacity = "100%";
};

// mensaje de agradecimiento
setTimeout(() => {
  popup.style.display = "flex";
  backDark.style.opacity = "10%";
}, 3000);

cerrar.addEventListener("click", () => {
  backOpacity();
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode == 27) {
    backOpacity();
  }
});

let click = 0;
clickMe.addEventListener("click", () => {
  click++;
  if (click % 2 != 0) {
    me.style.display = "flex";
    hero.style.padding = "6vh";
    clickMe.innerHTML = "ocultar";
    click + 1;
  } else if (click % 2 == 0) {
    me.style.display = "none";
    hero.style.padding = "0";
    clickMe.innerHTML = "acerca de mi";
  }
});
