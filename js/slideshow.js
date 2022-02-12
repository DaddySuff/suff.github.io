$(document).ready(function () {
  var links = [
    {
      name: 'discord',
      link: 'https://discord.com/users/746411175494811688',
    },

    {
      name: 'twitter',
      link: 'https://twitter.com/pnck',
    },

    {
      name: 'soundcloud',
      link: 'https://soundcloud.com/assassinationclassroom',
    },

    {
      name: 'telegram',
      link: 'https://t.me/gapped',
    },
    
    {
      name: 'about.me',
      link: 'https://about.me/hole',
    },
    
    {
      name: 'e.rip',
      link: 'https://e.rip/hw',
    },
    
    {
      name: 'solo.to',
      link: 'https://solo.to/pock',
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
