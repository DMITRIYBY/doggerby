let bttn = document.querySelector('#hum_button');

function menu(){
    const menuHTML = `
    <div id="hum_menu">
    <ul>
       <li><a href="./phones.html" style="color: orange;">Смартфоны</a></li>
       <li><a href="./notebooks.html">Ноутбуки</a></li>
       <li><a href="./plays.html">Приставки</a></li>
       <li><a href="./audiosstems.html">Аудиосистемы</a></li>
       <li><a href="cart.html">Корзина</a></li>
    </ul>
</div>
    `;
    bttn.insertAdjacentHTML('beforeend', menuHTML);
}