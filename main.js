var speechrecognition = window.webkitSpeechRecognition;

var recognition = new speechrecognition();

function start() {
    document.getElementById("captions").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {

    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("caption").innerHTML = Content;

speak()

}
function speak()
{
 var synth= window.speechSynthesis
 var speakdata=document.getElementById("captions").value
var  utterthis=new speechSynthesisutterance(speakdata)
synth.speak(utterthis)
Webcam.attach("#display")
}

Webcam.set({
width:360,
height:150,
image_format:"jpeg",
jpeg_quality:1080
})



