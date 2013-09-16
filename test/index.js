(function($) {

  module('truncate');

  var txt = 'stuff and nonsense';
  var html = '<i><em>stuff</em> an</i>d <b>nonsense</b>';

  test('Accept a number as options.', function() {
    strictEqual($.truncate('<i>four</i>', 3), '<i>fo…</i>');
  });

  test('plain text', function() {
    strictEqual($.truncate(txt, {length: 20}), txt);
    strictEqual($.truncate(txt, {length: 18}), txt);
    strictEqual($.truncate(txt, {length: 9}), 'stuff an…');
  });

  test('tags', function() {
    strictEqual($.truncate(html, {length: 20}), html);
    strictEqual($.truncate(html, {length: 18}), html);
    strictEqual($.truncate(html, {length: 13}), '<i><em>stuff</em> an</i>d <b>no…</b>');
    strictEqual($.truncate(html, {length: 9}), '<i><em>stuff</em> an</i>…');
    strictEqual($.truncate(html, {length: 8}), '<i><em>stuff</em> a…</i>');
    strictEqual($.truncate(html, {length: 7}), '<i><em>stuff</em> …</i>');
    strictEqual($.truncate(html, {length: 6}), '<i><em>stuff</em>…</i>');
    strictEqual($.truncate(html, {length: 5}), '<i><em>stuf…</em></i>');
    strictEqual($.truncate(html, {length: 4}), '<i><em>stu…</em></i>');
  });

  test('words', function() {
    strictEqual($.truncate(txt, {length: 20, words: true}), txt);
    strictEqual($.truncate(txt, {length: 18, words: true}), txt);
    strictEqual($.truncate(txt, {length: 14, words: true}), 'stuff and…');
    strictEqual($.truncate(txt, {length: 10, words: true}), 'stuff and…');
    strictEqual($.truncate(txt, {length: 9, words: true}), 'stuff…');
  });

  test('noBreaks', function() {
    strictEqual($.truncate('foo<br>bar baz', {length: 8, noBreaks: true}), 'foo bar…');
  });

  test('stripTags', function() {
    strictEqual($.truncate('foo <em>bar baz</em>', {stripTags: true}), 'foo bar baz');
    strictEqual($.truncate('foo <em>bar baz</em>', {length: 8, stripTags: true}), 'foo bar…');
  });

  test('entities', function() {
    var html = '<div>foo&lt;bar&lt;baz</div>';
    strictEqual($.truncate(html, {length: 5}), '<div>foo&lt;…</div>');
    strictEqual($.truncate(html, {length: 6}), '<div>foo&lt;b…</div>');
    strictEqual($.truncate(html, {length: 8}), '<div>foo&lt;bar…</div>');
    strictEqual($.truncate(html, {length: 9}), '<div>foo&lt;bar&lt;…</div>');
  });

  test('html ellipsis', function() {
    var ellipsis = '… <button>read more</button>';
    strictEqual($.truncate(txt, {length: 9, ellipsis: ellipsis}), 'stuff an… <button>read more</button>');
    strictEqual($.truncate(html, {length: 4, ellipsis: ellipsis}), '<i><em>stu… <button>read more</button></em></i>');
  });

})(jQuery);
