function Checked() {
    let chek = document.getElementById('your_owns');
    if (chek.checked === true) {
        chek.parentElement.className += 'checked';
    } else {
        chek.parentElement.classList.remove('checked');
    }
}
// Для випадаючого списку
document.querySelector('.custom-select-wrapper').addEventListener('click', function() {
    this.querySelector('.custom-select').classList.toggle('open');
})

for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
        }
    })
}

window.addEventListener('click', function(e) {
    const select = document.querySelector('.custom-select')
    const getDataValue = e.target.getAttribute('data-value');
    if(getDataValue){
        document.getElementById("hiddenSelect").value = getDataValue;
    }
    if (!select.contains(e.target)) {
        select.classList.remove('open');
    }
});