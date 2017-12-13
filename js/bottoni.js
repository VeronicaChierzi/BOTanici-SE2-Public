var $ = jQuery.noConflict();

function altriEnter(){
    $("#messages").append("<button onclick =\"onClickaltri()\" class=\"btn-primary2 chat-bubble chat-bubble2 left btn2\" type=\"button\" id=\"altri\" value=\"Ask\">Visualizza ancora...</button>");
    nthbolla++

}
function onClickaltri(){

    for (var i = indice ; i<5+indice && i < eventi.length+5; i++){

        chatBubblesEnter(nthbolla, "<a>" + eventi[i].nome + "</a><br>" +
            (eventi[i].data+"").slice(0,-14) +  " <br>" + eventi[i].luogo + "." +
            "<div>" +
            "<ul>" +
            "<li class=\"bottoni\"><button onclick =\"onClickaltrimeteo('"+ eventi[i].uid +"')\" class=\"btn-primary2 left btn3\" type=\"button\" id=\"altri\" value=\"Ask\">Meteo</button></li>" +
            "<li class=\"bottoni\"><button onclick =\"onClickaltriposizione('"+ eventi[i].uid +"')\" class=\"btn-primary2 left btn3\" type=\"button\" id=\"altri\" value=\"Ask\">Posizione</button></li>" +
            "<li class=\"bottoni\"><button onclick =\"onClickaltridescrizione('"+ eventi[i].uid +"')\" class=\"btn-primary2 left btn3\" type=\"button\" id=\"altri\" value=\"Ask\">Descrizione</button></li>" +
            "</ul>" +
            "</div>", "left");

    }
    indice += 5
    if (indice < eventi.length){
        altriEnter()
    }
    else if (eventi.length - indice > 0){
        altriEnter()
    }
    $("#messages").animate({scrollTop: $('#messages').prop("scrollHeight")}, 1000);

}
function onClickaltrimeteo(uid) {
    $.ajax({
        url: "https://trentevent.herokuapp.com/api/v1/event/"+uid+"/weather/",
        method: "GET",
        success: function (data) {
            if (data.weather) {
                chatBubblesEnter(nthbolla,data.weather.meteo + "<br>Temperatura minima: " + data.weather.Tmin + "<br>" +
                    "Temperatura massima: " + data.weather.Tmax,"left");
                $("#messages").animate({scrollTop: $('#messages').prop("scrollHeight")}, 1000);

            }
        }
    });


}
function onClickaltriposizione(uid) {
    $.ajax({
        url: "https://trentevent.herokuapp.com/api/v1/event/"+uid+"/maps/",
        method: "GET",
        success: function (data) {

            if (data.maps) {
                chatBubblesEnter(nthbolla, "Per arrivare all'evento clicca qui: " + "<a target='_blank' href=\"" + data.maps + "\">Indicazioni stradali</a>", "left");
                $("#messages").animate({scrollTop: $('#messages').prop("scrollHeight")}, 1000);

            }
        }
    });

}
function onClickaltridescrizione(uid) {
    $.ajax({
        url: "https://trentevent.herokuapp.com/api/v1/event/"+uid+"/detail/",
        method: "GET",
        success: function (data) {

            if (data.data) {
                chatBubblesEnter(nthbolla,"<img src=\"" + data.cover + "\" alt=\"" + data.nome +"\"/>","left");
                chatBubblesEnter(nthbolla, data.nome + "<br>" + data.descrizione.replaceAll("\n", "<br>") + "<br>" + data.organizzatore + "<br> <a href =\"" + data.link + "\">Link evento</a><br>", "left");
                $("#messages").animate({scrollTop: $('#messages').prop("scrollHeight")}, 1000);

            }
        }
    });

}