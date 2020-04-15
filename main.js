Vue.config.devtools = true;

var app = new Vue({
    el: "#app", 
    data: {
        brand: 'My Brand',
        product: 'Socks',
        selectedVariant: 0,
        details:["95% cotton", "5% plyester", "gender-neural"],
        variants: [
            {
                variantId: 2234, 
                variantColor: "green",
                variantImage: './assets/vmSocks-green-onWhite.jpg',
                variantQuantity: 10,
            },
            {
                variantId: 2235, 
                variantColor: "blue",
                variantImage: './assets/vmSocks-blue-onWhite.jpg',
                variantQuantity: 0,
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
        updateProduct: function (index) {
            this.selectedVariant = index;
            // console.log(index);
        },
        removeFromCart: function () {
            this.cart -= 1;
        },
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product; 
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity > 0;
        },
        onSaleMsg() {
            if (this.onSale) return this.brand + ' ' + this.product + ' is on sale.';
            return '';
        }
    }
});