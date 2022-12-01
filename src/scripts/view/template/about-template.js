const createAboutTemp = (aboutData) => `
${aboutData.map((data) => `
    <div class="card mb-3 pet-card" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4 home-img">
                <img src="${data.image}" class="img-fluid rounded-start" alt="adadef">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${data.nama}</h5>
                    <p>${data.asal}</p>
                    <p class="card-text home-card-text"> ${data.description} </p>
                    <a href="${data.href}" class="btn btn-primary">Detail Selengkapnya...</a>
                </div>
            </div>
        </div>
    </div>
    `).join(' ')}
`;

export default createAboutTemp;
