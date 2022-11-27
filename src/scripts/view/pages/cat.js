const Cat = {
  async render() {
    return `
          <div class="row cat-page">
          <div class="card mb-3">
            <img src="../images/cat-head.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h1 class="card-title">Kucing</h1>
              <p class="card-text">Kucing adalah salah satu binatang peliharaan yang diminati, untuk merawatnya dibutuhkan pengetahuan serta panduan yang benar agar kucing bisa hidup lebih lama dan terhindar dari penyakit.</p>

            </div>
          </div>
            <div class="col-sm-6">
              <div class="card cat-card-1">
                <div class="card-body">
                  <h5 class="card-title">Kesehatan</h5>
                  <p class="card-text cat-title">Dengan membuat kesehatan kucing terjaga maka akan membuat sang pemilik juga sehat dari ancaman penyakit, maka dari itu pemiliki harus menjaganya. Halaman berikut akan berisi tentang segala informasi terhadap panduan untuk menjaga kesehatan kucing, tentu saja dilengkapi dengan pencegahannya</p>
                  <a href="#/catHealth" class="btn btn-primary">Detail Selengkapnya...</a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card cat-card-2">
                <div class="card-body">
                  <h5 class="card-title">Lingkungan</h5>
                  <p class="card-text cat-title">Dengan lingkungan yang tepat kucing akan merasa nyaman, oleh karena itu pemilik harus menyediakannya serta mempersiapkan segala kebutuhannya, halaman berikut berisi panduan berupa tempat yang cocok, dan lain sebagainya. Memelihara kucing tidak hanya sekedar memberi makan tetapi juga menjaga lingkungannya.</p>
                  <a href="#" class="btn btn-primary">Detail Selengkapnya...</a>
                </div>
              </div>
            </div>
        </div>
          
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Cat;
