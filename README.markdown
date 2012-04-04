Installation
============

Put the required resources in your header

    <link rel="stylesheet" type="text/css" href="jquery.particles.burst.css" />
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
    <script type="text/javascript" src="jquery.particles.burst.js"></script>

Usage
=====

Then you can generate particules from any element

    <div id="emitter"></div>
    <script type="text/javascript">
      $('#emitter').pburst('burst_part', 20);
    </script>

This will generate 20 stars (the default particle sprite) from `#emitter`

Demo
----

You can play with the plugin [here](http://jsfiddle.net/Glide/KzQ9c/)  
_This can have some github raw files direct access [issues](https://github.com/jsfiddle/jsfiddle-docs-alpha/issues/95)_

Options
=======

particle
--------

_default: 'star.png'_

Specify your image as particle

    $('#emitter').pburst({particle: 'your_sprite.png'});

partoffset
----------

_default: 100_

The move radius in pixel

    $('#emitter').pburst({partoffset: 200});