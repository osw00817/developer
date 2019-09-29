var BF = document.querySelectorAll('#BFserver');
function load()
{
    location.href = "https://discord.gg/ycTSUYh";
}
function play()
{
    for(var i = 0;i<BF.length;i++)
    {
        BF[i].addEventListener("click",load)
    }
}
play();