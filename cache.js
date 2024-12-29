class Cache {
  constructor() {
    this.cache = new Map();
  }

  get(key) {
    return this.cache.get(key);
  }

  set(key, value) {
    this.cache.set(key, value);
  }

  clear() {
    this.cache.clear();
  }

  has(key) {
    return this.cache.has(key);
  }

  delete(key) {
    this.cache.delete(key);
  }
}

const globalCache = new Cache();

setInterval(() => {
  globalCache.clear();
}, 1000 * 60 * 10); // clear cache every 10 mins

export { globalCache };
