import Highway from '@dogstudio/highway';
import {TimelineLite} from 'gsap';

class HomeSlide extends Highway.Transition {
    in({from, to, done}) {

        document.querySelector('body').classList.add('hide-overflow');

        const tl = new TimelineLite();
        const tl2 = new TimelineLite();

        tl.fromTo(to, 0.3, {transformOrigin: 'left', transform: 'scale(0.01)'},{transform: 'scale(1)',
            onComplete: function(){
                from.remove();
                document.querySelector('body').classList.remove('hide-overflow');
                done();
            }
        })

        tl2.fromTo(from, 1, {opacity: '.5', transform: 'scale(1)',transformOrigin: 'bottom left'},{transform: 'scale(0.01)', opactity: '.3'})

    }

    out({from, done}) {
        done();
    }
}

export default HomeSlide;