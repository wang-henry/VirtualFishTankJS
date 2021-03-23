/* JS Library usage examples */
"use strict";

// First fish tank example 1000 x 300 scale
const t1 = new Tank(1000, 300, false, 'tank1');
t1.renderTank()
t1.addStationaryObj('assets/rock.svg', 0, 0, '70px', '70px')
t1.addStationaryObj('assets/rock.svg', 900, 0, '100px', '100px')
t1.addStationaryObj('assets/rock.svg', 500, 0, '50px', '100px')
t1.addStationaryObj('assets/seaweed.svg', 500, 0, '100px', '100px')
t1.addStationaryObj('assets/seaweed.svg', 100, 0, '100px', '200px')
t1.addFish('assets/fish.svg', 0, 0, 20, 0, 50)
t1.addText("<h1>You can also add custom text in the tank<h1>", 200, 200)
t1.updateAllHOrientation()
t1.enableAllMove()

// Second fish tank
const t2 = new Tank(300, 300, false, 'tank2');
t2.renderTank()
t2.addFish('assets/fish.svg', 0, 0, 20, 0, 50)
t2.addFish('assets/redFish.svg', 50, 50, 10, 10, 50)

t2.updateWidth(0, '20px')
t2.updateHeight(0, '50px')
t2.updateHOrientation(0)
t2.enableAllMove()

t2.changeWater('green')
t2.changeBorder('blue')


// Third fishtank
const t3 = new Tank(1000, 300, false, 'tank3');
t3.renderTank()
t3.addFish('assets/fish.svg', 0, 20, 40, 0, 20)
t3.addFish('assets/fish.svg', 0, 40, 20, 10, 20)
t3.addFish('assets/fish.svg', 0, 40, 20, 10, 50)
t3.addFish('assets/fish.svg', 0, 60, 5, 5, 20)
t3.updateAllHOrientation()
t3.enableAllMove()

// First fish tank example 1000 x 300 scale
const t4 = new Tank(1000, 300, false, 'tank4');
t4.renderTank()
t4.addStationaryObj('assets/rock.svg', 0, 0, '70px', '70px')
t4.addStationaryObj('assets/rock.svg', 900, 0, '100px', '100px')
t4.addStationaryObj('assets/rock.svg', 500, 0, '50px', '100px')
t4.addStationaryObj('assets/seaweed.svg', 500, 0, '100px', '100px')
t4.addStationaryObj('assets/seaweed.svg', 100, 0, '100px', '200px')
t4.addFish('assets/fish.svg', 0, 100, 5, 0, 100)

t4.setTravelPoints(0, 50, 50, 400, 50, true, true, 'normal')
t4.updateHOrientation(0)

t4.addText("<h1>You can also add custom text in the tank<h1>", 200, 200)
t4.enableAllMove()