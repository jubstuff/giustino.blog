---
title: Merge a branch from a different repository
author: Giustino Borzacchiello
type: post
date: 2017-01-07T15:25:27+00:00
permalink: /merge-branch-different-repository/
categories:
  - Git

---
I forked a repository from another one, simply taking the files and creating another repository. I was not interested in preserving history, as it would be a completely different project. As always happen, it was not the case. So today I had to merge a branch from the old repository in the new one. As you can understand, they have no common commits, so I had to pass the `--allow-unrelated-histories` flag to the `merge` command in `git`

    $ git merge new_remote/my_branch --allow-unrelated-histories