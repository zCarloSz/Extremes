$.fn.circleList = function(options) {
    var defaults = {
        diameter: false,
        background: false
    };
    var options = jQuery.extend(defaults, options);
    return this.each(function() {
      var diagram = $(this);
       diagram.css({
         position: "relative"
       });
       if (defaults.rotate) {
         diagram.css({
           '-webkit-transform': "rotate(" + options.rotate + "deg)",
           '-moz-transform': "rotate(" + options.rotate + "deg)",
           '-ms-transform': "rotate(" + options.rotate + "deg)",
           '-o-transform': "rotate(" + options.rotate + "deg)",
           'transform': "rotate(" + options.rotate + "deg)",
           });
       }
       var elements = $(this).children();
       var length = elements.length;
       $(this).css({
         "display" : "block",
         "position:" : "relative"
       });
       var maxWidth = 0;
       elements.css("float", "left");
       elements.each(function(i){
         var width = $(this).width();
         if (width > maxWidth) {
           maxWidth = width;
         }
         var element = $(this);
         var height = $(this).height();
         var degrees =  i/length * 360 - 90;
         var position = "0 50%";
         var indent = (defaults.diameter) ? "0 0 0 " + defaults.diameter + "px" : "0 0 0 " + height * (length /6) + "px";
         element.wrap("<div class='circleList-div'><div class='circleList-inner' /></div>");
         $(this).parent().parent().css({
           "-webkit-transform-origin": position,
           "-moz-transform-origin":    position,
           "-o-transform-origin":      position,
           "-ms-transform-origin":     position,
           "transform-origin":         position,
           "-webkit-transform":        "rotate(" + degrees + "deg)",
           "-moz-transform":           "rotate(" + degrees + "deg)",
           "-o-transform":             "rotate(" + degrees + "deg)",
           "-ms-transform":            "rotate(" + degrees + "deg)",
           "transform":                "rotate(" + degrees + "deg)",
           "padding":                   indent,
           "position":                 "absolute",
           "top":                      "50%",
           "left":                     "50%",
           "white-space" :             "nowrap"
         });
        //  Letras verticales (se restan los grados con los que se posciona el contenedor)
         $(this).css({
           "-webkit-transform":        "rotate(" + (-degrees) + "deg)",
           "-moz-transform":           "rotate(" + (-degrees) + "deg)",
           "-o-transform":             "rotate(" + (-degrees) + "deg)",
           "-ms-transform":            "rotate(" + (-degrees) + "deg)",
           "transform":                "rotate(" + (-degrees) + "deg)"
         });
       });
       if (diagram.height() < 50) {
         diagram.css({
          //  "width" : maxWidth * 5 + defaults.diameter || 100,
           "height" : maxWidth * 6 + defaults.diameter || 100
         });
       }
  });
};
