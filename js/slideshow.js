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
      name: 'tiktok font',
      link: 'https://www.tiktok.com/@MS4wLjABAAAAmE-kzGxdFNY3qoeWIEeMjOhU1d_2NxVSxeklNwxmcVq-Tn1EBfGYd_SHxePVUfH0',
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
