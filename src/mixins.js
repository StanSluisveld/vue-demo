import sampleFishes from './sample-fishes.js';

var store = {
    state: {
        fishes: {},
        order: {},   
    },
    

    addFish(fish) {
        const timestamp = Date.now();
        this.state.fishes[`fish-${timestamp}`] = fish;
    },

    loadFishes() {
        this.state.fishes = sampleFishes;
        console.log(this.state.fishes);
        return this.state.fishes;
        
    }
}

export { store };