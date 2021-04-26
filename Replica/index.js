console.log("Script loaded!!")

// menu bar from top to side
var menuItems = document.querySelector(".menu-bar")
var menuBar = document.querySelector(".menu-items")
console.log(menuItems)
menuItems.addEventListener('click', function() {
  menuBar.classList.toggle("active")
})

// Add to cart script

    //selectors
    var cartItem = document.getElementsByClassName("add-to-cart")
    console.log(cartItem)
    
    for ( i=0; i < cartItem.length; i++) {
      cartItem[i].addEventListener('click', function() {
        console.log("clickes")
      })
    }

   

// crousle work
//selectors 
var carouselSlide = document.querySelector(".corusel-viwer")
var carousleIamges = document.querySelectorAll(".corusel-viwer img")

var prevBtn = document.querySelector(".prev-btn")
var nextBtn = document.querySelector(".next-btn")
console.log(nextBtn)


 


// basic 
let count = 1
var size = carousleIamges[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size * count) + 'px)'

//Event listner 
prevBtn.addEventListener('click', function() {
    if (count<= 0) return;
     carouselSlide.style.transition = "transform 0.4s ease-in-out"
     count--;
     carouselSlide.style.transform = 'translateX(' + (-size * count) + 'px)'
    })

nextBtn.addEventListener('click', function() {
    if (count >= carousleIamges.length - 1) return;
    console.log("Clicked")
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
     count++;
     carouselSlide.style.transform = 'translateX(' + (-size * count) + 'px)'})
 
carouselSlide.addEventListener('transitionend', function(){
    if (carousleIamges[count].id === 'last'){
        carouselSlide.style.transition = "none"
        count = carousleIamges.length - 2
        carouselSlide.style.transform = 'translateX(' + (-size * count) + 'px)'
    }
    if (carousleIamges[count].id === 'first'){
        carouselSlide.style.transition = "none"
        count = carousleIamges.length - count;
        carouselSlide.style.transform = 'translateX(' + (-size * count) + 'px)'
    }
})


// view all products 

// console.log("script loaded!!")

 var productLink = new XMLHttpRequest();
 productLink.open('GET', "https://5d76bf96515d1a0014085cf9.mockapi.io/product", true);
 productLink.onreadystatechange = function() {
   if (this.readyState === 4){
     var productList = JSON.parse(this.responseText)


     function displayAllProduct(pageUrl, previewUrl, nameOfProduct, brandOfProduct, priceOfProduct ) {
      var upperGrid = document.getElementById("diplay-grid1")
      var displayCard = document.createElement("div");
      displayCard.className = "display-card";

      var productLink = document.createElement('a');
      productLink.href = '/details.html?p='+pageUrl;
      var imgOfProduct = document.createElement("img");
      productLink.appendChild(imgOfProduct)
      imgOfProduct.className = "preview"
      imgOfProduct.src = previewUrl;
      var discriptionOfProduct = document.createElement("div");
      var productName = document.createElement("h3");
      productName.className = "name"
      productName.innerText = nameOfProduct;
      var productBrand = document.createElement("h4");
      productBrand.className = "brand"
      productBrand.innerText = brandOfProduct;
      var productPrice = document.createElement("h5");
      productPrice.className = "price"
      productPrice.innerText = priceOfProduct;
      discriptionOfProduct.appendChild(productName);
      discriptionOfProduct.appendChild(productBrand);
      discriptionOfProduct.appendChild(productPrice);
      console.log(discriptionOfProduct)
      var addToCart = document.createElement("button")
      // addToCart.href = "#"
      addToCart.className = "add-to-cart"
      addToCart.innerText = "Add To Cart"
      displayCard.appendChild(addToCart)
      displayCard.appendChild(productLink);
      displayCard.appendChild(discriptionOfProduct);
      console.log(displayCard)
      upperGrid.appendChild(displayCard)
      console.log(upperGrid)
    }

  for (var pos=0; pos< productList.length - 5 ; pos++ ) {
     displayAllProduct(productList[pos].id ,productList[pos].preview, productList[pos].name, productList[pos].brand, productList[pos].price )
     
  }
  


  function displayAllProduct1( pageUrl,previewUrl, nameOfProduct, brandOfProduct, priceOfProduct ) {
    var upperGrid = document.getElementById("diplay-grid2")
    var displayCard = document.createElement("div");
    displayCard.className = "display-card";

    var productLink = document.createElement('a');
    productLink.href = '/details.html?p='+pageUrl;
    var imgOfProduct = document.createElement("img");
    productLink.appendChild(imgOfProduct)

    imgOfProduct.className = "preview"
    imgOfProduct.src = previewUrl;
    var discriptionOfProduct = document.createElement("div");
    var productName = document.createElement("h3");
    productName.className = "name"
    productName.innerText = nameOfProduct;
    var productBrand = document.createElement("h4");
    productBrand.className = "brand"
    productBrand.innerText = brandOfProduct;
    var productPrice = document.createElement("h5");
    productPrice.className = "price"
    productPrice.innerText = priceOfProduct;
    discriptionOfProduct.appendChild(productName);
    discriptionOfProduct.appendChild(productBrand);
    discriptionOfProduct.appendChild(productPrice);
    console.log(discriptionOfProduct)
    var addToCart = document.createElement("a")
      addToCart.href = "#"
      addToCart.className = "add-to-cart"
      addToCart.innerText = "Add To Cart"
      displayCard.appendChild(addToCart)
    displayCard.appendChild(productLink);
    displayCard.appendChild(discriptionOfProduct);
    console.log(displayCard)
    upperGrid.appendChild(displayCard)
    console.log(upperGrid)
  }

for (var pos=5; pos <= productList.length ; pos++ ) {
   displayAllProduct1(productList[pos].id, productList[pos].preview, productList[pos].name, productList[pos].brand, productList[pos].price )
}

    }
  }
  productLink.send();
  
  
 
