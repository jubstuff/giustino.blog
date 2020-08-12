---
title: Mostrare errori in PHP
author: Giustino Borzacchiello
type: post
date: 2009-05-14T19:09:29+00:00
draft: true

dsq_thread_id:
  - 762373399
categories:
  - PHP

  - debug
  - Errori
  - PHP
  - php.ini
  - Programmazione

---
Ogni tanto capitano cose inspiegabili. Fino a ieri, se mancavo un punto e virgola nei miei file php, mi usciva un messaggio nel browser che gentilmente mi invitava a controllare il mio script.

Oggi, niente.

Com&#8217;è possibile, direte voi, devi aver modificato qualcosa sicuramente.

Invece no, non ho fatto davvero nulla, semplicemente ieri funzionavano e oggi no.

Dopo un po&#8217; di tempo passato sul [manuale][1] sono riuscito a trovare la parte incriminata!

In pratica, in qualche modo, si è modificata la riga del php.ini relativa a `display_errors` che era impostata su &#8220;Off&#8221;. Portando il suo valore su &#8220;On&#8221;, ho ripristinato il funzionamento normale (ovvero per me PHP funziona quando mi mostra gli errori ah ah ah )

 [1]: http://www.php.net/manual/it/