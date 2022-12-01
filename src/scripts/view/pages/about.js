import aboutData from "../../data/about-data";
import createAboutTemp from "../template/about-template";

const About = {
    async render() {
      return `
        <div class='home-page'>
        <div class="about-card"></div>
        </div>
          `;
    },
  
    async afterRender() {
        const homeContainer = document.querySelector('.about-card');
        homeContainer.innerHTML += createAboutTemp(aboutData);    
    },
  };
  
  export default About;
  