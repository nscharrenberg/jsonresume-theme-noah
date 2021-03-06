function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"index.pug":"|\u003C!DOCTYPE html\u003E\r\nhtml(lang=\"en\")\r\n    head\r\n        meta(charset=\"utf-8\")\r\n        meta(http-equiv=\"X-UA-Compatible\", content=\"IE=edge\")\r\n        meta(name=\"viewport\", content=\"width=device-width, initial-scale=1\")\r\n        title= resume.basics.name\r\n        include pug\u002Fstylesheets.pug\r\n\r\n    body(itemscope, itemtype=\"http:\u002F\u002Fschema.org\u002FPerson\")\r\n        div#app\r\n            main.template-resume.resume2\r\n                include pug\u002Fprofile.pug\r\n                include pug\u002Fcomponents.pug\r\n                include pug\u002Ffooter.pug\r\n\r\n        include pug\u002Fscripts.pug\r\n","pug\\stylesheets.pug":"link(rel=\"stylesheet\", href=\"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Ffont-awesome\u002F5.13.0\u002Fcss\u002Fall.min.css\")\r\nstyle!= css\r\n","pug\\profile.pug":"mixin render_profiles(profiles)\r\n    ul(class=\"social\")\r\n        each profile in profiles\r\n            li(class=profile.network)\r\n                a(\r\n                    href=profile.url,\r\n                    target=\"_blank\",\r\n                    title= resume.basics.name + \" on \" + profile.network,\r\n                    )\r\n                    i(class='fab fa-'+profile.network)\r\n\r\n\r\nsection.resume-header.bg-icon-plane\r\n    .container\r\n        .row\r\n            .col-8.mx-md-auto\r\n                h1(itemprop=\"name\")=resume.basics.name\r\n\r\n                p(\r\n                    class=\"subtitle\"\r\n                    itemprop=\"jobTitle\"\r\n                    )=resume.basics.label\r\n\r\n                img(\r\n                    class=\"user_profile\"\r\n                    src=resume.basics.picture,\r\n                    alt=resume.basics.name,\r\n                    itemprop=\"image\")\r\n\r\n                +render_profiles(resume.basics.top_five_profiles)\r\n\r\nsection.contactBar\r\n    .container\r\n        .row.contacts\r\n            if resume.basics.website\r\n                .col-md\r\n                    span\r\n                        i(class=\"fas fa-link contactIcon\")\r\n\r\n                    p\r\n                        a(href=resume.basics.website)=resume.basics.website\r\n\r\n            if resume.basics.email\r\n                .col-md.light\r\n                    span\r\n                        i(class=\"far fa-envelope-open contactIcon\")\r\n\r\n                    p\r\n                        a(href='mailto:'+resume.basics.email)=resume.basics.email\r\n\r\n            if resume.basics.phone\r\n                .col-md.light\r\n                    span\r\n                        i(class=\"fas fa-phone contactIcon\")\r\n\r\n                    p\r\n                        a(href='tel:' + resume.basics.phone)=resume.basics.phone\r\n\r\n            if resume.basics.computed_location\r\n                .col-md\r\n                    span\r\n                        i(class=\"fas fa-map-marker-alt contactIcon\")\r\n\r\n                    p=resume.basics.computed_location\r\n","pug\\components.pug":"include components\u002Fabout.pug\r\ninclude components\u002Fwork.pug\r\ninclude components\u002Feducation.pug\r\ninclude components\u002Fskills.pug\r\ninclude components\u002Fvolunteer.pug\r\ninclude components\u002Fprojects.pug\r\ninclude components\u002Finterests.pug\r\n","pug\\components\\about.pug":"unless  _.isEmpty(resume.basics.summary)\r\n    section#about-me\r\n        .container\r\n            header.section-heading.p-t-40\r\n                h2 About\r\n                p(itemprop=\"description\")!=resume.basics.summary\r\n\r\n","pug\\components\\work.pug":"unless  _.isEmpty(resume.work)\r\n    section#work\r\n        .container\r\n            header.section-heading.p-t-40\r\n                h2 Work Experience\r\n            .container\r\n                .paper-timeline\r\n                    .start-icon\r\n                        i.fas.fa-briefcase\r\n\r\n                    .row\r\n                        each item, index in resume.work\r\n                            div(class=\"col-sm-12 col-md-6 timeline-item \" + (index % 2 ? 'offset-md-6 right' : 'left'))\r\n                                .row\r\n                                    .col-md-11\r\n                                        .timeline-panel\r\n                                            .media\r\n                                                unless _.isEmpty(item.image)\r\n                                                    img.d-flex.mr-3.height-50(\r\n                                                        src=item.image,\r\n                                                        alt=item.company,\r\n                                                        itemprop=\"image\"\r\n                                                    )\r\n                                                .media-body\r\n                                                    h3.mt-0.mb-1(itemprop=\"position\")!=item.position\r\n                                                    p.mb-0.mt-0.lh-15\r\n                                                        if item.website\r\n                                                            a(href=item.website, target=\"_blank\")= item.company\r\n                                                        else\r\n                                                            | #{item.company}\r\n                                                    p.mb-1.mt-0.lh-15\r\n                                                        |#{item.startDate} - #{item.endDate || 'Present'}\r\n                                                        if item.duration\r\n                                                            span\r\n                                                                i.icon-clock.mr-5\r\n                                                                |#{item.duration}\r\n                                                    p!=item.summary\r\n                                                    unless _.isEmpty(item.highlights)\r\n                                                        each highlight in item.highlights\r\n                                                            span.badge.badge-primary.mr-1.mb-1\r\n                                                                | #{highlight}\r\n\r\n                .end-icon\r\n                    i.fas.fa-circle\r\n","pug\\components\\education.pug":"unless  _.isEmpty(resume.education)\r\n    section#education\r\n        .container\r\n            header.section-heading.p-t-40\r\n                h2 Education\r\n            .container\r\n                .paper-timeline\r\n                    .start-icon\r\n                        i.fas.fa-graduation-cap\r\n\r\n                    .row\r\n                        each study, index in resume.education\r\n                            div(class=\"col-sm-12 col-md-6 timeline-item \" + (index % 2 ? 'offset-md-6 right' : 'left'))\r\n                                .row\r\n                                    .col-md-11\r\n                                        .timeline-panel\r\n                                            .media\r\n                                                unless _.isEmpty(study.image)\r\n                                                    img.d-flex.mr-3.height-50(\r\n                                                        src=study.image,\r\n                                                        alt=study.institution,\r\n                                                        itemprop=\"image\"\r\n                                                        )\r\n                                                .media-body\r\n                                                    h3.mt-0.mb-1(itemprop=\"institute\")!=study.institution\r\n                                                    p.mb-0.mt-0.lh-15\r\n                                                        |#{study.area ? study.area + ', ' : ''} #{study.studyType}\r\n                                                    p.mb-1.mt-0.lh-15\r\n                                                        |#{study.startDate} - #{study.endDate || 'Present'}\r\n                                                    unless _.isEmpty(study.courses)\r\n                                                        each course in study.courses\r\n                                                            span.badge.badge-primary.mr-1.mb-1\r\n                                                                | #{course}\r\n                .end-icon\r\n                    i.fas.fa-circle\r\n","pug\\components\\skills.pug":"unless  _.isEmpty(resume.skills)\r\n    section(\r\n        id=\"skills\"\r\n        class=\"has-overlay light p-t-50 mt-5 mb-0\"\r\n        )\r\n        .container\r\n            .col-lg-10.mx-md-auto\r\n                .text-center\r\n                    h3 Skills\r\n\r\n                .row.topics\r\n                    each item in resume.skills\r\n                        .col-4\r\n                            .topics-wrapper.border-style.text-center\r\n                                h3.topic-header\r\n                                        | #{item.name}\r\n\r\n                                unless _.isEmpty(item.keywords)\r\n                                    div.topics-list\r\n                                        each i in item.keywords\r\n                                            span.badge.badge-primary.mr-1.mb-1\r\n                                                | #{i}\r\n\r\n","pug\\components\\volunteer.pug":"unless  _.isEmpty(resume.volunteer)\r\n    section#volunteer.mb-0\r\n        .container\r\n            header.section-heading.p-t-40\r\n                h2 Volunteer Work\r\n            .container\r\n                .paper-timeline\r\n                    .start-icon\r\n                        i.fas.fa-child\r\n\r\n                    .row\r\n                        each item, index in resume.volunteer\r\n                            div(class=\"col-sm-12 col-md-6 timeline-item \" + (index % 2 ? 'offset-md-6 right' : 'left'))\r\n                                .row\r\n                                    .col-md-11\r\n                                        .timeline-panel\r\n                                            .media\r\n                                                unless _.isEmpty(item.image)\r\n                                                    img.d-flex.mr-3.height-50(\r\n                                                        src=item.image,\r\n                                                        alt=item.organization,\r\n                                                        itemprop=\"image\"\r\n                                                    )\r\n                                                .media-body\r\n                                                    h3.mt-0.mb-1(itemprop=\"position\")!=item.position\r\n                                                    p.mb-0.mt-0.lh-15\r\n                                                        if item.website\r\n                                                            a(href=item.website, target=\"_blank\")= item.organization\r\n                                                        else\r\n                                                            | #{item.organization}\r\n                                                    p.mb-1.mt-0.lh-15\r\n                                                        |#{item.startDate} - #{item.endDate || 'Present'}\r\n                                                        if item.duration\r\n                                                            span\r\n                                                                i.icon-clock.mr-5\r\n                                                                |#{item.duration}\r\n                                                    !=item.summary\r\n                                                    unless _.isEmpty(item.highlights)\r\n                                                        each highlight in item.highlights\r\n                                                            span.badge.badge-primary.mr-1.mb-1\r\n                                                                | #{highlight}\r\n\r\n                .end-icon\r\n                    i.fas.fa-circle\r\n","pug\\components\\projects.pug":"unless  _.isEmpty(resume.projects)\r\n    section#projects.mb-0\r\n        .container\r\n            header.section-heading.p-t-40\r\n                h2 Projects\r\n            .container\r\n                .paper-timeline\r\n                    .start-icon\r\n                        i.fas.fa-project-diagram\r\n\r\n                    .row\r\n                        each item, index in resume.projects\r\n                            div(class=\"col-sm-12 col-md-6 timeline-item \" + (index % 2 ? 'offset-md-6 right' : 'left'))\r\n                                .row\r\n                                    .col-md-11\r\n                                        .timeline-panel\r\n                                            .media\r\n                                                unless _.isEmpty(item.image)\r\n                                                    img.d-flex.mr-3.height-50(\r\n                                                        src=item.image,\r\n                                                        alt=item.client,\r\n                                                        itemprop=\"image\"\r\n                                                    )\r\n                                                .media-body\r\n                                                    h3.mt-0.mb-1(itemprop=\"position\")\r\n                                                        if item.website\r\n                                                            a(href=item.website, target=\"_blank\")= item.title\r\n                                                        else\r\n                                                            | #{item.title}\r\n\r\n                                                    p.mb-0.mt-0.lh-15!=item.client\r\n\r\n                                                    p.mb-1.mt-0.lh-15\r\n                                                        |#{item.startDate} - #{item.endDate || 'Present'}\r\n                                                        if item.duration\r\n                                                            span\r\n                                                                i.icon-clock.mr-5\r\n                                                                |#{item.duration}\r\n                                                    p!=item.summary\r\n                                                    unless _.isEmpty(item.highlights)\r\n                                                        each highlight in item.highlights\r\n                                                            span.badge.badge-primary.mr-1.mb-1\r\n                                                                | #{highlight}\r\n\r\n                .end-icon\r\n                    i.fas.fa-circle\r\n","pug\\components\\interests.pug":"unless  _.isEmpty(resume.interests)\r\n    section(\r\n        id=\"skills\"\r\n        class=\"service-blocks section light p-t-50 mt-5 mb-0\"\r\n        )\r\n        .container\r\n            .row\r\n                .col-6.mx-auto\r\n                    header\r\n                        h2 My Interests\r\n\r\n            .p-t-b-40\r\n                .row\r\n                    unless _.isEmpty(resume.interests)\r\n                        each item in resume.interests\r\n                            .col-4\r\n                                .service-block.center\r\n                                    unless _.isEmpty(item.icon)\r\n                                        .service-icon\r\n                                            i(class=item.icon)\r\n\r\n                                    .service-content\r\n                                        h3.my-3=item.name\r\n\r\n","pug\\footer.pug":"footer.mt-0\r\n    .container\r\n        .row\r\n            .col-2.responsive-phone\r\n                img(\r\n                    class=\"user_profile m-t-b-10\"\r\n                    src=resume.basics.picture,\r\n                    alt=resume.basics.name,\r\n                    itemprop=\"image\")\r\n\r\n            .col-6.text-left\r\n                header.section-heading.p-t-40.text-left\r\n                    h2=resume.basics.name\r\n                    p(itemprop=\"description\")!=resume.basics.label\r\n\r\n            .col-4.responsive-phone\r\n                .footer-links.mb-2\r\n                    li\r\n                        i(class=\"fas fa-link\")\r\n                        a(href=resume.basics.website)\r\n                            |  #{resume.basics.website}\r\n\r\n                    li\r\n                        i(class=\"far fa-envelope-open\")\r\n                        a(href='mailto:'+resume.basics.email)\r\n                            |  #{resume.basics.email}\r\n\r\n                    li\r\n                        i(class=\"fas fa-phone\")\r\n                        a(href='tel:' + resume.basics.phone)\r\n                            |  #{resume.basics.phone}\r\n\r\n                    li\r\n                        i(class=\"fas fa-map-marker-alt\")\r\n                        |  #{resume.basics.computed_location}\r\n                .copyrights\r\n                    p\r\n                        | &copy; #{new Date().getFullYear()} #{resume.basics.name}\r\n\r\n","pug\\scripts.pug":"script(src=\"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Ffont-awesome\u002F5.13.0\u002Fjs\u002Fall.min.js\")\r\nscript.\r\n    WebFontConfig = {\r\n        google: {families: ['Lato:300,400,700:latin']}\r\n    };\r\n    (function () {\r\n        var wf = document.createElement('script');\r\n        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +\r\n            ':\u002F\u002Fajax.googleapis.com\u002Fajax\u002Flibs\u002Fwebfont\u002F1\u002Fwebfont.js';\r\n        wf.type = 'text\u002Fjavascript';\r\n        wf.async = 'true';\r\n        var s = document.getElementsByTagName('script')[0];\r\n        s.parentNode.insertBefore(wf, s);\r\n    })();\r\n"};
;var locals_for_with = (locals || {});(function (Date, _, css, resume) {;pug_debug_line = 1;pug_debug_filename = "index.pug";
pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
;pug_debug_line = 2;pug_debug_filename = "index.pug";
pug_html = pug_html + "\u003Chtml lang=\"en\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "index.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 4;pug_debug_filename = "index.pug";
pug_html = pug_html + "\u003Cmeta charset=\"utf-8\"\u002F\u003E";
;pug_debug_line = 5;pug_debug_filename = "index.pug";
pug_html = pug_html + "\u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"\u002F\u003E";
;pug_debug_line = 6;pug_debug_filename = "index.pug";
pug_html = pug_html + "\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1\"\u002F\u003E";
;pug_debug_line = 7;pug_debug_filename = "index.pug";
pug_html = pug_html + "\u003Ctitle\u003E";
;pug_debug_line = 7;pug_debug_filename = "index.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = resume.basics.name) ? "" : pug_interp)) + "\u003C\u002Ftitle\u003E";
;pug_debug_line = 1;pug_debug_filename = "pug\\stylesheets.pug";
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" href=\"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Ffont-awesome\u002F5.13.0\u002Fcss\u002Fall.min.css\"\u002F\u003E";
;pug_debug_line = 2;pug_debug_filename = "pug\\stylesheets.pug";
pug_html = pug_html + "\u003Cstyle\u003E";
;pug_debug_line = 2;pug_debug_filename = "pug\\stylesheets.pug";
pug_html = pug_html + (null == (pug_interp = css) ? "" : pug_interp) + "\u003C\u002Fstyle\u003E\u003C\u002Fhead\u003E";
;pug_debug_line = 10;pug_debug_filename = "index.pug";
pug_html = pug_html + "\u003Cbody" + (pug_attr("itemscope", true, true, false)+" itemtype=\"http:\u002F\u002Fschema.org\u002FPerson\"") + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "index.pug";
pug_html = pug_html + "\u003Cdiv id=\"app\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "index.pug";
pug_html = pug_html + "\u003Cmain class=\"template-resume resume2\"\u003E";
;pug_debug_line = 1;pug_debug_filename = "pug\\profile.pug";
pug_mixins["render_profiles"] = pug_interp = function(profiles){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Cul class=\"social\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "pug\\profile.pug";
// iterate profiles
;(function(){
  var $$obj = profiles;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var profile = $$obj[pug_index0];
;pug_debug_line = 4;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Cli" + (pug_attr("class", pug_classes([profile.network], [true]), false, false)) + "\u003E";
;pug_debug_line = 5;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", profile.url, true, false)+" target=\"_blank\""+pug_attr("title", resume.basics.name + " on " + profile.network, true, false)) + "\u003E";
;pug_debug_line = 10;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Ci" + (pug_attr("class", pug_classes(['fab fa-'+profile.network], [true]), false, false)) + "\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var profile = $$obj[pug_index0];
;pug_debug_line = 4;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Cli" + (pug_attr("class", pug_classes([profile.network], [true]), false, false)) + "\u003E";
;pug_debug_line = 5;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", profile.url, true, false)+" target=\"_blank\""+pug_attr("title", resume.basics.name + " on " + profile.network, true, false)) + "\u003E";
;pug_debug_line = 10;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Ci" + (pug_attr("class", pug_classes(['fab fa-'+profile.network], [true]), false, false)) + "\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E";
};
;pug_debug_line = 13;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Csection class=\"resume-header bg-icon-plane\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-8 mx-md-auto\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Ch1 itemprop=\"name\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = resume.basics.name) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E";
;pug_debug_line = 19;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Cp class=\"subtitle\" itemprop=\"jobTitle\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = resume.basics.label) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 24;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"user_profile\""+pug_attr("src", resume.basics.picture, true, false)+pug_attr("alt", resume.basics.name, true, false)+" itemprop=\"image\"") + "\u002F\u003E";
;pug_debug_line = 30;pug_debug_filename = "pug\\profile.pug";
pug_mixins["render_profiles"](resume.basics.top_five_profiles);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 32;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Csection class=\"contactBar\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Cdiv class=\"row contacts\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "pug\\profile.pug";
if (resume.basics.website) {
;pug_debug_line = 36;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 38;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-link contactIcon\"\u003E\u003C\u002Fi\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 40;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 41;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", resume.basics.website, true, false)) + "\u003E";
;pug_debug_line = 41;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = resume.basics.website) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
}
;pug_debug_line = 43;pug_debug_filename = "pug\\profile.pug";
if (resume.basics.email) {
;pug_debug_line = 44;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md light\"\u003E";
;pug_debug_line = 45;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 46;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Ci class=\"far fa-envelope-open contactIcon\"\u003E\u003C\u002Fi\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 48;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 49;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", 'mailto:'+resume.basics.email, true, false)) + "\u003E";
;pug_debug_line = 49;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = resume.basics.email) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
}
;pug_debug_line = 51;pug_debug_filename = "pug\\profile.pug";
if (resume.basics.phone) {
;pug_debug_line = 52;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md light\"\u003E";
;pug_debug_line = 53;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 54;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-phone contactIcon\"\u003E\u003C\u002Fi\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 56;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 57;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", 'tel:' + resume.basics.phone, true, false)) + "\u003E";
;pug_debug_line = 57;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = resume.basics.phone) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
}
;pug_debug_line = 59;pug_debug_filename = "pug\\profile.pug";
if (resume.basics.computed_location) {
;pug_debug_line = 60;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md\"\u003E";
;pug_debug_line = 61;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 62;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-map-marker-alt contactIcon\"\u003E\u003C\u002Fi\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 64;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 64;pug_debug_filename = "pug\\profile.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = resume.basics.computed_location) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 1;pug_debug_filename = "pug\\components\\about.pug";
if (!(_.isEmpty(resume.basics.summary))) {
;pug_debug_line = 2;pug_debug_filename = "pug\\components\\about.pug";
pug_html = pug_html + "\u003Csection id=\"about-me\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "pug\\components\\about.pug";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "pug\\components\\about.pug";
pug_html = pug_html + "\u003Cheader class=\"section-heading p-t-40\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "pug\\components\\about.pug";
pug_html = pug_html + "\u003Ch2\u003E";
;pug_debug_line = 5;pug_debug_filename = "pug\\components\\about.pug";
pug_html = pug_html + "About\u003C\u002Fh2\u003E";
;pug_debug_line = 6;pug_debug_filename = "pug\\components\\about.pug";
pug_html = pug_html + "\u003Cp itemprop=\"description\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "pug\\components\\about.pug";
pug_html = pug_html + (null == (pug_interp = resume.basics.summary) ? "" : pug_interp) + "\u003C\u002Fp\u003E\u003C\u002Fheader\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
}
;pug_debug_line = 1;pug_debug_filename = "pug\\components\\work.pug";
if (!(_.isEmpty(resume.work))) {
;pug_debug_line = 2;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Csection id=\"work\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cheader class=\"section-heading p-t-40\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Ch2\u003E";
;pug_debug_line = 5;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "Work Experience\u003C\u002Fh2\u003E\u003C\u002Fheader\u003E";
;pug_debug_line = 6;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cdiv class=\"paper-timeline\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cdiv class=\"start-icon\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-briefcase\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "pug\\components\\work.pug";
// iterate resume.work
;(function(){
  var $$obj = resume.work;
  if ('number' == typeof $$obj.length) {
      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
        var item = $$obj[index];
;pug_debug_line = 13;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["col-sm-12 col-md-6 timeline-item " + (index % 2 ? 'offset-md-6 right' : 'left')], [true]), false, false)) + "\u003E";
;pug_debug_line = 14;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-11\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cdiv class=\"timeline-panel\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cdiv class=\"media\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "pug\\components\\work.pug";
if (!(_.isEmpty(item.image))) {
;pug_debug_line = 19;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"d-flex mr-3 height-50\""+pug_attr("src", item.image, true, false)+pug_attr("alt", item.company, true, false)+" itemprop=\"image\"") + "\u002F\u003E";
}
;pug_debug_line = 24;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cdiv class=\"media-body\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Ch3 class=\"mt-0 mb-1\" itemprop=\"position\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + (null == (pug_interp = item.position) ? "" : pug_interp) + "\u003C\u002Fh3\u003E";
;pug_debug_line = 26;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mt-0 lh-15\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "pug\\components\\work.pug";
if (item.website) {
;pug_debug_line = 28;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", item.website, true, false)+" target=\"_blank\"") + "\u003E";
;pug_debug_line = 28;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.company) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
else {
;pug_debug_line = 30;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.company) ? "" : pug_interp));
}
pug_html = pug_html + "\u003C\u002Fp\u003E";
;pug_debug_line = 31;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cp class=\"mb-1 mt-0 lh-15\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.startDate) ? "" : pug_interp));
;pug_debug_line = 32;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + " - ";
;pug_debug_line = 32;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.endDate || 'Present') ? "" : pug_interp));
;pug_debug_line = 33;pug_debug_filename = "pug\\components\\work.pug";
if (item.duration) {
;pug_debug_line = 34;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 35;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Ci class=\"icon-clock mr-5\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 36;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.duration) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fp\u003E";
;pug_debug_line = 37;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 37;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + (null == (pug_interp = item.summary) ? "" : pug_interp) + "\u003C\u002Fp\u003E";
;pug_debug_line = 38;pug_debug_filename = "pug\\components\\work.pug";
if (!(_.isEmpty(item.highlights))) {
;pug_debug_line = 39;pug_debug_filename = "pug\\components\\work.pug";
// iterate item.highlights
;(function(){
  var $$obj = item.highlights;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var highlight = $$obj[pug_index2];
;pug_debug_line = 40;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cspan class=\"badge badge-primary mr-1 mb-1\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = highlight) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var highlight = $$obj[pug_index2];
;pug_debug_line = 40;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cspan class=\"badge badge-primary mr-1 mb-1\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = highlight) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
    }
  }
}).call(this);

}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;
      var item = $$obj[index];
