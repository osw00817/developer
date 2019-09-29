var picture = document.getElementById("picture");

function change_background(name)
{
    if(name == "p1")
    {
        picture.style.backgroundImage = "url('picture1.png')";
    }
    else
    {
        picture.style.backgroundImage = "url('picture2.png')";;
    }
}
function play()
{
    var random = Math.floor(Math.random()*3);
    if(random == 1)
    {
        change_background('p1');
    }
    else
    {
        change_background('p2');
    }
    console.log(random)
}

play();


