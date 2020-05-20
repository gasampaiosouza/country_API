'use strict';
import content from './content.js';

const $flagsContainer = document.getElementById('flags__container');

const configureContent = (data, search, dataArray = []) => {
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

    return displayData(result, $flagsContainer);
}

// append the boxes with reduced data
const displayData = (result, container) => (container.innerHTML = result);

export default configureContent;