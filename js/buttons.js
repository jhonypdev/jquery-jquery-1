button.addEventListener("click", function(event)
{
    if(counter == 0){
        number.classList.add("popup-open");
        popup.classList.add("popup-open");
        setTimeout(increment,640);
        console.log("counter 0");
        menos.classList.add("menos-slide");
        plus.classList.add("mais-slide");
    }
    if(counter > 0){
        setTimeout(increment,650);
        popup.classList.add("popup-open");
        popup.classList.add("popup-two");
        setTimeout(function(){
            background.classList.add("background-color");
            setTimeout(function(){
                background.classList.remove("background-color");
            },740);
        },739);
        setTimeout(function(){
            popup.classList.remove("popup-two");
        },740);
    }
})
