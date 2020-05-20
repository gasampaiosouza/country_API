'use strict';

import './configure_content.js';
import toggleElement from './toggle_element.js';
import clear from './clear.js';

const emptyMessage = (container, element, message = `I'm sorry, i didn't found any match D:`) => {
    clear(container);

    element.innerHTML = message;
    toggleElement(element, 'opacity', 1);
}

export default emptyMessage;