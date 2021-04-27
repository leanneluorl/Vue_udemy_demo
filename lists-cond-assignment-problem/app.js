const app = Vue.createApp({
	data() {
		return {
			taskArr: [],
            taskValue:"",
            toggle: true,
            toggleAction: "Hide List"
		};
	},
	computed: {
	},
	watch: {
		
	},
	methods: {
		addTask(){
			this.taskArr.push(this.taskValue)
		},
        toggleList(){
            this.toggle = !this.toggle
            if(this.toggle){
                this.toggleAction = "Hide List"
            }else{
                this.toggleAction = "Show List"
            }
        }
		
	}
});

app.mount('#assignment');