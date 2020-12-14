const checkbox = document.querySelector('#checkbox');
if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    document.body.classList.add('dark-mode-theme');
    document.body.classList.remove('light-mode-theme');
    checkbox.checked = true;
}else{
    document.body.classList.add('light-mode-theme');
    document.body.classList.remove('dark-mode-theme');
}

checkbox.addEventListener('change', function(event) {
    document.body.classList.toggle('dark-mode-theme');
    document.body.classList.toggle('light-mode-theme');
})