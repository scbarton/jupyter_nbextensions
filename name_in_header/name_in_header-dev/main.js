// Copyright (c) Jupyter-Contrib Team.
// Distributed under the terms of the Modified BSD License.
// Authors: @jfbercher and @jcb91

define(['./kernel_exec_on_cell'], function(kernel_exec_on_cell) {
    'use strict';

    var mod_name = 'name_in_header';

    // gives default settings
    var cfg = {
        add_toolbar_button: true,
        show_alerts_for_errors: true,
        button_label: 'Show username in header',
        button_icon: 'fa-users',
    };

    cfg.kernel_config_map = { // map of parameters for supported kernels
        "python": {
            "library": [ "import re, os",
            "from IPython.display import display, Javascript",
            "uname= os.getenv('USER')",
            "s='''var s = document.getElementById('kernel_logo_widget').innerHTML;",
            "     var news= '<span style=\\'color:#919191\\'>_user_ </span>' + s;",
            "     document.getElementById('kernel_logo_widget').innerHTML=news;",
            "'''",
            "func=re.compile('_user_')",
            "s=func.sub(uname, s)",
            "display(Javascript(s))"].join("\n")
        }
    };

 
    var name_in_header = new kernel_exec_on_cell.define_plugin(mod_name, cfg);
    name_in_header.load_ipython_extension = name_in_header.initialize_plugin;
    return name_in_header;
});
