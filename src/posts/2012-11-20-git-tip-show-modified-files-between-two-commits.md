---
title: 'Git Tip: show modified files between two commits'
author: Giustino Borzacchiello
type: post
date: 2012-11-20T12:33:46+00:00
permalink: /git-tip-show-modified-files-between-two-commits/
dsq_thread_id:
  - 935991374
categories:
  - Git

  - diff
  - git

---
If you need the list of files that were modified between a commit and the latest one you can use [git diff][1] with the `--name-only` parameter:

<pre class="prettyprint">git diff --name-only 360c150 HEAD
</pre>

You can use the same command to show the modified files between two commits. Just replace `HEAD` with a commit hash:

<pre class="prettyprint">git diff --name-only &lt;commit1&gt; &lt;commit2&gt;
</pre>

 [1]: http://git-scm.com/docs/git-diff