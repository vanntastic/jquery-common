// A collection of common behavior classes that keeps the jQuery effect naming convention

function id_from_href () {
  return $(this).attr('href');
}

function load_fx () {
  
  $('a.show').click(function() {
    $($(this).attr('href')).show();
    return false;
  });
  
  $('a.hide').click(function() {
    $($(this).attr('href')).hide();
    return false;
  });
  
  $('a.slideDown').click(function() {
    $($(this).attr('href')).slideDown();
    return false;
  });
  
  $('a.slideUp').click(function() {
    $($(this).attr('href')).slideUp();
    return false;
  });
  
  $('a.fadeIn').click(function() {
    $($(this).attr('href')).fadeIn();
    return false;
  });
  
  $('a.fadeOut').click(function() {
    $($(this).attr('href')).fadeOut();
    return false;
  });
  
  $('a.toggle').click(function() {
    $($(this).attr('href')).toggle();
    return false;
  });
  
}

$(document).ready(function() {
  load_fx();
});


