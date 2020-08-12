---
title: 'Technical debt: cos’è?'
author: Giustino Borzacchiello
type: post
date: 2011-03-09T20:51:47+00:00
draft: true
permalink: /?p=705
dsq_thread_id:
  - 847065541
categories:
  - Thoughts

  - Deadline
  - Fowler
  - Progetti
  - Technical debt

---
Ho letto per la prima volta il termine _Technical debt_ leggendo il libro  
[97 Things Every Programmer Should Know][1], esattamente  
[nel primo intervento, di Seb Rose][2] 

Il _Technical debt_ è una metafora creata da [Ward Cunningham][3]. Martin  
Fowler, il [Linneo][4] dell&#8217;Informatica, [ne ha parlato][5] e lo ha anche catalogato in [diversi tipi][6].

> Immagina di dover aggiungere una funzionalità al tuo sistema. Ci sono due modi per farlo: uno è rapido,  
> ma confusionario. L&#8217;altro pulito, ma più lungo da mettere in opera. 

Contrarre il debito è come fare un patto al proprio progetto: &#8220;Per adesso metto questa pezza qui, prometto di  
ripararla appena possibile&#8221;.

Ovviamente, costruire sul &#8220;rattoppo&#8221; può essere rischioso, in quanto arrivato il momento di mettere le cose a  
posto, si può scoprire che su quel piccolo workaround si basano gli ultimi mesi di lavoro.

<figure id="attachment_706" aria-describedby="caption-attachment-706" style="width: 512px" class="wp-caption aligncenter">[<img src="https://i1.wp.com/giustino.blog/wp-content/uploads/2012/07/techDebtQuadrant.png?resize=512%2C384" alt="technical debt quadrant" title="Technical Debt quadrant" width="512" height="384" class="size-full wp-image-706" data-recalc-dims="1" />][7]<figcaption id="caption-attachment-706" class="wp-caption-text">Il quadrante del Technical debt, come descritto da Fowler</figcaption></figure>

Come accennato precedentemente, Fowler ne riconosce quattro tipi, basandosi su due classificazioni:

  * Deliberato vs Involontario
  * Prudente vs Avventato

Quali potrebbero essere gli scenari di ogni tipologia di _Technical debt_? Ecco più o meno come ce li  
descrive Fowler:

### Deliberato e Prudente

&#8220;Anche sapendo che quello che sto facendo mi costerà un po&#8217; in futuro, accetto di farlo per avere dei benefici a  
breve termine&#8221;

### Deliberato e Avventato

&#8220;So bene come andrebbero fatte le cose, ma adesso non posso permettermi di fare il carino.&#8221;

### Involontario e Avventato

&#8220;Design che? Come? Progettare? Io scrivo codice, quelle menate le lascio agli universitari.&#8221;

### Involontario e Prudente

&#8220;Anche se ho progettato accuratamente il mio sistema, solo dopo averlo terminato ho capito come veramente  
andassero fatte le cose.&#8221;

Per come la vedo io, sarebbe meglio non contrarre affatto nessun tipo di debito. Dato che riesco ad immaginare  
come questo sia impossibile, credo che &#8220;ripagarlo&#8221; il più presto possibile sia auspicabile, anche se questo  
dovesse significare cambiare i piani in corsa.

 [1]: http://oreilly.com/catalog/9780596809485/
 [2]: http://programmer.97things.oreilly.com/wiki/index.php/Act_with_Prudence
 [3]: http://c2.com/%7Eward/
 [4]: http://it.wikipedia.org/wiki/Linneo
 [5]: http://martinfowler.com/bliki/TechnicalDebt.html
 [6]: http://martinfowler.com/bliki/TechnicalDebtQuadrant.html
 [7]: https://i1.wp.com/giustino.blog/wp-content/uploads/2012/07/techDebtQuadrant.png