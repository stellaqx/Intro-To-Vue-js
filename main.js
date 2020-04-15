Vue.config.devtools = true;

var app = new Vue({
    el: "#app", 
    data: {
        product: 'Socks',
        image: './assets/vmSocks-green-onWhite.jpg',
        inStock: true,

        url: 'https://www.w3schools.com/tags/att_a_href.asp', 
        description: 'This is a detailed description.',
        onSale: true,
    }
});