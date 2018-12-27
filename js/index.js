$(document).ready(function() {
  $('.sidenav').sidenav();
});

$('#projLink').click(function() {
  setInvisible($('.active').attr('id'));
  $('.active').attr('class', '');
  $('#projLink').attr('class', 'active');
  $('#projects').show();
});

$('#resLink').click(function() {
  setInvisible($('.active').attr('id'));
  $('.active').attr('class', '');
  $('#resLink').attr('class', 'active');
  $('#resume').show();
});

$('#musLink').click(function() {
  setInvisible($('.active').attr('id'));
  $('.active').attr('class', '');
  $('#musLink').attr('class', 'active');
  $('#music').show();
});

$('#projLinkMobile').click(function() {
  setInvisible($('.active').attr('id'));
  $('.active').attr('class', '');
  $('#projLink').attr('class', 'active');
  $('#projects').show();
});

$('#resLinkMobile').click(function() {
  setInvisible($('.active').attr('id'));
  $('.active').attr('class', '');
  $('#resLink').attr('class', 'active');
  $('#resume').show();
});

$('#musLinkMobile').click(function() {
  setInvisible($('.active').attr('id'));
  $('.active').attr('class', '');
  $('#musLink').attr('class', 'active');
  $('#music').show();
});

function setInvisible(linkId) {
  if (linkId == 'projLink') {
    $('#projects').hide();
  } else if (linkId == 'resLink') {
    $('#resume').hide();
  } else {
    $('#music').hide();
  }
}
