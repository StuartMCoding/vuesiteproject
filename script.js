const links = [
    {id: 1, name: "Home", url: "index.html"},
    {id: 2, name: "Blog", url: "blog.html"},
    {id: 3, name: "Portfolio", url: "portfolio.html"},
    {id: 4, name: "Contact Me", url: "contact.html"},
];

Vue.createApp({
    data(){
        return{
            name: "StuartTheCoder",
            fullname: "Stuart Malcolmson",
            links,
        };
    },
}).mount("body");