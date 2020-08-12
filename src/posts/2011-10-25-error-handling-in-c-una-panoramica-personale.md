---
title: 'Error handling in C: una panoramica personale'
author: Giustino Borzacchiello
type: post
date: 2011-10-25T18:57:43+00:00
permalink: /error-handling-in-c-una-panoramica-personale/
dsq_thread_id:
  - 762372233
categories:
  - C

  - C
  - Eccezioni
  - Error handling

---
Il C non fornisce un meccanismo standard per la gestione degli errori interno al linguaggio (come le eccezioni) quindi è compito del programmatore decidere come procedere.

Le prime volte che ho programmato in C, pensavo di risolvere la questione facilmente, semplicemente emulando le funzioni della libreria standard. Purtroppo mi sono dovuto scontrare con la dura realtà: le interfacce della libreria standard sono parecchio discordanti su come segnalare una situazione di errore.

Ad esempio `atoi` restituisce `` se non riesce a convertire la stringa passata in ingresso, il che è strano, perché `` è un elemento del dominio della funzione. Infatti il programma:

<pre class="prettyprint">//Esempio di output di atoi
//

#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

int main(void)
{
    const char uno[] = "uno";
    const char due[] = "2";
    const char zero[] = "0";

    int num1 = atoi(uno);
    int num2 = atoi(due);
    int num0 = atoi(zero);

    printf("atoi("uno") vale %dn", num1);
    printf("atoi("2") vale %dn", num2);
    printf("atoi("0") vale %dn", num0);

    return 0;
}

</pre>

produrrà il seguente output:

<pre class="prettyprint">[justb@dellill]$ ./atoi.out 

atoi("uno") vale 0
atoi("2") vale 2
atoi("0") vale 0

</pre>

Oppure le funzioni della famiglia `*alloc`, che restituiscono `NULL` in caso di errore ed un puntatore all&#8217;area di memoria allocata in caso di successo, oppure ancora `printf` che restituisce il numero di caratteri stampati in caso di successo ed un numero negativo in caso contrario.  
Insomma sembra che ogni funzione voglia dire la sua sull&#8217;argomento.

## Tabula rasa: una libreria da zero

Sviluppare una libreria da zero porta quindi alcuni vantaggi.  
Uno di questi è la possibilità di creare delle interfacce coerenti che consentano di **presumere** la posizione dei parametri e i valori di ritorno delle funzioni, tanto per fare un esempio, oppure di gestire coerentemente le situazioni d&#8217;errore.

Facendo alcune ricerche ho notato che esistono due orientamenti principali per la gestione degli errori in C:

  * Restituire lo stato dell&#8217;operazione, passando eventuali parametri di output via puntatore
  * Inserire in ogni metodo della libreria un parametro di output contenente lo stato dell&#8217;operazione

### Restituire lo stato dell&#8217;operazione

In questo modello, si creano interfacce che restituiscono sempre un booleano (oppure un intero), indicando l&#8217;esito dell&#8217;operazione, ad esempio:

<pre class="prettyprint">//Definizione di myFun
bool myFun(int InParam, int *OutParam);
</pre>

<pre class="prettyprint">//Implementazione di myFun
bool myFun( int InParam, int *OutParam )
{
    //Se non ci sono problemi il valore di ritorno sarà true
    bool status = true;

    if( condizioniFavorevoli ) {
        *OutParam = InParam * 2;
    } else {
        //ERRORE! Computazione fallita!
        status = false;
    }

    return status;
}                    
</pre>

La variabile `condizioniFavorevoli` rappresenta una possibile situazione di errore in cui potrebbe incorrere `myFun`, mentre il parametro di uscita `OutParam` è passato tramite puntatore.  
Un possibile utilizzo di questa funzione potrebbe essere il seguente:

<pre class="prettyprint">/* Test per myFun
 * Compilare con -DFALSE per simulare una condizione di errore
 */
#include &lt;stdio.h&gt;
#include &lt;stdbool.h&gt; //C99
#include &lt;stdlib.h&gt;

#ifndef FALSE
bool condizioniFavorevoli = true;
#else
bool condizioniFavorevoli = false;
#endif

//Definizione di myFun
...

int main(void)
{
    bool status;
    int result;

    status = myFun( 3, &result );
    if( !status ) {
        fprintf(stderr, "Errore in myFunn");
        exit(1);
    }

    printf("Il risultato di myFun: %dn", result);

    return 0;
}

//Implementazione di myFun
...
</pre>

Un possibile miglioramento sul tema, come consigliato in [questa risposta su StackOverflow][1] è quello di creare un tipo che contenga tutti i possibili errori utilizzati nella libreria, ed utilizzarlo al posto del semplice booleano, rendendo il codice più espressivo. Ad esempio:

