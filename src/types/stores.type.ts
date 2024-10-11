export interface AudioPlayerStore {
  // If music is playing true/false
  playing: boolean;

  // Set music is playing true
  play: () => void;

  // Set music is playing false
  pause: () => void;

  // Toggle music is playing true/false
  togglePlay: () => void;

  // Shows the current time of the playing song
  currentTime: number;

  // Set the current time of the playing song
  setCurrentTime: (time: number) => void;

  // Shows the current loaded time of the playing song
  loadedTime: number;

  // Set the current loaded time of the playing song
  setLoadedTime: (time: number) => void;

  // Shows the duration of the current song
  duration: number;

  // Set the duration of the current song
  setDuration: (duration: number) => void;

  // Show the current index of the song in Array
  currentIndex: number | null;

  // Setting the current index of songs needed
  setCurrentIndex: (index: number | null) => void;

  // Shows the current sound power
  volume: number;

  // Set the sound power increase/decrease
  setVolume: (volume: number) => void;
}
