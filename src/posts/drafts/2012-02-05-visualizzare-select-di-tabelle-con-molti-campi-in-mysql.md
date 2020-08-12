---
title: Visualizzare select di tabelle con molti campi in MySQL
author: Giustino Borzacchiello
type: post
date: 2012-02-05T18:31:28+00:00
draft: true

dsq_thread_id:
  - 767349489
categories:
  - SQL

  - command-line
  - MySQL
  - Select

---
Se capita di dover effettuare una `SELECT` su una tabella da linea di comando, i risultati verranno visualizzati in una tabella in formato ASCII.  
Nel caso in cui la tabella contiene molti campi, questa tabella risulterà non formattata correttamente, con righe spezzate su più livelli.  
Per visualizzare un record alla volta si può utilizzare il flag `G` dopo il comando.

Ad esempio:

<pre class="prettyprint">mysql> select * from prova;
+----+---------+--------+------+
| id | testo   | numero | car  |
+----+---------+--------+------+
|  1 | Uno     |      0 | r    |
|  2 | Due     |      0 | r    |
|  3 | Tre     |      0 | r    |
|  4 | Quattro |      0 | r    |
|  5 | Cinque  |      0 | r    |
|  6 | Sei     |      0 | r    |
|  7 | Sette   |      0 | r    |
|  8 | Otto    |      0 | r    |
|  9 | Nove    |      0 | r    |
+----+---------+--------+------+
9 rows in set (0.00 sec)


mysql> select * from provaG
*************************** 1. row ***************************
    id: 1
 testo: Uno
numero: 0
   car: r
*************************** 2. row ***************************
    id: 2
 testo: Due
numero: 0
   car: r
*************************** 3. row ***************************
    id: 3
 testo: Tre
numero: 0
   car: r
*************************** 4. row ***************************
    id: 4
 testo: Quattro
numero: 0
   car: r
*************************** 5. row ***************************
    id: 5
 testo: Cinque
numero: 0
   car: r
*************************** 6. row ***************************
    id: 6
 testo: Sei
numero: 0
   car: r
*************************** 7. row ***************************
    id: 7
 testo: Sette
numero: 0
   car: r
*************************** 8. row ***************************
    id: 8
 testo: Otto
numero: 0
   car: r
*************************** 9. row ***************************
    id: 9
 testo: Nove
numero: 0
   car: r
9 rows in set (0.00 sec)

</pre>