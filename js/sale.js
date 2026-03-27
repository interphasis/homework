export default function saleModal() {

const buttonCloser = document.querySelector('.sale__closer-btn');
const sale = document.querySelector('.sale');

buttonCloser.addEventListener('click', () => {
  sale.classList.add('sale_close');
});
}