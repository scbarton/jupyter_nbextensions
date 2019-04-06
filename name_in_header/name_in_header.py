def load_ipython_extension(ipython):
    # The `ipython` argument is the currently active `InteractiveShell`
    # instance, which can be used in any way. This allows you to register
    # new magics or aliases, for example.
    
    import re, os
    from IPython.display import display, Javascript

    uname= os.getenv('USER')

    s='''var s = document.getElementById('kernel_logo_widget').innerHTML;
         var news= 'Scott ' + s;
         document.getElementById('kernel_logo_widget').innerHTML=news;
    '''

    func=re.compile('Scott')
    s=func.sub(uname, s)

    display(Javascript(s))


# def unload_ipython_extension(ipython):
    # If you want your extension to be unloadable, put that logic here.