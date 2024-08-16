const container = document.querySelector('.container-1');
const navigator = document.querySelector('.navigator');

container.addEventListener('mousein', () => {
navigator.classList.add('visible');
});

container.addEventListener('mouseout', (event) => {

    if (!navigator.contains(event.relatedTarget)) {
            navigator.classList.remove('visible');
        }
    }
);

const svgItem = document.querySelector(".nav-icon")

svgItem.addEventListener('mousein', () => {
    svgItem.getSVGDocument().setAttribute("fill", "red")
    svgItem.getSVGDocument().setAttribute("stroke", "red")
}
);