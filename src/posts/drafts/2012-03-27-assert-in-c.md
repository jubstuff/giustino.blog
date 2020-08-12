---
title: Assert in C
author: Giustino Borzacchiello
type: post
date: 2012-03-27T09:00:12+00:00
draft: true

dsq_thread_id:
  - 821645464
categories:
  - C

  - assert
  - C
  - preprocessore

---
Ultimamente sto programmando un po&#8217; di più in C per un progetto universitario di cui parlerò in futuro.  
Una funzionalità che sto sfruttando per assicurarmi che siano sempre verificate le precondizioni all&#8217;inizio di una funzione sono le `assert` (o, se preferite, le asserzioni).

## Che cosa sono

Le asserzioni sono dei semplici predicati che indicano una condizione che deve essere verificata in un certo punto del programma. Quindi qualsiasi test che ritorna un valore booleano può essere utilizzato come argomento per una asserzione.

## Esempio

Ad esempio, se volessi che una funzione accetti solo numeri positivi potrei scrivere:

<pre class="prettyprint">/* @file assert.c */
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
#include &lt;assert.h&gt;

int func(int x)
{
    assert(x > 0);
    return x;
}

int main(void)
{
    int i = 0;
    printf("Numero: %dn", func(i));
    return 0;
}    
</pre>

Eseguendo questo programma otterrei:

<pre class="prettyprint">[justb@dellill C]$ gcc -Wall assert.c -o assert.out && ./assert.out 
assert.out: assert.c:8: func: Assertion `x > 0' failed.
Annullato
</pre>

L&#8217;esecuzione è stata annullata, ottenendo informazioni utili su cosa è andato storto, ma soprattutto **dove** è andato storto.

## In produzione

Chiaramente la _bruta interruzione_ di un programma non è sempre un comportamento accettabile. Secondo me l&#8217;uso delle asserzioni è molto utile durante lo sviluppo di un&#8217;applicazione, ma non può sostituire una robusta opera di _error checking_.  
Inoltre, per applicazioni di una certa dimensione, l&#8217;aggiunta di molte asserzioni può causare un calo delle prestazioni, dovuto ai molti controlli aggiuntivi.

Così, per ottenere il meglio dei due approcci, è possibile indicare al preprocessore di ignorare le asserzioni nella build di produzione, passando il flag `NDEBUG`:

<pre class="prettyprint">[justb@dellill C]$ gcc -Wall -DNDEBUG assert.c -o assert.out && ./assert.out 
Numero: 0
</pre>

In questo modo non vi sarà nessun overhead nel programma finale dovuto alle varie assert.