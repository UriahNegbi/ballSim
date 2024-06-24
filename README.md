# ballSim
this is aBallSim


### YouTube Tutorial: Creating a Bouncing Ball Animation with p5.js

---



- Camera focuses on the host with a friendly and enthusiastic expression.


"Hey everyone! Welcome back to [Your Channel Name]! In today's video, I'm going to show you how to create a cool bouncing ball animation using p5.js. This project is perfect for beginners and will help you understand the basics of animation and collision detection in JavaScript. So, let's get started!"

---

#### Project Setup



"First, let's set up our project. Create a new folder for your project and inside it, create an HTML file named `index.html`. Here's what it should look like:"

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bouncing Ball</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/addons/p5.sound.min.js"></script>
</head>
<body>
    <script src="ball.js"></script> 
</body>
</html>
```


"This HTML file includes the p5.js library and links to our JavaScript file, which we'll create next."

---


"Now, create a file named `ball.js` in the same folder. This file will contain the code for our animation. Let's start by defining the variables we'll need for the ball and the circle."


1. **Variables for Ball and Circle (1 minute)**
```javascript
// Ball variables
let x, y; // Ball position
let size = 50; // Ball size

// Circle variables
const circleX = 600; // X-coordinate of the circle
const circleY = 400; // Y-coordinate of the circle
let circleRadius = 200; // Radius of the circle

// Color variables
let colorR = 0;
let colorG = 0;
let colorB = 0;
let colorAngle = 0;

let vx, vy; // Speed - Velocity
```


"We have variables for the ball's position, size, and velocity, as well as for the circle's position and radius. We'll also use variables for the ball's color."

2. **Setup Function
```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  // Random initial position of the ball inside the circle
  x = random(circleX - circleRadius + size / 2, circleX + circleRadius - size / 2);
  y = random(circleY - circleRadius + size / 2, circleY + circleRadius - size / 2);
  
  // Initial velocity
  vx = 7;
  vy = 7;
}
```

"In the `setup` function, we create the canvas and set a random initial position for the ball within the circle. We also set the initial velocity of the ball."

3. **Draw Function
```javascript
function draw() {
  background(0);
  
  // Draw the circle
  noFill();
  ellipse(circleX, circleY, circleRadius * 2);
  
  // Update ball position
  x += vx;
  y += vy;

  // Check for collision with the circle edge
  const distanceToCenter = dist(x, y, circleX, circleY);
  if (distanceToCenter > circleRadius - size / 2) {
    size += 10;

    // Calculate angle of reflection
    const angle = atan2(y - circleY, x - circleX);
    
    // Adjust ball position to the edge of the circle
    x = circleX + (circleRadius - size / 2) * cos(angle);
    y = circleY + (circleRadius - size / 2) * sin(angle);
    
    // Calculate normal vector at the point of contact
    const normalX = cos(angle);
    const normalY = sin(angle);
    
    const dot = vx * normalX + vy * normalY;

    // Reflect the velocity vector
    vx = vx - 2 * dot * normalX;
    vy = vy - 2 * dot * normalY;
  }

  // Update color using sine function for smooth oscillation
  colorR = sin(colorAngle) * 255;
  colorG = sin(colorAngle + TWO_PI / 3) * 255;
  colorB = sin(colorAngle + TWO_PI * 2 / 3) * 255;
  colorAngle += 0.02; 

  // Draw the ball
  fill(0, 0, 0);
  stroke(colorR, colorG, colorB);
  ellipse(x, y, size);
  
  // Draw the circle border
  noFill();
  stroke(colorR, colorG, colorB);
  strokeWeight(5);
  ellipse(circleX, circleY, circleRadius * 2);
}
```


"The `draw` function is where the magic happens. We update the ball's position and check for collisions with the edge of the circle. When the ball hits the edge, we calculate the angle of reflection and adjust the ball's position and velocity. We also update the ball's color using a sine function for smooth color changes. Finally, we draw the ball and the circle."

---

"And there you have it! We've created a bouncing ball animation that changes color smoothly as it moves and bounces off the edges of a circle. This project is a great way to get familiar with p5.js and the basics of animation and collision detection. If you enjoyed this video, don't forget to like, comment, and subscribe for more coding tutorials. Thanks for watching, and I'll see you in the next video!"
