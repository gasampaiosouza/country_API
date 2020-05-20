import fetchAll from './main.js';

const URL = 'https://restcountries.eu/rest/v2/';

const clear = (element, input = false) => {
    if (!input)
        return element.innerHTML = '';

    return element.value = '';
}

export default clear;