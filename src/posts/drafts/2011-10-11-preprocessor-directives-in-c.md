---
title: Preprocessor directives in C
author: Giustino Borzacchiello
type: post
date: 2011-10-11T18:23:23+00:00
draft: true

categories:
  - C

  - C
  - Env
  - Preprocessor

---
Il C è come il vino buono, più passa tempo, più si apprezza.  
Oggi ho imparato (solo oggi, purtroppo) ad usare le direttive al preprocessore.  
Ad esempio mi era utile definire se il codice dovesse essere compilato per debug oppure per produzione, e ho risolto in questo modo:

<pre class="prettyprint">/*
 * compile_directives.c
 *
 **/
#include &lt;stdio.h>

#ifdef DEV_ENV
#define DEBUG 1
#else
#define DEBUG 0
#endif

int main(){
  if(DEBUG) {
    printf("Development environmentn");
  } else {
    printf("Production environmentn");
  }
  return 0;
}   
</pre>

Compilando senza alcun flag aggiuntivo si ottiene:

<pre class="prettyprint">[justb@dellill]$ gcc -Wall compile_directives.c -o compile_directives.out
[justb@dellill]$ ./compile_directives.out 
Production environment
</pre>

Mentre aggiungendo il flag `-D DEV_ENV` dato che, come recita `man gcc`:

> -D name  
> Predefine name as a macro, with definition 1. 

<pre class="prettyprint">[justb@dellill]$ gcc -Wall -DDEV_ENV compile_directives.c -o compile_directives.out
[justb@dellill]$ ./compile_directives.out 
Development environment
</pre>

_Pretty neat, uh?_