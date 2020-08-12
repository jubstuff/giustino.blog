---
title: Create virtual environment with Python 3
author: Giustino Borzacchiello
type: post
date: 2019-07-14T18:32:22+00:00
draft: true

classic-editor-remember:
  - block-editor
categories:
  - Dev Stuff

---
To create a virtual env with Python 3, create your project folder and then issue this command

<pre class="wp-block-code"><code>python3 -m venv venv</code></pre>

This will create a `venv` folder in your project folder. Then you can activate your virtual env with

<pre class="wp-block-code"><code>source ./venv/bin/activate</code></pre>

After that, your Python version will be the one you chose

<pre class="wp-block-code"><code>python/my_project
▶ python --version
Python 2.7.12

python/my_project
▶ source ./venv/bin/activate

python/my_project
▶ python --version          
Python 3.5.2
</code></pre>

To deactivate simply issue this command

<pre class="wp-block-code"><code>deactivate</code></pre>