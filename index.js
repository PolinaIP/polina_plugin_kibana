'use strict';

module.exports = function (kibana) {

  return new kibana.Plugin({

    uiExports: {
      visTypes: ['plugins/polina_plugin_kibana/polina_plugin_kibana']
    }

  });
};
