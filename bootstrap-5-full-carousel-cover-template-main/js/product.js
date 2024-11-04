const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('product'); // Retrieve the "product" query parameter

console.log('Product ID:', productId); // Debugging output

const products = {
  "gripstreet-hoodie-black": {
    name: "Grispstreet hoodie black",
    description: "Comfortable and cozy hoodie with gripstreet logo on the front.",
    price: "$39",
    image: "./img/assets/gripstreet-black-front.png"
  },
  "gripstreet-hoodie-black-back": {
    name: "Grispstreet hoodie black",
    description: "Comfortable and cozy hoodie with gripstreet logo on the back.",
    price: "$39",
    image: "./img/assets/gripstreet-black-back.png"
  },
  "gripstreet-hoodie-white-back": {
    name: "Gripstreet hoodie white",
    description: "Comfortable and cozy hoodie with gripstreet logo on the back.",
    price: "$39",
    image: "./img/assets/gripstreet-back.png"
  },
  "gripstreet-hoodie-white": {
    name: "Gripstreet hoodie white",
    description: "Comfortable and cozy hoodie with gripstreet logo on the front.",
    price: "$39",
    image: "./img/assets/gripstreet-front.png"
  },
};

if (products[productId]) {
  const product = products[productId];
  document.getElementById('product-name').textContent = product.name;
  document.getElementById('product-description').textContent = product.description;
  document.getElementById('product-price').textContent = product.price;
  document.getElementById('product-image').src = product.image;
} else {
  document.getElementById('product-container').textContent = 'Product not found.';
}
