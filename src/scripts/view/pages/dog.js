const Dog = {
  async render() {
    return `
            <h2>Dog Page</h2>
          `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Dog;
