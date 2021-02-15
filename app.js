const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        name: ''
      };
    },
    methods: {
        submitForm(){
            alert('berhasil dikirm');
        },
        setName(e){
            this.name = e.target.value;
        },
        add(){
            this.counter = this.counter + 1;
        },
        reduce(){
            this.counter = this.counter - 1;
        }
    }
  });
  
  app.mount('#events');
  