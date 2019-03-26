define(['base/js/namespace'], 

function(Jupyter) {
    var exports = {};

    var insert_mnt_cell = function ()  {    
        
    var text='# Replace EGRUSER and EGRPASS with your EGR account information.\n# Please delete after running \n!mkdir -p ~/mnt/research-scb; \\\nmount -t smbfs //EGRUSER:EGRPASS@research-scb.egr.msu.edu/research-scb ~/mnt/research-scb'
    Jupyter.notebook.insert_cell_above('code', 0).set_text(text)

        };


    var action = {
        icon: 'fa-server', // a font-awesome class used on buttons, etc
        help    : 'shell commands to mount research-scb',
        help_index : 'xy',
        handler : insert_mnt_cell
    };
    
    var prefix = 'scb_extension';
    var action_name = 'insert_mnt_cell';

    var full_action_name = Jupyter.actions.register(action, action_name, prefix); // returns 'scb_extension:insert_mnt_cell'


    function load_ipython_extension(){
        Jupyter.toolbar.add_buttons_group([full_action_name]);
        console.info('insert_mnt_cell Extension Loaded');
    }

    return {
        load_ipython_extension: load_ipython_extension
    };
});

