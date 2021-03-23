/* JS Library usage examples */
"use strict";

const t1 = new Tank(1000, 300, false, 'tank1');
t1.renderTank()
t1.addFish('assets/fish.svg', 0, 0, 20, 0, 50)
t1.updateAllHOrientation()
t1.enableAllMove()

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

const t3 = new Tank(1000, 300, false, 'tank3');
t3.renderTank()
t3.addFish('assets/fish.svg', 0, 20, 40, 0, 20)
t3.addFish('assets/fish.svg', 0, 40, 20, 10, 20)
t3.addFish('assets/fish.svg', 0, 40, 20, 10, 50)
t3.addFish('assets/fish.svg', 0, 60, 5, 5, 20)
t3.updateAllHOrientation()
t3.enableAllMove()