import Highway from '@dogstudio/highway';
import Fade from './transition1';
import Slide from './transition2';
import HomeSlide from './transition3';

const H = new Highway.Core({
    transitions: {
        default: Fade,
        home: HomeSlide,
        contact: Slide,
    }
})