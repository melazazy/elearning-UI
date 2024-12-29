import React from 'react';

    function Notifications() {
      return (
        <div className="notification-list">
          <h2>Notifications</h2>
          <div className="notification-item">
            <p>New message from teacher.</p>
          </div>
          <div className="notification-item">
            <p>Upcoming assignment due.</p>
          </div>
        </div>
      );
    }

    export default Notifications;
