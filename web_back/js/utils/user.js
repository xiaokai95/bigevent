var user = {
    /**
     * 用户登录
     * @param {*} userName 用户名
     * @param {*} passWord 密码
     * @param {*} callback 回调函数
     */
    login: function (userName, passWord, callback) {
        $.ajax({
            url: urlItem.loginUrl,
            type: 'post',
            data: {
                user_name: userName,
                password: passWord
            },
            success: function (res) {
                callback(res);
            }
        })
    },
    /**
     * 用户退出
     * @param {*} callback 回调函数
     */
    loginOut: function (callback) {
        $.post(urlItem.loginOutUrl, function (res) {
            callback(res)
        })
    },
    /**
     * 获取用户信息
     * @param {*} callback 回调函数
     */
    getUser: function (callback) {
        $.get(urlItem.getUser, function (res) {
            callback(res);
        })
    },
    /**
     * 文章数量统计
     * @param {*} callback 回调函数
     */
    getArticle_count: function (callback) {
        $.get(urlItem.getArticle_countUrl, function (res) {
            callback(res);
        })
    },

    /**
     * 评论数量统计
     * @param {*} callback 回调函数
     */
    getComment_count: function (callback) {
        $.get(urlItem.getComment_countUrl, function (res) {
            callback(res);
        })
    }





}