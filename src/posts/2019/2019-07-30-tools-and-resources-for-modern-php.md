---
title: 'A PHP time-lapse: tools and resources for Modern PHP'
author: Giustino Borzacchiello
type: post
date: 2019-07-30T06:59:55+00:00
permalink: /tools-and-resources-for-modern-php/
featured_image: /wp-content/uploads/2019/07/ns-biiw_cnu-740x430.jpg
classic-editor-remember:
  - block-editor
categories:
  - PHP

---
PHP has come a long way since its humble beginnings as a simple scripting language and Modern PHP has several peculiar _traits_ (see what I did there?)

But with a simple Google search along with great material about how to write Modern PHP you will find a lot of outdated blog posts or resources that should be ignored.

In this post, I’ve tried to collect **a few outstanding resources that have helped me become a better PHP developer**.

But first, the time-lapse.

<!--more-->

<hr class="wp-block-separator" />

I still remember the first website I created using PHP. It was during high school: I was teaching myself Turbo Pascal and I was able to do simple sites in HTML.

Then I saw a friend of mine programming, and it wasn’t Turbo Pascal. I remember that all those dollar signs were a bit strange.

What’s that? It’s a new programming language, it’s called PHP. You can build dynamic websites with it. What do you mean with _dynamic_?

Without talking, he wrote something like this:

<div id="cb1" class="sourceCode">
  <pre class="sourceCode language-php"><code class="sourceCode php">&lt;a id="cb1-1" class="sourceLine" title="1">&lt;/a>&lt;span class="kw">echo&lt;/span> &lt;span class="st">'&lt;ul&gt;'&lt;/span>&lt;span class="ot">;&lt;/span>
&lt;a id="cb1-2" class="sourceLine" title="2">&lt;/a>&lt;span class="kw">for&lt;/span>&lt;span class="ot">(&lt;/span>&lt;span class="kw">$i&lt;/span>=&lt;span class="dv">0&lt;/span>&lt;span class="ot">;&lt;/span> &lt;span class="kw">$i&lt;/span>&lt;&lt;span class="dv">1000&lt;/span>&lt;span class="ot">;&lt;/span> &lt;span class="kw">$i&lt;/span>++&lt;span class="ot">)&lt;/span>{
&lt;a id="cb1-3" class="sourceLine" title="3">&lt;/a>    &lt;span class="kw">echo&lt;/span> &lt;span class="st">'&lt;li&gt;Item number '&lt;/span> . &lt;span class="kw">$i&lt;/span> . &lt;span class="st">'&lt;/li&gt;'&lt;/span>&lt;span class="ot">;&lt;/span>
&lt;a id="cb1-4" class="sourceLine" title="4">&lt;/a>}
&lt;a id="cb1-5" class="sourceLine" title="5">&lt;/a>&lt;span class="kw">echo&lt;/span> &lt;span class="st">'&lt;/ul&gt;'&lt;/span>&lt;span class="ot">;&lt;/span></code></pre>
</div>

And reloaded the page (he was using [EasyPHP][1] as a local server).

One thousand `li` element created on the fly. ONE THOUSAND. It would have taken me a bit of time to write that in static HTML. I wanted, better, I needed to learn how to do that!

I copied the EasyPHP installer on some random floppy disk, along with some PHP files to learn from. That evening I wrote my first _Hello, World_ and a great looking website that featured header, sidebar, main content, and footer all split into separate files and fetched via `include`. I felt powerful!

<hr class="wp-block-separator" />

_Fast forward five years_

<hr class="wp-block-separator" />

I’m at university and I find a little part-time job as a web developer. I’m excited about all the things I’m going to learn. They told me I need to migrate an app from PHP4 to PHP5. Of course, I wasn’t prepared for this:

<div id="cb2" class="sourceCode">
  <pre class="sourceCode language-php"><code class="sourceCode php">&lt;a id="cb2-1" class="sourceLine" title="1">&lt;/a>&lt;span class="co">//UPDATE LAST ACTION&lt;/span>
