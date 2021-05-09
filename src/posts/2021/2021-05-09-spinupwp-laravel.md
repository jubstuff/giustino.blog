---
title: Deploy Laravel with SpinupWP
type: post
date: 2021-05-09
permalink: /deploy-laravel-spinupwp/
---

Today I tried to deploy Laravel using SpinupWP.

Creating the site was easy: I had a test Laravel app I wanted to deploy in a Github repo.
SpinupWP provided me all the details needed to setup the DNS and the SSH keys.

The things I needed to do to make it work were:

 * Set the root folder for nginx to the `/public` folder. (You have to reload your nginx conf)
 * Create the `.env` file, copying the `.env.example`
 * Run `php artisan key:generate` to generate the app keys (I have yet to find out what are these for)
 * Run `php artisan cache:clear` and `php artisan config:clear` to clear the cache

