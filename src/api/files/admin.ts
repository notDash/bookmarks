import putApi from '../putApi'
var api = {};
putApi(api, "homepage", "https://www.baidu.com", {
  method: 'get'
});

export default api;