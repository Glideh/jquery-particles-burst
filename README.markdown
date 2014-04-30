This plugin generates particules from an element.  
Actually it allows images to appear, animate themself then disappear

Installation
============

Put the required resources in your header

    <link rel="stylesheet" href="jquery.particles.burst.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
    <script src="jquery.particles.burst.js"></script>

Usage
=====

Then you can generate particules from any element

    <div id="emitter"></div>
    <script>
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

Methods
=======

create_part
-----------

Make a particule appear, animate and disappear

burst_part(number)
------------------

_parameters: number, the number of particules to burst_

Create _number_ of particules by calling _create_part_

