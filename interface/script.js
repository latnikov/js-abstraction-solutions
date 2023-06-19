// @ts-check

const makePoint = (x, y) => {
  const point = {
    angle: Math.atan2(y, x),
    radius: Math.sqrt((x ** 2) + (y ** 2)),
    points: [x, y],
  };
  return point;
};
// BEGIN (write your solution here)
const getX = (point) => point.points[0];
const getY = (point) => point.points[1];
// END

export { makePoint, getX, getY };
