var fastn = require('fastn')({
    _generic: require('fastn/genericComponent'),
    list: require('fastn/listComponent'),
    templater: require('fastn/templaterComponent'),
    text: require('fastn/textComponent'),
    tabs: require('./tabsComponent')
});

module.exports = function(settings){
    return fastn('tabs', settings).attach().render();
};