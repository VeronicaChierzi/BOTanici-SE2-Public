var chatBubbles = jQuery.noConflict();
var nthbolla = 1;

function chatBubblesEnter(child, text, position){
  chatBubbles("#messages").append("<div class=\"chat-bubble "+position+"\"> "+text+" </div>");
  nthbolla++;
  chatBubbles(".chat-bubble:nth-child("+child+")").animate({ opacity:"1" });
}
function chatBubblesWriting(){
  chatBubbles(".chat-bubble.writing").animate({ opacity:"1" });
  chatBubbles(".chat-bubble.writing").animate({ opacity:"0" });
}
function chatBubblesOut(){
  chatBubbles(".chat-bubble").animate({ opacity:"0" });
}

