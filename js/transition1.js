import Highway from '@dogstudio/highway';
import {TimelineLite} from 'gsap';

class Fade extends Highway.Transition {
    in({from, to, done}) {
        window.scrollTo(0,0);

        document.querySelector('body').classList.add('hide-overflow');

        const tl = new TimelineLite();

        tl.fromTo(from, 0.2, {transform: 'rotateX(45deg)'}, {transform: 'rotateX(105deg)'})

        .fromTo(from, 0.2, { opacity: '.2'}, { opacity: '0'})
        
        /*.fromTo(to, 0.5, {left: '-100%', top: '50%'}, {left: '0%'})*/

        .fromTo(to, 0.5, {transform: 'rotateX(105deg)', opacity: '0'}, {transform: 'rotateX(0deg)', opacity: '1', 
            onComplete: function(){
                from.remove();
                document.querySelector('body').classList.remove('hide-overflow');
                done();
            }
        })

        .fromTo(to.children[0], 2, {opacity: 0}, {opacity: 1})
    }

    out({from, done}) {
        done();
    }
}

export default Fade;
