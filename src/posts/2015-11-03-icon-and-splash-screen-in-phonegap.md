---
title: Icon and Splash screen in Phonegap
author: Giustino Borzacchiello
type: post
date: 2015-11-02T23:13:20+00:00
permalink: /icon-and-splash-screen-in-phonegap/
classic-editor-remember:
  - classic-editor
categories:
  - Dev Stuff

  - icons
  - phonegap
  - splash screen

---
I&#8217;ve been working with Phonegap lately.. This is a note to my future self about icons and splash screen

  1. The `config.xml` should be in the `www` folder
  2. You should add a `icon.png` and `splash.png` in the same folder as the `config.xml`

## Example

    <icon src="res/icon/android/mdpi.png" gap:platform="android" gap:qualifier="mdpi" />
    <icon src="res/icon/android/hdpi.png" gap:platform="android" gap:qualifier="hdpi" />
    <icon src="res/icon/android/xhdpi.png" gap:platform="android" gap:qualifier="xhdpi" />
    <icon src="icon.png" gap:role="default" />
    <!-- Define app splash screen for each platform. -->
    <gap:splash src="splash.png" />