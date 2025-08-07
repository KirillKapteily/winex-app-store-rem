let productImg = document.querySelector(".product-img");



let moved = () => {
    productImg.classList.add("moved");
}
productImg.addEventListener("click", moved);