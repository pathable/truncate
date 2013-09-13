[![Build Status](https://travis-ci.org/pathable/truncate.png?branch=master)](https://travis-ci.org/pathable/truncate)

## Usage

### jQuery.truncate(html, options)

```javascript
> jQuery.truncate('<p>Stuff and <i>Nonsense</i></p>', {
  length: 13
});
'<p>Stuff and <i>No…</i></p>'
```

### $el.truncate(options)

```javascript
> jQuery('<p>Stuff and <i>Nonsense</i></p>').truncate({
  length: 13
}).html();
'<p>Stuff and <i>No…</i></p>'
```

## Options

Default options are stored on `jQuery.truncate.defaults`.

### length

*Default: Infinity*

The maximum length (including the ellipsis) of the truncated html.

### stripTags

*Default: false*

If `stripTags` is truthy all html tags will be stipped, leaving only the text.

```javascript
> jQuery.truncate('<p>Stuff and <i>Nonsense</i></p>', {
  length: 13,
  stripTags: true
});
'Stuff and No…'
```

### words

*Default: false*

If `words` is truthy the input will only be truncated at word boundaries.

```javascript
> jQuery.truncate('<p>Stuff and <i>Nonsense</i></p>', {
  length: 13,
  words: true
});
'<p>Stuff and…</p>'
```

### noBreaks

*Default: false*

If `noBreaks` is truthy the input will contain no break elements.

```javascript
> jQuery.truncate('<p>Stuff and<br><i>Nonsense</i></p>', {
  length: 13,
  noBreaks: true
});
'<p>Stuff and <i>No…</i></p>'
```

### ellipsis

*Default: '…'*

The `ellipsis` setting is used to provide a different character for the ellipsis.

```javascript
> jQuery.truncate('<p>Stuff and <i>Nonsense</i></p>', {
  length: 13,
  ellipsis: '~'
});
'<p>Stuff and <i>No~</i></p>'
```
