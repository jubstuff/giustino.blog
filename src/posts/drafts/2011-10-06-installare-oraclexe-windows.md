---
title: Installare Oracle Express Edition in Windows
author: Giustino Borzacchiello
type: post
date: 2011-10-06T11:15:30+00:00
draft: true
permalink: /?p=505
dsq_thread_id:
  - 881534879
categories:
  - Thoughts

  - Database
  - Installazione
  - Oracle

---
Per il Laboratorio di Basi di Dati si è resa necessaria l&#8217;installazione del DBMS Oracle.  
Per non appesantire con un tale macigno la mia partizione Linux, ho deciso di passare la palla a Windows.

## Download e installazione

Oracle fornisce una versione _stripped down_, gratuita e liberamente utilizzabile per progetti personali e open source: [Oracle Express Edition 11g Release2][1].  
<!--more-->

  
Basta scaricare l&#8217;archivio zip, estrarlo e far partire l&#8217;installazione, che è nella norma del pattern _Avanti, avanti, avanti, Fine_.  
<figure id="attachment_508" aria-describedby="caption-attachment-508" style="width: 300px" class="wp-caption aligncenter">[<img src="https://i2.wp.com/giustino.blog/wp-content/uploads/2011/10/password-300x229.gif?resize=300%2C229" alt="Insert password screen in Oracle installation" title="Insert password screen in Oracle installation" width="300" height="229" class="size-medium wp-image-508" data-recalc-dims="1" />][2]<figcaption id="caption-attachment-508" class="wp-caption-text">Meglio ricordarsi questa password, perché ci consente l'accesso al DB</figcaption></figure>

## Creazione di un utente

Una volta terminata l&#8217;installazione abbiamo bisogno di creare un _database user_. A differenza di MySql, in cui si creano gli utenti e poi i database, in Oracle ogni utente è associato ad un _database schema_. Tutti i _database objects_ (tabelle, viste, procedure, ecc.) creati all&#8217;interno di questo schema saranno di proprietà dell&#8217;utente associato.

Per creare un utente, possiamo utilizzare SQL*Plus. Dopo aver fatto partire l&#8217;applicazione:

  1. Digitare `connect`
  2. Digitare `system`
  3. Immettere la password creata durante l&#8217;installazione

A questo punto saremo collegati come l&#8217;utente `system` (che ha tutti i privilegi sui vari schema). Per creare un nuovo utente:

  1. `create user nome_utente identified by password_segreta`
  2. `grant connect, resource to nome_utente`

A questo punto avremo creato un nuovo utente (col fantasioso identificativo `nome_utente`) a cui avremmo associato una password e determinati privilegi sullo schema (per una panoramica sui privilegi e sui ruoli, è bene controllare [la relativa documentazione][3]).

 [1]: http://www.oracle.com/technetwork/database/express-edition/overview/index.html
 [2]: https://i2.wp.com/giustino.blog/wp-content/uploads/2011/10/password.gif
 [3]: http://download.oracle.com/docs/cd/B28359_01/network.111/b28531/authorization.htm