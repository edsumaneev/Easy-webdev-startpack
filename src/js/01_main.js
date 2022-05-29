"use strict";

$(function () {
  var topPos = $('.inner__list').offset().top;
  $(window).scroll(function () {
    var top = $(document).scrollTop(),
      pip = $('.consult').offset().top,
      height = $('.inner__list').outerHeight(true);
    if (top > topPos - 60 && top < pip - height) {
      $('.inner__list').addClass('fixed').removeClass('fixed-bottom');
    } else if (top > pip - height) {
      $('.inner__list').addClass('fixed-bottom').removeClass('fixed');
    } else {
      $('.inner__list').removeClass('fixed').removeClass('fixed-bottom');
    }
  });
});

// wow
new WOW().init();

// popup
$('.popup-btn').on('click', function (e) {
  e.preventDefault();

  var elementID = $(this).attr("data-element");
  $('.popup#' + elementID).toggleClass('active');
  $('.popup-overlay').toggleClass('active');
});

$(".close-popup, .popup__ok").on("click", function (e) {
  e.preventDefault();
  $(".popup").removeClass("active");
  $('.popup-overlay').toggleClass('active');
});

$(".popup-overlay").on("click", function (e) {
  e.preventDefault();
  $(".popup").removeClass("active");
  $('.popup-overlay').toggleClass('active');
});

$(document).keydown(function (e) {
  if (e.keyCode == 27) {
    e.preventDefault();
    $(".popup").removeClass("active");
    $('.popup-overlay').toggleClass('active');
  }
});

// tel
window.addEventListener("DOMContentLoaded", function () {
  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
    }
  }

  function template(event) {
    var matrix = "+7 (___) - ___ - __ - __",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
    if (event.type == "blur") {
      if (this.value.length == 2) this.value = ""
    } else setCursorPosition(this.value.length, this)
  }

  var phoneForm = document.querySelector("#regtel, #tel");

  if (phoneForm) {
    phoneForm.addEventListener("input", template, false);
    phoneForm.addEventListener("focus", template, false);
    phoneForm.addEventListener("blur", template, false);
  }
});
// scroll to anchor
$(document).ready(function () {
  $(".menu__anchors, .meals-page__anchors").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top + 5;
    $('body,html').animate({
      scrollTop: top
    }, 800);
  });
});
// scroll to anchor  
$(function () {
  $("a[href^='#about'], a[href^='#toward'], a[href^='#first'], a[href^='#cont']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(_href).offset().top - 72 + "px"
    });
    return false;
  });
});