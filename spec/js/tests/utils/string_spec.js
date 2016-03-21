import { truncate } from 'utils/string';

var testString =
  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio laborum pariatur totam ullam vel
  voluptate? Accusantium architecto, atque dolores ea laborum magnam magni nulla, omnis, quas quod sunt velit!
  Lorem ipsum dolor sitamet, consectetur adipisicing elit. A aliquam at, consequatur culpa dolores, esse
  excepturi fugiat incidunt ipsam iustolaudantium nam, natus necessitatibus praesentium quidem quo quod saepe
  totam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto beatae doloremque eaque
  eum laboriosam laborum molestiae nam natus necessitatibus obcaecati officia quaerat, quia quibusdam
  recusandae repellendus saepe sapiente sequi!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi, dolorem, impedit ipsa ipsam libero
  non obcaecati odio, officiis quos sint temporibus. Alias autem molestiae necessitatibus nesciunt nostrum
  repellat saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, numquam quisquam! Eaque
  eligendi esse eum in nam nisi odio, quas quisquam similique temporibus? Eum, iure nihil! Amet ipsa quas
  recusandae.`;

var defaultSymbol = '...';

describe('String Utils', () => {
  beforeEach(function () {
    spyOn(console, 'error');
  });

  it('should correctly truncate a string', function() {
    const truncatedText = truncate(testString, 200);
    expect(truncatedText.length).toBe(200 + defaultSymbol.length);
    expect(truncatedText.slice(truncatedText.length - 3, truncatedText.length)).toBe('...');
  });

  it('should truncate with the passed symbol', function () {
    const truncatedText = truncate(testString, 200, '$');
    expect(truncatedText[truncatedText.length - 1]).toBe('$');
  });

  it('should throw a warning if the passed text is not a string', function () {
    const truncatedText = truncate(42, 200);
    expect(console.error).toHaveBeenCalledTimes(1);
    // Notes :
    // With spies, you can also check with which value the method you're spying on has been called :
    // expect(console.error).toHaveBeenCalledWith('the value you expect');

    // You can also access more info about the calls made to the spy :
    // (http://jasmine.github.io/2.4/introduction.html#section-Other_tracking_properties)
    // console.error.calls
  });

  it('should throw a warning if the passed limit is not a number', function () {
    const truncatedText = truncate(testString, 'randomString');
    expect(console.error).toHaveBeenCalledTimes(1);
  });

  it('should throw a warning if the passed limit is not a positive number', function () {
    const truncatedText = truncate(testString, -1);
    expect(console.error).toHaveBeenCalledTimes(1);
  });

  it('should trim space characters when needed', function () {
    const truncatedText = truncate('text with spaces', 5);
    expect(truncatedText).toBe('text...');
  });
});