;pug_debug_line = 13;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["col-sm-12 col-md-6 timeline-item " + (index % 2 ? 'offset-md-6 right' : 'left')], [true]), false, false)) + "\u003E";
;pug_debug_line = 14;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-11\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cdiv class=\"timeline-panel\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cdiv class=\"media\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "pug\\components\\work.pug";
if (!(_.isEmpty(item.image))) {
;pug_debug_line = 19;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"d-flex mr-3 height-50\""+pug_attr("src", item.image, true, false)+pug_attr("alt", item.company, true, false)+" itemprop=\"image\"") + "\u002F\u003E";
}
;pug_debug_line = 24;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cdiv class=\"media-body\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Ch3 class=\"mt-0 mb-1\" itemprop=\"position\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + (null == (pug_interp = item.position) ? "" : pug_interp) + "\u003C\u002Fh3\u003E";
;pug_debug_line = 26;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mt-0 lh-15\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "pug\\components\\work.pug";
if (item.website) {
;pug_debug_line = 28;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", item.website, true, false)+" target=\"_blank\"") + "\u003E";
;pug_debug_line = 28;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.company) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
else {
;pug_debug_line = 30;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.company) ? "" : pug_interp));
}
pug_html = pug_html + "\u003C\u002Fp\u003E";
;pug_debug_line = 31;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cp class=\"mb-1 mt-0 lh-15\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.startDate) ? "" : pug_interp));
;pug_debug_line = 32;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + " - ";
;pug_debug_line = 32;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.endDate || 'Present') ? "" : pug_interp));
;pug_debug_line = 33;pug_debug_filename = "pug\\components\\work.pug";
if (item.duration) {
;pug_debug_line = 34;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 35;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Ci class=\"icon-clock mr-5\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 36;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.duration) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fp\u003E";
;pug_debug_line = 37;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 37;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + (null == (pug_interp = item.summary) ? "" : pug_interp) + "\u003C\u002Fp\u003E";
;pug_debug_line = 38;pug_debug_filename = "pug\\components\\work.pug";
if (!(_.isEmpty(item.highlights))) {
;pug_debug_line = 39;pug_debug_filename = "pug\\components\\work.pug";
// iterate item.highlights
;(function(){
  var $$obj = item.highlights;
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var highlight = $$obj[pug_index3];
;pug_debug_line = 40;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cspan class=\"badge badge-primary mr-1 mb-1\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = highlight) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var highlight = $$obj[pug_index3];
;pug_debug_line = 40;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cspan class=\"badge badge-primary mr-1 mb-1\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = highlight) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
    }
  }
}).call(this);

}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 43;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Cdiv class=\"end-icon\"\u003E";
;pug_debug_line = 44;pug_debug_filename = "pug\\components\\work.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-circle\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
}
;pug_debug_line = 1;pug_debug_filename = "pug\\components\\education.pug";
if (!(_.isEmpty(resume.education))) {
;pug_debug_line = 2;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Csection id=\"education\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Cheader class=\"section-heading p-t-40\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Ch2\u003E";
;pug_debug_line = 5;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "Education\u003C\u002Fh2\u003E\u003C\u002Fheader\u003E";
;pug_debug_line = 6;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Cdiv class=\"paper-timeline\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Cdiv class=\"start-icon\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-graduation-cap\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "pug\\components\\education.pug";
// iterate resume.education
;(function(){
  var $$obj = resume.education;
  if ('number' == typeof $$obj.length) {
      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
        var study = $$obj[index];
;pug_debug_line = 13;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["col-sm-12 col-md-6 timeline-item " + (index % 2 ? 'offset-md-6 right' : 'left')], [true]), false, false)) + "\u003E";
;pug_debug_line = 14;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-11\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Cdiv class=\"timeline-panel\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Cdiv class=\"media\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "pug\\components\\education.pug";
if (!(_.isEmpty(study.image))) {
;pug_debug_line = 19;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"d-flex mr-3 height-50\""+pug_attr("src", study.image, true, false)+pug_attr("alt", study.institution, true, false)+" itemprop=\"image\"") + "\u002F\u003E";
}
;pug_debug_line = 24;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Cdiv class=\"media-body\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Ch3 class=\"mt-0 mb-1\" itemprop=\"institute\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + (null == (pug_interp = study.institution) ? "" : pug_interp) + "\u003C\u002Fh3\u003E";
;pug_debug_line = 26;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mt-0 lh-15\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = study.area ? study.area + ', ' : '') ? "" : pug_interp));
;pug_debug_line = 27;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + " ";
;pug_debug_line = 27;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = study.studyType) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 28;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Cp class=\"mb-1 mt-0 lh-15\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = study.startDate) ? "" : pug_interp));
;pug_debug_line = 29;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + " - ";
;pug_debug_line = 29;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = study.endDate || 'Present') ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 30;pug_debug_filename = "pug\\components\\education.pug";
if (!(_.isEmpty(study.courses))) {
;pug_debug_line = 31;pug_debug_filename = "pug\\components\\education.pug";
// iterate study.courses
;(function(){
  var $$obj = study.courses;
  if ('number' == typeof $$obj.length) {
      for (var pug_index5 = 0, $$l = $$obj.length; pug_index5 < $$l; pug_index5++) {
        var course = $$obj[pug_index5];
;pug_debug_line = 32;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Cspan class=\"badge badge-primary mr-1 mb-1\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = course) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index5 in $$obj) {
      $$l++;
      var course = $$obj[pug_index5];
;pug_debug_line = 32;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Cspan class=\"badge badge-primary mr-1 mb-1\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = course) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
    }
  }
}).call(this);

}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;
      var study = $$obj[index];
