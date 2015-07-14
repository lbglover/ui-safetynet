$(function(){
    $('nav').data('size','big');
  });

  $(window).scroll(function(){
    if($(document).scrollTop() > 0)
  {
      if($('nav').data('size') === 'big')
      {
          $('nav').data('size','small');
          $('nav').stop().animate({
              height:'60px'
            },600);
          $('nav .topheader').hide();
          $('nav .navbar-brand').css("padding", "11px 15px");
          $('nav .navbar-brand img').css("width", "75px");
          $('nav .mainnav').css("margin-top", "-45px");
      }
  }
  else
    {
      if($('nav').data('size') === 'small')
        {
          $('nav').data('size','big');
          $('nav').stop().animate({
              height:'100px'
          },600);
          $('nav .topheader').show();
          $('nav .navbar-brand').css("padding", "15px");
          $('nav .navbar-brand img').css("width", "125px");
          $('nav .mainnav').css("margin-top", "0px");
        }  
    }
  });