import createDogHealthTemp from '../template/dog-health-template';

const dogHealth = {
  async render() {
    return `
      <div class='dog-health-page'></div>
        `;
  },

  async afterRender() {
    const catHealthContainer = document.querySelector('.dog-health-page');
    catHealthContainer.innerHTML += createDogHealthTemp;
  },
};

export default dogHealth;
