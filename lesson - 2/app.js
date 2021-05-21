console.log("Hello, vue")  // Vue not use semi colon

const app = Vue.createApp({    // Initialize the app
    data() {                   // inside date object can use any data type
        return {
            title: 'The final empire',
            author: 'Mahfoos Ahamed',
            age:23
        }
    },

    methods: {
        changeTitle(title) {
            // this.title = "Words of Randiance"
            this.title = title;
        }
    }
})

app.mount('#app') // passing the selector