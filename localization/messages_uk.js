
(function (factory) {
    
    module.exports = factory(require('jquery'), require('../jquery.validate'));;
}(function ($) {
    /*
 * Translated default messages for the jQuery validation plugin.
 * Locale: UK (Ukrainian; українська мова)
 */
    $.extend($.validator.messages, {
        required: '\u0426\u0435 \u043F\u043E\u043B\u0435 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E \u0437\u0430\u043F\u043E\u0432\u043D\u0438\u0442\u0438.',
        remote: '\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F.',
        email: '\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438.',
        url: '\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0438\u0439 URL.',
        date: '\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0443 \u0434\u0430\u0442\u0443.',
        dateISO: '\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0443 \u0434\u0430\u0442\u0443 \u0443 \u0444\u043E\u0440\u043C\u0430\u0442\u0456 ISO.',
        number: '\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u0447\u0438\u0441\u043B\u043E.',
        digits: '\u0412\u0432\u043E\u0434\u0438\u0442\u0435 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u043B\u0438\u0448\u0435 \u0446\u0438\u0444\u0440\u0438.',
        creditcard: '\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u043D\u043E\u043C\u0435\u0440 \u043A\u0440\u0435\u0434\u0438\u0442\u043D\u043E\u0457 \u043A\u0430\u0440\u0442\u0438.',
        equalTo: '\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u0442\u0430\u043A\u0435 \u0436 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0449\u0435 \u0440\u0430\u0437.',
        extension: '\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u0444\u0430\u0439\u043B \u0437 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u043C \u0440\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u043D\u044F\u043C.',
        maxlength: $.validator.format('\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u043D\u0435 \u0431\u0456\u043B\u044C\u0448\u0435 {0} \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432.'),
        minlength: $.validator.format('\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u043D\u0435 \u043C\u0435\u043D\u0448\u0435 {0} \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432.'),
        rangelength: $.validator.format('\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0434\u043E\u0432\u0436\u0438\u043D\u043E\u044E \u0432\u0456\u0434 {0} \u0434\u043E {1} \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432.'),
        range: $.validator.format('\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u0447\u0438\u0441\u043B\u043E \u0432\u0456\u0434 {0} \u0434\u043E {1}.'),
        max: $.validator.format('\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u0447\u0438\u0441\u043B\u043E, \u043C\u0435\u043D\u0448\u0435 \u0430\u0431\u043E \u0440\u0456\u0432\u043D\u043E {0}.'),
        min: $.validator.format('\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u0447\u0438\u0441\u043B\u043E, \u0431\u0456\u043B\u044C\u0448\u0435 \u0430\u0431\u043E \u0440\u0456\u0432\u043D\u043E {0}.')
    });
}));