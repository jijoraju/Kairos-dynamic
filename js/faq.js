$(document).ready(function () {
  var accordionParentClass = ".eachFaq";
  var accordionQuestionClass = ".eachFaq .title";
  var accordionContentClass = ".accordion-content";

  $(accordionParentClass).each(function () {
    $(this).addClass("close");
    $(this).find(accordionContentClass).hide();
  });

  $(accordionQuestionClass).click(function () {
    var faqClass = $(this).closest(accordionParentClass).attr("class");
    console.log(faqClass);

    if (faqClass.indexOf("close") != -1) {
      $(accordionParentClass).find(accordionContentClass).slideUp("slow");
      $(accordionParentClass).addClass("close").removeClass("open");

      $(this).closest(accordionParentClass).removeClass("close");
      $(this).closest(accordionParentClass).addClass("open");
      $(this)
        .closest(accordionParentClass)
        .find(accordionContentClass)
        .slideDown("slow");
    } else {
      $(this).closest(accordionParentClass).addClass("close");
      $(this).closest(accordionParentClass).removeClass("open");
      $(this)
        .closest(accordionParentClass)
        .find(accordionContentClass)
        .slideUp("slow");
    }
  });
});
