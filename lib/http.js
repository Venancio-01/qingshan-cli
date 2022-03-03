/*
 * @Author: liqingshan
 * @Date: 2022-03-03 09:18:33
 * @LastEditTime: 2022-03-03 11:02:36
 * @LastEditors: liqingshan
 * @FilePath: \qingshan-cli\lib\http.js
 * @Description:
 */
// 通过 axios 获取结果

const axios = require("axios");

axios.interceptors.response.use((res) => {
  return res.data;
});

/**
 * 获取模板列表
 * @returns Promise
 */
async function getRepoList() {
  return axios.get("https://api.github.com/users/qingshan777/repos");
}

/**
 * 获取版本信息
 * @param {string} repo 模板名称
 * @returns Promise
 */
async function getTagList(repo) {
  return axios.get(`https://api.github.com/repos/qingshan777/${repo}/tags`);
}

module.exports = {
  getRepoList,
  getTagList,
};
