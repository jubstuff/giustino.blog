---
title: Set Ubuntu desktop background from Unsplash
author: Giustino Borzacchiello
type: post
date: 2017-02-02T22:00:40+00:00
permalink: /set-ubuntu-desktop-background-from-unsplash/
categories:
  - Dev Stuff

---
I love having inspiring desktop background while I work. Often I leave a monitor free of anything, just to admire a wonderful photo.

[Unsplash][1] is the perfect source for free stock photos, so I thought to set up a script to fetch a random image from Unsplash and set it as the desktop background on Ubuntu.

I was going to create a custom PHP application, but then I found [Unsplash.it][2] so I created this simple bash script:

    #/bin/bash
    
    wget -O /tmp/wallpaper.jpg https://unsplash.it/2560/1440/?random
    gsettings set org.gnome.desktop.background picture-uri file:///tmp/wallpaper.jpg
    

You can put this in your `~/bin/` folder, or set a crontab to change it automatically for you.

 [1]: http://unsplash.com/
 [2]: https://unsplash.it/