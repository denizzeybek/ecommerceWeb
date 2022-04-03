function basketClick() {
    const basket = document.querySelector('.basket-general');
    if (basket.style.display == "block") {
        basket.style.display = "none";
    } else {
        basket.style.display = "block";
    }
}

function continueShopping() {
    const basket = document.querySelector('.basket-general');
    basket.style.display = "none";
}

function buyItems() {
    const books = document.querySelector('.books');
    const contactForm = document.querySelector('.contact-form-general');
    books.style.display = "none";
    contactForm.style.display = "block";

}

function nextBtn() {
    const contactForm = document.querySelector('.contact-form-general');
    const paymentForm = document.querySelector('.payment-general');
    contactForm.style.display = "none";
    paymentForm.style.display = "block";

}
function pay() {
    alert("Congrats!! You successfully bought items. ")
}

function exit() {
    const basket = document.querySelector('.basket-general');
    basket.style.display = "none";
}


var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function addToList() {
    let dataId = getRandomInt(100)
    const bookRow = document.querySelector('.book-row');
    const newProductName = document.querySelector('#new-product-name');
    const newProductDescription = document.querySelector('#new-product-description');
    const newProductPrice = document.querySelector('#new-product-price');

    const eDiv = document.createElement("div");
    eDiv.innerHTML = `
    <div class="col-md-4">
        <div class="card product-under">
            <img src="./images/book1.jpeg" alt="Avatar" style="width:100%">
            <div class="container">
                <h4><b class="productName">${newProductName.value}</b></h4>
                <p class="description">${newProductDescription.value}</p>
                <div class="price d-flex">
                    <p class="priceValue">${newProductPrice.value}</p>
                    <p>TL</p>
                </div>
                <div class="add-basket btn btn-primary addToCart" data-product-id="${dataId}">
                    <span> Add </span>
                </div>
            </div>
        </div>
    </div>
    `;
    bookRow.appendChild(eDiv)


    const products = document.querySelectorAll('.product-under');
    products.forEach(item => {   // 1
        item.addEventListener('click', (e) => {
            if (e.target.classList.contains('addToCart')) {
                const productID = e.target.dataset.productId;
                const productName = item.querySelector('.productName').innerHTML;
                const productDescription = item.querySelector('.description').innerHTML;
                const productPrice = item.querySelector('.priceValue').innerHTML;
                const productImage = item.querySelector('img').src;

                let product = {
                    name: productName,
                    image: productImage,
                    id: productID,
                    description: productDescription,
                    count: 1,
                    price: +productPrice,
                    basePrice: +productPrice,
                }
                updateProductsInCart(product);
                updateShoppingCartHTML();
            }
        });
    });

    
    span.click();
}

