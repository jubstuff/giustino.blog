---
title: How to cancel last local commit in git
author: Giustino Borzacchiello
type: post
date: 2015-08-04T22:05:34+00:00
permalink: /how-to-cancel-last-local-commit-in-git/
categories:
  - Git

---
I keep forgetting this. If you want to delete the latest commit that you have not pushed, you can do it using:

<pre>$ git reset HEAD~1</pre>

This will remove the commit and leave your changes untouched. If you want to get rid completely of the change, you can use `git checkout`

<pre>$ git checkout .</pre>