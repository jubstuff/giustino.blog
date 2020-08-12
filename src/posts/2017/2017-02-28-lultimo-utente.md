---
title: Have you ever heard of concurrent operations?
author: Giustino Borzacchiello
type: post
date: 2017-02-28T14:50:21+00:00
permalink: /lultimo-utente/
dsq_thread_id:
  - 767348170
categories:
  - Coding Horror

  - last id
  - PHP
  - registrazione

---
While reading some code in a legacy codebase: this should fetch the _last_ user

    $user = Userlib::createnew_user('0', $_POST["str_Username"], $_POST["str_Password"], 
      # neverending params list);
    
    $user_id = Userlib::list_user(" 1=1 ORDER BY id_user DESC LIMIT 1 "); # OMG