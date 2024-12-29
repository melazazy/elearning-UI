import React from 'react';

    function VirtualClassroom() {
      return (
        <div className="virtual-classroom">
          <div className="video-area">
            <p>Video Area</p>
          </div>
          <div className="side-panel">
            <div className="chat-panel">
              <h3>Chat</h3>
              <p>Chat messages here.</p>
            </div>
            <div className="activities-panel">
              <h3>Activities</h3>
              <p>List of activities.</p>
            </div>
          </div>
        </div>
      );
    }

    export default VirtualClassroom;