&lt;a id="cb2-2" class="sourceLine" title="2">&lt;/a>&lt;span class="kw">$DB&lt;/span>-&gt;Execute&lt;span class="ot">(&lt;/span>&lt;span class="st">"UPDATE users SET last_action=NOW() WHERE id="&lt;/span>.&lt;span class="kw">$_SESSION&lt;/span>&lt;span class="ot">[&lt;/span>&lt;span class="st">'fw_userid'&lt;/span>&lt;span class="ot">]&lt;/span> &lt;span class="ot">);&lt;/span>
&lt;a id="cb2-3" class="sourceLine" title="3">&lt;/a>
&lt;a id="cb2-4" class="sourceLine" title="4">&lt;/a>&lt;span class="co">//CHECK FOR EXPIRED PASSWORD&lt;/span>
&lt;a id="cb2-5" class="sourceLine" title="5">&lt;/a>&lt;span class="kw">if&lt;/span> &lt;span class="ot">(&lt;/span>&lt;span class="kw">$CONF&lt;/span>&lt;span class="ot">[&lt;/span>&lt;span class="st">'days_cpw'&lt;/span>&lt;span class="ot">]&lt;/span> &gt; &lt;span class="dv">0&lt;/span>&lt;span class="ot">)&lt;/span>
&lt;a id="cb2-6" class="sourceLine" title="6">&lt;/a>{
&lt;a id="cb2-7" class="sourceLine" title="7">&lt;/a>    &lt;span class="kw">list&lt;/span>&lt;span class="ot">(&lt;/span>&lt;span class="kw">$yy&lt;/span>&lt;span class="ot">,&lt;/span>&lt;span class="kw">$mm&lt;/span>&lt;span class="ot">,&lt;/span>&lt;span class="kw">$dd&lt;/span>&lt;span class="ot">)&lt;/span> = &lt;span class="fu">explode&lt;/span>&lt;span class="ot">(&lt;/span>&lt;span class="st">"-"&lt;/span>&lt;span class="ot">,&lt;/span>&lt;span class="kw">$_SESSION&lt;/span>&lt;span class="ot">[&lt;/span>&lt;span class="st">'user'&lt;/span>&lt;span class="ot">][&lt;/span>&lt;span class="st">'last_pw_change'&lt;/span>&lt;span class="ot">]);&lt;/span>
&lt;a id="cb2-8" class="sourceLine" title="8">&lt;/a>    &lt;span class="kw">$olddata&lt;/span> = &lt;span class="fu">mktime&lt;/span>&lt;span class="ot">(&lt;/span>&lt;span class="dv">2&lt;/span>&lt;span class="ot">,&lt;/span>&lt;span class="dv">0&lt;/span>&lt;span class="ot">,&lt;/span>&lt;span class="dv">0&lt;/span>&lt;span class="ot">,&lt;/span>&lt;span class="kw">$mm&lt;/span>&lt;span class="ot">,&lt;/span>&lt;span class="kw">$dd&lt;/span>&lt;span class="ot">,&lt;/span>&lt;span class="kw">$yy&lt;/span>&lt;span class="ot">);&lt;/span>
&lt;a id="cb2-9" class="sourceLine" title="9">&lt;/a>    &lt;span class="kw">$span&lt;/span> = &lt;span class="fu">time&lt;/span>&lt;span class="ot">()&lt;/span> - &lt;span class="kw">$olddata&lt;/span>&lt;span class="ot">;&lt;/span>
&lt;a id="cb2-10" class="sourceLine" title="10">&lt;/a>    &lt;span class="kw">$days_passed&lt;/span> = &lt;span class="kw">$span&lt;/span> / &lt;span class="ot">(&lt;/span>&lt;span class="dv">60&lt;/span>*&lt;span class="dv">60&lt;/span>*&lt;span class="dv">24&lt;/span>&lt;span class="ot">);&lt;/span>
&lt;a id="cb2-11" class="sourceLine" title="11">&lt;/a>    &lt;span class="kw">if&lt;/span> &lt;span class="ot">(&lt;/span>&lt;span class="kw">$days_passed&lt;/span> &gt; &lt;span class="kw">$CONF&lt;/span>&lt;span class="ot">[&lt;/span>&lt;span class="st">'days_cpw'&lt;/span>&lt;span class="ot">]&lt;/span> && !&lt;span class="fu">strstr&lt;/span>&lt;span class="ot">(&lt;/span>&lt;span class="kw">$_SERVER&lt;/span>&lt;span class="ot">[&lt;/span>&lt;span class="kw">SCRIPT_NAME&lt;/span>&lt;span class="ot">],&lt;/span>&lt;span class="st">"mod_user"&lt;/span>&lt;span class="ot">)&lt;/span> && !&lt;span class="fu">strstr&lt;/span>&lt;span class="ot">(&lt;/span>&lt;span class="kw">$_SERVER&lt;/span>&lt;span class="ot">[&lt;/span>&lt;span class="kw">SCRIPT_NAME&lt;/span>&lt;span class="ot">],&lt;/span>&lt;span class="st">"calendar_iframe"&lt;/span>&lt;span class="ot">)&lt;/span>  && !&lt;span class="fu">strstr&lt;/span>&lt;span class="ot">(&lt;/span>&lt;span class="kw">$_SERVER&lt;/span>&lt;span class="ot">[&lt;/span>&lt;span class="kw">SCRIPT_NAME&lt;/span>&lt;span class="ot">],&lt;/span>&lt;span class="st">"cron_web_start"&lt;/span>&lt;span class="ot">)&lt;/span> &lt;span class="ot">)&lt;/span>
&lt;a id="cb2-12" class="sourceLine" title="12">&lt;/a>    {
&lt;a id="cb2-13" class="sourceLine" title="13">&lt;/a>            &lt;span class="fu">header&lt;/span>&lt;span class="ot">(&lt;/span>&lt;span class="st">"location: "&lt;/span>.&lt;span class="kw">$CONF&lt;/span>&lt;span class="ot">[&lt;/span>&lt;span class="st">'url_base'&lt;/span>&lt;span class="ot">]&lt;/span>.&lt;span class="kw">$CONF&lt;/span>&lt;span class="ot">[&lt;/span>&lt;span class="st">'dir_modules'&lt;/span>&lt;span class="ot">]&lt;/span>.&lt;span class="st">'admin/pages/mod_user.php?id='&lt;/span>.&lt;span class="kw">$_SESSION&lt;/span>&lt;span class="ot">[&lt;/span>&lt;span class="st">'fw_userid'&lt;/span>&lt;span class="ot">]&lt;/span>.&lt;span class="st">'&action=cp'&lt;/span>&lt;span class="ot">);&lt;/span>
&lt;a id="cb2-14" class="sourceLine" title="14">&lt;/a>    }
&lt;a id="cb2-15" class="sourceLine" title="15">&lt;/a>}
&lt;a id="cb2-16" class="sourceLine" title="16">&lt;/a>
&lt;a id="cb2-17" class="sourceLine" title="17">&lt;/a>&lt;span class="co">//Template inizialization&lt;/span>
&lt;a id="cb2-18" class="sourceLine" title="18">&lt;/a>&lt;span class="kw">require_once&lt;/span> &lt;span class="ot">(&lt;/span>&lt;span class="st">"template.php"&lt;/span>&lt;span class="ot">);&lt;/span>
&lt;a id="cb2-19" class="sourceLine" title="19">&lt;/a>
&lt;a id="cb2-20" class="sourceLine" title="20">&lt;/a>&lt;span class="co">// Load Modules configuration in memory&lt;/span>
&lt;a id="cb2-21" class="sourceLine" title="21">&lt;/a>load_modules_config&lt;span class="ot">();&lt;/span>
&lt;a id="cb2-22" class="sourceLine" title="22">&lt;/a>
&lt;a id="cb2-23" class="sourceLine" title="23">&lt;/a>&lt;span class="co">//Include permission manager&lt;/span>
&lt;a id="cb2-24" class="sourceLine" title="24">&lt;/a>&lt;span class="kw">require_once&lt;/span> &lt;span class="ot">(&lt;/span>&lt;span class="st">"permission.php"&lt;/span>&lt;span class="ot">);&lt;/span></code></pre>
</div>

