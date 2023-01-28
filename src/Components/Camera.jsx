import React, { useEffect, useRef, useState } from 'react';

function Camera() {
  const videoRef = useRef(null);
  const [permission, setPermission] = useState(null);

  useEffect(() => {
    navigator.permissions.query({ name: 'camera' }).then((permissionStatus) => {
      setPermission(permissionStatus.state);
    });

    navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      });
  });

  return (
    <div>
      {permission === 'granted' ? (
        <video ref={videoRef} id="videoElement" />
      ) : (
        <h2>Camera permission denied</h2>
      )}
    </div>
  );
}

export default Camera;
