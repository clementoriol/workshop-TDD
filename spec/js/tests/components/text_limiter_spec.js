import { textLimiter } from 'components/text_limiter';

const fakeText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nullam molestie lacus eu venenatis vulputate. Aliquam sed imperdiet velit.
  Nunc auctor placerat ipsum ac lobortis. Fusce vitae lacus sem. Morbi
  vehicula auctor elementum. Cras turpis sapien, blandit nec sagittis
  sit amet, congue nec est. Phasellus neque diam, scelerisque id
  dignissim vel, elementum sit amet nulla. Aliquam lobortis eros
  nec venenatis sollicitudin. Vivamus auctor tortor vitae arcu
  tempus, vel auctor est finibus. Sed posuere.
`;

const shortText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

const defaultLimit = 200;
const defaultSuffix = '...';

const customOptions = {
  limit: 100,
  suffix: '(...)',
  button: false
};

const getSuffix = (text, suffix) => {
  return text.slice(text.length - suffix.length, text.length);
};

describe('Text Limiter component', () => {
  // TODO STEP 2: write the tests for the component
  // Try to achieve 100% coverage
  describe('with default settings', function () {
    beforeEach(function () {
      affix('p#js-textLimiter');
      $('#js-textLimiter').text(fakeText);
      textLimiter('#js-textLimiter');
      this.element = $('#js-textLimiter');
    });

    it('should limit the text to the default limit', function () {
      expect(this.element.text().length).toBe(defaultLimit + defaultSuffix.length);
    });

    it('should append the default suffix', function () {
      const text = this.element.text();
      expect(getSuffix(text, defaultSuffix)).toBe(defaultSuffix);
    });

    it('should create a button', function () {
      expect($('.button--showMore')).toBeInDOM();
    });

    it('should show the full text after clicking the button', function () {
      $('button.button--showMore').click();
      const text = this.element.text();
      expect(text.length).toBe(fakeText.length);
      expect(text[text.length]).toBe(fakeText[fakeText.length]);
    });

    it('should work properly after multiple clicks', function () {
      $('button.button--showMore').click();
      $('button.button--showMore').click();
      $('button.button--showMore').click();
      $('button.button--showMore').click();
      const text = this.element.text();
      expect(this.element.text().length).toBe(defaultLimit + defaultSuffix.length);
      expect(getSuffix(text, defaultSuffix)).toBe(defaultSuffix);
    });

    it('should add an active class to the button after a click', function () {
      const button = $('button.button--showMore');
      button.click();
      expect(button).toHaveClass('is-active');
    });
  });

  describe('with a short text', function () {
    beforeEach(function () {
      affix('p#js-textLimiter');
      $('#js-textLimiter').text(shortText);
      textLimiter('#js-textLimiter');
      this.element = $('#js-textLimiter');
    });

    it('should not truncate a text shorter than the default limit', function () {
      const text = this.element.text();
      expect(text.length).toBe(shortText.length);
      expect(text[text.length]).toBe(shortText[shortText.length]);
      expect($('.button--showMore')).not.toBeInDOM();
    });
  });

  describe('with custom settings', function () {
    beforeEach(function() {
      affix('p#js-textLimiter');
      $('#js-textLimiter').text(fakeText);
      textLimiter('#js-textLimiter', customOptions);
      this.element = $('#js-textLimiter');
    });

    it('should limit the text to the length passed in the settings', function () {
      expect(this.element.text().length).toBe(customOptions.limit + customOptions.suffix.length);
    });

    it('should append the suffix passed in the settings', function () {
      const text = this.element.text();
      expect(getSuffix(text, customOptions.suffix)).toBe(customOptions.suffix);
    });

    it('should\'nt show the button if the related option is set to false', function () {
      expect($('button.button--showMore')).not.toBeInDOM();
    });
  });

  describe('with multiple elements in dom', function () {
    beforeEach(function() {
      affix('p.js-textLimiter*3');
      $('.js-textLimiter').text(fakeText);
      textLimiter('.js-textLimiter');
      this.elements = $('.js-textLimiter');
    });

    it('should truncate every element as expected', function () {
      const texts = $.map(this.elements, (element) => {
        return $(element).text();
      });
      texts.forEach(text => {
        expect(text.length).toBe(defaultLimit + defaultSuffix.length);
        expect(getSuffix(text, defaultSuffix)).toBe(defaultSuffix);
      });
    });

    it('should handle clicks in the expected way', function () {
      const button1 = $(this.elements[0]).next();
      const button2 = $(this.elements[1]).next();
      const button3 = $(this.elements[2]).next();

      button1.click();
      button2.click();
      button2.click();
      button3.click();
      button3.click();
      button3.click();

      expect($(this.elements[0]).text().length).toBe(fakeText.length);
      expect($(this.elements[1]).text().length).toBe(defaultLimit + defaultSuffix.length);
      expect($(this.elements[2]).text().length).toBe(fakeText.length);
    });
  });
});
