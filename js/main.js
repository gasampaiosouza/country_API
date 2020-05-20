'use strict';
const URL = 'https://restcountries.eu/rest/v2/';

import content from './content.js';
import dropdown from './dropdown.js';

// enable dropdown
dropdown();

const $flagsContainer = document.getElementById('flags__container');
const $searchInput = document.getElementById('search__input');

const fetchAll = async URL =>
    await fetch(URL + 'all').then(res => res.json());

const filterUsers = async (name, url) => {
    // if input is empty
    if (!name)
        return fetchAll(URL);

    return fetch(`${url}name/${name}`)
        .then(res => res.json());
}

const debounce = (fn, wait = 1000, time) => (...args) =>
    // ...args = eventListener event
    clearTimeout(time, time = setTimeout(() => fn(...args), wait));


const handleKeyUp = e =>
    filterUsers(e.target.value, URL).then(users => configureContent(users, e.target.value));

$searchInput.addEventListener('keyup', debounce(handleKeyUp, 1000));

function configureContent(data, search) {
    const dataArray = [];
    let resultArr = [];

    data.map(item => dataArray.push(item));

    if (search) {
        // filter to match exactly with the country(ies) user is searching
        resultArr = dataArray.filter(({
            name
        }) => name.toLowerCase().startsWith(search.toLowerCase()));
    } else
        // do not filter anything
        resultArr = dataArray;

    const result = resultArr.reduce((prev, {
        flag,
        name,
        region,
        subregion
    }) => {
        prev += content(flag, name, region, subregion);

        return prev;
    }, '');

    return displayData(result);
}

// append the boxes with the data.
const displayData = result =>
    $flagsContainer.innerHTML = result;

// initialize all the countries
fetchAll(URL).then(data => configureContent(data));