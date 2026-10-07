const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('app.js', 'utf8');
const data = vm.runInNewContext(source.split('const stopRoot =')[0] + '\n({drawings, stops})');
const stops = data.stops.map(([time,title,description,tag,art],i) => `<article id="stop-${i+1}" class="stop stop-${art}"><div class="stop-content"><div class="stop-number"><b>${String(i+1).padStart(2,'0')}</b>${time}</div><h3>${title}</h3><p>${description}</p><span class="tag">${tag}</span></div><button class="illustration" aria-label="Play animation for ${title}"><span class="tiny-star" aria-hidden="true">✦</span><svg viewBox="0 0 130 150" aria-hidden="true">${data.drawings[art]}</svg></button></article>`).join('\n');
const links = data.stops.map(([time,title],i)=>`<a class="plan-item" href="#stop-${i+1}"><span>${time}</span>${title}</a>`).join('\n');
const runtime = source.slice(source.indexOf('const observer='));
const html = fs.readFileSync('page.html','utf8')
 .replace('<link rel="stylesheet" href="style.css">',()=>`<style>\n${fs.readFileSync('style.css','utf8')}\n</style>`)
 .replace('<div id="stops"></div>',()=>`<div id="stops">${stops}</div>`)
 .replace('<div id="plan-list"></div>',()=>`<div id="plan-list">${links}</div>`)
 .replace('<script src="app.js"></script>',()=>`<script>\n${runtime}\ndocument.querySelectorAll('.plan-item').forEach(link=>link.addEventListener('click',()=>plan.close()));\n</script>`);
fs.writeFileSync('index.html',html);
console.log('Built self-contained illustrated itinerary');
