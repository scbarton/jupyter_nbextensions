define(['base/js/namespace'], 

function(Jupyter) {
    var exports = {};

    var name_in_header = function ()  {    
        
    var text='%reload_ext NameInHeader'
    Jupyter.notebook.insert_cell_above('code', 0).set_text(text)

        };


    var action = {
        icon: 'fa-user', // a font-awesome class used on buttons, etc
        help    : 'Show username in header',
        help_index : 'xyy',
        handler : name_in_header
    };
    
    var prefix = 'scb_extension';
    var action_name = 'name_in_header';

    var full_action_name = Jupyter.actions.register(action, action_name, prefix); // returns 'scb_extension:name_in_header'


    function load_ipython_extension(){
        Jupyter.toolbar.add_buttons_group([full_action_name]);
        console.info('name_in_header Extension Loaded');
    }

    return {
        load_ipython_extension: load_ipython_extension
    };
});

