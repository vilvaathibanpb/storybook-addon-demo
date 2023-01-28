import React from 'react';

import Camera from './Camera';

export default {
  title: 'User Permission/Camera',
  Component: Camera,
  parameters: {
    requiredPermission: 'camera',
  },
};

export function CameraDefault() {
  return <Camera />;
}
