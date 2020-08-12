---
title: Come cambiare solo la data in un campo DATETIME di MySQL?
author: Giustino Borzacchiello
type: post
date: 2012-10-14T09:29:56+00:00
draft: true
permalink: /?p=818
dsq_thread_id:
  - 884481762
categories:
  - SQL

  - Date
  - Datetime
  - MySQL

---
Oggi mi sono trovato a dover risolvere questo problema: aggiornare un campo `DATETIME` di una tabella, aggiungendo un giorno, lasciando invariata l&#8217;ora. Cioè da questo `2012-10-14 00:15:00` volevo ottenere questo `2012-10-15 00:15:00`. Il comando SQL è molto semplice:

<pre class="prettyprint">UPDATE `tbl_dati` SET 
  ora = ora + INTERVAL 1 DAY;
</pre>

Ovviamente al posto di `DAY` è possibile utilizzare un&#8217;altra unità di misura di tempo, come indicato [nella documentazione di MySQL][1]

 [1]: http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_date-add