# ngPace
angularJS &amp; Pacejs

<a href="http://jsbin.com/tayuki" target"_blank">DEMO</a>

use

<a href="http://github.hubspot.com/pace/docs/welcome/" target="_blank">PACEJS</a>

<h2>choose css Themes</h2>


<h2>JS like</h2>

<pre>
<span class="pl-s2">  &lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s1"><span class="pl-pds">"</span>
https://cdnjs.cloudflare.com/ajax/libs/pace/1.0.2/pace.js
<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;</span>

<span class="pl-s2">  &lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s1"><span class="pl-pds">"</span>
https://cdn.rawgit.com/yi-chan-chiang/ngPace/master/ngPace.js
<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;</span>

<span class="pl-s2">  &lt;<span class="pl-ent">link</span> <span class="pl-e">href</span>=<span class="pl-s1"><span class="pl-pds">"</span>
https://cdn.rawgit.com/yi-chan-chiang/ngPace/master/ngPace.css
<span class="pl-pds">"</span></span>&gt;</span>
</pre>

<h2>angular like</h2>

<pre>
var app = angular.module('myApp', ['autoLoad.pace']);
app.run(function(ngPace){
  ngPace.pace.options.ajax.trackMethods = ["GET", "POST", "PUT", "DELETE"];
  ngPace.pace.options.restartOnRequestAfter = 100;
});
</pre>