import AmicoPlanet from '../assets/planet-amico.svg';
import AlienPlanet from '../assets/alien-planet.svg';
import ParlingPlace from '../assets/parking.svg';

export const getRandomPicture = () => {
  const pictures = [AmicoPlanet, AlienPlanet, ParlingPlace];

  const randomNum = Math.floor(Math.random() * pictures.length);
  return pictures[randomNum];
};
