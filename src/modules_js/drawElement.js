export default function drawElement (screenNode, parentNode) {
    let main = document.querySelector(parentNode);

    main.appendChild(screenNode);
};