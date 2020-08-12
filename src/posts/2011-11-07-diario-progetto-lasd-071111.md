---
title: Diario Progetto LASD – 07/11/11
author: Giustino Borzacchiello
type: post
date: 2011-11-07T20:20:17+00:00
permalink: /diario-progetto-lasd-071111/
categories:
  - Thoughts

  - C
  - Grafi
  - Insieme vertici
  - LASD
  - Università

---
Oggi ho ripreso a lavorare al progetto per il corso di Laboratorio di Algoritmi e strutture dati.

Tra le cose che ho fatto:

  * Aggiunta possibilità di estrazione dalla testa della lista, nella libreria lista
  * Creata l&#8217;interfaccia per la gestione di un insieme di vertici
  * Iniziata la prima bozza per la versione dell&#8217;insieme di vertici basato su array

Per quanto riguarda l&#8217;ultimo punto ho creato una struct così formata:

<pre class="prettyprint">struct jvset_tag
{
    J_VERTEX **Vertices;   /**&lt; Array contenente i vertici */
    int NumActiveVertices; /**&lt; Numero di vertici inseriti nell'insieme */
    int NextFreeIndex;     /**&lt; Indice della prossima locazione libera */
    int Size;              /**&lt; Numero totale di vertici */
    J_LIST *FreeList;      /**&lt; Lista delle locazioni libere */
};
</pre>

Ho scritto anche le funzioni per la gestione dell'inizializzazione dell'insieme e per la relativa deallocazione.

Il prossimo passo è scrivere le funzioni di aggiunta e rimozione dei vertici.

Sto pensando però che forse dovrei tenere traccia anche delle locazioni dell'array occupate, e non solo di quelle libere, per permettere di effettuare la visita solo sui vertici effettivamente inseriti e non su tutta la dimensione dell'array.