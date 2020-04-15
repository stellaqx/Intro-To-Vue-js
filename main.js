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
            },
            {
                variantId: 2235, 
                variantColor: "blue",
            },
        ],
        
        url: 'https://www.w3schools.com/tags/att_a_href.asp', 
        description: 'This is a detailed description.',
        onSale: true,
        sizes: ['small', 'medium', 'large'],
    }
});