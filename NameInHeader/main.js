define(function(){

    function load_ipython_extension(){
        var s = document.getElementById('kernel_logo_widget').innerHTML;
        var news= 'Scott' + ' ' + s;
        //alert(news);
        document.getElementById('kernel_logo_widget').innerHTML=news;
    }

    return {
        load_ipython_extension: load_ipython_extension
    };
});