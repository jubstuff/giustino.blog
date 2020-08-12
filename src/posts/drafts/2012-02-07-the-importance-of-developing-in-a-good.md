---
title: The importance of developing in a good
author: Giustino Borzacchiello
type: post
date: 2012-02-07T20:11:28+00:00
draft: true
permalink: /?p=628
dsq_thread_id:
  - 762372171
categories:
  - Coding Horror
  - PHP

  - method chaining
  - PHP4
  - PHP5

---
No, I&#8217;m not talking about that strange smell in your room.

This is a story that happened to me a while ago. It was certainly my fault, I could be more cautious, but in the end the net result was positive.

First job, first delivery, first meeting to check my work.  
Imagine: I was awake all night studying the codebase in every detail, fixing all the warnings.  
Refactoring, test, comments: you name it. I wanted to show that I was working good.

I arrived in time, turned on the PC to show off my work.  
&#8220;No, let&#8217;s try it directly on the server!&#8221; &#8211; my boss said &#8211; &#8220;Have you updated the database?&#8221;  
&#8220;Yes, I&#8217;ve added the necessary fields. Here&#8217;s the dump.&#8221;

Brilliant! Impeccable!

I upload the application. &#8220;Well, let&#8217;s try and add a record&#8230;&#8221; BAAAM.  
A dreadful white screen with this error:

    syntax error, unexpected T_OBJECT_OPERATOR in File.php on line 68
    

Panic. Alarm. Alarm. It couldn&#8217;t be. Obviously, _it works on my machine_.  
I checked row 68, there was only a simple query:

<pre><code class="php">$var = $DB-&gt;Execute($sqlQuery)-&gt;FetchRow();
</code></pre>

What could be wrong with this row? I didn&#8217;t touch anything. A simple [method chaining][1]. Simple? Really?

How could I know that the _simple_ method chaining wasn&#8217;t a core feature of PHP4? And I developed on PHP5 version. So, thank you, try better next time.

Luckily, the latest version was also installed on the server, so it was only a matter to switch.  
But it could not be so. And I would have had to split all the lines like:

<pre><code class="php">$result = $DB-&gt;Execute($sqlQuery);
$var = $result-&gt;FetchRow();
</code></pre>

The moral of the story is: try to work as closely as possible to the production state. The results could be unpredictable.  
And now, if you ask me, open your window and let the fresh air come in.

 [1]: http://en.wikipedia.org/wiki/Method_chaining