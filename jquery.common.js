// A collection of common behavior classes that keeps the jQuery effect naming convention

function load_efx () {
  
  $('a[class*=show]').click(function() {
    opts = getOpts($(this).attr('class'));
    $($(this).attr('href')).show(opts);
    return false;
  });
  
  $('a[class*=hide]').click(function() {
    opts = getOpts($(this).attr('class'));
    $($(this).attr('href')).hide(opts);
    return false;
  });
  
  $('a[class*=slideDown]').click(function() {
    opts = getOpts($(this).attr('class'));
    $($(this).attr('href')).slideDown(opts);
    return false;
  });
  
  $('a[class*=slideUp]').click(function() {
    opts = getOpts($(this).attr('class'));
    $($(this).attr('href')).slideUp(opts);
    return false;
  });
  
  $('a[class*=fadeIn]').click(function() {
    opts = getOpts($(this).attr('class'));
    $($(this).attr('href')).fadeIn(opts);
    return false;
  });
  
  $('a[class*=fadeOut]').click(function() {
    opts = getOpts($(this).attr('class'));
    $($(this).attr('href')).fadeOut(opts);
    return false;
  });
  
  $('a[class*=toggle]').click(function() {
    opts = getOpts($(this).attr('class'));
    $($(this).attr('href')).toggle(opts);
    return false;
  });
  
}

function getOpts (klass) {
  var klass_ary = klass.split("-");
  if (klass_ary.length == "2") {
    return klass_ary[1];
  }else{ 
    return null 
  };
}

$(document).ready(function() {
  load_efx();
});


