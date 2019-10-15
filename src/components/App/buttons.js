import boom from '../../sounds/boom.wav';
import clap from '../../sounds/clap.wav';
import electronicRide from '../../sounds/electronic-ride.wav';
import harp from '../../sounds/harp.wav';
import hiHats from '../../sounds/hi-hats.wav';
import kick from '../../sounds/kick.wav';
import rideBell from '../../sounds/ride-bell.wav';
import snare from '../../sounds/snare.wav';
import tom from '../../sounds/tom.wav';

const buttons = [
  { 
    letter: 'Q',
    key: 81,
    soundName: 'boom',
    soundSource: boom
  },
  {
    letter: 'W',
    key: 87,
    soundName: 'clap',
    soundSource: clap,
  },
  {
    letter: 'E',
    key: 69,
    soundName: 'electronic-ride',
    soundSource: electronicRide,
  },
  {
    letter: 'A',
    key: 65,
    soundName: 'harp',
    soundSource: harp,
  },
  {
    letter: 'S',
    key: 83,
    soundName: 'hi-hats',
    soundSource: hiHats,
  },
  {
    letter: 'D',
    key: 68,
    soundName: 'kick',
    soundSource: kick,
  },
  {
    letter: 'Z',
    key: 90,
    soundName: 'ride-bell',
    soundSource: rideBell,
  },
  {
    letter: 'X',
    key: 88,
    soundName: 'snare',
    soundSource: snare,
  },
  {
    letter: 'C',
    key: 67,
    soundName: 'tom',
    soundSource: tom,
  },
]

export default buttons;