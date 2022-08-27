import favicon from './extensions/favicon.jpeg';


export default {
  config: {
    auth: {
      logo: favicon
    },
    menu: {
      logo: favicon
    },
    head: {
      favicon: favicon,
    },
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "ESD in ECS Dashboard",
        "app.components.LeftMenu.navbrand.workplace": "Admin panel",
      },
    },
    // Disable video tutorials
    tutorials: false,
  },
  bootstrap() {},
};