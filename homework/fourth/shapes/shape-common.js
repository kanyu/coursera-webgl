/**
 * ShapeCommon
 */
(function(window) {
  'use strict';

  var ShapeCommon = {

    createNgon: function (n, startAngle, z) {
      var vertices = [],
  		  dA = Math.PI*2 / n,
        r = 0.9,
        angle,
        x, y;

      for (var i=0; i < n; i++) {
        angle = startAngle + dA*i;
        x = r * Math.cos(angle);
        y = r * Math.sin(angle);
        vertices.push(vec4(x, y, z, 1.0));
      }
      return vertices;
    }

  };

  window.ShapeCommon = ShapeCommon;

})(window);
