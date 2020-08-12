---
title: Creare un pdf da tante immagini in Linux
author: Giustino Borzacchiello
type: post
date: 2009-06-11T07:22:20+00:00
draft: true
permalink: /?p=254
syntaxhighlighter_encoded:
  - 1
dsq_thread_id:
  - 762373443
categories:
  - Linux

  - Immagini
  - Linux
  - Pdf

---
È interessante come, scelta una qualsiasi operazione da fare con immagini, la soluzione sia al 99% dei casi la stessa: ImageMagick.

Dovevo creare un pdf da una serie di immagini che terminavano con un numero crescente (HPIM3960.JPG, HPIM3961.JPG,ecc) appena uscite dalla fotocamera. Tutto quello che ho dovuto fare è stato:  
`convert -define pdf:use-trimbox=true *.JPG nome_file_a_scelta.pdf<br />
` 

e mi sono ritrovato con il mio bel pdf bello e pronto 🙂