import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяПоДоговору: DS.attr('number'),
  доступно: DS.attr('number'),
  использовано: DS.attr('number'),
  оказУсл: DS.hasMany('i-i-s-itog12-оказ-услуг', { inverse: 'расчетОстВрем', async: false })
});

export let ValidationRules = {
  времяПоДоговору: {
    descriptionKey: 'models.i-i-s-itog12-расчет-ост-врем.validations.времяПоДоговору.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  доступно: {
    descriptionKey: 'models.i-i-s-itog12-расчет-ост-врем.validations.доступно.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  использовано: {
    descriptionKey: 'models.i-i-s-itog12-расчет-ост-врем.validations.использовано.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  оказУсл: {
    descriptionKey: 'models.i-i-s-itog12-расчет-ост-врем.validations.оказУсл.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасчетОстВремE', 'i-i-s-itog12-расчет-ост-врем', {
    времяПоДоговору: attr('Время по договору', { index: 0 }),
    доступно: attr('Доступно', { index: 1 }),
    использовано: attr('Использовано', { index: 2 }),
    оказУсл: hasMany('i-i-s-itog12-оказ-услуг', 'Оказанные услуги', {
      дата: attr('Дата', { index: 0 }),
      времяКонсульт: attr('Время консультаций', { index: 1 }),
      договор: belongsTo('i-i-s-itog12-договор', 'Номер договора', {
        длительность: belongsTo('i-i-s-itog12-длительность', '', {
          длительность: attr('Длительность', { index: 3 })
        }, { index: -1, hidden: true })
      }, { index: 2, displayMemberPath: 'номер' }),
      услуги: belongsTo('i-i-s-itog12-услуги', 'Наименование услуг', {
        затрВремя: belongsTo('i-i-s-itog12-затр-время', '', {
          затрВремя: attr('Затраченное время', { index: 5 })
        }, { index: -1, hidden: true })
      }, { index: 4, displayMemberPath: 'услуги' })
    })
  });

  modelClass.defineProjection('РасчетОстВремL', 'i-i-s-itog12-расчет-ост-врем', {
    времяПоДоговору: attr('Время по договору', { index: 0 }),
    доступно: attr('Доступно', { index: 1 }),
    использовано: attr('Использовано', { index: 2 })
  });
};
