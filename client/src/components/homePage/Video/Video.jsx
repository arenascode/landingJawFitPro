// import { useRef, useState } from "react";
import { useRef, useState } from "react";
import "./video.scss";

const Video = () => {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const progressFilledRef = useRef(null);
  const [play, setPlay] = useState(false);
  const [volume, setVolume] = useState(1);
  const [mute, setMute] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);
  const [playback, setPlayBack] = useState(1)

  const handlePlay = (e) => {
    e.preventDefault();
    const playerOverlay = document.querySelector(".hoverBtn");
    // const video = document.querySelector('.playerVideo')
    if (videoRef.current) {
      if (!play) {
        videoRef.current.play();
        playerOverlay.style.opacity = 0;
      } else {
        videoRef.current.pause();
        playerOverlay.style.opacity = 1;
      }
      setPlay(!play);
    }
  };

  const handleProgress = () => {
    const percent =
      (videoRef.current.currentTime / videoRef.current.duration) * 100;
    progressFilledRef.current.style.flexBasis = `${percent}%`;
    if (videoRef.current.ended) {
      setPlay(false);
    }
  };

  const skip = (e) => {
    console.log(e.target);
    console.log(videoRef.current.currentTime);
    videoRef.current.currentTime += parseFloat(e.target.dataset.skip);
  };

  const lastVolumeSet = useRef();

  const handleVolumeUpdate = (e) => {
    console.log(e.target.value);
    setVolume(e.target.value);
    videoRef.current[e.target.name] = e.target.value;
    lastVolumeSet.current = videoRef.current["volume"];
    if (videoRef.current[e.target.name] === 0) {
      console.log("hii");
      setMute(true);
    } else {
      setMute(false);
    }
  };

  const volumeToggle = () => {
    // setMute(!mute)
    console.log(mute);
    if (videoRef.current["volume"] !== 0) {
      console.log(videoRef.current["volume"]);
      lastVolumeSet.current = videoRef.current['volume']
      videoRef.current["volume"] = 0;
      setMute(true);
      setVolume(0);
    } else {
      if (lastVolumeSet.current == 0) {
        videoRef.current["volume"] = 1;
        setVolume(1)
      } else {
        videoRef.current["volume"] = lastVolumeSet.current;
        setVolume(lastVolumeSet.current);
      }
      setMute(false);
    }
  };

  const handlePlayback = (e) => {
    console.log(e.target.value);
    setPlayBack(e.target.value);
    videoRef.current[e.target.name] = e.target.value;
    // lastVolumeSet.current = videoRef.current["volume"];
  };

  const scrub = (e) => {
    console.log(e.nativeEvent.offsetX);
    const scrubTime =
      (e.nativeEvent.offsetX / progressRef.current.offsetWidth) *
      videoRef.current.duration;
    console.log(scrubTime);
    videoRef.current.currentTime = scrubTime;
  };

  const fullScreen = () => {
    console.log(videoRef.current.width);
    videoRef.current.requestFullscreen()
  }
  return (
    <div id="videoContainer" className="player sm:max-w-full overflow-x-hidden">
      <video
        ref={videoRef}
        onClick={handlePlay}
        onTimeUpdate={handleProgress}
        className="playerVideo"
        src="assets/652333414.mp4"
      ></video>
      <button className="hoverBtn" onClick={handlePlay}>
        {play ? "❚ ❚" : "►"}
      </button>
      <div className="playerControls">
        <div
          className="progress"
          ref={progressRef}
          onClick={scrub}
          onMouseDown={() => setMouseDown(true)}
          onMouseMove={() => mouseDown && scrub()}
          onMouseUp={() => setMouseDown(false)}
        >
          <div ref={progressFilledRef} className="progressFilled"></div>
        </div>
        <button
          className="playerButton"
          title="Toggle Play"
          onClick={handlePlay}
        >
          {play ? "❚ ❚" : "►"}
        </button>
        <div className="volumeIcons sm:w-8">
          {mute == false ? (
            <img
              src="/assets/icons/volumeOn.webp"
              alt=""
              width={'100%'}
              onClick={volumeToggle}
            />
          ) : (
            <img
              src="/assets/icons/volumeOff.webp"
              alt=""
              width={'100%'}
              onClick={volumeToggle}
            />
          )}
        </div>
        <input
          type="range"
          name="volume"
          className="player__slider"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          onChange={handleVolumeUpdate}
          // onMouseMove={!mute ? undefined : handleVolumeUpdate}
        />
        <input
          type="range"
          name="playbackRate"
          className="player__slider"
          min="0.5"
          max="2"
          step="0.1"
          value={playback}
          onChange={handlePlayback}
          // onMouseMove={handleRangeUpdate}
        />
        <button data-skip="-10" className="player__button" onClick={skip}>
          « 10s
        </button>
        <button data-skip="25" className="player__button" onClick={skip}>
          25s »
        </button>
        <button className="player__fullScreen m-2" onClick={fullScreen}><img src="/assets/icons/fullScreen.webp" alt="" width={10}/></button>
      </div>
    </div>
  );
};
export default Video;
