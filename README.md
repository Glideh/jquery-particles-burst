<img align="right" width="243" height="221" src="pburst_screenshot.png" alt="Screenshot">
This plugin generates particules from an element.  
Images are appended to the DOM then fade in, animate randomly, fade out.  
Multiple calls generate the particule effect.

## Demo

You can play with the plugin [here](https://pburst.gprod.net)

## Installation

Install the package with [Bower](http://bower.io/)

```bash
$ bower install jquery-particles-burst
```

If you don't use Bower, simply copy the files from `dist/`

Include the required resources in your html

```html
<link rel="stylesheet" href="jquery-particles-burst.css" />
<script src="vendors/jquery.min.js"></script>
<script src="vendors/jquery-particles-burst.min.js"></script>
```

## Usage

Then you can generate particules from any element

```html
<div id="emitter"></div>
<script>
  $('#emitter').pburst('burst_part', 20);
</script>
```

This will generate 20 stars (the default particle sprite) from `#emitter`

## Methods

### create_part

Makes a particle appear on the emitter, offset in a random direction and disappear

```javascript
$('#emitter').pburst('create_part');
```

### burst_part(number)

_parameters: number, the number of particles to burst_

Creates _number_ of particles by calling _create_part_

```javascript
$('#emitter').pburst('burst_part', 20);
```

## Options

### particle

_default: 'star.png'_

Specify your image as particle

```javascript
$('#emitter').pburst({particle: 'your_sprite.png'});
```

### partoffset

_default: 150_

Maximum translation radius in pixel (randomized from 0)

```javascript
$('#emitter').pburst({partoffset: 200});
```

### duration

_default: 1000_

Maximum duration of the translation in milliseconds (randomized from 0)

```javascript
$('#emitter').pburst({duration: 2000});
```

### frequency

_default: 100_

Maximum duration between each particle in milliseconds (randomized from 0)

```javascript
$('#emitter').pburst({duration: 500});
```

