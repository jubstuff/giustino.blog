---
title: Fixing an error installing Rails with PostgreSQL on Ubuntu
author: Giustino Borzacchiello
type: post
date: 2016-08-28T17:41:37+00:00
permalink: /fixing-error-rails-postgresql-ubuntu/
categories:
  - Ruby

  - PostgreSQL
  - Rails
  - Ubuntu

---
Today while installing Ruby on Rails with PostgreSQL for a personal project, I incurred in this error:

<pre>Installing pg 0.18.4 with native extensions
Gem::Ext::BuildError: ERROR: Failed to build gem native extension.
...
An error occurred while installing pg (0.18.4), and Bundler cannot continue.
Make sure that `gem install pg -v '0.18.4'` succeeds before bundling.
</pre>

As I am working on a Linux Laptop with Ubuntu, the fix is very simple: just install the `libpq-dev` package with

<pre>sudo apt-get install libpq-dev
</pre>