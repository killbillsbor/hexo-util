'use strict';

var escapeDiacritic = require('./escape_diacritic');
var escapeRegExp = require('./escape_regexp');
var tr = require('transliteration');
// eslint-disable-next-line no-control-regex
var rControl = /[\u0000-\u001f]/g;
var rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g;

function slugize(str, options) {
  if (typeof str !== 'string') throw new TypeError('str must be a string!');
  options = options || {};

  var separator = options.separator || '-';
  var escapedSep = escapeRegExp(separator);
  var result;

	str = str.toLowerCase();

	if (str === 'фейсбук') {
		result = 'facebook'
	} else if (str === 'твиттер') {
		result = 'twitter'
	} else if (str === 'инстаграм') {
		result = 'instagram'
	} else if (str === 'телеграм') {
		result = 'telegram'
	} else if (str === 'амплифер') {
		result = 'amplifr'
	} else if (str === 'колонка') {
		result = 'columns'
	} else {
		result = tr.slugify(str);
	}

  switch (options.transform) {
    case 1:
      return result.toLowerCase();

    case 2:
      return result.toUpperCase();

    default:
      return result;
  }
}

module.exports = slugize;
