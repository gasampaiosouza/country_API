'use strict';
import configureContent from './configure_content.js';
import filterCountries from './filter_countries.js';

const URL = 'https://restcountries.eu/rest/v2/';
const $searchInput = document.getElementById('search__input');

const debounce = (func, wait = 1000, time) => (...args) =>
    // ...args = eventListener event
    clearTimeout(time, time = setTimeout(() => func(...args), wait));


const handleKeyUp = e =>
    filterCountries({
        name: e.target.value,
        topic: 'name',
        URL
    }).then(users => configureContent(users, e.target.value));

$searchInput.addEventListener('keyup', debounce(handleKeyUp, 1000));