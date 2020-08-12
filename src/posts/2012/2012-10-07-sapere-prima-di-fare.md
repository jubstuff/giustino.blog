---
title: Sapere prima di fare (sulla coincidenza)
author: Giustino Borzacchiello
type: post
date: 2012-10-07T09:56:22+00:00
permalink: /sapere-prima-di-fare/
dsq_thread_id:
  - 874875032
categories:
  - Coding Horror
  - JavaScript

  - Date
  - getDate
  - getDay
  - JavaScript

---
Ecco un altro episodio che mi ha insegnato come sia necessario **sapere prima di fare.**

Il compito che mi era stato assegnato era semplicissimo: mostrare una data formattata in JavaScript, tipo `7 Ottobre 2012`. Che difficoltà poteva esserci?

<!--more-->

JavaScript fornisce l&#8217;oggetto `Date` che ha molti metodi e, scorrendo nella documentazione, **senza leggere il compito di ogni metodo** ho selezionato:

  * Date.getDay(): per il giorno del mese.
  * Date.getMonth(): per il mese.
  * Date.getFullYear(): per l&#8217;anno.

Creo il mio script. Dato che mi avevano richiesto che il mese fosse visualizzato con il nome in Italiano, ho creato un array con tutti i vari nomi:

<pre class="prettyprint">var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 
  'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 
  'Dicembre'];
var date = new Date();
console.log(date.getDay() + ' ' + mesi[date.getMonth()] + ' ' + 
  date.getFullYear());
</pre>

Questo succedeva _il 5 Ottobre 2012_, che per la cronaca era un **Venerdì**. Guardo l&#8217;output: `5 Ottobre 2012`. Perfetto, tutto funziona.

Il giorno dopo **Sabato** 6 Ottobre 2012 faccio un controllo: `6 Ottobre 2012`: tutto OK.

Oggi, **Domenica** 7 Ottobre 2012, ricevo un IM, in cui mi avvertono che la data in output è _strana_. Corro a controllare: `0 Ottobre 2012`.

## Cos&#8217;era successo?

Non riuscivo a capire cosa potesse significare quel valore. Quand&#8217;è così, vado sempre alle basi, quindi in questo caso, alla [documentazione][1]. Come era prevedibile, l&#8217;errore era umano.

La mia ignoranza mi aveva portato a credere che `Date.getDay()` restituisse il giorno del mese. Invece il suo compito è restituire il giorno della settimana, da 0 a 6, 0 essendo Domenica, e 6 essendo Sabato. La funzione corretta per recuperare il giorno del mese è `Date.getDate()`.

## Come hai potuto sbagliare?

In questo caso l&#8217;ignoranza è andata di pari passo alla più totale coincidenza di eventi: lo script è stato creato Venerdì 5 Ottobre 2012, e `getDay()` ha restituito 5, riferito a Venerdì, mentre io ho letto 5 riferito al giorno del mese. Lo stesso è successo Sabato 6 Ottobre 2012. La Domenica, ovviamente, si è presentato il problema. Pura coincidenza.

## Cosa hai imparato?

**Studiare**. Bisogna studiare, e mai affidarsi alle sensazioni perché quello che può essere ovvio per una persona non lo è per un&#8217;altra. Io probabilmente avrei chiamato le funzioni `getDayOfWeek` e `getDayOfMonth`, ma io sono io.

Inoltre, questo mi ha confermato che è vero che tutti i problemi si verificano sempre di Domenica!

 [1]: https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date