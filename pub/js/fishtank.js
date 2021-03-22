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
        const newFish = new Fish(fishPath, 0, 0, xSpeed, ySpeed, moveDelay)

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
            this.fishList[i].moveEnable()
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
                this.fishList[i].element.style.top = startX.toString() + 'px'
                this.fishList[i].element.style.top = startY.toString() + 'px'
            }
        }

    }
}

// Function to move the fish
function move(fish) {
    fish.x += fish.xSpeed
    fish.y += fish.ySpeed


    fish.element.style.left = fish.x + 'px'
    fish.element.style.top = fish.y + 'px'
    log(fish.element.style.left)
    log(fish.element.style.top)
    log("Moving")
}

// Creates a fish for the fishtank
function Fish(source, startX, startY, xSpeed = 10, ySpeed = 0, moveDelay = 1000) {
    // Current position of the fish
    this.x = 0
    this.y = 0

    // Speeds of the fish
    this.xSpeed = 10
    this.ySpeed = 0

    // Interval timer and interval delay time
    this.moveInterval = null
    this.moveDelay = moveDelay

    // DOM elements of the fish
    this.element = document.createElement('img')
    this.element.src = source
    this.element.id = 'fish'

    this.element.style.left = startX.toString() + 'px'
    this.element.style.top = startY.toString() + 'px'
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
        this.moveInterval = setInterval(function () {
            move(fish)
        }, this.moveDelay)
    },

    moveDisable: function () {
        this.moveInterval = null
    }
}

