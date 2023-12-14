import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-itog12-дир-отд-по-раб-с-кл-l');
  this.route('i-i-s-itog12-дир-отд-по-раб-с-кл-e',
  { path: 'i-i-s-itog12-дир-отд-по-раб-с-кл-e/:id' });
  this.route('i-i-s-itog12-дир-отд-по-раб-с-кл-e.new',
  { path: 'i-i-s-itog12-дир-отд-по-раб-с-кл-e/new' });
  this.route('i-i-s-itog12-длительность-l');
  this.route('i-i-s-itog12-длительность-e',
  { path: 'i-i-s-itog12-длительность-e/:id' });
  this.route('i-i-s-itog12-длительность-e.new',
  { path: 'i-i-s-itog12-длительность-e/new' });
  this.route('i-i-s-itog12-договор-l');
  this.route('i-i-s-itog12-договор-e',
  { path: 'i-i-s-itog12-договор-e/:id' });
  this.route('i-i-s-itog12-договор-e.new',
  { path: 'i-i-s-itog12-договор-e/new' });
  this.route('i-i-s-itog12-затр-время-l');
  this.route('i-i-s-itog12-затр-время-e',
  { path: 'i-i-s-itog12-затр-время-e/:id' });
  this.route('i-i-s-itog12-затр-время-e.new',
  { path: 'i-i-s-itog12-затр-время-e/new' });
  this.route('i-i-s-itog12-клиент-l');
  this.route('i-i-s-itog12-клиент-e',
  { path: 'i-i-s-itog12-клиент-e/:id' });
  this.route('i-i-s-itog12-клиент-e.new',
  { path: 'i-i-s-itog12-клиент-e/new' });
  this.route('i-i-s-itog12-расчет-ост-врем-l');
  this.route('i-i-s-itog12-расчет-ост-врем-e',
  { path: 'i-i-s-itog12-расчет-ост-врем-e/:id' });
  this.route('i-i-s-itog12-расчет-ост-врем-e.new',
  { path: 'i-i-s-itog12-расчет-ост-врем-e/new' });
  this.route('i-i-s-itog12-услуги-l');
  this.route('i-i-s-itog12-услуги-e',
  { path: 'i-i-s-itog12-услуги-e/:id' });
  this.route('i-i-s-itog12-услуги-e.new',
  { path: 'i-i-s-itog12-услуги-e/new' });
});

export default Router;
