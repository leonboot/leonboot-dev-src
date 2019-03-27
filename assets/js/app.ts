import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

require('../scss/app.scss');

library.add(fab);
dom.watch();

document.querySelectorAll('a.ext').forEach(el => {
    el.addEventListener('click', event => {
        if (event.target instanceof Element) {
            window.open(event.target.getAttribute('href'), '_blank');
        }
        event.preventDefault();
    })
});

document.querySelectorAll('.skills li').forEach(el => {
    if (el instanceof Element) {
        const skill = {
            name: el.getAttribute('data-name'),
            proficiency: parseFloat(el.getAttribute('data-proficiency'))
        };
        const logo = document.createElement('img');
        logo.setAttribute('src', '/img/logos/'+skill.name+'.svg');
        el.insertBefore(logo, el.firstChild);
    }
})