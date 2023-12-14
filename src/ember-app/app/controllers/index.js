import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочники.caption'),
          title: i18n.t('forms.application.sitemap.справочники.title'),
          children: [{
            link: 'i-i-s-itog12-дир-отд-по-раб-с-кл-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-itog12-дир-отд-по-раб-с-кл-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-itog12-дир-отд-по-раб-с-кл-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-itog12-клиент-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-itog12-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-itog12-клиент-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.документы.caption'),
          title: i18n.t('forms.application.sitemap.документы.title'),
          children: [{
            link: 'i-i-s-itog12-расчет-ост-врем-l',
            caption: i18n.t('forms.application.sitemap.документы.i-i-s-itog12-расчет-ост-врем-l.caption'),
            title: i18n.t('forms.application.sitemap.документы.i-i-s-itog12-расчет-ост-врем-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-itog12-договор-l',
            caption: i18n.t('forms.application.sitemap.документы.i-i-s-itog12-договор-l.caption'),
            title: i18n.t('forms.application.sitemap.документы.i-i-s-itog12-договор-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.прочее.caption'),
          title: i18n.t('forms.application.sitemap.прочее.title'),
          children: [{
            link: 'i-i-s-itog12-затр-время-l',
            caption: i18n.t('forms.application.sitemap.прочее.i-i-s-itog12-затр-время-l.caption'),
            title: i18n.t('forms.application.sitemap.прочее.i-i-s-itog12-затр-время-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-itog12-длительность-l',
            caption: i18n.t('forms.application.sitemap.прочее.i-i-s-itog12-длительность-l.caption'),
            title: i18n.t('forms.application.sitemap.прочее.i-i-s-itog12-длительность-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-itog12-услуги-l',
            caption: i18n.t('forms.application.sitemap.прочее.i-i-s-itog12-услуги-l.caption'),
            title: i18n.t('forms.application.sitemap.прочее.i-i-s-itog12-услуги-l.title'),
            icon: 'tasks',
            children: null
          }]
        }
      ]
    };
  }),
})