---
title: How to update a junction table?
author: Giustino Borzacchiello
type: post
date: 2015-02-02T10:00:03+00:00
permalink: /how-to-update-a-junction-table/
featured_image: /wp-content/uploads/2015/02/chains.jpg
categories:
  - SQL

  - junction table
  - many-to-many

---
Frameworks are well and good, but sometimes they shield us from simple concepts that we, as developers, should know. Let me tell you a story about this theme, and what happened.  
<!--more-->

I was handed a really simple task: I had to create two entities (Store and Brand). A Store could have had many brands attached, so it was a simple [many-to-many relationship][1], with a [junction table][2]. Something like:

<figure id="attachment_945" aria-describedby="caption-attachment-945" style="width: 546px" class="wp-caption aligncenter">[<img src="https://i1.wp.com/v1.giustino.blog/wp-content/uploads/2015/02/stores_and_brands.png?resize=546%2C115" alt="Stores and brands database" width="546" height="115" class="size-full wp-image-945" srcset="https://i1.wp.com/v1.giustino.blog/wp-content/uploads/2015/02/stores_and_brands.png?w=546&ssl=1 546w, https://i1.wp.com/v1.giustino.blog/wp-content/uploads/2015/02/stores_and_brands.png?resize=300%2C63&ssl=1 300w" sizes="(max-width: 546px) 100vw, 546px" data-recalc-dims="1" />][3]<figcaption id="caption-attachment-945" class="wp-caption-text">Stores and brands database</figcaption></figure>

<pre><code class="sql">create table stores(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(255) NOT NULL
) DEFAULT CHARACTER SET utf8, ENGINE = INNODB;

create table brands(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(255) NOT NULL
) DEFAULT CHARACTER SET utf8, ENGINE = INNODB;

create table store_brand (
  store_id INT ,
  brand_id INT,
  PRIMARY KEY (store_id, brand_id),
  FOREIGN KEY store_fk (store_id) REFERENCES stores(id) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY brand_fk (brand_id) REFERENCES brands(id) ON UPDATE CASCADE ON DELETE CASCADE
) DEFAULT CHARACTER SET utf8, ENGINE = INNODB;

INSERT INTO brands(name) VALUES
('Scitenoa'),
('Drirathiel'),
('Trelod'),
('Jiofrax'),
('Chacaka'),

INSERT INTO stores(name) VALUES
('Castrealm');

INSERT INTO store_brand VALUES (1,1), (1,2), (1,3);
</code></pre>

The brands were fixed, so I had to create a simple CRUD interface only for the stores. Insertion and deletion were a breeze to code. When I came to write the code for the Update part, I stopped: _&#8220;How should I write it?&#8221;_

## The problem

When you update a many-to-many relation you could not call a simple `UPDATE` statement on the junction table, you have to:

  1. Insert all the newly associated entities,
  2. Remove all the entities that are no more part of the relation.

## Solution 1: Delete all the old tuples and insert

The first solution was very trivial: remove all the rows from the junction table related to a given store, and insert the new rows.

    DELETE FROM store_brand WHERE store_id=1;
    INSERT INTO store_brand VALUES (1,1), (1,4), (1,5);
    

This would have done well, but the fact that I was deleting and inserting a set of rows that could potentially differ only for one item was disturbing me. So I went on to search a new solution.

## Solution 2: insert only new tuples and drop the ones that were not inserted

I was looking for a way to insert only new rows: the [ignore][4] clause from MySQL was good for this. Then I had to drop all the rows that were not in the set of those just added. In code:

    INSERT IGNORE INTO store_brand VALUES (1,1), (1,2), (1,3);
    DELETE FROM store_brand WHERE brand_id NOT IN (1,2,3) AND store_id=1;
    

## Conclusion

So that&#8217;s was it! Sometimes is good to be looking at these low-level details, that often are hidden behind super-optimized libraries.

_<small>Cover image by <a href="http://www.flickr.com/photos/clearlyambiguous/113550578/">Scott Robinson</a></small>_

 [1]: http://en.wikipedia.org/wiki/Many-to-many_%28data_model%29
 [2]: http://en.wikipedia.org/wiki/Junction_table
 [3]: https://i1.wp.com/v1.giustino.blog/wp-content/uploads/2015/02/stores_and_brands.png
 [4]: http://dev.mysql.com/doc/refman/5.5/en/insert.html