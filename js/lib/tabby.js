/** @format */

(function() {
    'use strict';

    let htmlEditor = document.getElementById('html-editor');
    let cssEditor = document.getElementById('css-editor');
    let jsEditor = document.getElementById('js-editor');
    let tabContainer = document.getElementById('tab-container');
    let tabs = tabContainer.querySelectorAll('button[role="tab"]');

    let editors = {
        html: {
            editor: undefined,
            code: htmlEditor,
            config: {
                lineNumbers: true,
                mode: 'htmlmixed',
                value: htmlEditor.value
            }
        },
        css: {
            editor: undefined,
            code: cssEditor,
            config: {
                lineNumbers: true,
                mode: 'css',
                value: cssEditor.value
            }
        },
        js: {
            editor: undefined,
            code: jsEditor,
            config: {
                lineNumbers: true,
                mode: 'javascript',
                value: jsEditor.value
            }
        }
    };

    /**
     * Initialise the specified editor if not already initialised
     * @param {String} editorType - The editor to initialise
     */
    function initEditor(editorType) {
        if (editors[editorType].editor !== undefined) {
            return;
        }

        editors[editorType].editor = CodeMirror.fromTextArea(
            editors[editorType].code,
            editors[editorType].config
        );
    }

    /**
     * Hides all tabpanels
     */
    function hideTabPanels() {
        // get all section with a role of tabpanel
        let tabPanels = tabContainer.querySelectorAll('[role="tabpanel"]');

        // hide all tabpanels
        for (let panel of tabPanels) {
            panel.classList.add('hidden');
        }
    }

    /**
     * Sets the newly activated tab as active, and ensures that
     * the previously active tab is unset.
     * @param {Object} activeTab - The tab to activate
     */
    function setActiveTab(activeTab) {
        let currentSelectedTab = document.querySelector(
            'button[aria-selected="true"]'
        );
        // set the currentSelectedTab to false
        currentSelectedTab.setAttribute('aria-selected', false);
        currentSelectedTab.setAttribute('tabindex', -1);
        // set the activated tab to selected
        activeTab.setAttribute('aria-selected', true);
        activeTab.removeAttribute('tabindex');
        activeTab.focus();
    }

    /**
     * Handles moving focus and activating the next tab in either direction,
     * based on arrow key events
     * @param {String} direction - The direction in which to move tab focus
     * Must be either forward, or reverse.
     */
    function setNextActiveTab(direction) {
        let activeTab = tabContainer.querySelector(
            'button[aria-selected="true"]'
        );

        // if the direction specified is not valid, simply return
        if (direction !== 'forward' && direction !== 'reverse') {
            return;
        }

        if (direction === 'forward') {
            if (activeTab.nextElementSibling) {
                setActiveTab(activeTab.nextElementSibling);
                activeTab.nextElementSibling.click();
            } else {
                // reached the last tab, loop back to the first tab
                setActiveTab(tabs[0]);
                tabs[0].click();
            }
        } else if (direction === 'reverse') {
            if (activeTab.previousElementSibling) {
                setActiveTab(activeTab.previousElementSibling);
                activeTab.previousElementSibling.click();
            } else {
                // reached the first tab, loop around to the last tab
                setActiveTab(tabs[tabs.length - 1]);
                tabs[tabs.length - 1].click();
            }
        }
    }

    tabContainer.addEventListener('click', function(event) {
        let eventTarget = event.target;
        let role = eventTarget.getAttribute('role');

        if (role === 'tab') {
            let selectedPanel = document.getElementById(
                eventTarget.getAttribute('aria-controls')
            );

            hideTabPanels();
            setActiveTab(eventTarget);

            // now show the selected tabpanel
            selectedPanel.classList.remove('hidden');
            // initialise the specific editor if required
            initEditor(eventTarget.id);
        }
    });

    tabContainer.addEventListener('keyup', function(event) {
        switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
            setNextActiveTab('forward');
            break;
        case 'ArrowLeft':
        case 'ArrowUp':
            setNextActiveTab('reverse');
            break;
        case 'Home':
            setActiveTab(tabs[0]);
            break;
        case 'End':
            setActiveTab(tabs[tabs.length - 1]);
            break;
        case 'default':
            return;
        }
    });

    initEditor('html');
})();
