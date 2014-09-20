'use strict';

var Interface = require('spid-interface');

module.exports = Interface('ConfigurationStorageInterface', {
  /**
   * Load the configuration storage plugin
   * @param  {Configuration} configuration
   * @param  {Function} f(err)
   */
  init: function (configuration, f) {},

  /**
   * Dispose the configuration storage plugin
   * @param  {Function} f(err)
   */
  dispose: function (f) {},

  /**
   * Read a `key` from the configuration storage
   * @param  {String} key
   * @param  {Function} f(err, value: Mixed)
   */
  read: function (key, f) {},

  /**
   * Write a `key` with `value` in the configuration storage
   * @param  {String} key  [description]
   * @param  {Mixed} value [description]
   * @param  {Function} f(err)
   */
  write: function (key, value, f) {},

  /**
   * Remove a `key` from the configuration storage
   * @param  {String} key  [description]
   * @param  {Function} f(err)
   */
  remove: function (key, f) {},

  /**
   * Watch keys for change
   * @param {Array[String]} keys array of keys to watch
   * @param {Function} f(key, newValue)
   */
  watch: function(keys, f){},

  /**
   * Unwatch keys
   * @param  {Array[String]} keys
   * @optional
   * @param  {Function} f(err)
   * @optional
   * If no parameters were given, all listeners will be removed
   */
  unwatch: function(keys, f){}
});
