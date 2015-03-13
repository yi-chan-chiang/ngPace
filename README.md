# ngPace
angularJS &amp; Pacejs

<a href="http://jsbin.com/tayuki" target"_blank">DEMO</a>

use

<a href="http://github.hubspot.com/pace/docs/welcome/" target="_blank">PACEJS</a>

<h2>choose css Themes</h2>


<h2>JS like</h2>

<pre>
<span class="pl-s2">  &lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s1"><span class="pl-pds">"</span>https://cdnjs.cloudflare.com/ajax/libs/pace/1.0.2/pace.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;</span>

<span class="pl-s2">  &lt;<span class="pl-ent">link</span> <span class="pl-e">href</span>=<span class="pl-s1"><span class="pl-pds">"</span>https://rawgit.com/yi-chan-chiang/ngPace/master/ngPace.css<span class="pl-pds">"</span></span>&gt;</span>

<span class="pl-s2">  &lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s1"><span class="pl-pds">"</span>https://rawgit.com/yi-chan-chiang/ngPace/master/ngPace.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;</span>
</pre>

<h2>angular like</h2>

<pre>
var app = angular.module('myApp', ['chiang.ngPace']);
app.run(function($ngPace){
  $ngPace.pace.options.ajax.trackMethods = ["GET", "POST", "PUT", "DELETE"];
  $ngPace.pace.options.restartOnRequestAfter = 100;
});
</pre>

<h2>WHEN START LOADING</h2>
<pre>
$rootScope.ngPace.isloading = true;
$rootScope.ngPace.iserror = false;
$rootScope.ngPace.isnone = false;
</pre>

<h2>WHEN END LOADING</h2>
<pre>
$rootScope.ngPace.isloading = false;
$rootScope.ngPace.iserror = false;
$rootScope.ngPace.isnone = false;
</pre>

<h2>License</h2>
The MIT License (MIT)

Copyright (c) 2015 yi-chan-chiang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.