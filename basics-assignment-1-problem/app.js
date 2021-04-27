const app = Vue.createApp({
    data() {
        return {
            myName:"Leanne Luo",
            myAge: 18,
            imgSrc:'https://i.pinimg.com/originals/76/24/d7/7624d7c4aa93129aadcd8c09fff789a4.jpg',
            name:""
        };
    },
    methods:{
        setName(event){
            this.name = event.target.value
            this.myName = event.target.value
        },
        
    },
    computed:{
        random(){
            return Math.random()
        }
    }


})
app.mount("#assignment")