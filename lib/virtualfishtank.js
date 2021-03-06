'use strict';
(function (global, document) {

    const log = console.log;


    const fishImage = 'assets/fish.svg'

    // Create a fish tank with the given width and height (% or px depending on percentScale bool
    // attach to div or body by default
    function Tank(width = 100, height = 100, div) {
        // Defines whether the size of the tank should be in px or %

        // Width and height of the tank
        this.width = width
        this.height = height

        this.tankArea = null
        this.renderStatus = false

        // Div that the fish tank should be a child of
        this.div = div
        // Visual properties of the tank
        this.color = 'cornflowerblue'
        // Array containing all the fish in the tank
        this.fishList = []

        // Array containing stationary objects
        this.tankObjects = []
    }

    Tank.prototype = {
        // Render the tank
        renderTank: function () {
            this.renderStatus = true

            // Create the div for the tank
            const tankDiv = document.createElement('div')
            tankDiv.id = 'tank'
            this.tankArea = tankDiv

            // Adjust the scale accordingly

            tankDiv.style.height = this.height.toString() + 'px'
            tankDiv.style.width = this.width.toString() + 'px'

            this.div.append(tankDiv)
        },

        // --------------------------------------------------
        // Functions that manipulate fish tank itself
        // --------------------------------------------------

        // Change the water color
        changeWater: function (color) {
            this.tankArea.style.background = color
        },

        // Change the tank border color
        changeBorder: function (color) {
            this.tankArea.style['border-color'] = color
        },

        // Change the tank border style
        changeStyle: function (style) {
            this.tankArea.style['border-style'] = style
        },

        // Adds a fish to the tank from the img path "fish_path"
        addFish: function (fishPath, startX, startY, xSpeed, ySpeed, moveDelay, controlled = false) {
            // Check that the tank is rendered
            if (!this.renderStatus) {
                window.alert("Tank not rendered!")
            }
            const newFish = new Fish(fishPath, startX, startY, xSpeed, ySpeed, moveDelay, this, controlled)

            this.tankArea.append(newFish.element)

            // Push new fish to array
            this.fishList.push(newFish)
            log("Added fish to tank! " + this.fishList.length + " fish currently in tank. Index #: " + (this.fishList.length - 1))
        },

        // Adds a stationary object to the fish tank
        addStationaryObj: function (imgPath, x, y, objW, objH) {
            if (!this.renderStatus) {
                window.alert("Tank not rendered!")
            }

            if (x < 0 || x > this.width || y < 0 || y > this.height) {
                log("Position outside of tank! Object not added!")

            } else {
                const newObject = new StationaryObject(imgPath, x, y, objW, objH)
                this.tankArea.append(newObject.element)


                // Push new stationary object onto array
                this.tankObjects.push(newObject)
                log("Added new object to tank!" + this.tankObjects.length + " objects currently in tank. Index #: " + (this.tankObjects.length - 1))
            }
        },

        // Adds text to fish tank
        addText: function (text, x, y) {
            const textDiv = document.createElement('div')
            textDiv.id = 'textDiv'
            textDiv.style.left = x + 'px'
            textDiv.style.bottom = y + 'px'

            const textNode = document.createElement('text')
            textNode.innerHTML = text


            textDiv.append(textNode)
            this.tankArea.append(textDiv)
        },

        // ----------------------------------------------------
        // Functions that manipulates ALL the fish in the tank
        // ----------------------------------------------------
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
        },

        // Flips all horizontal orientation
        updateAllHOrientation: function () {
            for (let i = 0; i < this.fishList.length; i++) {
                this.fishList[i].orientationRight = !this.fishList[i].orientationRight
                log("Updated all Horizontal fish orientations!")
            }
        },

        // Flips all vertical orientation
        updateAllVOrientation: function () {
            for (let i = 0; i < this.fishList.length; i++) {
                this.fishList[i].orientationUp = !this.fishList[i].orientationUp
                log("Updated all Vertical fish orientations!")
            }
        },

        // ----------------------------------------------------
        // Functions that manipulates a single fish in the tank
        // index are in order the fish were added in
        // ----------------------------------------------------\
        updateHOrientation: function (index) {
            this.fishList[index].orientationRight = !this.fishList[index].orientationRight
        },

        updateVOrientation: function (index) {
            this.fishList[index].orientationUp = !this.fishList[index].orientationUp
        },

        updateWidth: function (index, width) {
            this.fishList[index].element.style.width = width
        },

        updateHeight: function (index, height) {
            this.fishList[index].element.style.height = height
        },

        // Set positions for a fish to travel between and decide whether it should loop
        setTravelPoints: function (index, x1, x2, yLevel, loop = false, loopType = 'bounce') {
            if (x1 >= x2) {
                log("Invalid x values! x1 must be < x2!")
                return
            }
            const fish = this.fishList[index]
            fish.x1 = x1
            fish.x2 = x2
            fish.y = yLevel
            fish.loopEnable = loop
            fish.loopType = loopType

            fish.movePointsEnable(this)
        },

        setTrail: function (index, color, height) {
            const newTrail = document.createElement('div')
            try {
                const fish = this.fishList[index]
                newTrail.style.background = color
                newTrail.id = 'trail'
                newTrail.style.height = height + 'px'
                newTrail.style.left = fish.x1 + 'px'

                newTrail.style.bottom = fish.y + 'px'

                fish.trailEnable = true
                fish.trail = newTrail
            } catch (e) {
                log("Please enter a valid trail color and index!")
                return
            }

            this.tankArea.append(newTrail)
            log('Set new trail!')
        },

        removeTrail: function (index) {
            this.trail = null
            this.trailEnable = false
        },

        updateBind: function (index, direction, newKey) {
            if (direction === "right") {
                this.fishList[index].rightBind = newKey
            } else if (direction === "left") {
                this.fishList[index].leftBind = newKey
            } else if (direction === "up") {
                this.fishList[index].upBind = newKey

            } else if (direction === "down") {
                this.fishList[index].downBind = newKey
            } else {
                log("Invalid Direction")
            }
        },

        getPos: function (index) {
            return [this.fishList[index].x, this.fishList[index].y]
        }

    }

    function movePoints(fish, tank) {
        // Tank detection left and right
        if (fish.loopType === 'bounce') {
            if (fish.x <= fish.x1) {
                fish.right = true
                if (fish.orientationRight) {
                    fish.element.style.transform = 'scaleX(1)';
                } else {
                    fish.element.style.transform = 'scaleX(-1)';
                }
            }

            if (fish.x + fish.element.width >= fish.x2) {
                fish.right = false
                if (fish.orientationRight) {
                    fish.element.style.transform = 'scaleX(-1)';
                } else {
                    fish.element.style.transform = 'scaleX(1)';
                }
            }
        } else if (fish.loopType === 'normal') {
            if (fish.orientationRight) {
                fish.element.style.transform = 'scaleX(1)';
            } else {
                fish.element.style.transform = 'scaleX(-1)';
            }

            if (fish.x + fish.element.width >= fish.x2) {
                if (!fish.loopEnable) {
                    fish.moveDisable()
                    return
                }
                fish.right = true
                fish.x = fish.x1
            }
        } else {
            log("Invalid loopType!")
            return
        }


        if (fish.right) {
            fish.x += fish.xSpeed
        } else {
            fish.x -= fish.xSpeed
        }

        if (fish.trailEnable) {
            fish.trail.style.width = fish.x + 'px'
        }

        fish.element.style.left = fish.x + 'px'
    }

    // Function to move the fish

    function move(fish, tank) {
        // Tank detection left and right
        if (fish.x <= 0) {
            fish.right = true
            if (fish.orientationRight) {
                fish.element.style.transform = 'scaleX(1)';
            } else {
                fish.element.style.transform = 'scaleX(-1)';
            }
        }

        if (fish.x + fish.element.width >= tank.width) {
            fish.right = false
            if (fish.orientationRight) {
                fish.element.style.transform = 'scaleX(-1)';
            } else {
                fish.element.style.transform = 'scaleX(1)';
            }
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
    }

    function controlFish(fish, tank) {
        // Right
        if (fish.rightKey && fish.x + fish.element.width + fish.xSpeed <= tank.width) {
            fish.x += fish.xSpeed
            fish.right = true
            if (fish.orientationRight) {
                fish.element.style.transform = 'scaleX(1)';
            } else {
                fish.element.style.transform = 'scaleX(-1)';
            }
        }
        // Left
        if (fish.leftKey && fish.x - fish.xSpeed >= 0) {
            fish.x -= fish.xSpeed
            fish.right = false
            if (fish.orientationRight) {
                fish.element.style.transform = 'scaleX(-1)';
            } else {
                fish.element.style.transform = 'scaleX(1)';
            }
        }

        // Up
        if (fish.upKey && fish.y + fish.element.height + fish.ySpeed <= tank.height) {
            fish.y += fish.ySpeed
        }

        // Down
        if (fish.downKey && fish.y - fish.ySpeed >= 0) {
            fish.y -= fish.ySpeed
        }


        fish.element.style.left = fish.x + 'px'
        fish.element.style.bottom = fish.y + 'px'

        // Tank detection left and right
        if (fish.x <= 0) {
            fish.right = true
            if (fish.orientationRight) {
                fish.element.style.transform = 'scaleX(1)';
            } else {
                fish.element.style.transform = 'scaleX(-1)';
            }
        }

        if (fish.x + fish.element.width >= tank.width) {
            fish.right = false
            if (fish.orientationRight) {
                fish.element.style.transform = 'scaleX(-1)';
            } else {
                fish.element.style.transform = 'scaleX(1)';
            }
        }
    }


    // Creates a fish for the fishtank
    function Fish(source, startX, startY, xSpeed = 10, ySpeed = 0, moveDelay = 1000, tank, controlled) {
        // Current position of the fish
        this.x = startX
        this.y = startY

        // Speeds of the fish
        this.xSpeed = xSpeed
        this.ySpeed = ySpeed

        // Whether the fish should be controller with arrow keys
        this.controlled = controlled

        // Boolean status of if keys are pressed
        this.downKey = false
        this.upKey = false
        this.rightKey = false
        this.leftKey = false

        this.downBind = 's'
        this.upBind = 'w'
        this.rightBind = 'd'
        this.leftBind = 'a'
        // Tank the fish is a part of
        this.tank = tank
        // ------------------------
        // Custom path properties
        // ------------------------
        // travel points (if specified)
        this.x1 = null
        this.x2 = null

        this.trailEnable = false
        this.trail = null
        this.loopEnable = false
        this.loopType = 'normal'

        // Boolean to reverse orientation for flipping, by default it is assumed the fish forward is to the right and is not
        // upsidedown
        this.orientationRight = true
        this.orientationUp = true

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
        if (this.controlled) {
            document.onkeydown = (e) => this.keyDown(e, this);
            document.onkeyup = (e) => this.keyUp(e, this);
            this.keyTimer()
        }

        //Update the starting position
        this.element.style.left = this.x + 'px'
        this.element.style.bottom = this.y + 'px'

    }

    Fish.prototype = {
        keyDown(e, fish) {
            const key = e.key
            if (key === fish.upBind) {
                this.upKey = true
            }

            if (key === fish.downBind) {
                this.downKey = true
            }

            if (key === fish.rightBind) {
                this.rightKey = true
            }

            if (key === fish.leftBind) {
                this.leftKey = true
            }
        },

        keyUp(e, fish) {
            const key = e.key
            if (key === fish.upBind) {
                this.upKey = false
            }

            if (key === fish.downBind) {
                this.downKey = false
            }

            if (key === fish.rightBind) {
                this.rightKey = false
            }

            if (key === fish.leftBind) {
                this.leftKey = false
            }
        },

        keyTimer: function () {
            const fish = this
            const tank = this.tank
            this.moveInterval = setInterval(function () {
                controlFish(fish, tank)
            }, this.moveDelay)
        },

        moveEnable: function (tank) {
            if (this.controlled) {
                log("Cannot move enable user controlled fish!")
                return
            }

            const fish = this
            this.moveInterval = setInterval(function () {
                move(fish, tank)
            }, this.moveDelay)
        },

        moveDisable: function () {
            clearInterval(this.moveInterval)
            this.moveInterval = null
        },

        // Make the fish move between two predefined points
        movePointsEnable: function (tank) {
            if (this.controlled) {
                log("Cannot move enable user controlled fish!")
                return
            }
            // Clear any other movement timers
            this.moveDisable()

            const fish = this
            this.moveInterval = setInterval(function () {
                movePoints(fish, tank)
            }, this.moveDelay)
        }
    }

    //Creates a stationary object in the fish tank
    function StationaryObject(source, x, y, width, height) {
        this.x = x
        this.y = y

        // DOM elements of the stationary object
        this.element = document.createElement('img')
        this.element.id = 'stationaryObj'

        this.element.src = source
        this.element.style.width = width
        this.element.style.height = height

        // Update position in DOM
        this.element.style.left = this.x + 'px'
        this.element.style.bottom = this.y + 'px'

    }

    global.Tank = global.Tank || Tank
})(window, window.document);