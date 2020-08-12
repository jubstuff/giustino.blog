---
title: 'Reacting to React: setup a base project'
author: Giustino Borzacchiello
type: post
date: 2016-06-19T16:02:01+00:00
permalink: /reacting-react-setup-base-project/
featured_image: /wp-content/uploads/2016/05/learning-to-swim-1200-e1462133727181-1200x1104.jpg
categories:
  - JavaScript

  - babel
  - npm
  - reactjs

---
I wanted to have a step by step procedure to have a basic React project to fiddle with, without using some online service like JSFiddle.

Maybe I&#8217;m an old-fashioned developer, but I like to have the source code for my experiments on my hard drive, always available, even when I&#8217;m offline. That&#8217;s also why in the examples below I download every single library.

So let&#8217;s start!

<!--more-->

## Set expectations

Our goal is this

    app
    ├── css
    │   ├── main.css
    │   └── pure-min.css
    ├── dist
    │   └── app.js
    ├── index.html
    ├── js
    │   └── app.js
    ├── lib
    │   ├── react-15.1.0.js
    │   └── react-dom-15.1.0.js
    └── package.json
    

We will store our source code in `js/app.js`, and it will be _compiled_ to `dist/app.js`. `index.html` will be our playground and `lib` will host our third-party libraries. For the sake of this example, our app will be a simple counter, with two buttons, _Increment_ and _Decrement_.

You can find the source code for this example in the [react-counter-app repository on Github][1]. You can also follow along looking at [the list of commits][2]: I&#8217;ve purposely created atomic commits towards the final goal.

## Structure

Find a good place on your hard disk and issue the following commands:

    $ mkdir app
    $ cd app
    $ mkdir js dist lib
    $ touch index.html .babelrc js/app.js
    

Download [the most recent react.js and react-dom.js][3] (development versions are good) and place them inside the `lib` folder.

## Npm

We&#8217;ll need to set up the project using `npm`. Npm is Node package manager, it comes bundled with Node ([here you can download the latest version for your OS][4]). We&#8217;ll use it to download and use some utility packages.

To initialize the project run:

    $ npm init
    

You will be prompted with several questions, you can safely accept the default values as this won&#8217;t be a real project, but only a playground.

At the end of the process the `package.json` file will be created. This file will hold all the metadata about our project.

## Babel

For this example, I wanted to use JSX. As there are at least [7 ways you can set up a React app][5], I went with the simpler (for me) way.

As you may already now, JSX is not supported natively by current browsers. So, to write JSX today, we&#8217;ll need _something_ that will translate the syntax to JavaScript.

That&#8217;s where Babel fills in.

To install Babel, run:

    $ npm install --save-dev babel-cli
    

This command will install Babel locally for the current project. The alternative was to install it globally. Installing packages locally is a good practice as in this way different project can have different versions of the same package. The downside is that we can&#8217;t run the cli command directly, but we&#8217;ll have to use _npm scripts_.

So write this in `package.json`

    {
    ...
    + "scripts": {
    + "build": "babel js --out-dir dist"
    + },
    ...
    }
    

You can run these commands with:

    $ npm run build
    

You can try that now. The output should be similar to this:

    $ npm run build
    
    > counter-app@1.0.0 build /home/justb/code/react-counter-app
    > babel js --out-dir dist
    
    js/app.js -> dist/app.js
    

If you have added something to `app.js` you&#8217;ll be disappointed: Babel just copied the file from the `js` folder to the `dist` folder without doing anything.  
That&#8217;s because to tell Babel what to do you need to install _plugins_ or _presets (collection of plugins)_: for this project we&#8217;ll install the `react` preset

    $ npm install --save-dev babel-preset-react
    

Then, add these lines in the `.babelrc` file created before:

    {
    "presets": [
    "react"
    ],
    "plugins": []
    }
    

## HTML

We will use a simple HTML page as our playground:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>A simple Counter in React</title>
    <link rel="stylesheet" href="css/pure-min.css">
    <link rel="stylesheet" href="css/main.css">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
</head>
<body>

<div class="main">
    <h1>A simple counter</h1>
    <div id="mountpoint"></div>
</div>

<script src="lib/react-15.1.0.js"></script>
<script src="lib/react-dom-15.1.0.js"></script>
<script src="dist/app.js"></script>
</body>
</html>
```    

## Example in React

We&#8217;ve nearly made it! We _just_ need to code our first React component.
```jsx
"use strict";

var Counter = React.createClass( {
  getInitialState: function () {
    return {
      counter: 0
    }
  },
  increment: function () {
    this.setState( {
      counter: this.state.counter + 1
    } );
  },
  decrement: function () {
    this.setState( {
      counter: this.state.counter - 1
    } );
  },
  render: function () {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <button className="pure-button button-error" onClick={this.decrement}>Decrement</button>
        <button className="pure-button button-success" onClick={this.increment}>Increment</button>
      </div>
    );
  }
} );

ReactDOM.render( <Counter />, document.getElementById( 'mountpoint' ) );
```

It&#8217;s a simple counter: we have a display and two buttons: one used to decrement the count, one to increment it.

## Watch

While coding React apps, you&#8217;ll find yourself running `npm run build` a lot of times to compile JSX to JS. To save your keyboard and your sanity, you can create a command and tell Babel to watch JS files and compile them upon save.

    {
    ...
    + "scripts": {
       ...
    + "buildw": "babel -w js --out-dir dist"
       ...
    + },
    ...
    }
    

## References

  * [Babel User Handbook][6]
  * [React Homepage][7]

 [1]: https://github.com/jubstuff/react-counter-app
 [2]: https://github.com/jubstuff/react-counter-app/commits/master
 [3]: https://facebook.github.io/react/downloads.html
 [4]: https://nodejs.org/en/
 [5]: http://developer.telerik.com/featured/taming-react-setup/?utm_source=javascriptweekly&utm_medium=email
 [6]: https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/user-handbook.md
 [7]: https://facebook.github.io/react/