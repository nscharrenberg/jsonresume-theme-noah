var fs = require("fs");
var path = require('path');
var Handlebars = require("handlebars");

function render(resume) {
	var css = fs.readFileSync(__dirname + "/assets/css/app.css", "utf-8");
	var js = fs.readFileSync(__dirname + "/assets/js/app.js", "utf-8");
	var tpl = fs.readFileSync(__dirname + "/resume.hbs", "utf-8");
	var partialsDir = path.join(__dirname, 'partials');
	var filenames = fs.readdirSync(partialsDir);

	filenames.forEach(function (filename) {
	  var matches = /^([^.]+).hbs$/.exec(filename);
	  if (!matches) {
	    return;
	  }
	  var name = matches[1];
	  var filepath = path.join(partialsDir, filename)
	  var template = fs.readFileSync(filepath, 'utf8');

	  Handlebars.registerPartial(name, template);
	});
	return Handlebars.compile(tpl)({
		css: css,
		js: js,
		resume: resume
	});
}

function interpolate(object, keyPath) {
    const keys = keyPath.split('.');

    return keys.reduce((res, key) => (res || {})[key], object);
}

function capitalize(str) {
    if (str) {
        str = str.toString();
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    }

    return str;
}

function convertMarkdown(str) {
    if (str != null) {
        return markdown.render(str);
    }
}

function getFloatingNavItems(resume) {
    const floating_nav_items = [
        {label: 'About', target: 'about', icon: 'board', requires: 'basics.summary'},
        {label: 'Work Experience', target: 'work-experience', icon: 'office', requires: 'work'},
        {label: 'Projects', target: 'projects', icon: 'office', requires: 'projects'},
        {label: 'Skills', target: 'skills', icon: 'tools', requires: 'skills'},
        {label: 'Education', target: 'education', icon: 'graduation-cap', requires: 'education'},
        {label: 'Awards', target: 'awards', icon: 'trophy', requires: 'awards'},
        {label: 'Volunteer Work', target: 'volunteer-work', icon: 'child', requires: 'volunteer'},
        {label: 'Publications', target: 'publications', icon: 'newspaper', requires: 'publications'},
        {label: 'Interests', target: 'interests', icon: 'heart', requires: 'interests'},
        {label: 'References', target: 'references', icon: 'thumbs-up', requires: 'references'}
    ];

    return _(floating_nav_items).filter(item => {
        const value = interpolate(resume, item.requires);
        return !_.isEmpty(value);
    });
}

module.exports = {
	render: render
};