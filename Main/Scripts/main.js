

// When the user scrolls down 20px from the top of the document, show the button

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function initMap() {
    var uluru = {lat: 50.6181485, lng: 26.231763399999977};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}




function onlineBtn() {
    window.open("https://www.youtube.com/c/Dvorecka41_online/live", "_blank");
}

function arhiveBtn() {
    window.open("https://www.youtube.com/channel/UCO-IHp7GiXA2srQCZW9DMbg/videos", "_blank");
}






