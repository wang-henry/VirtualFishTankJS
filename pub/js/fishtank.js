'use strict';
const log = console.log;


const fishImage = 'assets/fish.svg'

class Tank {
    constructor() {
        this.tankArea = null
        this.renderStatus = false

        // Array containing all the fish in the tank
        this.fishList = []
    }

    RenderTank() {
        this.renderStatus = true
        const tankDiv = document.createElement('div')
        tankDiv.style = 'border-style: solid; border-color: black'

        this.tankArea = tankDiv

        const body = document.querySelector('body')
        body.append(tankDiv)
    }

    // Adds a fish to the tank from the img path "fish_path"
    AddFish(fish_path) {
        // Check that the tank is rendered
        if (this.renderStatus === false) {
            window.alert("Tank not rendered!")
        }
        const fish_pic = document.createElement('img')
        fish_pic.src = fish_path

        this.tankArea.append(fish_pic)
        this.fishList.push(fish_pic)
        log("Added fish to tank! " + this.fishList.length + " fish currently in tank.")
    }
}

