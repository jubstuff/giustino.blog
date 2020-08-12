---
title: Invocazione dinamica di metodi in JavaScript
author: Giustino Borzacchiello
type: post
date: 2011-10-13T00:00:20+00:00
draft: true

dsq_thread_id:
  - 762373595
categories:
  - JavaScript

  - Invocazione dinamica
  - JavaScript
  - Metodi

---
Spesso scrivendo codice in JavaScript capita di dover richiamare un determinato  
metodo a seconda del contesto. Un primo approccio potrebbe essere il seguente:

<pre class="prettyprint">if (condition) {
  obj.method1(arg1, arg2);
} else {
  obj.method2(arg1, arg2);
}
</pre>

Altrettanto spesso, però, capita di dover generare dinamicamente il nome del  
metodo da invocare, ma non è possibile farlo utilizzando la _dot-notation_:

<pre class="prettyprint">//Errore
var obj = new Object,
    nomeMetodo = "method1"; //simulazione della generazione 
                            //dinamica del nome

obj.method1 = function() { 
    console.log("Invocato method1"); 
}

obj.nomeMetodo();
/* TypeError: o.nomeMetodo is not a function
   o.nomeMetodo() 
 */
</pre>

JavaScript però fornisce anche una sintassi alternativa per l&#8217;invocazione dei  
metodi, la _brackets-notation_ che, se avete programmato almeno una volta negli  
ultimi 50 anni, avrete sicuramente utilizzato per accedere agli elementi di un  
Array:

<pre class="prettyprint">// brackets operator
var arr = [],
    obj = new Object,
    nomeMetodo = "method1";


obj.method1 = function() { 
    console.log("Invocato method1"); 
}

arr.push("zero");
arr.push("uno");
// operatore [] su Array
console.log(arr[1]) //"uno"

//operatore [] su Object
console.log(obj[nomeMetodo]) //"Invocato method1"

</pre>

Gli utilizzi pratici di questa tecnica sono innumerevoli, soprattutto per  
scrivere codice cross-browser. Un esempio.

Tutti i moderni browser supportano gli eventi del DOM Level 2, mentre alcune  
versioni precedenti di IE avevano una sintassi diversa, e browser ancora più  
vecchi supportavano solo gli eventi del DOM Level 0. Quindi possiamo scrivere  
una funzione che astrae queste differenze:

<pre class="prettyprint">function addListener(element, type, handler) {
    if( element.addEventListener ) { //DOM Level 2 events
        element.addEventListener(type, handler, false);
    } else if ( element.attachEvent ) { // IE &lt; 9
        element.attachEvent("on" + type, handler);
    } else { // Old browser: Level 0!
        element["on" + type] = handler;
    }
}
</pre>

Utilizzando la _capability detection_ :

  * se gli eventi DOM Level 2 sono supportati, li utilizziamo in fase di  
    bubbling,
  * se si tratta di una versione di IE precedente alla 9, utilizziamo la  
    sintassi proprietaria,
  * se invece siamo in presenza di un vecchio browser, utilizziamo gli eventi  
    DOM Level 0.

In quest'ultimo caso, dato che l'event handler è considerato proprio un metodo associato  
all'oggetto, possiamo utilizzare l'operatore `[]` per creare dinamicamente il  
nome del metodo da richiamare, a seconda del tipo dell'evento (es. "click"  
diventa "onclick").