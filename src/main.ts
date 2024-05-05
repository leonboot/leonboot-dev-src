import { dom, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import "./style.scss";

library.add(fab);
dom.watch();

document.querySelectorAll("a.ext").forEach((el: HTMLElement) => {
    el.addEventListener("click", (event: Event) => {
        if (event.target instanceof Element) {
            window.open(event.target.getAttribute("href"), "_blank");
        }
        event.preventDefault();
    });
});

document.querySelectorAll(".skills li").forEach((el: HTMLElement) => {
    if (el.firstChild instanceof Text) {
        const titleNode = document.createElement("span");
        titleNode.innerHTML = el.firstChild.textContent?.toString() || '';
        el.removeChild(el.firstChild);
        el.appendChild(titleNode);
    }
    const skill = {
        name: el.getAttribute("data-name"),
        proficiency: parseFloat(el.getAttribute("data-proficiency")),
    };
    const logo = document.createElement("img");
    logo.setAttribute("src", "/img/logos/" + skill.name + ".svg");
    el.insertBefore(logo, el.firstChild);
    const rating = document.createElement("div");
    rating.className = "rating";
    for (let i = 1; i <= 5; ++i) {
        const star = document.createElement("span");
        star.className = "star-icon";
        star.innerHTML = "&#9733;";
        if (skill.proficiency >= i) {
            star.className += " full";
        } else if (skill.proficiency - i + 1 === 0.5) {
            star.className += " half";
        }
        rating.appendChild(star);
    }
    el.querySelector("span").appendChild(rating);
});

window.addEventListener("scroll", (event: Event) => {
    let lastElement: HTMLElement;
    document.querySelectorAll("h2[id]").forEach((el: HTMLElement) => {
        if (el.offsetTop - window.scrollY <= 0) {
            lastElement = el;
        }
    });
    if (lastElement instanceof HTMLElement) {
        document.querySelectorAll("header nav .nav-link").forEach((el: HTMLElement) => {
            el.classList.remove("active");
        });
        document.querySelector("header nav .nav-link[href='#" + lastElement.id + "']").classList.add("active");
    }
});
