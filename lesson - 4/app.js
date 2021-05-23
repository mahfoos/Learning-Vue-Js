console.log("Hello, vue")  // Vue not use semi colon

const app = Vue.createApp({    // Initialize the app
    data() {                   // inside date object can use any data type
        return {
            showBooks:true,
            title: 'The final empire',
            author: 'Mahfoos Ahamed',
            age:23,
            x : 0,
            y:0
        }
    },

    methods: {
       toggleShowBooks () {
           this.showBooks = !this.showBooks
       },
       handleEvent(e, data) {
           console.log(e, e.type)
           if (data) {
               console.log(data)
           }
       },
       handleMousemove(e) {
           this.x = e.offsetX
           this.x = e.offsetY
       }
       
    }
})

app.mount('#app') // passing the selector