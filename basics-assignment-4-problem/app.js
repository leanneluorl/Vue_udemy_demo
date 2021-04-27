const app = Vue.createApp({
	data() {
		return {
			className: "",
			toggle: true,
			color:""
		};
	},
	computed: {
	},
	watch: {
		
	},
	methods: {
		setToggle(){
			this.toggle = !this.toggle
		},
		setInlineStyle(event){
			this.color = event.target.value;
		},
		
	}
});

app.mount('#assignment');