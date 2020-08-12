---
title: Benchmarking in Ruby
author: Giustino Borzacchiello
type: post
date: 2011-04-05T13:41:59+00:00
draft: true

categories:
  - Thoughts

  - Algoritmi
  - Benchmarking
  - Ruby

---
Dato che l&#8217;esame di Algoritmi mi sembrava troppo teorico, ho deciso di implementare tutti i vari algoritmi che studierò in Ruby (così almeno faccio due cose buone).

Si è posto subito il problema del Benchmarking per misurare empiricamente il tempo impiegato dai vari algoritmi per la risoluzione e per il successivo confronto dei risultati con l&#8217;analisi teorica.  
<!--more-->

  
Ruby contiene il [modulo Benchmark][1] che ci consente di effettuare proprio queste analisi.

Innanzitutto bisogna includere il modulo nel nostro script:

<pre class="prettyprint">require "benchmark"
</pre>

In questo modo è possibile utilizzare il metodo bm():

<pre class="prettyprint">Benchmark.bm(20) do |bench|
    b = (0...10000).map { rand } #genero un elenco di numeri random
    bench.report("Diecimila elementi") { InsertionSort(b) } 
end
</pre>

che produrrà come output:

<pre class="prettyprint">user     system      total        real
Diecimila elementi    9.390000   0.010000   9.400000 (  9.385660)
</pre>

Al metodo bm() passiamo come parametro il numero di spazi in testa per ogni colonna, e poi nel blocco utilizziamo il metodo report per generare il resoconto dell&#8217;esecuzione. Come parametro opzionale è stata passata un&#8217;etichetta che caratterizzerà il report.

Pensando che stamattina non sapevo nemmeno dell&#8217;esistenza di questo modulo, e che adesso il mio pc sta facendo test su test, sembra un bel traguardo, no? 😉

 [1]: http://ruby-doc.org/stdlib/libdoc/benchmark/rdoc/index.html