const app = new Vue({
  el: '#app',
  data: {
    arrEmail: [],
  },

  mounted(){
    
    for(let i = 0; i< 10; i++){
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(resp => {
          console.log(resp)
          this.arrEmail.push(resp.data.response);
          console.log(this.arrEmail)
        })
        .catch(err => {
          console.log(err)
        });
    }
     
  },

  methods:{

    
  }
})