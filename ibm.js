var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

var toneAnalyzer = new ToneAnalyzerV3({
    version: '{2018-09-22}',
    iam_apikey: '{mNh8LF5-q24BvMXKJkbsApyrKkXfw2vjVtCe5tgTIYaQ}',
    url: '{https://gateway-wdc.watsonplatform.net/tone-analyzer/api}'
  });


var text = 'Team, I know that times are tough! Product '
  + 'sales have been disappointing for the past three '
  + 'quarters. We have a competitive product, but we '
  + 'need to do a better job of selling it!'

var toneParams = {
      'tone_input': { 'text': text },
      'content_type': 'application/json'
};

toneAnalyzer.tone(toneParams, function (error, toneAnalysis) {
    if (error) {
      console.log(error);
    } else {
      console.log(JSON.stringify(toneAnalysis, null, 2));
    }
}); 0;
