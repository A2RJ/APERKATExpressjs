const nodeCache = require("node-cache");
const waCache = new nodeCache();
const setWaCache = (boolean) => waCache.set("isClientReady", boolean);
const getWaCache = () =>
  waCache.get("isClientReady") ? waCache.get("isClientReady") : false;

module.exports = { setWaCache, getWaCache };
