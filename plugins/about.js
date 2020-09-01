export default ({ app }, inject) => {
    const fs = require('fs');
    const yaml = require('js-yaml');

    const aboutText = yaml.safeLoad(fs.readFileSync('./kedai.yaml', 'utf8'));
    const about = () => aboutText.kedai.about;
    // Inject $hello(msg) in Vue, context and store.
    inject('about', about);
    app.$about = about;
};
