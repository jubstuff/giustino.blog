---
title: Visualizzare dei post random in WordPress
author: Giustino Borzacchiello
type: post
date: 2008-12-28T13:43:30+00:00
draft: true

syntaxhighlighter_encoded:
  - 1
dsq_thread_id:
  - 762373342
categories:
  - WordPress

  - Blogging
  - random post
  - Wordpress

---
Sono riuscito a far mostrare (finalmente) dei post a caso nella home di questo sito! Il codice da inserire nella pagina è il seguente:

<pre class="prettyprint">&lt;div id="randomPosts" class="box highlight"&gt;
&lt;h3&gt;Post a caso&lt;/h3&gt;
  &lt;ul&gt;
    &lt; ?php
      global $post;
      $my_posts = get_posts('numberposts=5&orderby=rand');
      foreach ($my_posts as $post) : ?&gt;
      &lt; ?php setup_postdata($post); ?&gt;
      &lt;li&gt;
        &lt;a href="&lt;?php the_permalink(); ?&gt;"&gt;&lt; ?php the_title(); ?&gt;&lt;/a&gt; 
        &lt;em&gt;&lt; ?php the_date('d-m-Y'); ?&gt;&lt;/em&gt; 
      &lt;/li&gt;
      &lt; ?php endforeach; ?&gt;
  &lt;/ul&gt;
&lt;/div&gt;
</pre>

In pratica non fa altro che selezionare 5 post a caso grazie alla funzione di Mysql &#8220;rand&#8221; e poi con un ciclo foreach mostriamo il titolo e la data di creazione.