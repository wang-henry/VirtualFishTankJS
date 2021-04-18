# Fish tank Library
### Landing Page
https://cryptic-earth-35104.herokuapp.com
### Documentation
https://cryptic-earth-35104.herokuapp.com/api.html
### Getting Started
Virtual fish tank is a library that allows developers to quickly create fish tanks that can be
        used for display or game applications. To begin using the library, first download it, unzip the files and put them into the desiredlocation. Then load the Javascript file and CSS into your webpage. This library is standalone so you do not need any additional library for it to work.

```<link rel="stylesheet" type="text/css" href="css/virtualfishtank.css">```  
```<script defer type="text/javascript" src='js/virtualfishtank.js'></script>```  

### Basic Fish Tank Setup
First set up a div in your HTML file where you would like the fish tank to be placed, give this fish tank an ID.  
```<div id="tankDiv"></div>```  

In your javascript file create a new tank and pass in the div. This can be done with ```document.getElementById()``` as seen below. Make sure to call renderTank so that the tank will be visible.

```
//The following creates a 1000x300 tank in the div with ID 'tankDiv'
const basicTank = new Tank(const t1 = new Tank(1000, 300, document.getElementById('tankDiv'));
// Call renderTank() so that the tank shows up
basicTank.renderTank()
```

Now we can add some basic fish and objects to the tank and enable the movement of the fish.

```
// Add a fish with the image 'your/image/path.svg' with initial starting position at (0,0),
// x speed of 20 and y speed of 20 and movement delay of 50
basicTank.addFish('your/image/path.svg', 0, 0, 20, 20, 50)

// Enable movement of all fish
basicTank.enableAllMove()

// Add stationary object with the image 'your/image/path.svg' with position (10,0) and width and heights of 20.
basicTank.addStationaryObj('your/image/path.svg', 10, 0, 20, 20)
```
