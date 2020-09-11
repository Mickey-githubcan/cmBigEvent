$(function () {
    //link-login
    $('#link-login').on('click', function () {
        $('.login-box').hide()
        $('.reg-box').show()
    })

    //link-reg
    $('#link-reg').on('click', function () {
        $('.reg-box').hide()
        $('.login-box').show()
    })
})