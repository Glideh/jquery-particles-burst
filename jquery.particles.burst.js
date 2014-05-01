(function($){
    var settings = {
        particle: 'star.png'
      , partoffset: 100
    };

    var methods = {
        init : function (options) {
            settings = $.extend(settings, options);
            return this;
        }
      , create_part: function () {
            tmp = $('<img />').addClass('jquery-particle');
            tmp.attr('src', settings.particle);
            this.append(tmp);
            x = Math.floor(Math.random() * settings.partoffset * 2) - settings.partoffset;
            y = Math.floor(Math.random() * settings.partoffset * 2) - settings.partoffset;
            tmp.animate(
                {'margin-top': x + 'px', 'margin-left': y + 'px', 'opacity': 1}
              , {
                   'duration': Math.floor(Math.random() * 1000) + 1000
                 , 'complete': function () {
                       $(this).animate(
                           {'opacity': 0}
                         , {'complete': function () { $(this).remove(); }}
                       )
                   }
                }
            );
            return this;
        }
      , burst_part: function (i) {
          if (i > 0) {
              $this = this;
              methods['create_part'].apply($this);
              setTimeout(function () {
                  methods['burst_part'].apply($this, [--i])
              }, Math.floor(Math.random() * 200));
          }
          return this;
        }
    };

    $.fn.pburst = function (method) { 
        if (methods[method]) {
            return methods[method].apply( this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || ! method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.particles.burst');
        }    
    };

})(jQuery);


