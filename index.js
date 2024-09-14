console.log('Psst, loaded');

// function soundPlay(e) {
//     const sound = document.querySelector(`audio[data-key=${e.keyCode}]`)
// }

document.body.addEventListener("keydown", function(e)
{
    const soundPressed = document.querySelector(`audio[data-key=${e.code}]`);
    const divPressed = document.querySelector(`div[data-key=${e.code}]`);
    //console.log("Keydown "+e.code+soundPressed+divPressed)
    console.log("Down"+divPressed.classList);
    if (!soundPressed)
    {
        return;
    }
    else
    {
        //console.log("Played sound")
        soundPressed.currentTime = 0;
        soundPressed.play();
    }
    if (!divPressed.classList.contains('clicked'))
    {
        divPressed.classList.add('clicked');
    }
})

document.body.addEventListener('keyup', function(e)
{
    const divPressed = document.querySelector(`div[data-key=${e.code}]`);
    console.log("Keyup");
    console.log(e.target.classList);
    //const divPressed = document.querySelector(`div[data-key=${e.code}]`);
    if (divPressed.classList.contains('clicked'))
    {
        console.log(divPressed.classList);
        divPressed.classList.remove('clicked');
        console.log(divPressed.classList);
    }
})