Vue.config.devtools = true;

var app = new Vue({
    el: "#app", 
    data: {
        product: 'Socks',
        image: './assets/vmSocks-green-onWhite.jpg',
        inStock: true,
        details:["95% cotton", "5% plyester", "gender-neural"],
        variants: [
            {
                variantId: 2234, 
                variantColor: "green",
                variantImage: './assets/vmSocks-green-onWhite.jpg',
            },
            {
                variantId: 2235, 
                variantColor: "blue",
                variantImage: './assets/vmSocks-blue-onWhite.jpg',
            },
        ],
        cart: 0,
        
        url: 'https://www.w3schools.com/tags/att_a_href.asp', 
        description: 'This is a detailed description.',
        onSale: true,
        sizes: ['small', 'medium', 'large'],
    },
    methods: {
        addToCart: function () {
            this.cart += 1; 
        },
        updateProduct: function (variantImage) {
            this.image = variantImage;
        },
        removeFromCart: function () {
            this.cart -= 1;
        },
    }
});