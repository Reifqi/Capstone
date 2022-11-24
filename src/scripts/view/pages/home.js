/* eslint-disable no-unused-vars */
import createHomeTemplate from '../template/home-template';
import homeData from '../../data/home-data';

const Home = {
  async render() {
    return `
    <div class='home-page'>
        <div class="home-text">
            <h1>Kamu ingin tahu info tentang apa?</h1>
        </div>
        <div class="home-card">
    </div>
    `;
  },

  async afterRender() {
    const homeContainer = document.querySelector('.home-card');
    homeContainer.innerHTML += createHomeTemplate(homeData);
  },
};

export default Home;
