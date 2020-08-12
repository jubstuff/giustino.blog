---
title: WordPress in Google :)
author: Giustino Borzacchiello
type: post
date: 2007-09-07T15:38:54+00:00
permalink: /configurare-wordpress-verifica-proprieta-del-sito-da-google/
dsq_thread_id:
  - 936156655
categories:
  - Italiano
  - WordPress

  - Google
  - SEO
  - Wordpress

---
<p style="text-align: center;">
  <img class="aligncenter" src="https://i1.wp.com/giustino.blog/wp-content/uploads/2007/09/gvswp.png?resize=140%2C70" alt="Google contro WordPress" width="140" height="70" data-recalc-dims="1" />
</p>

<p align="left">
  Finalmente ci sono riuscito!!!! E&#8217; da un paio di giorni che sto cercando (inutilmente :S ) di far rilevare il sito da parte di <a href="http://www.google.com">Google</a>, e dopo aver provato varie strade ( prese dal sito di <a href="http://wordpress.org/support/topic/105766">supporto di WordPress.org</a> ), ho cercato di capire qual&#8217;era il problema. La verifica, dopo aver caricato la sitemap in <a href="http://www.google.com">Google</a>, consiste nell&#8217;upload nella <em>root</em> del sito un file .html di cui il team di Google fornisce il nome/chiave. In questo modo si può verificare la paternità del sito. Non ho ben capito perchè, anche se <a href="http://wordpress.org">WordPress</a> e <a href="http://www.google.com">Google</a> sono a conoscenza di questo problema, non sia stato ancora risolto.
</p>

<!--more-->

Ad ogni modo, il sistema di verifica di [Google][1] riportava:

> We&#8217;ve detected that your server returns a status of 200 (found successfully) for pages that don&#8217;t exist.

Cioè che anche per una pagina web inesistente, veniva restituito uno stato di &#8220;ritrovato con successo&#8221;, e questo bloccava il processo di verifica. Per aggirare questo problema ho fatto cosi:

  1. Creare un file per gestire l&#8217;errore 404 (nel caso in cui il vostro template non lo preveda 😉 )
  2. Creare (o editare) un file .htaccess nella root del sito
  3. Inserire all&#8217;interno del file la riga: `ErrorDocument 404 /directory_file/vostro_file_errore_404.php` dove bisogna sostituire a directory\_file e vostro\_file\_errore\_404.php i nomi della directory e del file di errore.

Fatto questo non vi resta altro che iscrivervi a [WebMaster Tools][2] di Google e seguire le istruzioni, badando di scegliere come modalità di verifica il caricamento del file, e non l&#8217;inserimento dei meta tag!

Questo è tutto, gente!  
Alla prossima!

 [1]: http://www.google.com
 [2]: https://www.google.com/webmasters/tools/docs/en/about.html