const Logo = document.querySelector('.Logo');

function reload()
{
    location.href = 'index.html';
}
function play()
{
    Logo.addEventListener("click",reload);
}
play();
