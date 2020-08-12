---
title: Sort an array by object attribute in PHP
author: Giustino Borzacchiello
type: post
date: 2017-02-06T20:39:32+00:00
permalink: /sort-an-array-by-object-attribute-in-php/
classic-editor-remember:
  - classic-editor
categories:
  - PHP

---
One of those simple things that I keep forgetting.

Suppose you have to sort&nbsp;a set of PHP objects, based on an attribute.

To do this, you can implement the `__toString` method and use the `SORT_STRING` flag in the `sort` function:

<pre><code class="language-php">&lt;?php

class Car {
    private $_maker;

    public function __construct( $maker ) {
        $this-&gt;maker = $maker;
    }


    public function __toString() {
        return $this-&gt;maker;
    }
}

$car1 = new Car( 'BMW' );
$car2 = new Car( 'Alfa Romeo' );
$car3 = new Car( 'Volvo' );

$cars   = [];
$cars[] = $car1;
$cars[] = $car2;
$cars[] = $car3;

// sort the array
sort( $cars, SORT_STRING );

var_dump( $cars );
</code></pre>

This will result in:

    /*
    ==RESULT== 
    array(3) {
      [0]=>
      object(Car)#2 (2) {
        ["_maker":"Car":private]=>
        NULL
        ["maker"]=>
        string(10) "Alfa Romeo"
      }
      [1]=>
      object(Car)#1 (2) {
        ["_maker":"Car":private]=>
        NULL
        ["maker"]=>
        string(3) "BMW"
      }
      [2]=>
      object(Car)#3 (2) {
        ["_maker":"Car":private]=>
        NULL
        ["maker"]=>
        string(5) "Volvo"
      }
    }
     */