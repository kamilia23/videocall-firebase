import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faVideo,
  faDesktop,
  faVideoSlash,
  faMicrophoneSlash,
  faPhoneSlash,
  faRecordVinyl,
  faUserGroup,
  faMessage,
  faNoteSticky
} from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";
import "./MeetingFooter.css";


const MeetingFooter = (props) => {
  const [streamState, setStreamState] = useState({
    mic: true,
    video: false,
    screen: false,
  });
  const micClick = () => {
    setStreamState((currentState) => {
      return {
        ...currentState,
        mic: !currentState.mic,
      };
    });
  };


  const endCallClick = () => {
    try {
			let tracks = this.setStreamState.current.srcObject.getTracks()
			tracks.forEach(track => track.stop())
		} catch (e) {}
		window.location.href = "/"
  };





  const onVideoClick = () => {
    setStreamState((currentState) => {
      return {
        ...currentState,
        video: !currentState.video,
      };
    });
  };

  const onScreenClick = () => {
    props.onScreenClick(setScreenState);
  };

  const setScreenState = (isEnabled) => {
    setStreamState((currentState) => {
      return {
        ...currentState,
        screen: isEnabled,
      };
    });
  };
  useEffect(() => {
    props.onMicClick(streamState.mic);
  }, [streamState.mic]);
  useEffect(() => {
    props.onVideoClick(streamState.video);
  }, [streamState.video]);





  return (
    <div className="meeting-footer">
      <div
        className={"meeting-icons " + (!streamState.mic ? "active" : "")}
        data-tip={streamState.mic ? "Mute Audio" : "Unmute Audio"}
        onClick={micClick}
      >
        <FontAwesomeIcon
          icon={!streamState.mic ? faMicrophoneSlash : faMicrophone}
          title="Mute"
        />
      </div>
      <div
        className={"meeting-icons " + (!streamState.video ? "active" : "")}
        data-tip={streamState.video ? "Hide Video" : "Show Video"}
        onClick={onVideoClick}
      >
        <FontAwesomeIcon icon={!streamState.video ? faVideoSlash : faVideo} />
      </div>
      <div
        className="meeting-icons"
        data-tip="Share Screen"
        onClick={onScreenClick}
        disabled={streamState.screen}
      >
        <FontAwesomeIcon icon={faDesktop} />
      </div>

      <div
        className="meeting-icons"
        data-tip="End Call"
        onClick={endCallClick}
      >
        <FontAwesomeIcon icon={faPhoneSlash} />
      </div>

      <div 
        className="meeting-icons" 
        data-tip="Record"
      >
        <FontAwesomeIcon icon={faRecordVinyl} />
      </div>

      <div 
        className="meeting-icons"
        data-tip="Participants"
      >
        <FontAwesomeIcon icon={faUserGroup} />
      </div>

      <div
        className="meeting-icons"
        data-tip="Chat"
      >
      <FontAwesomeIcon icon={faMessage} />
      </div>

      <div
        className="meeting-icons"
        data-tip="Note"
      >
      <FontAwesomeIcon icon={faNoteSticky} />
      </div>

      <ReactTooltip />

      
    </div>
  );
};

export default MeetingFooter;
