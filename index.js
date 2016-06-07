'use strict';

/**
 * quote Input Plugin
 *
 *
 * Simple input plugin for quote type
 */
const validation = require('./lib/validation.js');

/**
 * Single quote Input Plugin
 * @module quoteInputPlugin
 */
module.exports = {
  name: 'quote',
  description: 'Simple input plugin for quote type',
  validation: {
    quoteValidation: validation,
  },
  inputs: {
    quote: {
      validation: {
        function: 'quoteValidation',
        on: 'blur',
      },
      label: 'Quote:',
      type: 'text',
      placeholder: 'Things aren\'t different. Things are things.',
      settings: {
        empty: false,
      },
    },
    author: {
      validation: {
        function: 'quoteValidation',
        on: 'blur',
      },
      label: 'Author:',
      type: 'text',
      placeholder: 'William Gibson',
      settings: {
        empty: false,
      },
    },
    source: {
      validation: {
        function: 'quoteValidation',
        on: 'blur',
      },
      label: 'Citation:',
      type: 'text',
      placeholder: 'Neuromancer',
      settings: {
        empty: false,
      },
    },
  },
  html: '<label for="{{quote.id}}">{{quote.label}}</label><input type="{{quote.type}}" id="{{quote.id}}" name="{{quote.name}}" value="{{quote.value}}" placeholder="{{quote.placeholder}}" /><label for="{{author.id}}">{{author.label}}</label><input type="{{author.type}}" id="{{author.id}}" name="{{author.name}}" value="{{author.value}}" placeholder="{{author.placeholder}}" /><label for="{{source.id}}">{{source.label}}</label><input type="{{source.type}}" id="{{source.id}}" name="{{source.name}}" value="{{source.value}}" placeholder="{{source.placeholder}}" />',
};
