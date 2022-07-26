import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_TU_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(ev) {
  localStorage.setItem(LOCAL_TU_KEY, ev.seconds);
}

setCurrentTime();

function setCurrentTime() {
  const getSavedTime = localStorage.getItem(LOCAL_TU_KEY);
  if (getSavedTime) {
    player.setCurrentTime(getSavedTime);
  }
}