Of course, PHP4 wasn’t the problem…It was a rough ride, but it was fun!

<hr class="wp-block-separator" />

_Fast forward fifteen years_

<hr class="wp-block-separator" />

I want to try out a new idea for a simple web app. I `cd` into a folder and create a PHP file.

Then `php -S localhost:8000 -t public/` will spin off a dev server for me.

I need to read some CSV file: `composer require league/csv` is all I need to do to download a robust library for CSV handling.

Since I want to make sure that my application is robust, let’s install a testing framework: `composer require --dev phpunit/phpunit ^8`.

I don’t like to use `require_once` all over the place: luckily Composer provides a [PSR-4 compliant autoloader][2] for free.

Now let’s try to make an API for that: I can choose from multiple [PSR-15 Server Request Handlers][3] that digest [PSR-7 HTTP messages][4] and focus just on my business logic.

<hr class="wp-block-separator" />

## Tools & Resources {#tools-resources}

If you want to know more, here are several resources and tools that have helped me learn more about the language.

### PHP: The Right Way {#php-the-right-way}

If you could choose just one resource to know more about Modern PHP, then [PHP: The Right Way][5] would be that one.

It’s less about the language and more about the ecosystem and the best practices that have emerged during the years.

An absolute must-read.

### Dependency management via Composer {#dependency-management-via-composer}

