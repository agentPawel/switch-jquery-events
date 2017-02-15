$(function() {
  $('.switch').on('click', function() {

  $('body').toggleClass('dark');
  $('body').toggleClass('light');

  if ($('.switch button').attr('class') === 'on') {
    $('.switch button').removeClass('on').addClass('off');
    $('.status').text("Hey, who turned out the lights?");
  } else {
    $('.switch button').removeClass('off').addClass('on');
    $('.status').text("It's so bright in here!");
  }
  })
 });
