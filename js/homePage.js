$(document).ready(function () {
  $("#muffinImg").zoom();
  $("#muffinImg")
    .zoom({
      url: this.href,
    })
    .find("img")
    .attr("src", this.href);
  $("#croissanImg").zoom();
  $("#croissanImg")
    .zoom({
      url: this.href,
    })
    .find("img")
    .attr("src", this.href);
  $("#cookiesImg").zoom();
  $("#cookiesImg")
    .zoom({
      url: this.href,
    })
    .find("img")
    .attr("src", this.href);
  // add all to same gallery
  $(".image-gallery .image-item a").attr("data-fancybox", "mygallery");
  // assign captions and title from alt-attributes of images:
  $(".image-gallery .image-item a").each(function () {
    $(this).attr("data-caption", $(this).find("img").attr("alt"));
    $(this).attr("title", $(this).find("img").attr("alt"));
  });
  // start fancybox:
  $(".image-gallery .image-item a").fancybox({
    clickContent: "close",
    buttons: ["close"],
  });

  $('.bxslider').bxSlider({
    slideWidth: 600,
    minSlides: 1,
    maxSlides: 1,
    slideMargin: 5,
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
  });
});
