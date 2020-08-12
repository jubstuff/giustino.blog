---
title: return tag for methods returning array of objects
author: Giustino Borzacchiello
type: post
date: 2017-02-03T21:49:01+00:00
permalink: /return-tag-for-methods-returning-array-of-objects/
classic-editor-remember:
  - classic-editor
categories:
  - PHP

---
I always wondered how to write the `@return` tag for methods that return an array of objects. Today I discovered that you have to write:

<pre><code class="language-php">&lt;?php

class AnotherClass {

  /**
   * @return MyClass[]
   */
  public function getClasses() {
    // logic here
    return $array_of_classes;
  }
}
</code></pre>

You can read [the relevant docs here][1].

 [1]: https://phpdoc.org/docs/latest/references/phpdoc/types.html#arrays