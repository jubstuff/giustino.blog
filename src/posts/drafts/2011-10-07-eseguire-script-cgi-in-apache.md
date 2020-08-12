---
title: Eseguire script CGI in Apache
author: Giustino Borzacchiello
type: post
date: 2011-10-07T11:53:02+00:00
draft: true
permalink: /?p=527
dsq_thread_id:
  - 792009037
categories:
  - Thoughts

  - Apache
  - CGI

---
Per permettere l&#8217;esecuzione di script CGI nella userdir è sufficiente aggiungere queste istruzioni al file `userdir.conf` (o parimenti `httpd.conf`):

<pre class="prettyprint">&lt;Directory /home/*/public_html/cgi-bin&gt;
    Options +ExecCGI
    AddHandler cgi-script .cgi .py .pl
&lt;/Directory&gt;
</pre>

In pratica si permette l&#8217;esecuzione di script (con estensione `cgi, py o pl`) dalla sottodirectory `cgi-bin` all&#8217;interno della userdir di Apache (tipicamente `/home/utente/public_html`)