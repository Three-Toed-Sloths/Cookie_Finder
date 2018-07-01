const modal = get;
const addBtn = $('.add-to-cart');
const closeBtn = $('.close');

addBtn.onclick = function() {
    modal.style.display = 'block';
    console.log('click');
};

closeBtn.onclick = function() {
    modal.style.display = 'none';
};

window.onclick = function() {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};