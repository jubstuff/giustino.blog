---
title: A component-based deploy strategy for WP Engine
author: Giustino Borzacchiello
type: post
date: 2016-01-25T09:02:56+00:00
excerpt: Deploying to WP Engine, one component at a time.
permalink: /a-component-based-deploy-strategy-for-wp-engine/
featured_image: /wp-content/uploads/2016/01/deploy-strategy-wpengine-cover.jpg
categories:
  - Devops
  - WordPress

  - deploy
  - git
  - wpengine

---
<p id="a-component-based-deploy-strategy-for-wp-engine">
  In the last months at <a href="http://corporate.drivek.it/">DriveK</a>, I&#8217;ve worked a lot with WP Engine.
</p>

[WP Engine][1], for those who don&#8217;t know, is a managed WordPress hosting company. They have worked hard on their infrastructure performance and security to give a top-notch service.

If you have a WordPress site, just create an install and forget about all those server related issues. It&#8217;s all on their side. You only have to think about your application, your themes, and your plugins.

The flip side of this is that the infrastructure is invisible. There is no concept of VPS, server, physical machine, virtual machine and such. And this means (as of January 2016), no SSH access.

That&#8217;s where deployment issues arise.

<!--more-->

## Deployment methods offered by WP Engine {#deployment-methods-offered-by-wp-engine}

WP Engine offers two strategies for deployment: SFTP and git.

**SFTP** is the standard package: you connect, upload your files, delete some and stop.

**Git** is a bit more sophisticated, but the concept is that you have a git repository that represents your install and when you push something to this repository, it gets automatically pushed to the live site.

In DriveK, with 20+ developers working at the same time, SFTP was not an option (I would not have considered it even if I was working alone, but that&#8217;s me!).

So that left us with git.

When you&#8217;re working on a **project** you could have your plugins and themes in a single repository, maybe hosted on Github or Bitbucket, and then push your changes to WP Engine as well.

But when you&#8217;re working on a **product** with several components the situation is different. This is better explained with an example.

## The Mbriaco inc. story {#the-mbriaco-inc.-story}

Mbriaco inc. is the company behind **wp-cellar**, a WordPress plugin that gives wine retailers a complete list of all wines, along with descriptions and data about them.

They sell this as a SaaS product, so when a wine retailer asks them for a website, they instantiate one, customizing it.

To do this, they have developed the _cavatappi_ parent theme, containing all commonly needed features. For every wine retailer, they create a child theme.

They have chosen WP Engine as their hosting provider because they don&#8217;t want to deal with infrastructure related problems. They just want to develop wine plugins and themes!

So, recapping, they have to manage:

  * the _wp-cellar_ plugin
  * their parent theme, _cavatappi_
  * a child theme for every retailer

Being good developers, they have every component in a single git repository hosted on Github. But this doesn&#8217;t play well with WP Engine git deployment strategy.

In fact, if they were to create a single repository for every project, they would find themselves in maintenance hell.

Every repository would have the copy of the _wp-cellar_ plugin and the _cavatappi_ theme. And upgrading one or both would be nearly impossible.

This is the situation we found in.

## A solution {#a-solution}

As said before, we can&#8217;t abandon git, as it is the only reasonable deploy method to work with. So, for every install, we have a git repository linked with WP Engine, anyway.

What we changed, though, is the way these repositories get updated.

Instead of working directly with these repositories, we use them as the entry point for WP Engine installs.

I added an intermediate step where we update the single component, **copy it** to the relevant repository and then push it to WP Engine.

A diagram is worth a thousand words, so here it is:

<div class="figure">
  <p>
    <a href="https://i2.wp.com/giustino.blog/wp-content/uploads/2016/01/deploy-strategy-wpengine.png"><img class="alignleft wp-image-1302 size-full" src="https://i2.wp.com/giustino.blog/wp-content/uploads/2016/01/deploy-strategy-wpengine.png?resize=1100%2C890" alt="WP Engine deploy strategy diagram" width="1100" height="890" srcset="https://i2.wp.com/giustino.blog/wp-content/uploads/2016/01/deploy-strategy-wpengine.png?w=3017&ssl=1 3017w, https://i2.wp.com/giustino.blog/wp-content/uploads/2016/01/deploy-strategy-wpengine.png?resize=300%2C243&ssl=1 300w, https://i2.wp.com/giustino.blog/wp-content/uploads/2016/01/deploy-strategy-wpengine.png?resize=1024%2C828&ssl=1 1024w, https://i2.wp.com/giustino.blog/wp-content/uploads/2016/01/deploy-strategy-wpengine.png?resize=1200%2C971&ssl=1 1200w, https://i2.wp.com/giustino.blog/wp-content/uploads/2016/01/deploy-strategy-wpengine.png?w=2200&ssl=1 2200w" sizes="(max-width: 1100px) 100vw, 1100px" data-recalc-dims="1" /></a>
  </p>
  
  <p class="caption">
    On the left, you have your components&#8217; repositories. These could be hosted wherever you like.
  </p>
</div>

<ol style="list-style-type: decimal;">
  <li>
    On your development machine or a build machine, you set up a build folder, where you clone all your components repos.
  </li>
  <li>
    Then, for every install, you configure a WP Engine git repository. Every repository gets a configuration file. A script then reads the configuration file and rsync the component to the right location and then pushes to WP Engine.
  </li>
</ol>

A call to the script is something like this:

<pre>$ deploy_to installA child-theme-A</pre>

## Downsides and conclusion {#downsides-and-conclusion}

We have been using this system since last year, and it&#8217;s been working flawlessly. I even set up the script to deploy to the staging environment that WP Engine offers, and even our designers can deploy without much effort.

The only real problem resides in the setup of WP Engine git repositories. As you can read from [the relevant documentation page][2], the procedure is long and, worst of all, nonscriptable.

So, every now and then, I have to spend nearly 2+ hours:

  * making backup, and waiting for an email
  * asking for a copy of the backup and waiting for an email
  * add the SSH key, and waiting for it being read by the system
  * setup the git repository and push once to connect it to WP Engine infrastructure

You can mitigate this by using a multisite so that you have to do this setup only once. But this also has its issues, as sometimes you need a separate instance.

So, this is my take on this problem. What do you think? Am I missing something? Tell me in the comments!

* * *

_Do you want to work on similar problems? <a href="http://corporate.drivek.it/jobs/" target="_blank">Come, we&#8217;re hiring</a>!_

<small>Cover image: <a href="http://www.oldbookillustrations.com/illustrations/horizontal-pasta-press/" target="_blank">&#8220;Horizontal pasta press&#8221;</a></small>

 [1]: https://wpengine.com/
 [2]: https://wpengine.com/git/