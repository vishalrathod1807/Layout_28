function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;


    if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i) || userAgent.match(/Android/i) || userAgent.match(/Windows Phone/i) || userAgent.match(/PlayBook/i) || userAgent.match(/BB10/i) || userAgent.match(/BlackBerry/i) || userAgent.match(/BlackBerry9000/i)) {
        $("html").addClass("mobile-user-agent")
    }
};
getMobileOperatingSystem();

if($("html:not(.mobile-user-agent)")) {
    $(".video-preview-image").unbind("click").bind("click", function() {
        $(".youtubers").find(".playing .video-preview-image").show();
        if($(".playing").length) {
            var PlayingVideoSrc = $(".youtubers").find(".playing iframe").attr("src").replace('&autoplay=1','');
            $(".youtubers").find(".playing iframe").attr("src",PlayingVideoSrc);
        }

        $(this).closest(".youtubers__row").addClass("playing").siblings().removeClass("playing");
        $(this).hide();
        $(this).parent().find("iframe")[0].src += "&autoplay=1";
    });
}