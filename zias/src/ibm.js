import {Stitch, AnonymousCredential} from "mongodb-stitch-browser-sdk";

function toneAnalysis(){
var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
var config = require('./config');

const client = stitch.Stitch.initializeDefaultAppClient('zias-mynmy');

const db = client.getServiceClient(stitch.RemoteMongoClient.factory, 'mongodb-atlas').db('ZIAS');

client.auth.loginWithCredential(new stitch.AnonymousCredential()).then(user => 
  db.collection('ZIAS2').updateOne({owner_id: client.auth.user.id}, {$set:{number:42}}, {upsert:true})
).then(() => 
  db.collection('ZIAS2').find({owner_id: client.auth.user.id}, { limit: 100}).asArray()
).then(docs => {
    console.log("Found docs", docs)
    console.log("[MongoDB Stitch] Connected to Stitch")
}).catch(err => {
  console.error(err)
});

var tone_analyzer = new ToneAnalyzerV3(
        {
        username: config.username,
        password: config.password,
        version_date: '2018-09-22'
        });

var text = db.collection('ZIAS2').find({owner_id: client.auth.user.id});

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

}

toneAnalysis();
