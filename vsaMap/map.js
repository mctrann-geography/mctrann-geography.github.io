var jqueryScript = document.createElement('script');
jqueryScript.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
jqueryScript.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

$.ajax({
    url: 'https://mctrann-geography.github.io/vsaMap/data/midwest.js',
    dataType: "script",
    success: sucess

});

