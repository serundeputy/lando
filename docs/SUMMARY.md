## Basics

*   [Overview](README.md)
*   [Getting Started](started.md)

## Installation

*   [System Requirements](installation/system-requirements.md)
*   [Preflight Checks](installation/preflight.md)
*   [Installing](installation/installing.md)
*   [Updating](installation/updating.md)
*   [Uninstalling](installation/uninstalling.md)

## Recipes

*   [Backdrop](tutorials/backdrop.md)
*   [Dotnet](services/dotnet.md)
*   [Drupal 6](tutorials/drupal6.md)
*   [Drupal 7](tutorials/drupal7.md)
*   [Drupal 8](tutorials/drupal8.md)
*   [Go](services/go.md)
*   [Joomla](tutorials/joomla.md)
*   [Laravel](tutorials/laravel.md)
*   [LAMP](tutorials/lamp.md)
*   [LEMP](tutorials/lemp.md)
*   [MEAN](tutorials/mean.md)
*   [Pantheon](tutorials/pantheon.md)
*   [Python](services/python.md)
*   [Ruby](services/ruby.md)
*   [WordPress](tutorials/wordpress.md)
*   [Custom](tutorials/custom.md)

## Workflow Docs

*   [Using Composer to Manage a Project](tutorials/composer-tutorial.md)
*   [Lando and CI](tutorials/lando-and-ci.md)
*   [Lando, Pantheon, CI, and Behat (BDD)](tutorials/lando-pantheon-workflow.md)
*   [Killer D8 Workflow with Platform.sh](https://thinktandem.io/blog/2017/10/23/killer-d8-workflow-using-lando-and-platform-sh/)

## Advanced Usage

*   [Setting up Additional Services](tutorials/setup-additional-services.md)
*   [Setting up Additional Tooling](tutorials/setup-additional-tooling.md)
*   [Setting up Additional Routes](config/proxy.md)
*   [Setting up Additional Events](config/events.md)
*   [Using NodeJS Frontend Tooling](tutorials/frontend.md)
*   [Accessing Your Services Externally](tutorials/external-access.md)
*   [Accessing Lando from Other Devices](tutorials/access-by-other-devices.md)
*   [Importing Databases](tutorials/db-import.md)
*   [Exporting Databases](tutorials/db-export.md)
*   [Offline Development](tutorials/offline-dev.md)
*   [Reasons to climb a mountain](https://www.youtube.com/watch?v=tkBVDh7my9Q)

## Command Line

*   [Usage](cli/usage.md)
*   [config](cli/config.md)
*   [destroy](cli/destroy.md)
*   [init](cli/init.md)
*   [info](cli/info.md)
*   [list](cli/list.md)
*   [logs](cli/logs.md)
*   [poweroff](cli/poweroff.md)
*   [rebuild](cli/rebuild.md)
*   [restart](cli/restart.md)
*   [share](cli/share.md)
*   [ssh](cli/ssh.md)
*   [start](cli/start.md)
*   [stop](cli/stop.md)
*   [version](cli/version.md)

## Known Issues

*   [DNS Rebinding Protection](issues/dns-rebind.md)
*   [Drupal File Uploads](issues/drupal-win-upload.md)
*   [File Syncing Stalled](issues/file-sync.md)
*   [Running VB and HyperV](issues/win-also-vb.md)
*   [Running behind a firewall](issues/firewall.md)
*   [Running behind a proxy](issues/proxy.md)
*   [Switching Databases](issues/switching-dbs.md)
*   [Overlapping IPv4 Address](issues/overlapping-ip.md)

## Troubleshooting and Support

*   [Accessing Logs](troubleshooting/logs.md)
*   [Using Lando with Kalabox](troubleshooting/wkbox.md)
*   [Reporting Issues](https://github.com/lando/lando/issues)
*   [Slack Channel](https://slackpass.io/kalabox)

## Configuration

*   [.lando.yml](config/lando.md)
*   [Recipes](config/recipes.md)
    *   [Backdrop](recipes/backdrop.md)
    *   [Drupal 6](recipes/drupal6.md)
    *   [Drupal 7](recipes/drupal7.md)
    *   [Drupal 8](recipes/drupal8.md)
    *   [Laravel](recipes/laravel.md)
    *   [Joomla](recipes/joomla.md)
    *   [LAMP](recipes/lamp.md)
    *   [LEMP](recipes/lemp.md)
    *   [MEAN](tutorials/mean.md)
    *   [Pantheon](recipes/pantheon.md)
    *   [WordPress](recipes/wordpress.md)
*   [Events](config/events.md)
*   [Proxy](config/proxy.md)
*   [Services](config/services.md)
    *   [apache](services/apache.md)
    *   [dotnet](services/dotnet.md)
    *   [elasticsearch](services/elasticsearch.md)
    *   [go](services/go.md)
    *   [mailhog](services/mailhog.md)
    *   [mariadb](services/mariadb.md)
    *   [memcached](services/memcached.md)
    *   [mongo](services/mongo.md)
    *   [mssql](services/mssql.md)
    *   [mysql](services/mysql.md)
    *   [nginx](services/nginx.md)
    *   [node](services/node.md)
    *   [php](services/php.md)
    *   [phpmyadmin](services/phpmyadmin.md)
    *   [postgres](services/postgres.md)
    *   [python](services/python.md)
    *   [redis](services/redis.md)
    *   [ruby](services/ruby.md)
    *   [solr](services/solr.md)
    *   [tomcat](services/tomcat.md)
    *   [varnish](services/varnish.md)
*   [Tooling](config/tooling.md)
*   [config.yml](config/config.md)
*   [Environment](config/env.md)
*   [SSH Keys](config/ssh.md)
*   [Shared Files](config/files.md)
*   [Build Steps](config/build.md)
*   [Scripting](config/scripting.md)
*   [Advanced](config/advanced.md)

## Community

*   [Slidedecks](https://drive.google.com/drive/folders/1ooK_NTMBuwOV0uix8O54umJGwAODL9dC)

## Development

*   [Contributing](dev/contributing.md)
*   [Repo Structure](dev/structure.md)
*   [Plugins](dev/plugins.md)
*   [Services](dev/services.md)
*   [Recipes](dev/recipes.md)
*   [API](dev/api/lando.md)
    *   [app](dev/api/app.md)
    *   [bootstrap](dev/api/bootstrap.md)
    *   [cache](dev/api/cache.md)
    *   [cli](dev/api/cli.md)
    *   [config](dev/api/config.md)
    *   [engine](dev/api/engine.md)
    *   [error](dev/api/error.md)
    *   [events](dev/api/events.md)
    *   [log](dev/api/log.md)
    *   [networks](dev/api/networks.md)
    *   [node](dev/api/node.md)
    *   [plugins](dev/api/plugins.md)
    *   [Promise](dev/api/promise.md)
    *   [registry](dev/api/registry.md)
    *   [shell](dev/api/shell.md)
    *   [tasks](dev/api/tasks.md)
    *   [user](dev/api/user.md)
    *   [utils](dev/api/utils.md)
    *   [yaml](dev/api/yaml.md)
*   [Testing](dev/testing.md)
*   [Building](dev/building.md)
*   [Shipping](dev/shipping.md)
*   [Documentation](dev/docs.md)

## Changelog

*   [2017](changelog/2017.md)
