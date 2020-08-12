---
title: Caratteri accentati in file di testo in Vim
author: Giustino Borzacchiello
type: post
date: 2011-09-29T10:35:40+00:00
draft: true

dsq_thread_id:
  - 790835446
categories:
  - Thoughts

  - Caratteri accentati
  - UTF-8
  - Vim

---
Capita a volte di scrivere dei file di testo e poi visualizzarli in un browser. Dato che l&#8217;Italiano sfrutta molto le lettere accentate ed i browser non hanno come encoding di default UTF-8 escono spesso artefatti tipo `Ã¨Ã²Ã.`  
Per ovviare a questo problema si può:

  * Impostare l&#8217;header HTTP `Content-Type: text/html; charset=UTF-8` come encoding
  * Se si tratta di un file HTML inserire un meta-tag:&nbsp;`<meta http-equiv="Content-Type" content="text/html;&nbsp;`
  * Inserire all&#8217;inizio del file un BOM (Codepoint U+FEFF). Con Vim è possibile inserirlo nel buffer corrente tramite il comando `:set bomb on`