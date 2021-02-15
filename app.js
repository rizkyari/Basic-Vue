const app = Vue.createApp({
    data(){
        return {
            courseGoal: 'Learning Vue',
            vueLink: 'https://vuejs.org/',
            goalA: '<h3>Finishing Vue Course</h3>',
            goalB: '<h3>Mastering Vue</h3>'
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