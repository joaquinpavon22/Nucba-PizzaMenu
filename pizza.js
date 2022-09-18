let pizzas = [
    {
    id:1,
    nombre: "especial",
    precio: 500,
    ingredientes: ["Queso", "huevo", "jamon", "cebolla", "salsa", "harina", "oregano"],
    img:"especial.jpg",
    },
    {
    id:2,
    nombre: "peperoni",
    precio: 600,
    ingredientes: ["Queso","peperoni" , "jamon", "cebolla", "salsa", "harina"],
    img:"pcp.jpg",
    },
    {
    id:3,
    nombre: "muzzarella",
    precio: 700,
    ingredientes: ["muzzarella", "oregano", "jamon", "cebolla", "salsa", "harina"],
    img:"muza.jpg",
    },
    {
    id:4,
    nombre: "vegetariana",
    precio: 800,
    ingredientes: ["Queso", "huevo", "rucula", "salsa", "harina"],
    img:"vege.jpg"
    },
    {
    id:5,
    nombre: "napolitana",
    precio: 900,
    ingredientes: ["Queso", "jamon","tomate" , "salsa", "harina"],
    img:"napo.jpg",
    },

    {
    id:6,
    nombre: "picante",
    precio: 400,
    ingredientes: ["Queso", "huevo", "jamon", "salchicha", "salsa picante", "harina"],
    img:"picante.JPG",
    },
];

const menuContainer = document.getElementById("card");
const selector = document.getElementById("selector")
const button = document.getElementById("seach");
const error = document.getElementsByClassName("error");

const filtrar = () =>{
    menuContainer.innerHTML = '' 
    const busqueda = selector.value.toLowerCase();


        for (let menuPizza of pizzas){
            let nombre = menuPizza.nombre.toLowerCase();
              
        if(nombre.indexOf(busqueda) !== -1){
        menuContainer.innerHTML += 
        `<div class="cards">
        <img src="${menuPizza.img}" alt="">
        <h2 class="title">${menuPizza.nombre}</h2>
        <p class="ingredientes">${menuPizza.ingredientes}</p>
        <p>$${menuPizza.precio}</p>
        <button class="comprar">Comprar</button>
        </div>`
        } else if(busqueda === ''){
            (error.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Por favor, ingresá un código correcto`),
            (error.style.display = "block"),
            (menuContainer.style.display = "none")
            
        }
    
        
    
    saveToLocalStorage();
    };
    };
    
    button.addEventListener("click", filtrar);
    function saveToLocalStorage(){
        localStorage.setItem("Pizzas", JSON.stringify(pizzas));
    
    };