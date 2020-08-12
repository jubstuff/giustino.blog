---
title: Multiple Sum with different conditions in MySQL
author: Giustino Borzacchiello
type: post
date: 2012-12-17T08:07:25+00:00
permalink: /multiple-sum-with-different-conditions-in-mysql/
dsq_thread_id:
  - 978021756
categories:
  - SQL

  - English
  - MySQL
  - Sum

---
Today I was working on my last project that involves some statistics on data. I had a table like this:

<figure id="attachment_864" aria-describedby="caption-attachment-864" style="width: 592px" class="wp-caption aligncenter"><img src="/wp-content/uploads/2012/12/tabella-1.png" alt="sample table" title="table" width="592" height="187" class="size-full wp-image-864" /><figcaption id="caption-attachment-864" class="wp-caption-text">][1][1] My table, with time and data fields.</figcaption></figure>

I needed the daily, monthly and yearly sum of the `value` field. The simplest approach was to have three different queries to retrieve the needed values:

<pre class="prettyprint">--day
SELECT SUM(value) 
FROM table 
WHERE DATE(time)=CURDATE();
-- month
SELECT SUM(value) 
FROM table 
WHERE MONTH(time)=MONTH(CURDATE()) AND YEAR(time)=YEAR(CURDATE());
-- year
SELECT SUM(value) 
FROM table 
WHERE YEAR(time)=YEAR(CURDATE());
</pre>

But I wasn&#8217;t satisfied. I wanted to have all three values using only one query. So I searched for this issue and this is the resulting query:

<pre class="prettyprint">SELECT 
  SUM(CASE WHEN DATE(time)=CURDATE() 
    THEN value 
    ELSE 0 end) AS value_day,
  SUM(CASE WHEN MONTH(time)=MONTH(CURDATE()) AND YEAR(time)=YEAR(CURDATE()) 
    THEN value 
    ELSE 0 end) AS value_month,
  SUM(CASE WHEN YEAR(time)=YEAR(CURDATE()) 
    THEN value 
    ELSE 0 end) AS value_year
FROM table
</pre>

Using the CASE construct, we increment independently the three values so that each row that satisfies the condition gets summed up.

 [1]: /wp-content/uploads/2012/12/tabella-1.png