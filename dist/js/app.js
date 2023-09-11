container_mb = document.getElementById('container-mobile');
function open_menu(){
    console.log(container_mb)
    container_mb.classList.remove('right-full')
    container_mb.classList.add('right-0')
}

function close_menu(){
    container_mb.classList.add('right-full')
    container_mb.classList.remove('right-0')
}