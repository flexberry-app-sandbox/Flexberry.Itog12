import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISItog12ДирОтдПоРабСКлLForm from './forms/i-i-s-itog12-дир-отд-по-раб-с-кл-l';
import IISItog12ДлительностьLForm from './forms/i-i-s-itog12-длительность-l';
import IISItog12ДоговорLForm from './forms/i-i-s-itog12-договор-l';
import IISItog12ЗатрВремяLForm from './forms/i-i-s-itog12-затр-время-l';
import IISItog12КлиентLForm from './forms/i-i-s-itog12-клиент-l';
import IISItog12РасчетОстВремLForm from './forms/i-i-s-itog12-расчет-ост-врем-l';
import IISItog12УслугиLForm from './forms/i-i-s-itog12-услуги-l';
import IISItog12ДирОтдПоРабСКлEForm from './forms/i-i-s-itog12-дир-отд-по-раб-с-кл-e';
import IISItog12ДлительностьEForm from './forms/i-i-s-itog12-длительность-e';
import IISItog12ДоговорEForm from './forms/i-i-s-itog12-договор-e';
import IISItog12ЗатрВремяEForm from './forms/i-i-s-itog12-затр-время-e';
import IISItog12КлиентEForm from './forms/i-i-s-itog12-клиент-e';
import IISItog12РасчетОстВремEForm from './forms/i-i-s-itog12-расчет-ост-врем-e';
import IISItog12УслугиEForm from './forms/i-i-s-itog12-услуги-e';
import IISItog12ДирОтдПоРабСКлModel from './models/i-i-s-itog12-дир-отд-по-раб-с-кл';
import IISItog12ДлительностьModel from './models/i-i-s-itog12-длительность';
import IISItog12ДоговорModel from './models/i-i-s-itog12-договор';
import IISItog12ЗатрВремяModel from './models/i-i-s-itog12-затр-время';
import IISItog12КлиентModel from './models/i-i-s-itog12-клиент';
import IISItog12ОказУслугModel from './models/i-i-s-itog12-оказ-услуг';
import IISItog12РасчетОстВремModel from './models/i-i-s-itog12-расчет-ост-врем';
import IISItog12УслугиModel from './models/i-i-s-itog12-услуги';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-itog12-дир-отд-по-раб-с-кл': IISItog12ДирОтдПоРабСКлModel,
    'i-i-s-itog12-длительность': IISItog12ДлительностьModel,
    'i-i-s-itog12-договор': IISItog12ДоговорModel,
    'i-i-s-itog12-затр-время': IISItog12ЗатрВремяModel,
    'i-i-s-itog12-клиент': IISItog12КлиентModel,
    'i-i-s-itog12-оказ-услуг': IISItog12ОказУслугModel,
    'i-i-s-itog12-расчет-ост-врем': IISItog12РасчетОстВремModel,
    'i-i-s-itog12-услуги': IISItog12УслугиModel
  },

  'application-name': 'Itog11',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Itog11',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Itog11',
          title: 'Itog11'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        справочники: {
          caption: 'Справочники',
          title: 'Справочники',
          'i-i-s-itog12-дир-отд-по-раб-с-кл-l': {
            caption: 'Дир отд по раб с кл',
            title: ''
          },
          'i-i-s-itog12-клиент-l': {
            caption: 'Клиент',
            title: ''
          }
        },
        документы: {
          caption: 'Документы',
          title: 'Документы',
          'i-i-s-itog12-расчет-ост-врем-l': {
            caption: 'Расчет ост врем',
            title: ''
          },
          'i-i-s-itog12-договор-l': {
            caption: 'Договор',
            title: ''
          }
        },
        прочее: {
          caption: 'Прочее',
          title: 'Прочее',
          'i-i-s-itog12-затр-время-l': {
            caption: 'Затр время',
            title: ''
          },
          'i-i-s-itog12-длительность-l': {
            caption: 'Длительность',
            title: ''
          },
          'i-i-s-itog12-услуги-l': {
            caption: 'Услуги',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-itog12-дир-отд-по-раб-с-кл-l': IISItog12ДирОтдПоРабСКлLForm,
    'i-i-s-itog12-длительность-l': IISItog12ДлительностьLForm,
    'i-i-s-itog12-договор-l': IISItog12ДоговорLForm,
    'i-i-s-itog12-затр-время-l': IISItog12ЗатрВремяLForm,
    'i-i-s-itog12-клиент-l': IISItog12КлиентLForm,
    'i-i-s-itog12-расчет-ост-врем-l': IISItog12РасчетОстВремLForm,
    'i-i-s-itog12-услуги-l': IISItog12УслугиLForm,
    'i-i-s-itog12-дир-отд-по-раб-с-кл-e': IISItog12ДирОтдПоРабСКлEForm,
    'i-i-s-itog12-длительность-e': IISItog12ДлительностьEForm,
    'i-i-s-itog12-договор-e': IISItog12ДоговорEForm,
    'i-i-s-itog12-затр-время-e': IISItog12ЗатрВремяEForm,
    'i-i-s-itog12-клиент-e': IISItog12КлиентEForm,
    'i-i-s-itog12-расчет-ост-врем-e': IISItog12РасчетОстВремEForm,
    'i-i-s-itog12-услуги-e': IISItog12УслугиEForm
  },

});

export default translations;
