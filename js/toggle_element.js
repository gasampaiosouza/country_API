'use strict';

const toggleElement = (element, property, value) =>
  (element.style[property] = value);

export default toggleElement;
