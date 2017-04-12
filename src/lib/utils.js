module.exports = {
  hasOwnProp(obj, propName) {
    return Object.prototype.hasOwnProperty.call(obj, propName);
  },
  createPureObj(params) {
    const obj = {};
    Object.keys(params).forEach(key => {
      if (params[key] !== undefined) {
        obj[key] = params[key];
      }
    });
    return obj;
  }
};
