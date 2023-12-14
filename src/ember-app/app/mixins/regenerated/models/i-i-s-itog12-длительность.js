import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  длительность: DS.attr('number')
});

export let ValidationRules = {
  длительность: {
    descriptionKey: 'models.i-i-s-itog12-длительность.validations.длительность.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДлительностьE', 'i-i-s-itog12-длительность', {
    длительность: attr('Длительность', { index: 0 })
  });

  modelClass.defineProjection('ДлительностьL', 'i-i-s-itog12-длительность', {
    длительность: attr('Длительность', { index: 0 })
  });
};
