console.log("Hello, vue")  // Vue not use semi colon

const app = Vue.createApp({    // Initialize the app
    data() {                   // inside date object can use any data type
        return {
            url: "http://www.google.com",
            showBooks:true,
            books: [
                {
                    title: 'Harry Potter',
                    author:'Ahamed',
                    img:"assets/img_1.jpg"
                },
                {
                    title: 'mahfoos',
                    author:'Ahamed',
                    img:"assets/img_1.jpg"
                },
                
                {
                    title: 'mahfoos',
                    author:'Ahamed',
                    img:"assets/img_1.jpg"
                }
            ]
        }
    },

    methods: {
       toggleShowBooks () {
           this.showBooks = !this.showBooks
       }
    }
})

app.mount('#app') // passing the selector