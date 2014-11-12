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
   * Write the properties in the configuration storage
   * When the write is done, if a key is being watched, the configuration storage must call
   * the function passed with the key in the watch function, and provide the updated keys and values
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
   * @param {Function} f(updatedProperties) where updatedProperties are the properties being written or removed
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
