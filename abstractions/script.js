// @ts-check

import { makeDecartPoint, getX, getY } from './points.js';

// BEGIN
const makeSegment = (point1, point2) => {
  const segment = { beginPoint: point1, endPoint: point2 };
  return segment;
};

const getBeginPoint = (segment) => segment.beginPoint;

const getEndPoint = (segment) => segment.endPoint;

const getMidpointOfSegment = (segment) => {
  const beginPoint = getBeginPoint(segment);
  const endPoint = getEndPoint(segment);

  const x = (getX(beginPoint) + getX(endPoint)) / 2;
  const y = (getY(beginPoint) + getY(endPoint)) / 2;

  return makeDecartPoint(x, y);
};

export {
  makeSegment,
  getBeginPoint,
  getEndPoint,
  getMidpointOfSegment,
};
// END
