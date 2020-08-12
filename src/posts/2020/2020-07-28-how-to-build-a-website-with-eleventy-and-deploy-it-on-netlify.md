---
title: How to build a website with Eleventy and deploy it on Netlify
author: Giustino Borzacchiello
type: post
date: 2020-07-28T19:50:57+00:00
permalink: /how-to-build-a-website-with-eleventy-and-deploy-it-on-netlify/
classic-editor-remember:
  - block-editor
categories:
  - Thoughts

---
<div class="wp-block-jetpack-markdown">
  <p>
    Static sites are getting very popular, and for a good reason: they are performant and you can build one for free.
  </p>
  
  <p>
    <a href="https://www.11ty.dev/">Eleventy</a> is a new static site generator that you can use to build a website and host it on <a href="https://www.netlify.com/">Netlify</a>.
  </p>
  
  <p>
    In this post I&#8217;m going to show you how to build a (simple) website with Eleventy and deploy it on Netlify.
  </p>
  
  <h2>
    Prerequisites
  </h2>
  
  <p>
    I will assume you have:
  </p>
  
  <ul>
    <li>
      Node.js 12.18.0 installed
    </li>
    <li>
      A little knowledge about JavaScript and its environment (npm, npm scripts)
    </li>
    <li>
      Git installed and a little knowledge about how to setup a git repository, switching branch, etc.
    </li>
    <li>
      A little terminal knowledge
    </li>
    <li>
      A code editor installed. I will use Visual Studio Code, but you can use whatever you like
    </li>
  </ul>
  
  <h2>
    Commit often
  </h2>
  
  <p>
    I suggest you to commit often, to keep track of the changes you&#8217;re making. Whenever you see this symbol, I&#8217;m making a git commit ✅.
  </p>
  
  <h2>
    Installation
  </h2>
  
  <p>
    To install Eleventy, create a folder <code>eleventy-playground</code>
  </p>
  
  <pre><code class="language-jsx">mkdir eleventy-playground && cd eleventy-playground
</code></pre>
  
  <p>
    Create a <code>package.json</code> file
  </p>
  
  <pre><code class="language-bash">npm init -y
</code></pre>
  
  <p>
    Then install eleventy
  </p>
  
  <pre><code class="language-bash">npm install --save-dev @11ty/eleventy
</code></pre>
  
  <p>
    That&#8217;s it.
  </p>
  
  <h2>
    Project setup
  </h2>
  
  <p>
    Then open the project in your editor
  </p>
  
  <pre><code class="language-bash">code .
</code></pre>
  
  <p>
    Before going forward, now it&#8217;s a good moment to initialize our git repository
  </p>
  
  <pre><code class="language-bash">git init .
</code></pre>
  
  <p>
    And create a <code>.gitignore</code> file to exclude the <code>node_modules</code> folder ✅
  </p>
  
  <pre><code class="language-bash">touch .gitignore
</code></pre>
  
  <pre><code># .gitignore file
node_modules/
</code></pre>
  
  <h2>
    Creating and deploying your first website with 11ty
  </h2>
  
  <p>
    Now&#8217;s the moment to build and deploy our first (even if super-simple) website.
  </p>
  
  <p>
    When solving complex problems I usually try to connect all the dots with the most simple version of the problem. (This is what Nat Pryce and Steve Freeman authors of <a href="https://www.amazon.com/Growing-Object-Oriented-Software-Guided-Tests/dp/0321503627">Growing Object-Oriented Software, Guided by Tests</a> call Walking Skeleton).
  </p>
  
  <p>
    So our plan is this:
  </p>
  
  <ol>
    <li>
      Create a one-page website with eleventy
    </li>
    <li>
      Deploy it on Netlify
    </li>
  </ol>
  
  <p>
    Once we have the deploy pipeline for this simple website, we will simply evolve it, deploying continuously without having to worry. Let&#8217;s start
  </p>
  
  <p>
    Create a file <code>index.md</code> in the root folder
  </p>
  
  <pre><code class="language-bash">touch index.md
</code></pre>
  
  <p>
    Then, add some content to it ✅
  </p>
  
  <pre><code class="language-markdown"># My website

This is my website, built with Eleventy.
</code></pre>
  
  <p>
    Let&#8217;s see our masterpiece. Run this command in your terminal
  </p>
  
  <pre><code class="language-bash">npx @11ty/eleventy --serve
</code></pre>
  
  <p>
    This will compile your website and run a local server for you. By default Eleventy stores all the website files in a folder named <code>_site</code>.
  </p>
  
  <p>
    You should see something similar in your terminal:
  </p>
  
  <p>
    <img src="https://i1.wp.com/images.prismic.io/giustinoblog/f015b7f6-bde2-49a0-b007-537e6fa78175_eleventy-serve.png?w=1100&#038;ssl=1" alt="" data-recalc-dims="1" />
  </p>
  
  <p>
    Just click on the Local link and voilà, here&#8217;s your first website built with Eleventy!
  </p>
  
  <p>
    <img src="https://i1.wp.com/images.prismic.io/giustinoblog/68f137e9-c3e8-4ab5-9515-4564b7087ed0_a-simple-website-with-eleveny.png?w=1100&#038;ssl=1" alt="" data-recalc-dims="1" />
  </p>
  
  <p>
    It&#8217;s not fancy, but it works. I always follow <a href="https://wiki.c2.com/?MakeItWorkMakeItRightMakeItFast">this principle</a> when working:
  </p>
  
  <ol>
    <li>
      Make it work
    </li>
    <li>
      Make it right
    </li>
    <li>
      Make it fast
    </li>
  </ol>
  
  <p>
    Now let&#8217;s deploy this website and make it public.
  </p>
  
  <p>
    We&#8217;ll use Netlify to host all of our websites. Create an account, and just after that you&#8217;ll see this dashboard
  </p>
  
  <p>
    <img src="https://i1.wp.com/images.prismic.io/giustinoblog/5ebdba96-5a4d-49c3-91a4-237f072f0c91_netlify-dashboard.png?w=1100&#038;ssl=1" alt="" data-recalc-dims="1" />
  </p>
  
  <p>
    See the drop zone? That&#8217;s where we&#8217;re going to drag and drop our website files. Like this
  </p>
  
  <p>
    <img src="https://i1.wp.com/images.prismic.io/giustinoblog/e07201ff-9c06-494d-a990-4bf0bba82d69_manual-deploy-on-netlify.png?w=1100&#038;ssl=1" alt="" data-recalc-dims="1" />
  </p>
  
  <h2>
    Conclusion
  </h2>
  
  <p>
    Once finished, Netlify should show you a URL like this <a href="https://vibrant-shockley-4733f1.netlify.app/">https://vibrant-shockley-4733f1.netlify.app/</a> with your finished website. Congratulations!
  </p>
</div>