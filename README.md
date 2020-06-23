# STAWAWAY COVID authcode-ui

This is an interface for the health authority to generate authorization codes for the STAYAWAY COVID applications. It is a re-implementation of the Swiss [CovidCode-UI](https://github.com/admin-ch/CovidCode-UI) and uses the same [CovidCode-Service](https://github.com/admin-ch/CovidCode-Service) backend.

More information is available at https://github.com/stayawayinesctec/authcode-ui

## Development

This project is a Single-Page-Application (SPA) built with [Nuxt.js](https://nuxtjs.org/), a [Vue.js](https://vuejs.org) framework. For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

To configure the development environment:
- Clone this repository
- Install dependencies using `npm install`
- Rename `.env.example` to `.env`  and update the configuration parameters
- Start the development environment `npm run dev`

### Template customization

This project resorts to [TailwindCSS](https://tailwindcss.com/), a utility-first CSS framework for styling.

In order to customise the user interface of this project, update the CSS classes of the template section in `.vue` files.

### Internalization (i18n) customization

The `i18n` folder contains translation files for supported languages.

Currently, the following languages are supported.
- English - `en-US.js`
- Português - `pt-PT.js`

If you wish to add more languages, create a new file and add a new locale item to `i18n.locales`, in `nuxt.config.js` file.

## Deployment

To deploy this project, follow the instructions in [Nuxt.js docs](https://nuxtjs.org/guide/commands#single-page-application-deployment-spa-), summarized below.

- Run `npm run build`.
- Deploy the created `dist/` folder to your static hosting like Surge, GitHub Pages or nginx.

A complete DP3T setup with this UI is available at https://github.com/stayawayinesctec/dp3t-docker

## Copyright and license

Copyright (c) 2020 INESC TEC. Developed by [Francisco Neves](https://github.com/fntneves).
Distribution license EUPL 1.2. See details in file LICENSE.
