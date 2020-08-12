---
title: Local executable for Composer
author: Giustino Borzacchiello
type: post
date: 2017-01-11T07:11:40+00:00
permalink: /local-executable-for-composer/
categories:
  - PHP

---
Last month I learned this little trick for [Composer][1]. If you modify your `PATH` env variable in this way

    export PATH="vendor/bin":$PATH
    

when you switch project it will automatically load the local executable for the dependency.

 [1]: https://getcomposer.org/