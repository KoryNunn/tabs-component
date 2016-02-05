var fastn = require('fastn')({
    _generic: require('fastn/genericComponent'),
    tabs: require('./tabsComponent')
});

module.exports = function(settings){
    return fastn('tabs', settings).attach().render();
};