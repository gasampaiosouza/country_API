const content = (flag, name, region, subregion) =>
    `<div class="country__box">
        <div class="country__flag">
            <img src="${flag}" />
        </div>

        <div class="country__tag-name">
            <h1 class="country__title">${name || 'Unknown'}</h1>
        </div>

        <div class="country__region">
            <p class="region">${region || 'Unknown'}</p>
            <p class="sub-region">${subregion || 'Unknown'}</p>
        </div>
    </div>`

export default content;