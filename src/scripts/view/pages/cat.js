const Cat = {
  async render() {
    return `
          <h2>Cat Page</h2>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Cat;
