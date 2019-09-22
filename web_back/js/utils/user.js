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

    loginOut: function (callback) {
        $.post(urlItem.loginOutUrl, function (res) {
            callback(res)
        })
    }
}