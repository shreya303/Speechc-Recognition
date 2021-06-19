import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import logo from './giphy.gif';

const Dictaphone1 = () => {
 const [message, setMessage] = useState('');
 const commands = [
   {
     command: 'reset',
     callback: () => resetTranscript()
   },
   {
     command: 'shut up',
     callback: () => setMessage('I wasn\'t talking.')
   },
   {
     command: 'Hello',
     callback: () => setMessage('Hi There!')
   },
   {
     command: 'How was your day',
     callback: () => setMessage('Pretty Good!')
   },
   {
     command: 'I had a tough day',
     callback: () => setMessage('“Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day, saying, “I will try again tomorrow.” – Mary Anne Radmacher')
   },
   {
     command: 'Tell me a fact',
     callback: () => setMessage("To date, Amazon has sold over 10 million Alexa devices, and Siri remains the most popular virtual assistant with 41 million monthly active users.")
   },
   {
     command: 'Tell me a joke',
     callback: () => setMessage("Why did the mushroom go to the party? Because he was a fungi. ")
   },
   {
     command: 'Tell me a fact about india',
     callback: () => setMessage("India has over 300,000 mosques and over 2 million Hindu temples ")
   },
   {
     command: 'What is the most expensive painting to be sold at auction',
     callback: () => setMessage(" Leonardo da Vinci's Salvator Mundi, which sold for $450.3 million.")
   },
   {
     command: 'What is the deepest place in the world',
     callback: () => setMessage("The Mariana Trench.It’s deeper than the highest mountain is tall!")
   },
   {
     command: 'Where did the Olympics begin',
     callback: () => setMessage("--- Ancient Greece --- :)")
   },
   {
     command: 'Which is the largest country in the World',
     callback: () => setMessage("Russia! You're favourite game Tetris was invented in Russia!")
   },
   {
     command: 'Which planet has the shortest day',
     callback: () => setMessage("Jupiter, it's also the largest planet of the Solar System!")
   },
   {
     command: 'Who was the first person to walk the moon',
     callback: () => setMessage("Neil Armstrong !")
   },
   {
     command: 'Which is The highest grossing movie',
     callback: () => setMessage('Avatar! Na\'vi-the language spoken was influenced by Amharic, Persian and Chinese')
   },
   {
     command: 'What are amstrong numbers',
     callback: () => setMessage("An Armstrong number of 3 digits, the sum of cubes of each digit is equal to the number itself. Example 153,370,371...")
   },
   {
     command: 'What does NBA stand for',
     callback: () => setMessage("National Basketball Association.")
   },
   {
     command: 'Fact about LeBron James',
     callback: () => setMessage("LeBron was the youngest player to be drafted by the NBA number 1 at the age of 18!")
   }
 ]

 const {
   transcript,
   interimTranscript,
   finalTranscript,
   resetTranscript,
   listening,
 } = useSpeechRecognition({ commands });

 useEffect(() => {
   if (finalTranscript !== '') {
     console.log('Got final result:', finalTranscript);
   }
 }, [interimTranscript, finalTranscript]);
 if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
   return null;
 }

 if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
   console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
 }
 const listenContinuously = () => {
   SpeechRecognition.startListening({
     continuous: true,
     language: 'en-GB',
   });
 };
 return (
   <div>
    <img  className='im' src={logo} />
     <div>
       <span className='textDic'>
         listening:
         {' '}
         {listening ? 'on' : 'off'}
       </span>

       <div>

         <button type="button" className='btn2' onClick={resetTranscript}>Reset</button>
         <button type="button" className='btn2' onClick={listenContinuously}>Listen</button>
         <button type="button" className='btn2' onClick={SpeechRecognition.stopListening}>Stop</button>
       </div>
     </div>
     <div className='textD'>
       {message}
     </div>
     <div>
       <span className='textD2'>{transcript}</span>
     </div>
   </div>
 );
};

export default Dictaphone1;




/*const fruit = () => {
      const words = ["apple","banana","orange"];
      const randomItem =random(words);
      if (command)=randomItem{
      callback: () => setMessage('Its a match');}
      else{callback: () => setMessage("Sorry");
};
const r=words[Math.floor(Math.random()*words.length)];
*/
