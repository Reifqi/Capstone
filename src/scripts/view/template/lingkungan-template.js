const createLingPage = (dataLing) => `
${dataLing.map((data) => `
    <article class="post-item">
        <img class="post-item__thumbnail"
            src="${data.img}"
        <div class="post-item__content">
            <h1 class="post-item__title"><a href='${`/#detail/${data.id}`}'>${data.title}</a></h1>
            <p class="post-item__date">${data.createAt}</p>
            <p class="post-item__description">${data.opening}</p>
        </div>
    </article>
    `).join(' ')}
`;

export default createLingPage;
