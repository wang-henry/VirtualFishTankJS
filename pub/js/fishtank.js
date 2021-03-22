'use strict';
const log = console.log;


const fishImage = 'assets/fish.svg'

function Tank(moveDelay = 1000) {
    this.tankArea = null
    this.renderStatus = false
    this.fishMove = false
    this.moveDelay = moveDelay

    // Array containing all the fish in the tank
    this.fishList = []
}

Tank.prototype = {
    renderTank: function () {
        this.renderStatus = true
        const tankDiv = document.createElement('div')
        tankDiv.id = 'tank'

        this.tankArea = tankDiv

        const body = document.querySelector('body')
        body.append(tankDiv)
    },

    // Adds a fish to the tank from the img path "fish_path"
    addFish: function (fishPath) {
        // Check that the tank is rendered
        if (this.renderStatus === false) {
            window.alert("Tank not rendered!")
        }
        const newFish = new Fish(fishPath, 50)

        this.tankArea.append(newFish.element)

        // Push new fish to array
        this.fishList.push(newFish)
        log("Added fish to tank! " + this.fishList.length + " fish currently in tank.")
    },

    enableAllMove: function () {
        log("Movement enabled!")

        for (let i = 0; i < this.fishList.length; i++) {
            log(this.fishList[i].test())

            this.fishList[i].moveEnable()
        }

    }
}

// Creates a fish for the fishtank
function Fish(source, moveDelay = 1000) {
    this.x = 0
    this.y = 0
    this.xSpeed = 10
    this.ySpeed = 10
    this.moveInterval = null
    this.moveDelay = moveDelay

    this.element = document.createElement('img')
    this.element.src = source
    this.element.id = 'fish'

    this.element.style.left = '1px'
    this.element.style.top = '10px'
}

function move(fish) {
    fish.x += fish.xSpeed;
    fish.y += fish.ySpeed;


    fish.element.style.left = fish.x + 'px'
    fish.element.style.top = fish.y + 'px'
    log(fish.element.style.left)
    log(fish.element.style.top)
    log("Moving")
}

Fish.prototype = {
    test: function () {
        log("TESTING")
        log(this.moveDelay)
        log(this.moveInterval)
    },

    moveEnable: function () {
        log(this)
        const fish = this
        // this.moveInterval = setInterval(function (fish) {
        //     log(fish)
        //     this.element.style.left = 1 + 'px'
        //     this.element.style.top = 1 + 'px'
        //     log("Moving")
        // }, this.moveDelay)
        this.moveInterval = setInterval(function () {
            move(fish)
        }, this.moveDelay)
    },

    moveDisable: function () {
        this.moveInterval = null
    }
}

