Installation
============

Put the required resources in your header

    <link rel="stylesheet" type="text/css" href="jquery.particles.burst.css" />
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
    <script type="text/javascript" src="jquery.particles.burst.js"></script>

Then you can generate particules from any element

    <div id="emitter"></div>
    <script type="text/javascript">
      $('#emitter').pburst('burst_part', 20);
    </script>

This will generate 20 stars (the default particle sprite) from `#emitter`

