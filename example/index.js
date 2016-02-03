var createTabs = require('../'),
    crel = require('crel');

function createTab(){
    return crel('div', {class: 'tab'},
        crel('div', {class: 'content'},
            'Bacon ipsum dolor amet ham hock shankle ground round alcatra corned beef kielbasa strip steak chicken sirloin tri-tip. Brisket tongue doner bresaola, short loin pig alcatra strip steak fatback tenderloin frankfurter meatloaf filet mignon. Ground round doner chicken, turducken venison filet mignon fatback shank drumstick brisket sirloin. Ribeye flank corned beef, fatback filet mignon leberkas bresaola shank shankle jerky pork. Sausage cow t-bone bacon, ham hock chicken meatball filet mignon spare ribs leberkas landjaeger pork biltong. Biltong t-bone pig short ribs salami tenderloin cow shank venison jowl bresaola.'
        )
    );
}

window.onload = function(){

    // Create a tabs component.
    var tabs = createTabs();

    var currentTab = crel('span', '0');
    var previousTab = crel('button', '<');
    var nextTab = crel('button', '>');

    previousTab.addEventListener('click', function(){
        tabs.tab(Math.max(tabs.tab() - 1, 0));
    });

    nextTab.addEventListener('click', function(){
        tabs.tab(Math.min(tabs.tab() + 1, tabs.tabs() - 1));
    });

    tabs.tab.on('change', function(){
        currentTab.textContent = tabs.tab();
    });

    tabs.insert(createTab());
    tabs.insert(createTab());
    tabs.insert(createTab());

    document.body.appendChild(tabs.element);
    document.body.appendChild(previousTab);
    document.body.appendChild(currentTab);
    document.body.appendChild(nextTab);

};