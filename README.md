# STAWAWAY COVID-19

StayAway COVID-19 is ...


## Development

This project is a Single-Page-Application built with [Nuxt.jS](https://nuxtjs.org/), a [VueJS](https://vuejs.org) framework.
For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

To configure development environment, follow the instructions below.

- Clone this repository
- Install dependencies using `npm install`
- Rename `.env.example to `.env`  and update the configuration parameters
- Start the development environment `npm run dev`


### Customising Template

This project resorts to [TailwindCSS](https://tailwindcss.com/), a utility-first CSS framework for styling.

In order to customise the user interface of this project, update the CSS classes of the template section in `.vue` files.

### Customising Translations

In the `i18n` folder, there are translation files for the two already provided languages: English (en-US.js) and Portuguese (pt-PT.js).

If you wish to add more languages, create a new file and add a new locale in the `i18n.locales` key, in `nuxt.config.js`.

## Deployment

To deploy this project, follow the [NuxtJS SPA deployment instructions](https://nuxtjs.org/guide/commands#single-page-application-deployment-spa-), summarized below.

- Run` npm run build`.
- Deploy the created `dist/` folder to your static hosting like Surge, GitHub Pages or nginx.
