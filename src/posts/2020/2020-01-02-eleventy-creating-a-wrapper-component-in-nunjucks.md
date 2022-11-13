---
title: 'Eleventy: React/Vue-like components in nunjucks with macros'
author: Giustino Borzacchiello
type: post
date: 2020-01-02
permalink: /eleventy-creating-a-wrapper-component-in-nunjucks/
classic-editor-remember:
  - block-editor
categories:
  - Dev Stuff

---
I&#8217;m experimenting a lot with [Eleventy][1] lately, and with [nunjucks][2], since it&#8217;s one of the supported template engines.

Today I wanted to create a reusable container macro to avoid repeating the same wrapper over and over. I first tried with a macro like this:

```
{% raw %}
{% macro section(items = &#91;]) %}
    &lt;section class="my-section">
            {%- for item in items -%}
                {{ item | safe }}
            {%- endfor -%}
    &lt;/section>
{% endmacro %}
{% endraw %}
```

It worked. But the downside was that I had to write the HTML in strings. Ugh!

```
{% raw %}
c.section(&#91;
      '&lt;p>My first paragraph&lt;/p>',
      '&lt;p>My second paragraph&lt;/p>'
    ])
{% endraw %}
```

So I started reading the official documentation and stumbled upon [the call tag][3]. It&#8217;s not super-intuitive, but it was exactly what I was looking for. 

It allows you to wrap a macro call around some content, so that it&#8217;s passed to the macro body. As always an example is worth a thousand words. We change the section definition as such:

```
{% raw %}
{% macro section() %}
    &lt;section class="my-section">
        {{ caller() }} {# This is where the content will be placed #}
    &lt;/section>
{% endmacro %}
{% endraw %}
```

And we can call it like this:

```
{% raw %}
{% call c.section() -%}
  &lt;p>My first paragraph&lt;/p>
  &lt;p>My second paragraph&lt;/p>
{%- endcall %}
{% endraw %}
```

Much cleaner, and we can also customize the section by passing in some arguments. But this will be the topic of another post.

 [1]: https://www.11ty.dev/
 [2]: https://mozilla.github.io/nunjucks/
 [3]: https://mozilla.github.io/nunjucks/templating.html#call