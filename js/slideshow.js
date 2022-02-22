$(document).ready(function () {
  var links = [
    {
      name: 'discord',
      link: 'https://discord.com/users/746411175494811688',
    },

    {
      name: '206 mc',
      link: 'https://namemc.com/206.10',
    },

    {
      name: 'greatly mc',
      link: 'https://namemc.com/greatly.3',
    },

    {
      name: 'a tiktok',
      link: 'https://tiktok.com/@aaaaaaaaaaaaaaaaaa',
    },

    {
      name: 'd tiktok',
      link: 'https://tiktok.com/@dddddddddddddddddddd',
    },

    {
      name: 'soundcloud',
      link: 'https://soundcloud.com/assassinationclassroom',
    },

    {
      name: 'telegram',
      link: 'https://t.me/flinches',
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
