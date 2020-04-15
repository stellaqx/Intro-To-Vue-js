Vue.config.devtools = true;

Vue.component('product', {
    // property binding is just like class binding
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template:`
    <div class="product">
    <div class="product-image">
    <img v-bind:src="image">
    </div>
    
    <div class="product-info">
    <h1>{{ title }}</h1>
    <h2>{{ onSaleMsg }}</h2>
    <p v-if="inStock"> In stock </p>
    <p v-else="inStock"> Out of stock </p>
    <p> Shipping: {{ shipping }} </p>
    
    <ul>
    <li v-for="detail in details">{{ detail }}</li>
    </ul>
    
    <div v-for="(variant, index) in variants" 
    :key="variant.variantId"
    class="color-box"
    :style="{ backgroundColor: variant.variantColor}"
    @mouseover="updateProduct(index)">
    </div>
    
    <button v-on:click="addToCart" 
    :disabled="!inStock"
    :class="{ disabledButton: !inStock }">Add to cart</button>
    
    <div class="cart">
    <p>Cart({{cart}})</p>
    </div>
    
    </div>
    
    </div>
    `,
    data() {
        return {
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
        };
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
        shipping() {
            if (self.premium) return 'Free'; 
            return '2.99';
        },
        onSaleMsg() {
            if (this.onSale) return this.brand + ' ' + this.product + ' is on sale.';
            return '';
        },
    }
});

Vue.component('product-detail', {
    props: {
        'detail': {
            type: String,
            required: true
        }
    },
    template: `
    <div class="product-info">
      <p>{{ detail }}</p>
    </div>
    `,
});

var app = new Vue({
    el: "#app",
    data: {
        premium: true,
        productDetail: 'This is the detail description about the project.',
    } 
});