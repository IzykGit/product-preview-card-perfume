

const productImage = document.getElementById("productImage")

if(window.innerWidth > 700) {
    productImage.src = "./images/image-product-desktop.jpg"
}
else {
    productImage.src = "./images/image-product-mobile.jpg"
}