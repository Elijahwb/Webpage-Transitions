import Highway from '@dogstudio/highway';
import {TimelineLite} from 'gsap';

class Slide extends Highway.Transition {

    in({from, to, done}) {

        document.querySelector('body').classList.add('hide-overflow');

        const tl1 = new TimelineLite();
        const tl2 = new TimelineLite();

        tl1.fromTo(to, 1, {left: '100%'}, {left: '0%', 
            onComplete: function(){
                from.remove();
                document.querySelector('body').classList.remove('hide-overflow');
                done();
            }
        })

        tl2.fromTo(from, 1, {left: '0%', opacity: '.8'}, {left: '-100%', opacity: '0', 
            onComplete: function(){
                from.remove();
                document.querySelector('body').classList.remove('hide-overflow');
                done();
            }
        })
    }

    out({from, done}) {
        done();
    }
}

export default Slide;