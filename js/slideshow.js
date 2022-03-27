$(document).ready(function () {
  var links = [
    {
      name: 'discord',
      link: 'https://discord.com/users/746411175494811688',
    },

    {
      name: 'cram mc',
      link: 'https://namemc.com/cram.2',
    },

    {
      name: 'ycj mc',
      link: 'https://namemc.com/ycj.5',
    },

    {
      name: 'a tiktok',
      link: 'https://tiktok.com/@aaaaaaaaaaaaaaaaaa',
    },

    },

    {
      name: 'telegram',
      link: 'https://t.me/champlain',
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