<div class="wp-block-image">
  <figure class="aligncenter"><img src="https://i2.wp.com/v1.giustino.blog/wp-content/uploads/2019/07/logo-composer.png?w=1100&#038;ssl=1" alt="Composer logo" data-recalc-dims="1" /><figcaption>Composer logo</figcaption></figure>
</div>

I can say without exaggeration that Composer is one of the best things happened to PHP. I always found PEAR confusing to use, while Composer is immediate and ubiquitous.

Of course, a dependency manager without packages to manage is a bit useless so I need to mention also [Packagist][6], a repository where (almost) all PHP libraries are uploaded and fetched by Composer.

I think that Composer played a big part in the recent switch from monolithic framework to composing of libraries that

Some great reads about this topic:

  * [Modern PHP Without a Framework][7] by [Kevin Smith][8]
  * [Create your own PHP Framework][9] &#8211; Symfony docs

### Modern PHP {#modern-php}

<div class="wp-block-image">
  <figure class="aligncenter"><img src="https://i0.wp.com/v1.giustino.blog/wp-content/uploads/2019/07/modern-php-cover.jpg?w=1100&#038;ssl=1" alt="Modern PHP book cover" data-recalc-dims="1" /><figcaption>Modern PHP book cover</figcaption></figure>
</div>

Even if [this book][10] by [Josh Lockhart][11] is a bit old, it does a great job at explaining “new” features introduced in PHP and other best practices. It’s a great complement to PHP: The Right Way.

### Psysh {#psysh}

The one thing I missed from my times as a Python developer was the iPython REPL. After discovering [Psysh][12], my nostalgia faded away.

It’s simply the best REPL for PHP, and its `doc` feature gives me the ability to check the PHPdoc without leaving the terminal every time.<figure class="wp-block-image">

<img src="https://i1.wp.com/v1.giustino.blog/wp-content/uploads/2019/07/psysh-doc-command.png?w=1100&#038;ssl=1" alt="The doc command for array_map" data-recalc-dims="1" /> <figcaption>The doc command for array_map</figcaption></figure> 

### Testing {#testing}

A list like this wouldn’t be complete without mentioning some testing-related resource. But it will be a really obvious one.

I still feel that the best place to start is the [PHPUnit Manual][13] as far as PHP is concerned.

Then, if you want to learn more about testing in general and TDD, these are my top recommendations:

  * [Growing Object-Oriented Software Guided by Tests][14]: one of the best books about software design and TDD and tests in general,
  * [Test-Driven Development By Example][15]: a must-read if you’re serious about TDD,
  * [The Way of the Web Tester][16]: a gentle introduction if you don’t know anything about tests.

### Modernizing Legacy Applications In PHP {#modernizing-legacy-applications-in-php}

<div class="wp-block-image">
  <figure class="aligncenter"><img src="https://i2.wp.com/v1.giustino.blog/wp-content/uploads/2019/07/modernizing-legacy-applications-php-book-cover.png?w=1100&#038;ssl=1" alt="Modernizing Legacy applications with PHP book cover" data-recalc-dims="1" /><figcaption>Modernizing Legacy applications with PHP book cover</figcaption></figure>
</div>

We’ve all been there. During the interview, you’re sold futuristic technology and once you’re at your new job, you’re faced with a big, leaking bull of mud. And you just want to run away.

[Modernizing Legacy Applications In PHP][17] by [Paul M. Jones][18] helps you step by step untangle that mess. Really well written!.

<hr class="wp-block-separator" />

So these are my favorite resources about Modern PHP: did I miss something? What’s yours?

 [1]: https://www.easyphp.org/
 [2]: https://www.php-fig.org/psr/psr-4/
 [3]: https://www.php-fig.org/psr/psr-15/
 [4]: https://www.php-fig.org/psr/psr-7/
 [5]: https://phptherightway.com/
 [6]: https://packagist.org/
 [7]: https://kevinsmith.io/modern-php-without-a-framework
 [8]: https://twitter.com/_kevinsmith
 [9]: https://symfony.com/doc/current/create_framework/index.html
 [10]: https://www.amazon.com/Modern-PHP-Features-Good-Practices/dp/1491905018
 [11]: https://twitter.com/codeguy
 [12]: https://psysh.org/
 [13]: https://phpunit.readthedocs.io/en/8.2/
 [14]: http://www.growing-object-oriented-software.com/
 [15]: https://www.amazon.it/Test-Driven-Development-Example-Kent-Beck/dp/0321146530
 [16]: https://pragprog.com/book/jrtest/the-way-of-the-web-tester
 [17]: https://leanpub.com/mlaphp
 [18]: http://paul-m-jones.com/