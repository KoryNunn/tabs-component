# tabs-component

A simple tabs component

Built with `fastn.js` and `slabs`

# Usage

## Settings

```
{
    tab: int, shown tab index
}
```

## Standalone

```
var createTabsComponent = require('tabs-component');

// Create the tabs
var tabs = createTabsComponent({
        options: ['foo', 'bar', 'baz']
    });

// Watch for changes to the tabs current tab
tabs.tab.on('change', function(value){
    console.log(value);
});

// Put the tabs's element somewhere in the DOM.
document.body.appendChild(tabs.element);

// Add tab contents
tabs.insert(<DOM node> or `fastn` component);
```

## Fastn component

```
var fastn = require('fastn')({
    ... other components...
    tabs: require('tabs-component/tabsComponent')
});

var tabs = fastn('tabs', { options... });
```

## Inserting

```
someDomNode.appendChild(tabs.element);
```

## Properties

### Tab

```
// retrieve value
tabs.tab(); // returns the current tab

// set value
tabs.tab(2); -// sets the current tab, returns tabs.tab property

// watch for changes
tabs.tab.on('change', function(tab){
    // Do something
});
```

### Tabs

```
// retrieve value
tabs.tabs(); // returns the number of tabs

// watch for changes
tabs.tabs.on('change', function(tabs){
    // Do something
});