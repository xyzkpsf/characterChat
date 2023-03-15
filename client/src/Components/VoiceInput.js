import { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const VoiceInput = (props) => {
  // TODO: update State according to transcript output from top level
  const { setInputText } = props;
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const [voiceInput, setVoiceInput] = useState(transcript);

  // TODO: block voice input if browser doesn't support speech recognition
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  // TODO update state according transcript output
  // useEffect(() => {
  //   setInputText(transcript);
  // }, [voiceInput]);


  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};
export default VoiceInput;
