import sampleFishes from './sample-fishes.js';

// export default {
//     data() {
//         return {
//             state: {
//                 fishes: {},
//                 order: {}
//             }
//         }
//     },
//     methods: {
//         mAddFish: function (fish) {
//             const fishes = {...this.$data.state.fishes };
//             // add new fish
//             const timestamp = Date.now();
//             fishes[`fish-${timestamp}`] = fish;
//             console.log(fishes);
//         },

//         mLoadSamples: function () {
//             console.log('calling loadSamples');
//             this.$data.state.fishes = sampleFishes;
//             console.log('fishes inside mixin: ', this.$data.state.fishes);
//         }

//     }
// }


var store = {
    state: {
        fishes: {},
        order: {}
    },
    addFish(fish) {
        const timestamp = Date.now();
        this.state.fishes[`fish-${timestamp}`] = fish;
    },

    loadFishes() {
        this.state.fishes = sampleFishes;
        return this.state.fishes;
    }
}

export { store };