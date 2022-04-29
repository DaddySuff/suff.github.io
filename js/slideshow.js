$(document).ready(function () {
  var links = [
    {
      name: 'discord',
      link: 'https://discord.com/users/746411175494811688',
    },

    {
      name: 'namemc',
      link: 'https://namemc.com/kno.2',
    },

    {
      name: 'soundcloud',
      link: 'https://soundcloud.com/hoglin',
    },

    {
      name: 'telegram',
      link: 'https://t.me/ggggggggggggggggggggggggg',
    },
    
    {
      name: 'tiktok',
      link: 'https://tiktok.com/@MS4wLjABAAAAosrqsXAIUw0DG96AQgTZdJd95l4GzgXln3mqrVLHGrrejA1NepICnru5TtGXIgEp',
    },

    {
      name: 'insta',
      link: 'https://instagram.com/cedv',
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
