import favicon from './extensions/favicon.jpeg';
import PreviewButton from './extensions/PreviewButton';


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
        "app.components.LeftMenu.navbrand.workplace": "Admin Panel",
        "app.components.HomePage.welcomeBlock.content.again": " ",
        'Auth.form.welcome.title': 'Welcome to ESD in ECS!',
        'Auth.form.welcome.subtitle': 'Log in to your ESD in ECS account',
        "components.PreviewButton.button": "Preview",
      },
    },
    // Disable video tutorials
    tutorials: false,
  },
  bootstrap(app) {
    app.injectContentManagerComponent("editView", "right-links", {
      name: "PreviewButton",
      Component: PreviewButton,
    });
  },
};