---
title: Sostituire il testo in Vim
author: Giustino Borzacchiello
type: post
date: 2011-10-06T20:10:58+00:00
draft: true
permalink: /?p=520
dsq_thread_id:
  - 891278171
categories:
  - Thoughts

  - Search and Replace
  - Tips
  - Vim

---
Per sostituire una parola con un&#8217;altra in Vim, facendo in modo che l&#8217;editor chieda la conferma:

<pre class="prettyprint">:%s/vecchia_parola/nuova_parola/gc
</pre>

## Spiegazione comando

`:`
:   Entrare in modalità comando

`%`
:   Esegui questo comando su tutto il file

`s`
:   Abbreviazione per `:substitute`

`/vecchia_parola/`
:   Espressione regolare che specifica cosa cercare nel file

`/nuova_parola/`
:   Testo da inserire al posto di quello cercato

Flag `g`
:   Cambia ogni occorrenza, non solo la prima di ogni riga

Flag `c`
:   Chiedi conferma prima di ogni sostituzione