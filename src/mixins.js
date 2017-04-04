export default {
    data() {
        return {
            state: {
                fishes: {},
			    order: {}
            }
           
        }
    },
    methods: {
        addFish: function(fish){
		const fishes = {...this.$data.state.fishes};
		// add new fish
		const timestamp = Date.now();
		fishes[`fish-${timestamp}`] = fish;
		//set state
		//this.setState({ fishes }); 
        console.log(fishes);
        }
    }
}