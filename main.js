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
    
    <button v-on:click="removeFromCart">Remove from cart</button>
    
    </div>

    <div>
      <h2>Reviews</h2>
      <p v-if="reviewCount==0">There are no reviews yet.</p>
      <ul>
      <li v-for="review in reviews">
        <p>{{ review.name }}</p>
        <p>{{ review.rating }}</p>
        <p>{{ review.review }}</p>
        <p>{{ review.recommendation }}</p>
      </li>
      </ul>
    </div>
    
    <product-review @review-submitted="addReview"></product-review>
    
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
                    variantQuantity: 5,
                },
            ],
            reviews: [],
            
            url: 'https://www.w3schools.com/tags/att_a_href.asp', 
            description: 'This is a detailed description.',
            onSale: true,
            sizes: ['small', 'medium', 'large'],
        };
    },
    methods: {
        addToCart: function () {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId);
        },
        updateProduct: function (index) {
            this.selectedVariant = index;
            // console.log(index);
        },
        addReview: function(productReview) {
            this.reviews.push(productReview);
        },
        removeFromCart: function () {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId);
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
        reviewCount() {
            return this.reviews.length;
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

Vue.component('product-review', {
    template: `
    <form class="review-form" @submit.prevent ="onSubmit">

    <p :hidden="!errors.length">
    <b> Please correct the following error(s). </b>
    <ul>
    <li v-for="error in errors">{{ error }}</li>
    </ul>
    </p>

    <p>
    <label for="name"> Name: </label>
    <input id="name" v-model="name">
    </p>

    <p>
    <label for="review"> Review: </label>
    <textarea id="review" v-model="review"></textarea>
    </p>

    <p>
    <label for="rating"> Rating: </label>
    <select id="rating" v-model.number="rating">
    <option>5</option>
    <option>4</option>
    <option>3</option>
    <option>2</option>
    <option>1</option>
    </select>
    </p>

    <p>
    <label for="recommendation"> Would you recommend this product: </label>
    <select id="recommendation" v-model="recommendation">
    <option>YES</option>
    <option>NO</option>
    </select>
    </p>

    <p>
    <input type="submit" value="Submit">
    </p>

    </form>
    `,
    data() {
        return {
            name: null,
            review: null,
            rating: null,
            recommendation: null,
            errors: [],
        }
    },
    methods: {
        onSubmit() {
            // validation
            if (this.name && this.review && this.rating && this.recommendation) {
                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating,
                    recommendation: this.recommendation,
                }
                this.$emit("review-submitted", productReview);
                // our form fields reset value after submitting
                this.name = null;
                this.review = null;
                this.rating = null;
                this.recommendation = null;
                this.errors = [];
            } else {
                if (!this.name) this.errors.push("Name required.");
                if (!this.review) this.errors.push("Review required.");
                if (!this.rating) this.errors.push("Rating required.");
                if (!this.recommendation) this.errors.push("Recommendation required.")
            }
        }
    }, 
});

var app = new Vue({
    el: "#app",
    data: {
        premium: true,
        productDetail: 'This is the detail description about the project.',
        cart: [],
    },
    methods: {
        updateCartAdd(id) {
            this.cart.push(id);
        },
        updateCartRemove(id) {
            var index = this.cart.indexOf(id);
            if (index !== -1) this.cart.splice(index, 1);
        }
    }
});