$(document).ready(function () {
  var links = [

    {
      name: 'ogu',
      link: 'https://ogu.gg/55',
    },
    
    {
      name: 'namemc',
      link: 'https://namemc.com/th0t',
    },

    {
      name: 'twitter',
      link: 'https://twitter.com/ohub',
    },

    {
      name: 'twitch',
      link: 'https://twitch.tv/padlock',
    },



  ];

  for (var i in links) {
    var link = links[i];

    $('#marquee').append('<a href="' + link.link + '" target="_BLANK">' + link.name + '</a>');

    link = $('#marquee').children('a').last();

    if (i != links.length - 1) $('#marquee').append(' | ');
  }
});

$(function () {
  var $diaplay = $('#display');
  $('.marquee')
    .bind('beforeStarting', function () {
      $diaplay.show().html('started').delay(2000).fadeOut('fast');
    })
    .marquee({
      duration: 4000,
    });
});