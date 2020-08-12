---
title: Fixing ActiveRecord::NoDatabaseError in Rails
author: Giustino Borzacchiello
type: post
date: 2016-09-01T18:03:51+00:00
permalink: /fix-active-record-error-rails/
categories:
  - Ruby

  - Rails

---
If you get this error:

    rails aborted!
    ActiveRecord::NoDatabaseError: FATAL:  database "students_development" does not exist
    
    

while trying to run `rails db:migrate` or create a scaffold, remember to run:

    $ rails db:create
    

before going on