---
title: List the size of folders recursively in Linux
author: Giustino Borzacchiello
type: post
date: 2015-11-11T07:54:45+00:00
permalink: /list-the-size-of-folders-recursively-in-linux/
featured_image: /wp-content/uploads/2015/11/folders-1200x900.jpg
categories:
  - Linux

  - du
  - folders
  - size

---
I needed a summary of how much space the single subfolders where taking on disk. You can use the `du` command, with the right flags

    du -skh *
    

Here is an example output

    giustino:~/tmp/VVV  (develop *)
    ⇒ du -skh *
    12K CHANGELOG.md
    220K    config
    4,0K    CONTRIBUTING.md
    32K database
    4,0K    LICENSE
    8,0K    log
    36K provision
    20K README.md
    16K Vagrantfile
    4,0K    wp-cli.yml
    411M    www