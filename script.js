const products  = [
    { nombre: "Pupusas", descripcion: "Tipos: frijol con queso ,queso con loroco , pollo , camarón , revuelta"},
    { nombre: "Empanadas", descripcion: "De leche y frijol" },
    { nombre: "Pastelitos", descripcion: "Ricos pastelitos de papa o pollo" },
    { nombre: "Tamales", descripcion: "Pisques , queso con chipilin,  o de pollo" },
    { nombre: "Sorbete artesanal", descripcion: "Sabores:coco, tamarindo, fresa, arrayan,  " },
    { nombre: "Minutas", descripcion: "De sabor y limón , puedes agregarle fruta" },
    { nombre: "Quesadilla", descripcion: " por $0.40ctvs puedes agregar un café" },
    { nombre: "Atol de elote", descripcion: "por $0.25 ctvs puedes agregar un elote sancochado" },
    { nombre: "Panes con pollo ", descripcion: "Hay promociones disponibles en las que puedes agregar coca colas de latas" },
    { nombre: "Torrejas", descripcion: "" },
    { nombre: "Chilate", descripcion: "" },
    { nombre: "Nuegados", descripcion: "" },
    

 
];
function sortProducts (products){
    return products.sort((a,b)  => a.nombre  > b.nombre ? 1: -1);
}
 
function searchProducts (products,searchName){
    return products.filter((product)=>
        product.nombre.toLowerCase().includes(searchName.toLowerCase()) )
};
 
 
function showAllProducts (products){
    const divProduct = document.getElementById("productsContainer");
    divProduct.innerHTML = "";
    products.forEach(product => {
        const divP = document.createElement("div");
        divP.classList.add("product");
        divP.innerHTML =`<h3>${product.nombre}</h3> <p>  ${product.descripcion} </p>` ;
 
        divProduct.appendChild(divP);
 
    });
 
}
 
document.getElementById("search").addEventListener("input",function (){
const nameSearched = this.value; // document.getElementById("search").value;
const filterProducts = searchProducts(products,nameSearched);
 
showAllProducts(filterProducts);
});
function showSortProducts(){
 
    const sortProductsList = sortProducts(products);
    showAllProducts(sortProductsList);
};
 
showAllProducts(products);



function ingresar()
    { 
        let user =document.getElementById(email).value;
        let contraseña =document.getElementById(contraseña).value;
if (user=="candy" && contraseña =="1234")
 {
    window.location="bienvenido.html";
  }
   else
alert("Email o contraseña incorrectos")
  }


 