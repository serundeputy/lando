/**
 * Lando blackfire service builder
 *
 * @name blackfire
 */

'use strict';

module.exports = function(lando) {

  // Modules
  var _ = lando.node._;
  var addConfig = lando.services.addConfig;
  var buildVolume = lando.services.buildVolume;

  /**
   * Supported versions for blackfire 
   */
  var versions = [
    '1.15.0',
    'latest',
    'custom'
  ];

  /**
   * Return the networks needed
   */
  var networks = function() {
    return {};
  };

  /**
   * Build out blackfire
   */
  var services = function(name, config) {

    // Start a services collector
    var services = {};

   // // Define config mappings
   // var configFiles = {
   //   confd: '/etc/mysql/conf.d',
   //   dataDir: '/var/lib/mysql'
   // };

   // // GEt creds
   // var creds = config.creds || {};

    // Default blackfire service
    var blackfire = {
      image: 'blackfire/blackfire:' + config.version,
      environment: {
        BLACKFIRE_CLIENT_ID: process.env.BLACKFIRE_CLIENT_ID, 
        BLACKFIRE_CLIENT_TOKEN: process.env.BLACKFIRE_CLIENT_TOKEN,
        BLACKFIRE_SERVER_ID: process.env.BLACKFIRE_SERVER_ID,
        BLACKFIRE_SERVER_TOKEN: process.env.BLACKFIRE_SERVER_TOKEN
      },
      //volumes: ['data_' + name + ':' + configFiles.dataDir],
      command: 'docker-entrypoint.sh curl /bin/bash'
    };

    // Handle port forwarding
    if (config.portforward) {

      // If true assign a port automatically
      if (config.portforward === true) {
        blackfire.ports = ['8707'];
      }

      // Else use the specified port
      else {
        blackfire.ports = [config.portforward + ':3306'];
      }

    }

    //// Handle custom config directory
    //_.forEach(configFiles, function(file, type) {
    //  if (_.has(config, 'config.' + type)) {
    //    var local = config.config[type];
    //    var customConfig = buildVolume(local, file, '$LANDO_APP_ROOT_BIND');
    //    mariadb.volumes = addConfig(customConfig, mariadb.volumes);
    //  }
    //});

    // Put it all together
    services[name] = blackfire;

    // Return our service
    return services;

  };

  /**
   * Return the volumes needed
   */
  var volumes = function() {
    var vols = {};
    return vols;
  };

  /**
   * Metadata about our service
   */
  //var info = function(name, config) {

  // Add in generic info
  var info = {};
  //    creds: {
  //      user: config.environment.MYSQL_USER,
  //      password: config.environment.MYSQL_PASSWORD,
  //      database: config.environment.MYSQL_DATABASE
  //    },
  //    'internal_connection': {
  //      host: name,
  //      port: config.port || 3306
  //    },
  //    'external_connection': {
  //      host: 'localhost',
  //      port: config.portforward || 'not forwarded'
  //    }
  //  };

  //  // Show the config files being used if they are custom
  //  if (!_.isEmpty(config.config)) {
  //    info.config  = config.config;
  //  }

  //  // Return the collected info
  //  return info;

  //};

  return {
    info: info,
    networks: networks,
    services: services,
    versions: versions,
    volumes: volumes,
    configDir: __dirname
  };

};