;pug_debug_line = 13;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["col-sm-12 col-md-6 timeline-item " + (index % 2 ? 'offset-md-6 right' : 'left')], [true]), false, false)) + "\u003E";
;pug_debug_line = 14;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-11\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Cdiv class=\"timeline-panel\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Cdiv class=\"media\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "pug\\components\\education.pug";
if (!(_.isEmpty(study.image))) {
;pug_debug_line = 19;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"d-flex mr-3 height-50\""+pug_attr("src", study.image, true, false)+pug_attr("alt", study.institution, true, false)+" itemprop=\"image\"") + "\u002F\u003E";
}
;pug_debug_line = 24;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Cdiv class=\"media-body\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Ch3 class=\"mt-0 mb-1\" itemprop=\"institute\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + (null == (pug_interp = study.institution) ? "" : pug_interp) + "\u003C\u002Fh3\u003E";
;pug_debug_line = 26;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mt-0 lh-15\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = study.area ? study.area + ', ' : '') ? "" : pug_interp));
;pug_debug_line = 27;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + " ";
;pug_debug_line = 27;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = study.studyType) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 28;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Cp class=\"mb-1 mt-0 lh-15\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = study.startDate) ? "" : pug_interp));
;pug_debug_line = 29;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + " - ";
;pug_debug_line = 29;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = study.endDate || 'Present') ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 30;pug_debug_filename = "pug\\components\\education.pug";
if (!(_.isEmpty(study.courses))) {
;pug_debug_line = 31;pug_debug_filename = "pug\\components\\education.pug";
// iterate study.courses
;(function(){
  var $$obj = study.courses;
  if ('number' == typeof $$obj.length) {
      for (var pug_index6 = 0, $$l = $$obj.length; pug_index6 < $$l; pug_index6++) {
        var course = $$obj[pug_index6];
;pug_debug_line = 32;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Cspan class=\"badge badge-primary mr-1 mb-1\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = course) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index6 in $$obj) {
      $$l++;
      var course = $$obj[pug_index6];
;pug_debug_line = 32;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Cspan class=\"badge badge-primary mr-1 mb-1\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = course) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
    }
  }
}).call(this);

}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 34;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Cdiv class=\"end-icon\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "pug\\components\\education.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-circle\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
}
;pug_debug_line = 1;pug_debug_filename = "pug\\components\\skills.pug";
if (!(_.isEmpty(resume.skills))) {
;pug_debug_line = 2;pug_debug_filename = "pug\\components\\skills.pug";
pug_html = pug_html + "\u003Csection class=\"has-overlay light p-t-50 mt-5 mb-0\" id=\"skills\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "pug\\components\\skills.pug";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "pug\\components\\skills.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-10 mx-md-auto\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "pug\\components\\skills.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-center\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "pug\\components\\skills.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 9;pug_debug_filename = "pug\\components\\skills.pug";
pug_html = pug_html + "Skills\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "pug\\components\\skills.pug";
pug_html = pug_html + "\u003Cdiv class=\"row topics\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "pug\\components\\skills.pug";
// iterate resume.skills
;(function(){
  var $$obj = resume.skills;
  if ('number' == typeof $$obj.length) {
      for (var pug_index7 = 0, $$l = $$obj.length; pug_index7 < $$l; pug_index7++) {
        var item = $$obj[pug_index7];
;pug_debug_line = 13;pug_debug_filename = "pug\\components\\skills.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-4\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "pug\\components\\skills.pug";
pug_html = pug_html + "\u003Cdiv class=\"topics-wrapper border-style text-center\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "pug\\components\\skills.pug";
pug_html = pug_html + "\u003Ch3 class=\"topic-header\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "pug\\components\\skills.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.name) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E";
;pug_debug_line = 18;pug_debug_filename = "pug\\components\\skills.pug";
if (!(_.isEmpty(item.keywords))) {
;pug_debug_line = 19;pug_debug_filename = "pug\\components\\skills.pug";
pug_html = pug_html + "\u003Cdiv class=\"topics-list\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "pug\\components\\skills.pug";
// iterate item.keywords
;(function(){
  var $$obj = item.keywords;
  if ('number' == typeof $$obj.length) {
      for (var pug_index8 = 0, $$l = $$obj.length; pug_index8 < $$l; pug_index8++) {
        var i = $$obj[pug_index8];
;pug_debug_line = 21;pug_debug_filename = "pug\\components\\skills.pug";
pug_html = pug_html + "\u003Cspan class=\"badge badge-primary mr-1 mb-1\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "pug\\components\\skills.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index8 in $$obj) {
      $$l++;
      var i = $$obj[pug_index8];
;pug_debug_line = 21;pug_debug_filename = "pug\\components\\skills.pug";
pug_html = pug_html + "\u003Cspan class=\"badge badge-primary mr-1 mb-1\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "pug\\components\\skills.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index7 in $$obj) {
      $$l++;
      var item = $$obj[pug_index7];
;pug_debug_line = 13;pug_debug_filename = "pug\\components\\skills.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-4\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "pug\\components\\skills.pug";
pug_html = pug_html + "\u003Cdiv class=\"topics-wrapper border-style text-center\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "pug\\components\\skills.pug";
pug_html = pug_html + "\u003Ch3 class=\"topic-header\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "pug\\components\\skills.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.name) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E";
;pug_debug_line = 18;pug_debug_filename = "pug\\components\\skills.pug";
if (!(_.isEmpty(item.keywords))) {
;pug_debug_line = 19;pug_debug_filename = "pug\\components\\skills.pug";
pug_html = pug_html + "\u003Cdiv class=\"topics-list\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "pug\\components\\skills.pug";
// iterate item.keywords
;(function(){
  var $$obj = item.keywords;
  if ('number' == typeof $$obj.length) {
      for (var pug_index9 = 0, $$l = $$obj.length; pug_index9 < $$l; pug_index9++) {
        var i = $$obj[pug_index9];
;pug_debug_line = 21;pug_debug_filename = "pug\\components\\skills.pug";
pug_html = pug_html + "\u003Cspan class=\"badge badge-primary mr-1 mb-1\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "pug\\components\\skills.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index9 in $$obj) {
      $$l++;
      var i = $$obj[pug_index9];
;pug_debug_line = 21;pug_debug_filename = "pug\\components\\skills.pug";
pug_html = pug_html + "\u003Cspan class=\"badge badge-primary mr-1 mb-1\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "pug\\components\\skills.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
}
;pug_debug_line = 1;pug_debug_filename = "pug\\components\\volunteer.pug";
if (!(_.isEmpty(resume.volunteer))) {
;pug_debug_line = 2;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Csection class=\"mb-0\" id=\"volunteer\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Cheader class=\"section-heading p-t-40\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Ch2\u003E";
;pug_debug_line = 5;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "Volunteer Work\u003C\u002Fh2\u003E\u003C\u002Fheader\u003E";
;pug_debug_line = 6;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Cdiv class=\"paper-timeline\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Cdiv class=\"start-icon\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-child\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "pug\\components\\volunteer.pug";
// iterate resume.volunteer
;(function(){
  var $$obj = resume.volunteer;
  if ('number' == typeof $$obj.length) {
      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
        var item = $$obj[index];
;pug_debug_line = 13;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["col-sm-12 col-md-6 timeline-item " + (index % 2 ? 'offset-md-6 right' : 'left')], [true]), false, false)) + "\u003E";
;pug_debug_line = 14;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-11\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Cdiv class=\"timeline-panel\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Cdiv class=\"media\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "pug\\components\\volunteer.pug";
if (!(_.isEmpty(item.image))) {
;pug_debug_line = 19;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"d-flex mr-3 height-50\""+pug_attr("src", item.image, true, false)+pug_attr("alt", item.organization, true, false)+" itemprop=\"image\"") + "\u002F\u003E";
}
;pug_debug_line = 24;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Cdiv class=\"media-body\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Ch3 class=\"mt-0 mb-1\" itemprop=\"position\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + (null == (pug_interp = item.position) ? "" : pug_interp) + "\u003C\u002Fh3\u003E";
;pug_debug_line = 26;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mt-0 lh-15\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "pug\\components\\volunteer.pug";
if (item.website) {
;pug_debug_line = 28;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", item.website, true, false)+" target=\"_blank\"") + "\u003E";
;pug_debug_line = 28;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.organization) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
else {
;pug_debug_line = 30;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.organization) ? "" : pug_interp));
}
pug_html = pug_html + "\u003C\u002Fp\u003E";
;pug_debug_line = 31;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Cp class=\"mb-1 mt-0 lh-15\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.startDate) ? "" : pug_interp));
;pug_debug_line = 32;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + " - ";
;pug_debug_line = 32;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.endDate || 'Present') ? "" : pug_interp));
;pug_debug_line = 33;pug_debug_filename = "pug\\components\\volunteer.pug";
if (item.duration) {
;pug_debug_line = 34;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 35;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Ci class=\"icon-clock mr-5\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 36;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.duration) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fp\u003E";
;pug_debug_line = 37;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + (null == (pug_interp = item.summary) ? "" : pug_interp);
;pug_debug_line = 38;pug_debug_filename = "pug\\components\\volunteer.pug";
if (!(_.isEmpty(item.highlights))) {
;pug_debug_line = 39;pug_debug_filename = "pug\\components\\volunteer.pug";
// iterate item.highlights
;(function(){
  var $$obj = item.highlights;
  if ('number' == typeof $$obj.length) {
      for (var pug_index11 = 0, $$l = $$obj.length; pug_index11 < $$l; pug_index11++) {
        var highlight = $$obj[pug_index11];
;pug_debug_line = 40;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Cspan class=\"badge badge-primary mr-1 mb-1\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = highlight) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index11 in $$obj) {
      $$l++;
      var highlight = $$obj[pug_index11];
;pug_debug_line = 40;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Cspan class=\"badge badge-primary mr-1 mb-1\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = highlight) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
    }
  }
}).call(this);

}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;
      var item = $$obj[index];
;pug_debug_line = 13;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["col-sm-12 col-md-6 timeline-item " + (index % 2 ? 'offset-md-6 right' : 'left')], [true]), false, false)) + "\u003E";
;pug_debug_line = 14;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-11\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Cdiv class=\"timeline-panel\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Cdiv class=\"media\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "pug\\components\\volunteer.pug";
if (!(_.isEmpty(item.image))) {
;pug_debug_line = 19;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"d-flex mr-3 height-50\""+pug_attr("src", item.image, true, false)+pug_attr("alt", item.organization, true, false)+" itemprop=\"image\"") + "\u002F\u003E";
}
;pug_debug_line = 24;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Cdiv class=\"media-body\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Ch3 class=\"mt-0 mb-1\" itemprop=\"position\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + (null == (pug_interp = item.position) ? "" : pug_interp) + "\u003C\u002Fh3\u003E";
;pug_debug_line = 26;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mt-0 lh-15\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "pug\\components\\volunteer.pug";
if (item.website) {
;pug_debug_line = 28;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", item.website, true, false)+" target=\"_blank\"") + "\u003E";
;pug_debug_line = 28;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.organization) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
else {
;pug_debug_line = 30;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.organization) ? "" : pug_interp));
}
pug_html = pug_html + "\u003C\u002Fp\u003E";
;pug_debug_line = 31;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Cp class=\"mb-1 mt-0 lh-15\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.startDate) ? "" : pug_interp));
;pug_debug_line = 32;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + " - ";
;pug_debug_line = 32;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.endDate || 'Present') ? "" : pug_interp));
;pug_debug_line = 33;pug_debug_filename = "pug\\components\\volunteer.pug";
if (item.duration) {
;pug_debug_line = 34;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 35;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Ci class=\"icon-clock mr-5\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 36;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.duration) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fp\u003E";
;pug_debug_line = 37;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + (null == (pug_interp = item.summary) ? "" : pug_interp);
;pug_debug_line = 38;pug_debug_filename = "pug\\components\\volunteer.pug";
if (!(_.isEmpty(item.highlights))) {
;pug_debug_line = 39;pug_debug_filename = "pug\\components\\volunteer.pug";
// iterate item.highlights
;(function(){
  var $$obj = item.highlights;
  if ('number' == typeof $$obj.length) {
      for (var pug_index12 = 0, $$l = $$obj.length; pug_index12 < $$l; pug_index12++) {
        var highlight = $$obj[pug_index12];
;pug_debug_line = 40;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Cspan class=\"badge badge-primary mr-1 mb-1\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = highlight) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index12 in $$obj) {
      $$l++;
      var highlight = $$obj[pug_index12];
;pug_debug_line = 40;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Cspan class=\"badge badge-primary mr-1 mb-1\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = highlight) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
    }
  }
}).call(this);

}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 43;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Cdiv class=\"end-icon\"\u003E";
;pug_debug_line = 44;pug_debug_filename = "pug\\components\\volunteer.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-circle\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
}
;pug_debug_line = 1;pug_debug_filename = "pug\\components\\projects.pug";
if (!(_.isEmpty(resume.projects))) {
;pug_debug_line = 2;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Csection class=\"mb-0\" id=\"projects\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cheader class=\"section-heading p-t-40\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Ch2\u003E";
;pug_debug_line = 5;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "Projects\u003C\u002Fh2\u003E\u003C\u002Fheader\u003E";
;pug_debug_line = 6;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cdiv class=\"paper-timeline\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cdiv class=\"start-icon\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-project-diagram\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "pug\\components\\projects.pug";
// iterate resume.projects
;(function(){
  var $$obj = resume.projects;
  if ('number' == typeof $$obj.length) {
      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
        var item = $$obj[index];
;pug_debug_line = 13;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["col-sm-12 col-md-6 timeline-item " + (index % 2 ? 'offset-md-6 right' : 'left')], [true]), false, false)) + "\u003E";
;pug_debug_line = 14;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-11\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cdiv class=\"timeline-panel\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cdiv class=\"media\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "pug\\components\\projects.pug";
if (!(_.isEmpty(item.image))) {
;pug_debug_line = 19;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"d-flex mr-3 height-50\""+pug_attr("src", item.image, true, false)+pug_attr("alt", item.client, true, false)+" itemprop=\"image\"") + "\u002F\u003E";
}
;pug_debug_line = 24;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cdiv class=\"media-body\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Ch3 class=\"mt-0 mb-1\" itemprop=\"position\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "pug\\components\\projects.pug";
if (item.website) {
;pug_debug_line = 27;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", item.website, true, false)+" target=\"_blank\"") + "\u003E";
;pug_debug_line = 27;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
else {
;pug_debug_line = 29;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.title) ? "" : pug_interp));
}
pug_html = pug_html + "\u003C\u002Fh3\u003E";
;pug_debug_line = 31;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mt-0 lh-15\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + (null == (pug_interp = item.client) ? "" : pug_interp) + "\u003C\u002Fp\u003E";
;pug_debug_line = 33;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cp class=\"mb-1 mt-0 lh-15\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.startDate) ? "" : pug_interp));
;pug_debug_line = 34;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + " - ";
;pug_debug_line = 34;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.endDate || 'Present') ? "" : pug_interp));
;pug_debug_line = 35;pug_debug_filename = "pug\\components\\projects.pug";
if (item.duration) {
;pug_debug_line = 36;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 37;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Ci class=\"icon-clock mr-5\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 38;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.duration) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fp\u003E";
;pug_debug_line = 39;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 39;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + (null == (pug_interp = item.summary) ? "" : pug_interp) + "\u003C\u002Fp\u003E";
;pug_debug_line = 40;pug_debug_filename = "pug\\components\\projects.pug";
if (!(_.isEmpty(item.highlights))) {
;pug_debug_line = 41;pug_debug_filename = "pug\\components\\projects.pug";
// iterate item.highlights
;(function(){
  var $$obj = item.highlights;
  if ('number' == typeof $$obj.length) {
      for (var pug_index14 = 0, $$l = $$obj.length; pug_index14 < $$l; pug_index14++) {
        var highlight = $$obj[pug_index14];
;pug_debug_line = 42;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cspan class=\"badge badge-primary mr-1 mb-1\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = highlight) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index14 in $$obj) {
      $$l++;
      var highlight = $$obj[pug_index14];
;pug_debug_line = 42;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cspan class=\"badge badge-primary mr-1 mb-1\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = highlight) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
    }
  }
}).call(this);

}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;
      var item = $$obj[index];
;pug_debug_line = 13;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["col-sm-12 col-md-6 timeline-item " + (index % 2 ? 'offset-md-6 right' : 'left')], [true]), false, false)) + "\u003E";
;pug_debug_line = 14;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-11\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cdiv class=\"timeline-panel\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cdiv class=\"media\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "pug\\components\\projects.pug";
if (!(_.isEmpty(item.image))) {
;pug_debug_line = 19;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"d-flex mr-3 height-50\""+pug_attr("src", item.image, true, false)+pug_attr("alt", item.client, true, false)+" itemprop=\"image\"") + "\u002F\u003E";
}
;pug_debug_line = 24;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cdiv class=\"media-body\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Ch3 class=\"mt-0 mb-1\" itemprop=\"position\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "pug\\components\\projects.pug";
if (item.website) {
;pug_debug_line = 27;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", item.website, true, false)+" target=\"_blank\"") + "\u003E";
;pug_debug_line = 27;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
else {
;pug_debug_line = 29;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.title) ? "" : pug_interp));
}
pug_html = pug_html + "\u003C\u002Fh3\u003E";
;pug_debug_line = 31;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mt-0 lh-15\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + (null == (pug_interp = item.client) ? "" : pug_interp) + "\u003C\u002Fp\u003E";
;pug_debug_line = 33;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cp class=\"mb-1 mt-0 lh-15\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.startDate) ? "" : pug_interp));
;pug_debug_line = 34;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + " - ";
;pug_debug_line = 34;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.endDate || 'Present') ? "" : pug_interp));
;pug_debug_line = 35;pug_debug_filename = "pug\\components\\projects.pug";
if (item.duration) {
;pug_debug_line = 36;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 37;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Ci class=\"icon-clock mr-5\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 38;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.duration) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fp\u003E";
;pug_debug_line = 39;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 39;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + (null == (pug_interp = item.summary) ? "" : pug_interp) + "\u003C\u002Fp\u003E";
;pug_debug_line = 40;pug_debug_filename = "pug\\components\\projects.pug";
if (!(_.isEmpty(item.highlights))) {
;pug_debug_line = 41;pug_debug_filename = "pug\\components\\projects.pug";
// iterate item.highlights
;(function(){
  var $$obj = item.highlights;
  if ('number' == typeof $$obj.length) {
      for (var pug_index15 = 0, $$l = $$obj.length; pug_index15 < $$l; pug_index15++) {
        var highlight = $$obj[pug_index15];
;pug_debug_line = 42;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cspan class=\"badge badge-primary mr-1 mb-1\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = highlight) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index15 in $$obj) {
      $$l++;
      var highlight = $$obj[pug_index15];
;pug_debug_line = 42;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cspan class=\"badge badge-primary mr-1 mb-1\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = highlight) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
    }
  }
}).call(this);

}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 45;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Cdiv class=\"end-icon\"\u003E";
;pug_debug_line = 46;pug_debug_filename = "pug\\components\\projects.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-circle\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
}
;pug_debug_line = 1;pug_debug_filename = "pug\\components\\interests.pug";
if (!(_.isEmpty(resume.interests))) {
;pug_debug_line = 2;pug_debug_filename = "pug\\components\\interests.pug";
pug_html = pug_html + "\u003Csection class=\"service-blocks section light p-t-50 mt-5 mb-0\" id=\"skills\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "pug\\components\\interests.pug";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "pug\\components\\interests.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "pug\\components\\interests.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-6 mx-auto\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "pug\\components\\interests.pug";
pug_html = pug_html + "\u003Cheader\u003E";
;pug_debug_line = 10;pug_debug_filename = "pug\\components\\interests.pug";
pug_html = pug_html + "\u003Ch2\u003E";
;pug_debug_line = 10;pug_debug_filename = "pug\\components\\interests.pug";
pug_html = pug_html + "My Interests\u003C\u002Fh2\u003E\u003C\u002Fheader\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = "pug\\components\\interests.pug";
pug_html = pug_html + "\u003Cdiv class=\"p-t-b-40\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "pug\\components\\interests.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "pug\\components\\interests.pug";
if (!(_.isEmpty(resume.interests))) {
;pug_debug_line = 15;pug_debug_filename = "pug\\components\\interests.pug";
// iterate resume.interests
;(function(){
  var $$obj = resume.interests;
  if ('number' == typeof $$obj.length) {
      for (var pug_index16 = 0, $$l = $$obj.length; pug_index16 < $$l; pug_index16++) {
        var item = $$obj[pug_index16];
;pug_debug_line = 16;pug_debug_filename = "pug\\components\\interests.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-4\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "pug\\components\\interests.pug";
pug_html = pug_html + "\u003Cdiv class=\"service-block center\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "pug\\components\\interests.pug";
if (!(_.isEmpty(item.icon))) {
;pug_debug_line = 19;pug_debug_filename = "pug\\components\\interests.pug";
pug_html = pug_html + "\u003Cdiv class=\"service-icon\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "pug\\components\\interests.pug";
pug_html = pug_html + "\u003Ci" + (pug_attr("class", pug_classes([item.icon], [true]), false, false)) + "\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
}
;pug_debug_line = 22;pug_debug_filename = "pug\\components\\interests.pug";
pug_html = pug_html + "\u003Cdiv class=\"service-content\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "pug\\components\\interests.pug";
pug_html = pug_html + "\u003Ch3 class=\"my-3\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "pug\\components\\interests.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.name) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index16 in $$obj) {
      $$l++;
      var item = $$obj[pug_index16];
;pug_debug_line = 16;pug_debug_filename = "pug\\components\\interests.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-4\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "pug\\components\\interests.pug";
pug_html = pug_html + "\u003Cdiv class=\"service-block center\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "pug\\components\\interests.pug";
if (!(_.isEmpty(item.icon))) {
;pug_debug_line = 19;pug_debug_filename = "pug\\components\\interests.pug";
pug_html = pug_html + "\u003Cdiv class=\"service-icon\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "pug\\components\\interests.pug";
pug_html = pug_html + "\u003Ci" + (pug_attr("class", pug_classes([item.icon], [true]), false, false)) + "\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
}
;pug_debug_line = 22;pug_debug_filename = "pug\\components\\interests.pug";
pug_html = pug_html + "\u003Cdiv class=\"service-content\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "pug\\components\\interests.pug";
pug_html = pug_html + "\u003Ch3 class=\"my-3\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "pug\\components\\interests.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.name) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
}
;pug_debug_line = 1;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + "\u003Cfooter class=\"mt-0\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-2 responsive-phone\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"user_profile m-t-b-10\""+pug_attr("src", resume.basics.picture, true, false)+pug_attr("alt", resume.basics.name, true, false)+" itemprop=\"image\"") + "\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-6 text-left\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + "\u003Cheader class=\"section-heading p-t-40 text-left\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + "\u003Ch2\u003E";
;pug_debug_line = 13;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = resume.basics.name) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E";
;pug_debug_line = 14;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + "\u003Cp itemprop=\"description\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + (null == (pug_interp = resume.basics.label) ? "" : pug_interp) + "\u003C\u002Fp\u003E\u003C\u002Fheader\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 16;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-4 responsive-phone\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + "\u003Cdiv class=\"footer-links mb-2\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 19;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-link\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 20;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", resume.basics.website, true, false)) + "\u003E";
;pug_debug_line = 21;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + " ";
;pug_debug_line = 21;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = resume.basics.website) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 23;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 24;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + "\u003Ci class=\"far fa-envelope-open\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 25;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", 'mailto:'+resume.basics.email, true, false)) + "\u003E";
;pug_debug_line = 26;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + " ";
;pug_debug_line = 26;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = resume.basics.email) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 28;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 29;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-phone\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 30;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", 'tel:' + resume.basics.phone, true, false)) + "\u003E";
;pug_debug_line = 31;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + " ";
;pug_debug_line = 31;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = resume.basics.phone) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 33;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 34;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-map-marker-alt\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 35;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + " ";
;pug_debug_line = 35;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = resume.basics.computed_location) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 36;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + "\u003Cdiv class=\"copyrights\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 38;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + "&copy; ";
;pug_debug_line = 38;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = new Date().getFullYear()) ? "" : pug_interp));
;pug_debug_line = 38;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + " ";
;pug_debug_line = 38;pug_debug_filename = "pug\\footer.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = resume.basics.name) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Ffooter\u003E\u003C\u002Fmain\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 1;pug_debug_filename = "pug\\scripts.pug";
pug_html = pug_html + "\u003Cscript src=\"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Ffont-awesome\u002F5.13.0\u002Fjs\u002Fall.min.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 2;pug_debug_filename = "pug\\scripts.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 3;pug_debug_filename = "pug\\scripts.pug";
pug_html = pug_html + "WebFontConfig = {";
;pug_debug_line = 4;pug_debug_filename = "pug\\scripts.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 4;pug_debug_filename = "pug\\scripts.pug";
pug_html = pug_html + "    google: {families: ['Lato:300,400,700:latin']}";
;pug_debug_line = 5;pug_debug_filename = "pug\\scripts.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 5;pug_debug_filename = "pug\\scripts.pug";
pug_html = pug_html + "};";
;pug_debug_line = 6;pug_debug_filename = "pug\\scripts.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 6;pug_debug_filename = "pug\\scripts.pug";
pug_html = pug_html + "(function () {";
;pug_debug_line = 7;pug_debug_filename = "pug\\scripts.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 7;pug_debug_filename = "pug\\scripts.pug";
pug_html = pug_html + "    var wf = document.createElement('script');";
;pug_debug_line = 8;pug_debug_filename = "pug\\scripts.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 8;pug_debug_filename = "pug\\scripts.pug";
pug_html = pug_html + "    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +";
;pug_debug_line = 9;pug_debug_filename = "pug\\scripts.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 9;pug_debug_filename = "pug\\scripts.pug";
pug_html = pug_html + "        ':\u002F\u002Fajax.googleapis.com\u002Fajax\u002Flibs\u002Fwebfont\u002F1\u002Fwebfont.js';";
;pug_debug_line = 10;pug_debug_filename = "pug\\scripts.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 10;pug_debug_filename = "pug\\scripts.pug";
pug_html = pug_html + "    wf.type = 'text\u002Fjavascript';";
;pug_debug_line = 11;pug_debug_filename = "pug\\scripts.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 11;pug_debug_filename = "pug\\scripts.pug";
pug_html = pug_html + "    wf.async = 'true';";
;pug_debug_line = 12;pug_debug_filename = "pug\\scripts.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 12;pug_debug_filename = "pug\\scripts.pug";
pug_html = pug_html + "    var s = document.getElementsByTagName('script')[0];";
;pug_debug_line = 13;pug_debug_filename = "pug\\scripts.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 13;pug_debug_filename = "pug\\scripts.pug";
pug_html = pug_html + "    s.parentNode.insertBefore(wf, s);";
;pug_debug_line = 14;pug_debug_filename = "pug\\scripts.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 14;pug_debug_filename = "pug\\scripts.pug";
pug_html = pug_html + "})();\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";}.call(this,"Date" in locals_for_with?locals_for_with.Date:typeof Date!=="undefined"?Date:undefined,"_" in locals_for_with?locals_for_with._:typeof _!=="undefined"?_:undefined,"css" in locals_for_with?locals_for_with.css:typeof css!=="undefined"?css:undefined,"resume" in locals_for_with?locals_for_with.resume:typeof resume!=="undefined"?resume:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}module.exports = { renderResume: template }; 
