const createAboutTemp = (aboutData) => `
${aboutData.map((data) => `

<div class="section">
    <div class="container">
        <div class="content-section">
            <div class="title">
                <h3>${data.nama}</h3>
            </div>
            <div class="content">
                <h4>${data.asal}</h4>
                <p>${data.description}</p>
            </div>
        </div>
        <div class="image-section">
            <img src='${data.image}'>
        </div>
    </div>
</div>
    `).join(' ')}
`;

export default createAboutTemp;
