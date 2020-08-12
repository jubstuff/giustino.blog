---
title: Cancellare tutte le cartelle .svn da una directory
author: Giustino Borzacchiello
type: post
date: 2012-07-09T23:00:57+00:00
draft: true

dsq_thread_id:
  - 759467391
categories:
  - Thoughts

  - find
  - git
  - rm
  - svn

---
Per la serie &#8220;I nostri potenti mezzi&#8221;, mi hanno passato un file .zip contenente un progetto in PHP. Oltre alle varie cartelle dei vari IDE dei precedenti sviluppatori che si sono avventurati in questo codice, mi sono state lasciate in eredità tutte le cartelle `.svn` contenenti i metadati per Subversion.

Dato che io preferisco utilizzare git per il controllo di versione del codice, queste cartelle sono un inutile retaggio del passato, da eliminare.

A differenza di git, però, che conserva tutti i dati in un&#8217;unica cartella `.git` nella root del progetto, subversion crea una cartella `.svn` in ogni sottodirectory del progetto in questione, complicandone la rimozione.

Fortunatamente ci vengono in soccorso i tool UNIX, in questo caso il potentissimo `find`:

<pre class="prettyprint">$ find . -name ".svn" -type d -exec rm -rf {} ;
</pre>

Lanciando questo comando nella root del progetto, perderemo ogni traccia delle directory `.svn` e saremo pronti per un:

<pre class="prettyprint">$ git init .
</pre>

## Aggiornamento

Come ha scritto Stefano nei commenti, dalla versione 1.7 in poi Subversion ha centralizzato la raccolta dei metadati in un&#8217;unica cartella `.svn`, come si può leggere nelle release notes: [Centralized metadata storage][1].

 [1]: http://subversion.apache.org/docs/release-notes/1.7.html#single-db