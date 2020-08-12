---
title: WordPress, Netsons e il cambio server
author: Giustino Borzacchiello
type: post
date: 2008-11-21T22:12:22+00:00
permalink: /wordpress-netsons-e-il-cambio-server/
dsq_thread_id:
  - 845421325
categories:
  - Italiano
  - Pensieri

  - Blogging

---
Negli ultimi giorni Netsons ha avviato la migrazione di tutti gli account verso nuovi server, installando in tale occasione anche dei nuovi pannelli utente: Cpanel.  
Per accedere al nuovo pannello basta digitare l&#8217;indirizzo:

> http://nomeutente.netsons.org:2082

Che richiederà nome utente e password.  
La novità consiste nel fatto che Cpanel non riesce a gestire nomi utente più lunghi di otto caratteri, quindi se il nome utente era _cicciociccio_ adesso diventerà _ciccioci_. La password rimane invariata.  
Questo passaggio è tutto per il meglio, naturalmente, poichè i nuovi server sono molto più veloci dei precedenti, e il nuovo pannello, sebbene un po&#8217; più complesso, permette di gestire al meglio tutti gli account Netsons.  
Un inconveniente accessorio a questa situazione è stato che nella copia dei nuovi database non sono stati ricreati i vecchi utenti del database: quindi i blog come questo, basati su wordpress, restituivano, invece dei nostri &#8220;sfavillanti&#8221; siti, un criptico 

> Error establishing a database connection

Le operazioni che ho eseguito sono state le seguenti:

  1. Accedere al cpanel: http://nomeutente.netsons.org:2082
  2. Andare nella sezione &#8220;MySql Database&#8221;
  3. Nella sezione &#8220;Add new users&#8221; inserire &#8220;db&#8221; (senza virgolette**) come username, e la vecchia password nel campo password e cliccare su &#8220;Create User&#8221;
  4. Dopo che la pagina si è ricaricata, in basso, nella sezione &#8220;Add user to database&#8221; aggiungere l&#8217;utente appena creato (che sarà del tipo nomeutente_db) al database e assegnargli tutti i privilegi

Il tempo di ricaricare e dovrebbe funzionare di nuovo come al solito.

**L&#8217;username viene scelta così perchè lo staff di netsons ha modificato tutti i file di configurazione di Cms e piattaforme di blog, inserendo al posto dell&#8217;username: nomeUtenteNetsons_db