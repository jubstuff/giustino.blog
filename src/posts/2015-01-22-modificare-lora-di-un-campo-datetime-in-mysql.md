---
title: Modificare l’ora di un campo DATETIME in MySQL
author: Giustino Borzacchiello
type: post
date: 2015-01-21T23:22:59+00:00
permalink: /modificare-lora-di-un-campo-datetime-in-mysql/
categories:
  - SQL

  - MySQL
  - SQL
  - Trigger

---
A volte capita di lavorare su codice che non è possibile modificare e quindi dover fare i salti mortali per ottenere quella che in realtà è una cosa semplicissima.  
Nello specifico avevo bisogno di modificare un campo `DATE` di una tabella in un campo `DATETIME`, dato che per l&#8217;applicazione era necessario memorizzare anche l&#8217;ora precisa dell&#8217;operazione.

I dati necessari all&#8217;inserimento del record vengono raccolti da un form e poi passati ad una procedura automatica che, processando il form, recupera e inserisce nel database.

La modifica di questa procedura (una bestia di 400 righe di codice con minimo 10 livelli condizionali innestati) era fuori discussione.

<pre class="prettyprint">DROP TRIGGER IF EXISTS `afterInsertOnMovimento`;
DELIMITER //
CREATE TRIGGER `afterInsertOnMovimento`
AFTER INSERT ON `movimento`
FOR EACH ROW
BEGIN
  UPDATE movimento SET `data`=CONCAT_WS(' ',DATE(`data`), CURTIME()) WHERE id=NEW.id;
END
//
DELIMITER ;
</pre>

<pre class="prettyprint">DROP TRIGGER IF EXISTS `beforeInsertOnMovimento`;
DELIMITER //
CREATE TRIGGER `beforeInsertOnMovimento`
BEFORE INSERT ON `movimento`
FOR EACH ROW
BEGIN
  SET NEW.data=CONCAT_WS(' ',DATE(`data`), CURTIME());
END
//
DELIMITER ;
</pre>

<pre class="prettyprint">DROP TRIGGER IF EXISTS `beforeInsertOnMovimento`;
DELIMITER //
CREATE TRIGGER `beforeInsertOnMovimento`
BEFORE INSERT ON `movimento`
FOR EACH ROW
BEGIN
  SET NEW.data=CONCAT_WS(' ',DATE(NEW.`data`), CURTIME());
END
//
DELIMITER ;
</pre>