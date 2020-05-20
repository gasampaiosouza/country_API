'use strict';

const toggleElement = (element, property, value) => {
    console.log('toggling to: ', property, value)
    return element.style[property] = value;
}

export default toggleElement;