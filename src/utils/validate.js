/**
 * 2020/01/14
 */

/**
 * @param {string} phonenumber
 * @returns {Boolean}
 * 判断是否正确手机号
 */
export function isMobile (mobile) {
  let reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[67]|17[0135678]|18[0-9]|19[89])\d{8}$/;
  return reg.test(mobile);
}

/**
 * @param {string} password
 * @returns {Boolean}
 * 密码校验规则(8-16位数字跟字母组合)
 */
export function checkPass (password) {
  if (/\s/.test(password)) return false;
  let passwordReq = /^(((?=.*[a-zA-Z])(?=.*\d)[^]{8,16})|((?=.*[^a-zA-Z0-9])(?=.*\d)[^]{8,16})|((?=.*[^a-zA-Z0-9])(?=.*[a-zA-Z])[^]{8,16}))$/;
  let testResult = passwordReq.test(password);
  return testResult;
}

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

/**
   * @param {string} str
   * @returns {Boolean}
   */
export function validUsername (str) {
  // eslint-disable-next-line camelcase
  const validMap = ['admin', 'editor'];
  return validMap.indexOf(str.trim()) >= 0;
}

/**
   * @param {string} url
   * @returns {Boolean}
   */
export function validURL (url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return reg.test(url);
}

/**
   * @param {string} str
   * @returns {Boolean}
   */
export function validLowerCase (str) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

/**
   * @param {string} str
   * @returns {Boolean}
   */
export function validUpperCase (str) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

/**
   * @param {string} str
   * @returns {Boolean}
   */
export function validAlphabets (str) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

/**
   * @param {string} email
   * @returns {Boolean}
   */
export function validEmail (email) {
  // eslint-disable-next-line no-useless-escape
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
}

/**
   * @param {string} str
   * @returns {Boolean}
   */
export function isString (str) {
  if (typeof str === 'string' || str instanceof String) {
    return true;
  }
  return false;
}

/**
   * @param {Array} arg
   * @returns {Boolean}
   */
export function isArray (arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]';
  }
  return Array.isArray(arg);
}
