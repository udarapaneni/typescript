//how to determine custom types

interface Point {
  x: number;
  y: number;
}
let drawPoint = (point: Point) => {
  console.log(point);
};

drawPoint({
  x: 1,
  y: 2,
});
