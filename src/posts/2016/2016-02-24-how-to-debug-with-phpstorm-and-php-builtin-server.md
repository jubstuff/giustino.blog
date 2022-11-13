---
title: How to debug with PHPStorm and PHP builtin server
author: Giustino Borzacchiello
type: post
date: 2016-02-24T12:14:38+00:00
permalink: /how-to-debug-with-phpstorm-and-php-builtin-server/
categories:
  - PHP

  - debug
  - PhpStorm
  - symfony

---
I was playing with Symfony recently, and I needed to setup debug in PHPStorm using the PHP internal web server.

I&#8217;ve setup xdebug with PHPStorm in multiple environments, and each time I find a different _glitch_. Lucky me 🙂

So, I will assume that you have PHP, xdebug, PHPStorm installed.

These are the steps:

  1. Edit the xdebug configuration file (in Ubuntu you can find it in `/etc/php5/cli/conf.d/20-xdebug.ini`) and add the following lines:  
    `xdebug.remote_autostart = 1<br />
xdebug.remote_enable = 1`
  2. Start the server with&nbsp;`php bin/console server:run`
  3. In PHPStorm, click the phone handle icon.<img src="https://i1.wp.com/v1.giustino.blog/wp-content/uploads/2016/02/phpstorm_phone_handle_icon.png?resize=401%2C138" alt="phpstorm_phone_handle_icon" width="401" height="138" class="size-full wp-image-1362" srcset="https://i1.wp.com/v1.giustino.blog/wp-content/uploads/2016/02/phpstorm_phone_handle_icon.png?w=401&ssl=1 401w, https://i1.wp.com/v1.giustino.blog/wp-content/uploads/2016/02/phpstorm_phone_handle_icon.png?resize=300%2C103&ssl=1 300w" sizes="(max-width: 401px) 100vw, 401px" data-recalc-dims="1" />
  4. Set a breakpoint and load your application in the browser.

You&#8217;re done! Can you believe it?

This time the difference was that `remote_autostart` flag!

Until for next xdebug setup tip, bye 😉