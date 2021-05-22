console.log("Hello, vue")  // Vue not use semi colon

const app = Vue.createApp({    // Initialize the app
    data() {                   // inside date object can use any data type
        return {
            showBooks:true,
            title: 'The final empire',
            author: 'Mahfoos Ahamed',
            age:23
        }
    },

    methods: {
       toggleShowBooks () {
           this.showBooks = !this.showBooks
       },
       handleEvent() {
           console.log('Event')
       }
       
    }
})

app.mount('#app') // passing the selector