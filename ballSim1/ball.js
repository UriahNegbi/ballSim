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

  function draw() {    
    
    // Draw the circle
    noFill();
    ellipse(circleX, circleY, circleRadius * 2);
    
    // Update ball position
    x += vx;
    y += vy;
  
    // Check for collision with the circle edge
    const distanceToCenter = dist(x, y, circleX, circleY);
    if (distanceToCenter > circleRadius - size / 2) {
    size += 1;
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
  
  