        const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];

function createElement(){
  
}
function category(arr){
  

  for(let i = 0; i < arr.length; i++){
    let main = 0;
      if(arr[i].category == 'Frutas'){
        main = document.querySelector('.fruits ul')
      }
      if(arr[i].category == 'Bebidas'){
        main = document.querySelector('.drinks ul')
      }
      if(arr[i].category == 'Higiene'){
        main = document.querySelector('.hygiene ul')
      }
      
      
      

      const li = document.createElement('li');
      li.className = 'product';

      // img
      const img = document.createElement('img');
      img.className = 'product-img';
      if(arr[i].image == undefined){
        img.src = './img/products/no-img.svg' // img padrão 
      }
      else {
        img.src = arr[i].image
      }
      // main product recebe h1 h5 strong
      const mainProduct = document.createElement('main');
      mainProduct.className = 'product-main';
    
      // h1 
      const h1 = document.createElement('h1');
      h1.className = 'product-title';
      h1.textContent = arr[i].title;

      //h5
      const h5 = document.createElement('h5');
      h5.className = 'product-category';
      h5.textContent = arr[i].category;

      // strong
      const strong = document.createElement('strong');
      strong.className = 'product-price';
      strong.textContent = arr[i].price;

      // incorporando 
      mainProduct.appendChild(h1)
      mainProduct.appendChild(h5)
      mainProduct.appendChild(strong)

      li.appendChild(img)
      li.appendChild(mainProduct)
      main.appendChild(li)
      
      
    
      

    }
  }
  category(products)
console.log(
  document.querySelector('.fruits ')
)
 
  




