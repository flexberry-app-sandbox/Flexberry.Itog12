import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номер: DS.attr('number'),
  статус: DS.attr('i-i-s-itog12-статус'),
  стоимость: DS.attr('number'),
  тип: DS.attr('i-i-s-itog12-тип-договора'),
  дирОтдПоРабСКл: DS.belongsTo('i-i-s-itog12-дир-отд-по-раб-с-кл', { inverse: null, async: false }),
  длительность: DS.belongsTo('i-i-s-itog12-длительность', { inverse: null, async: false }),
  клиент: DS.belongsTo('i-i-s-itog12-клиент', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-itog12-договор.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-itog12-договор.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-itog12-договор.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-itog12-договор.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-itog12-договор.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дирОтдПоРабСКл: {
    descriptionKey: 'models.i-i-s-itog12-договор.validations.дирОтдПоРабСКл.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  длительность: {
    descriptionKey: 'models.i-i-s-itog12-договор.validations.длительность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-itog12-договор.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДоговорE', 'i-i-s-itog12-договор', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    статус: attr('Статус', { index: 2 }),
    тип: attr('Тип', { index: 3 }),
    длительность: belongsTo('i-i-s-itog12-длительность', 'Длительность', {
      длительность: attr('Срок действия', { index: 5 })
    }, { index: 4 }),
    стоимость: attr('Стоимость', { index: 6 }),
    дирОтдПоРабСКл: belongsTo('i-i-s-itog12-дир-отд-по-раб-с-кл', 'Директор отдела по работе с клиентами', {
      фамилия: attr('Фамилия', { index: 8 }),
      имя: attr('Имя', { index: 9 }),
      отчество: attr('Отчество', { index: 10 })
    }, { index: 7 }),
    клиент: belongsTo('i-i-s-itog12-клиент', 'Клиент', {
      фамилия: attr('Фамилия', { index: 12 }),
      имя: attr('Имя', { index: 13 }),
      отчество: attr('Отчество', { index: 14 })
    }, { index: 11 })
  });

  modelClass.defineProjection('ДоговорL', 'i-i-s-itog12-договор', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    статус: attr('Статус', { index: 2 }),
    тип: attr('Тип', { index: 3 }),
    стоимость: attr('Стоимость', { index: 4 }),
    длительность: belongsTo('i-i-s-itog12-длительность', 'Срок действия', {
      длительность: attr('Срок действия', { index: 5 })
    }, { index: -1, hidden: true }),
    дирОтдПоРабСКл: belongsTo('i-i-s-itog12-дир-отд-по-раб-с-кл', 'Фамилия директора', {
      фамилия: attr('Фамилия директора', { index: 6 })
    }, { index: -1, hidden: true }),
    клиент: belongsTo('i-i-s-itog12-клиент', 'Фамилия клиента', {
      фамилия: attr('Фамилия клиента', { index: 7 })
    }, { index: -1, hidden: true })
  });
};
