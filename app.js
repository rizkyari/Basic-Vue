const app = Vue.createApp({
    data(){
        return {
            courseGoal: 'Learning Vue',
            vueLink: 'https://vuejs.org/',
            goalA: 'Finishing Vue Course',
            goalB: 'Mastering Vue'
        };
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if (randomNumber < 0.5){
                return this.goalA;
            }else {
                return this.goalB;
            }
        }
    }
});

app.mount('#user-goal');