/* JS Library usage examples */
"use strict";

// First fish tank example 1000 x 300 scale
const t1 = new Tank(1000, 300, document.getElementById('tank1'));
t1.renderTank()
t1.addStationaryObj('assets/rock.svg', 0, 0, '70px', '70px')
t1.addStationaryObj('assets/rock.svg', 900, 0, '100px', '100px')
t1.addStationaryObj('assets/rock.svg', 500, 0, '50px', '100px')
t1.addStationaryObj('assets/seaweed.svg', 500, 0, '100px', '100px')
t1.addStationaryObj('assets/seaweed.svg', 100, 0, '100px', '200px')
t1.addFish('assets/fish.svg', 0, 0, 20, 0, 50, false)
t1.addText("<h1>You can also add custom text in the tank<h1>", 200, 200)
t1.updateAllHOrientation()
t1.enableAllMove()

//------------------------------------------------------------------------------------------------
// Initialize tank and render
const t2 = new Tank(300, 300, document.getElementById('tank2'));
t2.renderTank()

// Add fish and update properties, and enable movement
t2.addFish('assets/fish.svg', 0, 0, 20, 0, 50)
t2.addFish('assets/redFish.svg', 50, 50, 10, 10, 50)
t2.updateWidth(0, '20px')
t2.updateHeight(0, '50px')
t2.updateHOrientation(0)
t2.enableAllMove()

// Change the tank colours
t2.changeWater('green')
t2.changeBorder('blue')

//------------------------------------------------------------------------------------------------
// Initialize tank and render
const t3 = new Tank(1000, 300, document.getElementById('tank3'));
t3.renderTank()

// Add fish and update orientation
t3.addFish('assets/fish.svg', 0, 20, 40, 0, 20)
t3.addFish('assets/fish.svg', 0, 40, 20, 10, 20)
t3.addFish('assets/fish.svg', 0, 40, 20, 10, 50)
t3.addFish('assets/fish.svg', 0, 60, 5, 5, 20)
t3.updateAllHOrientation()

// Enable movement
t3.enableAllMove()


// Create new tank and render
const m1 = new Tank(1000, 300, document.getElementById('m1'));
m1.renderTank()

// Add fish
m1.addFish('assets/fish.svg', 0, 0, 20, 0, 50, false)
m1.addFish('assets/fish.svg', 0, 0, 20, 0, 50, false)

// Set first fish to normal loop
m1.setTravelPoints(0, 0, 500, 50, true, 'normal')

// Set second fish to bounce loop
m1.setTravelPoints(1, 0, 500, 100, true, 'bounce')

// Flip all horizontal orientation and enable movement
m1.updateAllHOrientation()
m1.enableAllMove()

//------------------------------------------------------------------------------------------------
// Initialize Tank and render
const t4 = new Tank(1000, 300, document.getElementById('tank4'));
t4.renderTank()

// Add objects and fish
t4.addStationaryObj('assets/rock.svg', 0, 0, '70px', '70px')
t4.addStationaryObj('assets/rock.svg', 900, 0, '100px', '100px')
t4.addStationaryObj('assets/rock.svg', 500, 0, '50px', '100px')
t4.addStationaryObj('assets/seaweed.svg', 500, 0, '100px', '100px')
t4.addStationaryObj('assets/seaweed.svg', 100, 0, '100px', '200px')
t4.addFish('assets/fish.svg', 0, 100, 5, 0, 100)
t4.addFish('assets/fish.svg', 0, 20, 40, 0, 20)
t4.addFish('assets/fish.svg', 0, 40, 20, 10, 20)
t4.addFish('assets/fish.svg', 0, 40, 20, 10, 50)
t4.addFish('assets/fish.svg', 0, 60, 5, 5, 20)

// Setup the trail and upload orientation
t4.setTravelPoints(0, 0, 500, 50, true, 'normal')
t4.setTrail(0, 'red', 50)
t4.updateAllHOrientation(0)

// Add text and enable movement
t4.addText("<h1>Loading...<h1>", 0, 110)
t4.enableAllMove()

// Create new tank and render
const t5 = new Tank(1000, 300, document.getElementById('tank5'));
t5.renderTank()

// Add some stationary objects
t5.addStationaryObj('assets/rock.svg', 0, 0, '70px', '70px')
t5.addStationaryObj('assets/rock.svg', 900, 0, '100px', '100px')
t5.addStationaryObj('assets/rock.svg', 500, 0, '50px', '100px')
t5.addStationaryObj('assets/seaweed.svg', 500, 0, '100px', '100px')
t5.addStationaryObj('assets/seaweed.svg', 100, 0, '100px', '200px')

// Add a fish and allow it to be user controlled
t5.addFish('assets/fish.svg', 0, 0, 20, 20, 50, true)
t5.updateAllHOrientation()