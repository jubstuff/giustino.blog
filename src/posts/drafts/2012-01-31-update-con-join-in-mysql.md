---
title: Update con Join in MySQL
author: Giustino Borzacchiello
type: post
date: 2012-01-31T22:50:07+00:00
draft: true
permalink: /?p=624
dsq_thread_id:
  - 770712937
categories:
  - SQL

  - Join
  - MySQL
  - Query
  - Update

---
Mi sono trovato a dover aggiornare un attributo di una relazione, avendo come input l&#8217;identificativo di un&#8217;altra relazione, collegata alla prima tramite vincolo di chiave esterna.  
In MySQL:

<pre class="prettyprint">UPDATE tabella1 t1 JOIN tabella2 t2
ON t1.id=t2.attributoConFK SET t1.campo=t1.campo+1; 
</pre>