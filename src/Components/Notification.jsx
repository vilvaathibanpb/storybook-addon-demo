import React, { useState } from 'react';

function MyNotify() {
  const [permission, setPermission] = useState(null);
  const requestPermission = async () => {
    const response = await Notification.requestPermission();
    setPermission(response);
  };

  const sendNotify = () => {
    if (permission !== 'granted') {
      return;
    }

    new Notification('Test notification', {
      body: 'How are you all?',
    });
  };

  return (
    <div>
      <button onClick={requestPermission}>Request Notify Permisiion</button>
      <br />
      {permission === 'granted' && <button onClick={sendNotify}>Send Notification</button>}
    </div>
  );
}

export default MyNotify;
