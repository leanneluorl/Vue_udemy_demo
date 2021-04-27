const app = Vue.createApp({
    data() {
        return {
            alertMsg:"Alert......",
            keyDownInputValue: "",
            onEnterValue: "",
        };
    },
    methods:{
        keyDownInput(event){
            this.keyDownInputValue = event.target.value
        },
        onEnter(event){
            this.onEnterValue = event.target.value
        },
        showAlert(){
            alert(this.alertMsg)
        }
        
    },
    computed:{
        random(){
            return Math.random()
        }
    }


})
app.mount("#assignment")