'use strict';

(function() {
    var choiceFixed = document.getElementById('choice-fixed');
    var choiceSticky = document.getElementById('choice-sticky');
    var code = '';
    var codeElement = {};

    choiceFixed.addEventListener('click', function(event) {
        var exampleChoice = event.currentTarget.parentNode;
        var fixedExample = document.querySelector('.fixed-example');
        var isSelected = exampleChoice.classList.value.indexOf('selected') > -1;

        // Is target choice-fixed and not currently selected
        if (event.currentTarget.id === 'choice-fixed' && !isSelected) {
            codeElement = event.currentTarget.querySelector('code');
            code = codeElement.textContent;

            mceUtils.showCustomExampleHTML(fixedExample);

            // TO-DO: Refector so we do not have these globals
            applyCode(code, codeElement, fixedExample.querySelector('.box'));
        }
    });

    choiceSticky.addEventListener('click', function(event) {
        var exampleChoice = event.currentTarget.parentNode;
        var stickyExample = document.querySelector('.sticky-example');
        var isSelected = exampleChoice.classList.value.indexOf('selected') > -1;

        // Is target choice-fixed and not currently selected
        if (event.currentTarget.id === 'choice-sticky' && !isSelected) {
            var dtElements = stickyExample.querySelectorAll('dt');
            codeElement = event.currentTarget.querySelector('code');
            code = codeElement.textContent;

            mceUtils.showCustomExampleHTML(stickyExample);

            for (var i = 0, l = dtElements.length; i < l; i++) {
                applyCode(code, codeElement, dtElements[i]);
            }
        }
    });
})();
