export default function showBlock(event, element) {
    event.preventDefault();
    event.target.parentElement.querySelector(element).classList.toggle('d-none');
}