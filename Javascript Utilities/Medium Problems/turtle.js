
// https://www.greatfrontend.com/questions/javascript/turtle

export default class Turtle {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.currDir = "N";
    this.directions = ["N", "E", "S", "W"];
    this.i = 0;
  }

  /**
   * @param {number} distance Distance to move forward while facing the current direction.
   * @return {Turtle}
   */
  forward(distance) {
    if(this.currDir === "N") this.y += distance;
    else if(this.currDir === "E") this.x += distance;
    else if(this.currDir === "S") this.y -= distance;
    else if(this.currDir === "W") this.x -= distance;
  }

  /**
   * @param {number} distance Distance to move backward while facing the current direction.
   * @return {Turtle}
   */
  backward(distance) {
    if(this.currDir === "N") this.y -= distance;
    else if(this.currDir === "E") this.x -= distance;
    else if(this.currDir === "S") this.y += distance;
    else if(this.currDir === "W") this.x += distance;
  }

  /**
   * Turns the turtle left.
   * @return {Turtle}
   */
  left() {
    if(this.i === 0) this.i = this.directions.length-1;
    else this.i--;
    this.currDir = this.directions[this.i];
    return this;
  }

  /**
   * Turns the turtle right.
   * @return {Turtle}
   */
  right() {
    if(this.i === this.directions.length-1) this.i = 0;
    else this.i++;
    this.currDir = this.directions[this.i];
    return this;
  }

  /**
   * @return {[number, number]} Coordinates [x, y]
   */
  position() {
    return [this.x, this.y];
  }
}