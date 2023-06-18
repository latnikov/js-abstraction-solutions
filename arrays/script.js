// @ts-check

// BEGIN
export default (point1, point2) => {
  const x = (point1.x + point2.x) / 2;
  const y = (point1.y + point2.y) / 2;

  return { x, y };
};
// END