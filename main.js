const { createApp } = Vue

  createApp({
    data() {
      return {
       list:[]
      }
    },
    mounted(){
        console.log('ciao')
    },
    methods: {
        pushMail(){
            axios.get( 'https://flynn.boolean.careers/exercises/api/random/mail' ).then( ( result )  => {
                console.log(result.data.response)
            } )
        }
    }
  }).mount('#app')