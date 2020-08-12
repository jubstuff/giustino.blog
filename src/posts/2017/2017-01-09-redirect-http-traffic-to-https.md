---
title: Redirect HTTP traffic to HTTPS
author: Giustino Borzacchiello
type: post
date: 2017-01-09T20:14:12+00:00
permalink: /redirect-http-traffic-to-https/
categories:
  - Tips

---
Recently I&#8217;ve moved all my websites to HTTPS thanks to Let&#8217;s Encrypt and Siteground.

To redirect the traffic from HTTP to HTTPS I&#8217;ve used this rule in my `.htaccess` file:

<pre>RewriteCond %{HTTPS} off
# First rewrite to HTTPS:
# Don't put www. here. If it is already there it will be included, if not
# the subsequent rule will catch it.
RewriteRule .* https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]</pre>