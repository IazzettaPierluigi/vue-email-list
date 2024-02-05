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
            for(let i = 0; i < 10; i++){

                axios.get( 'https://flynn.boolean.careers/exercises/api/random/mail' ).then( ( result )  => {
                    console.log(result.data.response)
    
                    if (this.list.length < 10) {
                        this.list.push(result.data.response);

                        //condizionale per stampare una volta che le mail sono 10
                        
                    }
                    console.log(this.list)
    
                } )
            }
        }
    }
  }).mount('#app')