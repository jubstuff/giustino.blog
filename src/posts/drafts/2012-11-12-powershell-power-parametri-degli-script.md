---
title: Powershell power! – Parametri degli script
author: Giustino Borzacchiello
type: post
date: 2012-11-12T21:41:10+00:00
draft: true

dsq_thread_id:
  - 925163530
categories:
  - Thoughts

  - arguments
  - command-line
  - Parametri
  - powershell

---
Ok, devo ammettere che la gestione dei parametri di uno script Powershell non è proprio immediata.  
Questo è quanto sono riuscito ad apprendere oggi:

<pre class="prettyprint"># Questa istruzione va all'inizio dello script.
# Ogni parametro è separato dal successivo con una virgola
param( 
    $param1, #Un parametro opzionale
    $param2 = "valoreDefault", #Un parametro opzionale con un valore di default
    $requiredParam = $(throw "Parametro obbligatorio!!"), #lancia un'eccezione se non c'è
    $paramUser = $(Read-Host -prompt "Valore parametro?"), #chiede all'utente di inserire un valore
    )
</pre>