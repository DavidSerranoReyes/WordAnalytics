import { useState } from 'react';
import Warning from './Warning';

export default function Textarea({ text, setText }) {
  let [warningText, setWarningText] = useState('');

  let handleChange = function (event) {
    let newText = event.target.value;

    if (newText.includes('<script>')) {
      setWarningText('No scripts allowed');

      newText = newText.replace('<script>', '');
    } else if (/[@#$%^&*]/.test(newText)) {
      setWarningText('No special symbols allowed');

      // Eliminar los caracteres especiales
      newText = newText.replace(/[@#$%^&*]/, '');
    } else {
      setWarningText('');
    }
    setText(newText);
  };
  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck="false"
      />
      <Warning warningText={warningText} />
    </div>
  );
}
