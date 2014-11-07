(function($) {
  $.fn.imgCenter = function() {
    var winW = $(window).width();
    if (winW < 980) winW = 980;
    this.each(function(){
      $(this).width(winW).css({"overflow": "hidden"});
      var $img = $('img', this).first();
      var imgW = $img.width();
      var left = (winW - imgW) / 2;
      $img.css({ "left": left + "px", "position": "relative" });
    });
  };
})(jQuery);
