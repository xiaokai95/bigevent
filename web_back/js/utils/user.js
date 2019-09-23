var user = {
  /**
   * 用户登录
   * @param {*} userName 用户名
   * @param {*} passWord 密码
   * @param {*} callback 回调函数
   */
  login: function(userName, passWord, callback) {
    $.ajax({
      url: urlItem.loginUrl,
      type: "post",
      data: {
        user_name: userName,
        password: passWord
      },
      success: function(res) {
        callback(res);
      }
    });
  },
  /**
   * 用户退出
   * @param {*} callback 回调函数
   */
  loginOut: function(callback) {
    $.post(urlItem.loginOutUrl, function(res) {
      callback(res);
    });
  },
  /**
   * 获取用户信息
   * @param {*} callback 回调函数
   */
  getUser: function(callback) {
    $.get(urlItem.getUser, function(res) {
      callback(res);
    });
  }
};

// 文章
var article = {
  /**
   * 文章数量统计
   * @param {*} callback 回调函数
   */
  getArticle_count: function(callback) {
    $.get(urlItem.getArticle_countUrl, function(res) {
      callback(res);
    });
  },

  /**
   * 评论数量统计
   * @param {*} callback 回调函数
   */
  getComment_count: function(callback) {
    $.get(urlItem.getComment_countUrl, function(res) {
      callback(res);
    });
  },
  /**
   * 文章类别搜索
   * @param {*} callback 回调函数
   */
  categorySearch: function(callback) {
    $.get(urlItem.categorySearchUrl, function(res) {
      callback(res);
    });
  },

  categoryAdd: function(userName, nickName, callback) {
      $.post(urlItem.categoryAddUrl, { name: userName, slug: nickName }, function (res) {
          callback(res);
    });
  }
};
