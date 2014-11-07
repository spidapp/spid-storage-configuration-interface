'use strict';

var Interface = require('spid-interface');

module.exports = Interface('ConfigurationStorageInterface', {
  /**
   * init the configuration storage plugin
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
   * Read some `keys` from the configuration storage
   * @param  {String} prefix
   * @param  {Array[String]} keys
   * @param  {Function} f(err, properties: Object)
   */
  read: function (prefix, keys, f) {},

  /**
   * Write a `key` with `value` in the configuration storage
   * @param  {String} prefix
   * @param  {Object} properties e.g. {key1: value1, key2: value2}
   * @param  {Function} f(err)
   */
  write: function (prefix, properties, f) {},

  /**
   * Remove a `key` from the configuration storage
   * @param  {String} prefix
   * @param  {Array[String]} keys
   * @param  {Function} f(err)
   */
  remove: function (prefix, keys, f) {},

  /**
   * Watch keys for change
   * @param {String} prefix
   * @param {Array[String]} keys array of keys to watch
   * @param {Function} f(key, newValue)
   */
  watch: function (prefix, keys, f) {},

  /**
   * Unwatch keys
   * @param  {String} prefix
   * @param  {Array[String]} keys
   * @optional
   * @param  {Function} f(err)
   * @optional
   * If no parameters were given, all listeners will be removed
   */
  unwatch: function (prefix, keys, f) {}
});
