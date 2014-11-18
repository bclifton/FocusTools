
$("document").ready(function(){

    var containerWidth = $('.html5-video-container').width();
    var marginPx = Math.floor((containerWidth - 720) / 2);
    var imgURL = chrome.extension.getURL('gif.gif');

    $('.html5-video-container').html(
        '<div style="'+
        'background-color: black;'+
        'position: absolute;'+
        'top: 0;'+
        'bottom: 0;'+
        '" >'+
        '<img src="' + imgURL + '" id="johanson" style="'+
        'width: initial;'+
        'height: 100%;'+
        'margin: 0 ' + marginPx + 'px;'+
        '" /></div>');
});