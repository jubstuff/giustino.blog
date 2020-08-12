---
title: Select the id that begins and ends with certain values
author: Giustino Borzacchiello
type: post
date: 2015-08-06T12:12:12+00:00
permalink: /id-begin-end-with-values/
categories:
  - Frontend

---
CSS selectors have gone a long way from their beginnings. Today you have multiple choices to select elements in the page.  
Today I needed to select all the elements with the id matching this regex:

`fixed_string_(.*)_digit`

But CSS doesn&#8217;t let regex. To do this, you can combine these two attribute selectors:  
`<br />
[id^=value] // Element with the id beginning with "value"<br />
[id$=value] // Element with the id ending with "value"<br />
`  
So we have:

<pre>div[id^=fixed_string_][id$=_digit] {
  color: red;
}</pre>

Source <https://css-tricks.com/attribute-selectors/>