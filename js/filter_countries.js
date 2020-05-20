import fetchAll from './main.js';

const filterCountries = async ({
    name,
    topic,
    URL
}) => {
    // if input is empty
    if (!name) {
        return fetchAll(URL);
    }

    return fetch(`${URL}${topic}/${name}`).then(res => res.json());
}

export default filterCountries;