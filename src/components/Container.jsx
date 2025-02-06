import { useState } from 'react';
import Stats from './Stats';
import Textarea from './Textarea';
import {
  INSTA_MAX_CHARACTERS,
  TIKTOK_MAX_CHARACTERS,
  TWITTER_MAX_CHARACTERS,
} from '../library/constants';

export default function Container() {
  let [text, setText] = useState('');
  let numberOfCharacters = text.length;

  const stats = {
    numberOfWords: text.split(/\s/).filter((word) => word !== '').length,
    lineCounter: text.split(/\n/).filter((line) => line !== '').length,
    numberOfCharacters: text.length,
    instagramCharactersLeft: INSTA_MAX_CHARACTERS - numberOfCharacters,
    tikTokCharactersLeft: TIKTOK_MAX_CHARACTERS - numberOfCharacters,
    twitterCharactersLeft: TWITTER_MAX_CHARACTERS - numberOfCharacters,
  };
  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
