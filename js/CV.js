/**
 * Simple Image Zoom
 *
 * @desc Zoom images like they do in shops (still testing offset correction). Varying image ratios and formats are possible, even if it doesn't really make sense in case of a zooming functionality. Useful hint: Don't forget to set the touch-action attributes in HTML to make pep.js work.
 * @author [HZ]
 * @dependency jQuery, pep.js
 */
$.fn.imageZoom = function() {
    "use strict";
    this.each(function() {
      var $this = $(this),
        $thumb = $this.find(".iz-js-thumb"),
        thumbWith = $thumb.width(),
        thumbHeight = $thumb.height(),
        // read out data-larg-size for large image dimension
        imageData = $this.data("large-size"),
        imageArr = imageData.split("x"),
        largeImageWidth = imageArr[0],
        largeImageHeight = imageArr[1],
        $imageZoom = $this.find(".iz-js-zoom"),
        imageZoomWidth = $imageZoom.width(),
        imageZoomHeight = $imageZoom.height(),
        $imageZoomPic = $imageZoom.find(".iz-js-zoom-pic"),
        // offsetCorrectionX = imageZoomWidth / 2,
        // offsetCorrectionY = imageZoomHeight / 2,
        zoomFactorX = largeImageWidth / thumbWith,
        zoomFactorY = largeImageHeight / thumbHeight,
        // build image path. e.g 'pathtoimage/imagename' + imageData + '.jpg'
        imagePath = "https://via.placeholder.com/" + imageData;
  
      $this.css({
        width: thumbWith
      });
      // position zoom-container next to thumbnail
      $imageZoom.css({
        top: 0,
        left: thumbWith
      });
      // set dimension of large image based on data-large-size values
      $imageZoomPic
        .css({
          width: largeImageWidth,
          height: largeImageHeight
        })
        .attr("src", imagePath);
      // move large image depending on mouse position over thumb
      $thumb.on("mousemove pointermove", function(e) {
        var getOffset = $(this).offset(),
          elemOffX = e.pageX - getOffset.left,
          elemOffY = e.pageY - getOffset.top;
        $imageZoomPic.css({
          "margin-left": -elemOffX * zoomFactorX,
          "margin-top": -elemOffY * zoomFactorY
        });
      });
    });
  };
  
  $(".iz-js-image-zoom").imageZoom();
  