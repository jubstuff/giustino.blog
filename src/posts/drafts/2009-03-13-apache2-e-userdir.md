---
title: Apache2 e UserDir
author: Giustino Borzacchiello
type: post
date: 2009-03-13T11:38:51+00:00
draft: true

dsq_thread_id:
  - 762372079
categories:
  - Linux

  - Linux

---
Sono stato tutto ieri sera a cercare di far riconoscere come DocumentRoot di Apache una cartella della mia home. Ma era tutto inutile, ho letto 200000 post di vari forum e nulla, ho scavato nella documentazione di Apache e nulla&#8230;alla fine ho constatato che le persone &#8220;tecniche&#8221; godono nel non essere chiari.<!--more-->

  
In ogni caso per ricordarcelo: (linux mint per essere precisi):  
&#8211; apache ha la cartella di configurazione in /etc/apache2  
&#8211; apache ha bisogno di avere i link simbolici ai moduli nella cartella mods-enabled  
&#8211; i moduli sono presenti nella cartella mods-available  
&#8211; per creare un link simbolico basta dare, dalla cartella mods-enabled &#8220;ln -s ../mods-available/nomeDelModulo.load&#8221;  
&#8211; nel mio caso, dato che non mi riconosceva il comando UserDir ho dovuto dare da terminale &#8220;ln -s ../mods-available/userdir.load&#8221;