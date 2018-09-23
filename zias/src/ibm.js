var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
var config = require('./config');

var tone_analyzer = new ToneAnalyzerV3(
        {
        username: config.username,
        password: config.password,
        version_date: '2018-09-22'
        });

var text = 'Dear Google, from a frustrated fanboy'

var toneParams = {
  'tone_input': { 'text': text },
  'content_type': 'application/json'
};

// Use our Tone Analyzer variable to analyze the tone.
tone_analyzer.tone(toneParams, function(error, toneAnalysis)
        {
        // There's an error.
        if (error)
                {
                console.log('Error:', error);
                }
        // No error, we got our tone result.
        else
                {
                // The tone of the text, as determined by watson.
                var tone = JSON.stringify(toneAnalysis, null, 2)

                // Output Watson's tone analysis to the console.
                console.log("The tone analysis for \'" + text + "\' is:\n");
                console.log(tone);
                }
        });
