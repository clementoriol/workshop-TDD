import { truncate } from 'utils/string';
import $ from 'jquery';
import { assign } from 'lodash';

export const textLimiter = (selector, settings) => {
  const defaultSettings = {
    limit: 200,
    suffix: '...',
    button: true
  };

  if (settings) {
    settings = assign(defaultSettings, settings);
  } else {
    settings = defaultSettings;
  }

  const state = {
    elements: $(selector),
    texts: [],
    open: []
  };

  const toggleText = function (index, event) {
    event.preventDefault();
    $(this).toggleClass('is-active');
    const currentElement = $(state.elements[index]);
    if (state.open[index]) {
      currentElement.text(truncate(state.texts[index], settings.limit, settings.suffix));
    } else {
      currentElement.text(state.texts[index]);
    }
    state.open[index] = !state.open[index];
  };

  const createButton = ($element, index) => {
    const button = $('<button class="button button--showMore"></button>');
    $element.after(button);
    button.on('click', toggleText.bind(button, index));
  };

  const init = () => {
    $.each(state.elements, (index, element) => {
      const $element = $(element);
      if ($element.text().length > settings.limit) {
        const text = $element.text();
        state.texts[index] = text;
        $element.text(truncate(text, settings.limit, settings.suffix));
        state.open[index] = false;
        if (settings.button) {
          createButton($element, index);
        }
      }
    });
  };

  if (state.elements.length > 0) {
    init();
  }
};
