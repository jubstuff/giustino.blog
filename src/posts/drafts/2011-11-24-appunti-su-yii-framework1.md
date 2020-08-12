---
title: Appunti su Yii Framework/1
author: Giustino Borzacchiello
type: post
date: 2011-11-24T23:06:47+00:00
draft: true

dsq_thread_id:
  - 762283978
categories:
  - Thoughts

  - Appunti
  - PHP
  - Yii Framework

---
Ogni tanto mi piace cominciare a studiare qualcosa di nuovo. Tempo fa decisi di studiare [Yii Framework][1] ma una serie di eventi mi impedì di cominciare. Oggi ho deciso di riprendere.

Questi sono una serie di appunti sconclusionati che ho preso in questa prima giornata di studio. Sicuramente ci sono altre cose che ho imparato e che sono troppo pigro per scrivere, ma cercherò di tenere una lista abbastanza aggiornata.

## Controllare i requisiti per Yii

Una volta scaricato l&#8217;archivio, basta visitare `http://host/path/di/Yii/requirements/index.php` per avere una panoramica dettagliata sul supporto a Yii da parte del nostro server.

## Creare un&#8217;applicazione

Per creare un&#8217;applicazione è possibile utilizzare il comando <kbd>yiic</kbd>:

<pre class="prettyprint">[justb@dellill YiiApps]$ yiic webapp demoApp
Create a Web application under '/home/justb/public_html/YiiApps/demoApp'? [Yes|No] y
</pre>

## Creare un link ad una pagina

Per creare un link ad una pagina, invece di scriverlo staticamente, è possibile sfruttare `Yii CHtml`:

<pre class="prettyprint">&lt;?php echo CHtml::link("TestoLink", array('controller/azione')); ?&gt;
</pre>

## Importare una classe

Yii fornisce una valida alternativa ai metodi `include/require`: `Yii:import`:

<pre class="prettyprint">Yii::import('application.controllers.MioNomeController');
</pre>

`Yii::import` è più efficiente degli altri metodi, in quanto non include il file finché non ne esiste un riferimento. Come input accetta una stringa che rappresenta il path della classe da includere (`application` è mappato sulla cartella `protected`)

## Test

I test unitari vanno collocati nella directory `demoApp/protected/tests/unit/`. Devono essere delle classi che estendono `CTestCase`:

<pre class="prettyprint">&lt;?php
class ProvaTest extends CTestCase
{
  ...
}
</pre>

Se la classe da testare effettua operazioni con il database, allora estende la classe `CDbTestCase`:

<pre class="prettyprint">class DbRelatedTest extends CDbTestCase
{
  ...
}
</pre>

## Accedere al database

La connessione al database è specificata come &#8216;component&#8217; di Yii: in questo modo è possibile accedere a tale risorsa da qualsiasi classe tramite `Yii::app()->db`

<p class="aligncenter">
  <img src="https://i2.wp.com/giustino.blog/wp-content/uploads/2011/11/yii-300x64.png?resize=300%2C64" alt="Yii framework logo" title="Yii framework logo" width="300" height="64" class="size-medium wp-image-609" data-recalc-dims="1" />
</p>

 [1]: http://www.yiiframework.com