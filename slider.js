let count = 0;
function slider()
{
    setInterval(sliderun,3000);

    function sliderun()
    {
        if(count === 0)
        {
            let selectartical = document.querySelector('#sliderdiv');
            let selecttex = document.querySelector('#text');
            selecttex.innerHTML = "KOENIGSEGG AGERA ONE 1";
            selectartical.style.marginLeft = "0px";
            selectartical.style.transition = "margin-left 0.5s";
            count++;
        }

        else if(count === 1)
        {
            let selectartical = document.querySelector('#sliderdiv');
            let selecttex = document.querySelector('#text');
            selecttex.innerHTML = "MACLERAN P1";
            let selectcolor = document.querySelector('body');
            selectcolor.style.backgroundColor = "grey";
            selectcolor.style.transition = "background-color .5s"
            selectartical.style.marginLeft = "-600px";
            selectartical.style.transition = "margin-left 0.5s";
            count++;
        }

        else if(count === 2)
        {
            let selectartical = document.querySelector('#sliderdiv');
            let selecttex = document.querySelector('#text');
            selecttex.innerHTML = "FERRARI FXX K";
            let selectcolor = document.querySelector('body');
            selectcolor.style.backgroundColor = "rgb(206, 52, 52)";
            selectcolor.style.transition = "background-color .5s"
            selectartical.style.marginLeft = "-1200px";
            selectartical.style.transition = "margin-left 0.5s";
            count++;
        }

        else if(count === 3)
        {
            let selectartical = document.querySelector('#sliderdiv');
            let selecttex = document.querySelector('#text');
            selecttex.innerHTML = "BUGGATI DIVO";
            let selectcolor = document.querySelector('body');
            selectcolor.style.backgroundColor = "skyblue";
            selectcolor.style.transition = "background-color .5s"
            selectartical.style.marginLeft = "-1800px";
            selectartical.style.transition = "margin-left 0.5s";
            count++;
        }

        else if(count === 4)
        {
            let selectartical = document.querySelector('#sliderdiv');
            let selecttex = document.querySelector('#text');
            selecttex.innerHTML = "PORSCHE 918 SPYDER";
            let selectcolor = document.querySelector('body');
            selectcolor.style.backgroundColor = "grey";
            selectcolor.style.transition = "background-color .5s"
            selectartical.style.marginLeft = "-2400px";
            selectartical.style.transition = "margin-left 0.5s";
            count++;
        }

        else if(count === 5)
        {
            let selectartical = document.querySelector('#sliderdiv');
            let selecttex = document.querySelector('#text');
            selecttex.innerHTML = "BUGGATI DIVO";
            let selectcolor = document.querySelector('body');
            selectcolor.style.backgroundColor = "skyblue";
            selectcolor.style.transition = "background-color .5s"
            selectartical.style.marginLeft = "-1800px";
            selectartical.style.transition = "margin-left 0.5s";
            count++;
        }

        else if(count === 6)
        {
            let selectartical = document.querySelector('#sliderdiv');
            let selecttex = document.querySelector('#text');
            selecttex.innerHTML = "FERRARI FXX K";
            let selectcolor = document.querySelector('body');
            selectcolor.style.backgroundColor = "rgb(206, 52, 52)";
            selectcolor.style.transition = "background-color .5s"
            selectartical.style.marginLeft = "-1200px";
            selectartical.style.transition = "margin-left 0.5s";
            count++;
        }

        else if(count === 7)
        {
            let selectartical = document.querySelector('#sliderdiv');
            let selecttex = document.querySelector('#text');
            selecttex.innerHTML = "MACLERAN P1";
            let selectcolor = document.querySelector('body');
            selectcolor.style.backgroundColor = "grey";
            selectcolor.style.transition = "background-color .5s"
            selectartical.style.marginLeft = "-600px";
            selectartical.style.transition = "margin-left 0.5s";
            count++;
        }

        else if(count === 8)
        {
            let selectartical = document.querySelector('#sliderdiv');
            let selecttex = document.querySelector('#text');
            selecttex.innerHTML = "KOENIGSEGG AGERA ONE 1";
            let selectcolor = document.querySelector('body');
            selectcolor.style.backgroundColor = "white";
            selectcolor.style.transition = "background-color .5s"
            selectartical.style.marginLeft = "0px";
            selectartical.style.transition = "margin-left 0.5s";
            count = 0;
        }
    }
}