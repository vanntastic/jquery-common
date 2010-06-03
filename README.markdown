Common Jquery
=============

Common classes used for the basic jquery effects, just give your elements the same class name as the jquery effects methods . A simple pattern and an attempt to stop writing the same code over and over again, that is all.

Usage
=====

Simple add the class name of the jquery behavior you want (show, hide, slideUp, slideDown, etc). You can optionally pass in the options argument with a dash in your class name:

      // Example
      
      <a href="#a-div" class="toggle">This will toggle the elem #a-div</a> 
      <a href="#a-div" class="toggle-fast">This will toggle the elem #a-div fast</a> 
      <a href="#a-div" class="toggle-100">This will toggle the elem #a-div at the speed of 100</a> 