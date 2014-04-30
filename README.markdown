This plugin generates particules from an element.  
Images are appended to the DOM then fade in, animate randomly, fade out.  
Multiple calls generate the particule effect.

Installation
============

Install the package with [Bower](http://bower.io/)

```bash
$ bower install jquery.particles.burst
```

Put the required resources in your header

```html
<link rel="stylesheet" href="jquery.particles.burst.css" />
<script src="bower/jquery.min.js"></script>
<script src="bower/jquery.particles.burst.js"></script>
```

Usage
=====

Then you can generate particules from any element

```html
<div id="emitter"></div>
<script>
  $('#emitter').pburst('burst_part', 20);
</script>
```

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

The translation radius in pixel

    $('#emitter').pburst({partoffset: 200});

Methods
=======

create_part
-----------

Make a particle appear on the emitter, offsets in a random direction and disappear

burst_part(number)
------------------

_parameters: number, the number of particles to burst_

Create _number_ of particles by calling _create_part_