<pre class="prettyprint">/*
 * errors.h
 *
 * */

#ifndef STATUS_ERROR
#define STATUS_ERROR

typedef enum 
{
    SUCCESS,
    E_DIVIDE_ZERO,
    E_PASS_ONE
} STATUS;

#endif

</pre>

<pre class="prettyprint">#include "errors.h"

STATUS print_divide_ten(int input)
{
    STATUS ReturnStatus;

    ReturnStatus = SUCCESS;

    if( input == 0 ) {
        ReturnStatus = E_DIVIDE_ZERO;
    } else if( input == 1 ) {
        ReturnStatus = E_PASS_ONE;
    } else {
        printf("Faccio la divisione %dn", 10 / input);
    }

    return ReturnStatus;
}

</pre>

L&#8217;utilizzo è praticamente lo stesso del caso precedente, solo che in questo caso è possibile decidere come comportarsi a seconda del valore di ritorno.  
Aggiungendo una funzione che trasponga il codice di errore in un messaggio significativo per l&#8217;utente si ha a disposizione una buona infrastruttura per la gestione degli errori:

<pre class="prettyprint">void explain_error_code( STATUS code )
{
    switch(code)
    {
        case SUCCESS:
            printf("Tutto okn");
            break;
        case E_DIVIDE_ZERO:
            printf("È stata tentata una divisione per zeron");
            break;
        case E_PASS_ONE:
            printf("Il valore uno non è accettato");
            break;
        default:
            printf("Status code sconosciuton");
            break;
    }
}

</pre>

### Stato passato tramite puntatore

L&#8217;altro modello di gestione degli errori consiste nell&#8217;utilizzare il valore di ritorno della funzione per un eventuale output, mentre lo stato è passato tramite un parametro della funzione.

La funzione di esempio si trasformerebbe nel modo seguente:

<pre class="prettyprint">int myFun2( int InParam, bool *Status )
{
    *Status = true;

    if( condizioniFavorevoli ) {
        return InParam * 2;
    } else {
        *Status = false;
    }

    return -1;
}
</pre>

Mentre un possibile esempio di utilizzo sarebbe:

<pre class="prettyprint">int main(void)
{
    bool status;
    int result;

    result = myFun2( 3, &status );
    if( !status ) {
        fprintf(stderr, "Errore in myFunn");
        exit(1);
    }

    printf("Il risultato di myFun: %dn", result);

    return 0;
}

</pre>

Chiaramente anche in questo caso è possibile utilizzare una `struct` contenente le diverse tipologie di stati di ritorno da utilizzare nel programma chiamante.

## Considerazioni

Ho letto commenti a favore e contro dell&#8217;uno e dell&#8217;altro metodo di gestione degli errori: c&#8217;è chi ritiene che l&#8217;output gestito tramite valore di ritorno sia più &#8220;naturale&#8221;, e chi invece sostiene che un eventuale situazione d&#8217;errore passi inosservata utilizzando un parametro di output.

Personalmente, ritengo che le due notazioni siano equivalenti in quanto, soprattutto in linguaggi come il C, il controllo degli errori debba essere ai limiti del maniacale.  
Piuttosto credo sia meglio concentrarsi sulla **coerenza delle interfacce**: ovvero scegliere un metodo di gestione degli errori per la libreria in sviluppo, e mantenere sempre lo stesso stile. In questo modo si facilita il lavoro all&#8217;utilizzatore finale della libreria, che può contare su un comportamento quantomeno prevedibile degli strumenti che ha a disposizione.

## Bonus: implementare le eccezioni in C

Facendo ricerche su questo argomento ho appreso che è possibile simulare la gestione delle eccezioni in C utilizzando la coppia di funzioni `setjmp/longjmp`.

Una prima implementazione è possibile trovarla sul [sito di Francesco Nidito][2], mentre per una trattazione più approfondita è possibile consultare [C Interfaces and Implementations: Techniques for Creating Reusable Software][3].

Per un altro esempio d&#8217;uso delle funzioni `setjmp/longjmp`, potete consultare [questo post][4] dell&#8217;amico Gian Paolo &#8220;JP&#8221; Ghilardi

 [1]: http://stackoverflow.com/questions/385975/error-handling-in-c-code/386001#386001
 [2]: http://www.di.unipi.it/~nids/docs/longjump_try_trow_catch.html
 [3]: http://www.amazon.com/Interfaces-Implementations-Techniques-Creating-Reusable/dp/0201498413
 [4]: http://rejex.wordpress.com/2011/10/24/un-piccolo-esempio-di-generatore-in-cpp/