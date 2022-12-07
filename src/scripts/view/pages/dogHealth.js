import createDogHealthTemp from '../template/dog-health-template';

<<<<<<< HEAD
const dogHealth = {
    async render() {
        return `
    <div class='dog-health-page'></div>
   `;
    },

    async afterRender() {
        const dogHealthContainer = document.querySelector('.dog-health-page');
        dogHealthContainer.innerHTML += createDogHealthTemp;
    },
=======
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
>>>>>>> 38f1cff11a4bf569a33e642e5cf0802430024eb3
};

export default dogHealth;
