const app = Vue.createApp({
    data(){
        return {
            courseGoal: 'Learning Vue',
            vueLink: 'https://vuejs.org/'
        };
    }
});

app.mount('#user-goal');