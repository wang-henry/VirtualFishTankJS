'use strict';
const log = console.log;


const fishImage = 'assets/fish.svg'

function Tank(width = 100, height = 100, percentScale = true) {
    // Defines whether the size of the tank should be in px or %
    this.percentScale = percentScale

    // Width and height of the tank
    this.width = width
    this.height = height

    this.tankArea = null
    this.renderStatus = false
    // Array containing all the fish in the tank
    this.fishList = []
}

Tank.prototype = {
    renderTank: function () {
        this.renderStatus = true

        // Create the div for the tank
        const tankDiv = document.createElement('div')
        tankDiv.id = 'tank'
        this.tankArea = tankDiv

        // Adjust the scale accordingly
        if (this.percentScale) {
            tankDiv.style.height = this.height.toString() + '%'
            tankDiv.style.width = this.width.toString() + '%'
        } else {
            tankDiv.style.height = this.height.toString() + 'px'
            tankDiv.style.width = this.width.toString() + 'px'
        }

        const body = document.querySelector('body')
        body.append(tankDiv)
    },

    // Adds a fish to the tank from the img path "fish_path"
    addFish: function (fishPath, xSpeed, ySpeed, moveDelay) {
        // Check that the tank is rendered
        if (!this.renderStatus) {
            window.alert("Tank not rendered!")
        }
        const newFish = new Fish(fishPath, 0, 10, xSpeed, ySpeed, moveDelay)

        this.tankArea.append(newFish.element)

        // Push new fish to array
        this.fishList.push(newFish)
        log("Added fish to tank! " + this.fishList.length + " fish currently in tank.")
    },

    enableAllMove: function () {
        if (!this.renderStatus) {
            window.alert("Tank not rendered!")
        }

        log("Movement enabled for all fish!")
        for (let i = 0; i < this.fishList.length; i++) {
            this.fishList[i].moveEnable(this)
        }

    },

    updateAllFish: function (xSpeed, ySpeed, moveDelay) {
        for (let i = 0; i < this.fishList.length; i++) {
            this.fishList[i].xSpeed = xSpeed
            this.fishList[i].ySpeed = ySpeed
            this.fishList[i].ySpeed = moveDelay
        }
    },


    updateAllStartPos: function (startX, startY, refresh = false) {
        for (let i = 0; i < this.fishList.length; i++) {
            this.fishList[i].startX = startX
            this.fishList[i].startY = startY

            if (refresh === true) {
                this.fishList[i].element.style.left = startX.toString() + 'px'
                this.fishList[i].element.style.bottom = startY.toString() + 'px'
            }
        }

    }


}

// Function to move the fish
function move(fish, tank) {

    // Tank detection left and right
    if (fish.x <= 0) {
        fish.right = true
    }

    if (fish.x + fish.element.width >= tank.width) {
        fish.right = false
    }

    if (fish.right) {
        fish.x += fish.xSpeed
    } else {
        fish.x -= fish.xSpeed
    }

    // Tank detection top and bottom
    if (fish.y <= 0) {
        fish.up = true
    }

    if (fish.y + fish.element.height >= tank.height) {
        fish.up = false
    }
    if (fish.up) {
        fish.y += fish.ySpeed
    } else {
        fish.y -= fish.ySpeed
    }


    fish.element.style.left = fish.x + 'px'
    fish.element.style.bottom = fish.y + 'px'
    log(fish.element.style.left)
    log(fish.element.style.bottom)
    log("Moving")
}

// Creates a fish for the fishtank
function Fish(source, startX, startY, xSpeed = 10, ySpeed = 0, moveDelay = 1000) {
    // Current position of the fish
    this.x = startX
    this.y = startY

    // Speeds of the fish
    this.xSpeed = xSpeed
    this.ySpeed = ySpeed

    //Direction
    this.right = true
    this.up = true

    // Interval timer and interval delay time
    this.moveInterval = null
    this.moveDelay = moveDelay

    // DOM elements of the fish
    this.element = document.createElement('img')
    this.element.src = source
    this.element.id = 'fish'

    //Update the starting position
    this.element.style.left = this.x + 'px'
    this.element.style.bottom = this.y + 'px'

    log(this.element.width)
    log(this.element.height)
}

Fish.prototype = {
    test: function () {
        log("TESTING")
        log(this.moveDelay)
        log(this.moveInterval)
    },

    moveEnable: function (tank) {
        log(this)
        const fish = this
        this.moveInterval = setInterval(function () {
            move(fish, tank)
        }, this.moveDelay)
    },

    moveDisable: function () {
        this.moveInterval = null
    }
}

