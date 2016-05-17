/**
 * EraJs
 * > Get readable time differences from now vs past or future dates.
 *
 * @author  Rukhsar Manzoor
 * @url     www.rukhsar.me.uk
 * @version 1.0
 */

(function (root,factory) {

    if (typeof exports === 'object') {

        // Common JavaScript
        module.exports = factory(root, root.document);

    } else if ( typeof define === 'function' && define.amd ) {

        // AMD

        define(function() { return factory(root, root.document); });

    } else {

    root.fromNow = factory(root, root.document); // window global

}

    }(typeof window !== 'undefined' ? window : this, function (window, document) {

  'use strict';


});