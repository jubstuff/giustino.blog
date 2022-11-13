---
title: How to create drafts in Eleventy
type: post
date: 2020-01-04
permalink: /how-to-drafts-eleventy/
---

As I wrote in [my definitive guide][definitive-guide] doesn't impose you anything, so it doesn't have a default way to have drafts for your posts.

But having drafts it's useful, especially when the post takes a lot to write. Let's see how we can add them to our sites.

### Drafts in Eleventy: the idea

The idea is to add a `draft` key to the Front Matter of our posts, so that when we set that to `true` the post will be considered a draft.

Then we'll create a collection for all published posts, and use that to print a list.

### Let's write the code for adding drafts in 11ty

I'm assuming that you have your posts in the `src/posts` folder and a `.eleventy.js` file for your configuration. Open it and add this code:

```js
  const now = new Date();

  const publishedPosts = (post) => post.date <= now && !post.data.draft; // [1]

  eleventyConfig.addCollection("posts", (collection) => { // [2]
    return collection
        .getFilteredByGlob("./src/posts/*.md") // [3]
        .filter(publishedPosts); // [4]
  });
```

Let's go step by step.

In `[1]` we are defining a function, `publishedPosts` that takes a `post` argument and checks for two things:

1. if `post.date` is before `now`: so the post is not scheduled to be published in the future
2. if the post has a `draft` key in the front matter that's set to a truthy value

Then in `[2]` we create a `posts` collection, using the [`addCollection`][add-collection] method provided by Eleventy. This method accepts a `collection` API object as a parameter.

In `[3]` we fetch all markdown files in the `src/posts` folder, using the [`getFilteredByGlob`][filtered-glob] method, that allows us to use a the `*.md` to specify this group of files.

Finally in `[4]` we filter out all the posts that don't match the condition defined in the `publishedPosts` function, our drafts!

Now that we have our collection of published posts, we can now list them.

{% raw %}
```html
{%- set postslist = collections.posts | reverse -%}

{%- for post in postslist -%}
    <h3>
        <a href="{{ post.url | url }}">{{ post.data.title }}</a>
    </h3>
{%- endfor -%}
```
{% endraw %}

And that's it, drafts in Eleventy!


[definitive-guide]:/how-to-build-a-website-with-eleventy-and-deploy-it-on-netlify/
[add-collection]: https://www.11ty.dev/docs/collections/#collection-api-methods
[filtered-glob]: https://www.11ty.dev/docs/collections/#getfilteredbyglob(-glob-)