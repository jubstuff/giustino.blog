---
title: Processare un URL con PHP
author: Giustino Borzacchiello
type: post
date: 2011-12-08T22:08:08+00:00
draft: true
permalink: /?p=616
dsq_thread_id:
  - 824818768
categories:
  - PHP

  - Explode
  - PHP
  - Processing
  - URL

---
### NOTA

Come al solito l&#8217;ignoranza (la mia) aguzza l&#8217;ingegno: in ogni caso penso sia meglio utilizzare la funzione di libreria [parse_url][1]

<del datetime="2012-03-26T21:38:14+00:00">Oggi facevo un po&#8217; di prove con il PHP sdk di Facebook. Mi sono ritrovato a dover recuperare le varie parti della query string di un URL per poterle poi utilizzare nel codice. In pratica mi ritrovavo con un URL tipo:</del>

<pre class="prettyprint">https://graph.facebook.com/me/friends?access_token=AAACrnu&limit=20&method=GET&offset=20&__after_id=719091958 
</pre>

<del datetime="2012-03-26T21:38:50+00:00">e avevo bisogno di un array di questo tipo:</del>

<pre class="prettyprint">array(5) {
  ["access_token"]=>
  string(7) "AAACrnu"
  ["limit"]=>
  string(2) "20"
  ["method"]=>
  string(3) "GET"
  ["offset"]=>
  string(2) "20"
  ["__after_id"]=>
  string(9) "719091958"
}
</pre>

<del datetime="2012-03-26T21:38:50+00:00">Ho scritto così questa semplice funzione:</del>

<pre class="prettyprint">/**
 * Returns an array with url query parts
 * @author Giustino Borzacchiello 
 *
 * From this:
 * http://domain.com?a=foo&b=bar&c=ciccio
 * to this:
 * array(3) {
 *   ["a"]=>
 *   string(3) "foo"
 *   ["b"]=>
 *   string(3) "bar"
 *   ["c"]=>
 *   string(6) "ciccio"
 * }
 *
 * @param $url Url from which get the query parts
 * 
 * */
function getUrlQueryParts($url)
{
    # Recupera la query string dell'url
    $query = parse_url($url, PHP_URL_QUERY);
    # Suddividi la stringa in corrispondenza delle &
    $queryPieces = explode('&', $query);
    # Prepara l'array da restituire
    $result = array();
    foreach($queryPieces as $query)
    {
        # Separa ogni elemento in corrispondenza del simbolo =
        # La funzione explode restituisce un array di due elementi
        $query = explode('=', $query);
        # Recupera chiave e valore
        $key = $query[0];
        $val = $query[1];
        # Salva chiave e valore nell'array risultato
        $result[$key] = urldecode($val);

    }
    return $result;
}          
</pre>

<del datetime="2012-03-26T21:38:50+00:00">Spero che sia utile! 🙂</del>

 [1]: http://it.php.net/manual/en/function.parse-url.php