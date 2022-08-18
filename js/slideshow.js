$(document).ready(function () {
  var links = [

    {
      name: 'Discord',
      link: 'https://discord.com/users/984842390986690590',
    },
    
    {
      name: 'NameMC',
      link: 'https://namemc.com/DaddySuff.1',
    },

    {
      name: 'Twitter',
      link: 'https://twitter.com/DaddySuff',
    },

    {
      name: 'Spotify',
      link: 'https://open.spotify.com/user/t3ft949yk3i2rvjjsrdugsgrz',
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
      $diaplay.show().html('started').delay(2000).fadeOut('slow');
    })
    .marquee({
      duration: 4000,
    });
});
