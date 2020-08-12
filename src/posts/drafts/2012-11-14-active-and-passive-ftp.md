---
title: Active and Passive FTP
author: Giustino Borzacchiello
type: post
date: 2012-11-14T17:31:48+00:00
draft: true

dsq_thread_id:
  - 982393690
categories:
  - Thoughts

  - Active FTP
  - FTP
  - Passive FTP
  - powershell

---
E si imparano sempre cose nuove.

Oggi è toccato alla differenza tra FTP passivo e FTP attivo: in pratica riuscivo a connettermi da console, ma tramite script Powershell nisba. Analizzando il log di errore ho scoperto che il server si aspettava una connessione attiva. Di lì è bastato settare il flag `UsePassive` in `System.Net.FtpWebRequest`.

<img src="https://i1.wp.com/giustino.blog/wp-content/uploads/2012/11/activeftp.gif?resize=318%2C294" alt="" title="Active FTP" width="318" height="294" class="aligncenter size-full wp-image-833" data-recalc-dims="1" /> 

Ecco [un&#8217;analisi più approfondita delle differenze tra le due modalità di FTP][1].

 [1]: http://slacksite.com/other/ftp.html "Active and passive FTP"