---
title: Disable pc speaker in Linux Mint Debian Edition after latest update
author: Giustino Borzacchiello
type: post
date: 2012-09-21T15:46:49+00:00
draft: true

dsq_thread_id:
  - 853451445
categories:
  - Linux

  - beep
  - Debian
  - disable
  - pcspkr

---
After the installation of the update pack I got the annoying pc speaker beeping on login/logout.  
I was sure to have added the `blacklist pcspkr` line in <kbd>/etc/modprobe.d/blacklist</kbd> and so it was.

So I went for a Google search and found [this page in the Debian wiki][1] which had the instructions to disable a kernel module.

So to disable a the speaker kernel module I had to:

  1. Create the file <kbd>/etc/modprobe.d/pcspkr.conf</kbd> containing `blacklist pcspkr`
  2. Run `depmod -ae` as root 
  3. Run `update-initramfs -u` as root (not with sudo)

Now my ears can live again! 🙂

 [1]: http://wiki.debian.org/KernelModuleBlacklisting "Kernel Module Blacklisting"