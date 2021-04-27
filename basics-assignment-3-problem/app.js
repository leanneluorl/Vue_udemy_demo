const app = Vue.createApp({
    data() {
        return {
            resultValue: 0,
            result: ""
        };
    },
    methods:{
        add(num){
            this.resultValue += num;
        },
        minus(num){
            this.resultValue -= num;
        }
    },
    watch: {
        resultValue(value){
            const that= this
            setTimeout(function(){
                that.resultValue = 0
                this.result = "time out"
            },5000)
            if(value == 0 ){
                this.result = this.result == "" ? "start" : "Restart" ;
            }else if(value<37){
                this.result =  "Not there yet"
            }else if(value>37){
                this.result =  "Too much!"
            }else{
                this.result = this.resultValue;
            }  
        }
    }


})
app.mount("#assignment")