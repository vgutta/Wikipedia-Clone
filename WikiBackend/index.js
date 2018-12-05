const express = require('express');
const Router = require('./router.js');
const { setupMongoose } = require('./setup-mongoose');
/*
const summarizer = require('nodejs-text-summarizer');

var text = 'Bandung, West Java. The Corruption Eradication Commission, better known as KPK, on Thursday launched the 2015 Anti-Corruption Festival, or Festa, in conjunction with the Bandung city government, to celebrate International Anti-Corruption Day. The festival will run until Friday. KPK acting chief Taufiqqurahman Ruki, National Police Chief Gen. Badrodin Haiti, House of Regional Representatives (DPD) Speaker Irman Gusman and Attorney General H.M. Prasetyo were to be joined by Political, Legal and Security Affairs Minister Luhut Panjaitan, Justice and Human Rights Minister Yasonna Laoly, Health Minister Nina Moeloek and Industry Minister Saleh Husin at the event. The KPK\'s Ruki opened the event on Thursday with a speech calling on the House to reconsider intentions to revise the KPK law, or "face the anti-corruption community." He pointed to three key aspects to the fight against corruption — human, cultural and systematic — and said that systematic aspect were the most important, as they reflects policies and laws. “We do not name someone as a suspect because we hold a grudge against that particular person or because we are driven by political motives," he said. "We do so in the name of the law." “Graft is a crime against humanity as it is proven to bring injustice and poverty and we have to eradicate it," Luhut said. "The country\'s leaders, whether at the central or regional government level, have to be good role models in fighting graft. I would like everyone to work together for a graft-free Indonesia." Bandung was selected to host the event as the city has the highest level of public engagement, infrastructure capability and corruption prevention, compared to other cities, KPK deputy chief Adnan Pandu Praja said. The KPK hopes Festa will encourage more Indonesians to join the fight against corruption by beginning in their own neighborhood. The festival will feature theater performances, live music and other events.';
 
var result = summarizer(text);

console.log(result);
//const SummaryTool = require('node-summary');
/*
const title = "This is a title";
const content = "For ten out of the last eleven years, I've lived in two places: New York City and San Francisco. The last two years have been in NYC. After founding Ursa Labs, a not-for-profit open source development group, I felt it was time to make my home somewhere that isn't either of those places. After some contemplation and consulting many friends, I decided on Nashville, Tennessee. This blog explains some of my feelings on this lifestyle change, and why I hope to see an increased migration of tech workers, and open source developers in particular, to other parts of the United States."

SummaryTool.summarize(title, content, function(err, summary) {
	if(err) console.log("Something went wrong man!");

	console.log(summary);

	console.log("Original Length " + (title.length + content.length));
	console.log("Summary Length " + summary.length);
	console.log("Summary Ratio: " + (100 - (100 * (summary.length / (title.length + content.length)))));
});
*/
setupMongoose();

const app = express();

Router.addRoutes(app);

app.listen(3542);

console.log('Listening on 3542.');