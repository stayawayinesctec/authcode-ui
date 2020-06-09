export default ({ app }) => {
  var redirect = app.$auth.$storage.options.redirect
  for (var key in redirect) {
    if (key === 'callback') continue

    redirect[key] = '/' + app.i18n.locale + redirect[key]
  }

  console.log((app.$auth.$storage.options.redirect = redirect))
  app.$auth.$storage.options.redirect = redirect
}
