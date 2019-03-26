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
