var doc = require('doc-js'),
    Slab = require('slabs'),
    laidout = require('laidout'),
    defaultCss = require('defaultcss');

defaultCss('tabs-component', '.tabs-component{overflow: hidden;} .tabs-component-content{display:flex;} .tabs-component .tab{flex:1 0 100%;}');

module.exports = function(fastn, component, type, settings, children) {
    component.extend('_generic', settings, children);
    component.setProperty('tabs');
    component.setProperty('tab');
    component.tab(0);

    var slab = new Slab();

    function updateTabCount(){
        slab.tabs(component._children.length);
        component.tabs(slab.tabs());
    }

    component.on('childInsert', updateTabCount);
    component.on('childRemove', updateTabCount);
    component.slab = slab;
    slab.enabled(true);

    component.render = function() {
        component.element = slab.element;
        doc(slab.element).addClass('tabs-component');
        doc(slab.content).addClass('tabs-component-content');

        component.getContainerElement = function() {
            return slab.content;
        };

        laidout(component.element, function(){
            slab.tab(component.tab());
        });

        component.emit('render');

        return component;
    };

    function handleSettle(){
        var tab = slab.tab();

        if(isNaN(tab)) {
            return;
        }

        component.tab(tab);
    }

    slab.on('settle', handleSettle);

    component.tab.on('change', function(tab){
        slab.tab(tab);
    });

    component.on('destroy', function(){
        settings.tab.detach();
        component.detach();
        slab.removeListener('settle', handleSettle);
    });

    return component;
};

module.exports.expectedComponents = ['_generic'];