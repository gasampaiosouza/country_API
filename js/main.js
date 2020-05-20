import './country_filter.js';
import configureContent from './configure_content.js';
import './dropdown.js';
import clear from './clear.js';

const URL = 'https://restcountries.eu/rest/v2/';

const fetchAll = async (url) =>
    await fetch(url + 'all').then(res => res.json()).then(data => configureContent(data));

const search_input = document.getElementById('search__input');
const clear_icon = document.getElementById('clear__icon');

// clear input when X is clicked.
clear_icon.addEventListener('click', () => {
    clear(search_input, true);
    fetchAll(URL);
});

// initialize all the countries
fetchAll(URL);

export default fetchAll;