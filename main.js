const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const stopBtn = document.getElementById('stop');
const textIp = document.getElementById('txt');
const speedIp = document.getElementById('speed');

playBtn.addEventListener('click',() => {
    playTxt(textIp.value);
});
pauseBtn.addEventListener('click', pauseSpeech);
stopBtn.addEventListener('click', stopText);
function playTxt(t){
    if (speechSynthesis.paused && speechSynthesis.speaking) {
        return speechSynthesis.resume()
      }
    const utterance = new SpeechSynthesisUtterance(t);
    utterance.rate = speedIp.value || 1;
    utterance.addEventListener('end',() =>{
        textIp.disabled = false;
    })
    textIp.disabled = true;
    speechSynthesis.speak(utterance); 
}
function pauseSpeech()
{
    if(speechSynthesis.speaking)speechSynthesis.pause();
}
function stopText() {
    speechSynthesis.resume();
    speechSynthesis.cancel();
  }