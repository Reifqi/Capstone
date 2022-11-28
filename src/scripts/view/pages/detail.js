const Detail = {
  async render() {
    return `
        <h2>Detail Page</h2>
        <div class="container" style="display: flex">
          
          <div class="card" style="width: 18rem;">
            <img src="../images/cat.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h4 class="card-text">Kenali Caplak pada Anjing, dan Ketahui Cara Membasminya</h4>
              <p class="card-text">Resah soal caplak atau tick yang menempel pada anjing kesayangan paw friends? Segera cari tahu di sini!</p>
              <a href="#" class="card-link">Baca Selengkapnya</a>
            </div>
          </div>

          <div class="card" style="width: 18rem;">
            <img src="../images/dog.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h4 class="card-text">Memandikan Anjing di Rumah Seperti Groomer Profesional</h4>
              <p class="card-text">Resah soal caplak atau tick yang menempel pada anjing kesayangan paw friends? Segera cari tahu di sini!</p>
              <a href="#" class="card-link">Baca Selengkapnya</a>
            </div>
          </div>

          <div class="card" style="width: 18rem;">
            <img src="../images/cat.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h4 class="card-text">Sudahkah Sterilisasi Kucing Anda? Ini Manfaatnya!</h4>
              <p class="card-text">Resah soal caplak atau tick yang menempel pada anjing kesayangan paw friends? Segera cari tahu di sini!</p>
              <a href="#" class="card-link">Baca Selengkapnya</a>
            </div>
          </div>

          <div class="card" style="width: 18rem;">
            <img src="../images/dog.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h4 class="card-text">Kenali Caplak pada Anjing, dan Ketahui Cara Membasminya</h4>
              <p class="card-text">Resah soal caplak atau tick yang menempel pada anjing kesayangan paw friends? Segera cari tahu di sini!</p>
              <a href="#" class="card-link">Baca Selengkapnya</a>
            </div>
          </div>
          </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Detail;
