import './country_filter.js';
import configureContent from './configure_content.js';
import './dropdown.js';

const URL = 'https://restcountries.eu/rest/v2/';

const fetchAll = async url =>
    await fetch(url + 'all').then(res => res.json());

// initialize all the countries
fetchAll(URL).then(data => configureContent(data));

export default fetchAll;