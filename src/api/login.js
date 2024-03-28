import $http from '@/utils/request';

const API = {
  // 临时登录
  login(params) {
    return $http.post('/zsjg/authUser/login', params);
  },
  // 获取用户信息
  getUserInfo() {
    return $http.get('/zsjg/authUser/getUserInfo');
  },
  // 获取用户角色
  getUserRoles() {
    return $http.get('/zsjg/authUser/getRoleInfo');
  },
};
export default API;
