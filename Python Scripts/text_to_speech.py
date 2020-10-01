from gtts import gTTS 
  
import os 
  
mytext = str(input())
  
language = 'en'
myobj = gTTS(text=mytext, lang=language, slow=False) 
    
myobj.save("TextToSpeech.mp3") 
  
os.system("TextToSpeech.mp3")
