Vue.config.devtools = true;

var app = new Vue({
    el: "#app", 
    data: {
        product: 'Socks',
        description: 'This is a detailed description.',
        image: './assets/vmSocks-green-onWhite.jpg',
        url: 'https://www.w3schools.com/tags/att_a_href.asp', 
    }
});