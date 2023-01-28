import React from 'react';

import MyNotify from './Notification';

export default {
  title: 'User Permission/Notiication',
  Component: MyNotify,
  parameters: {
    requiredPermission: 'notifications',
  },
};

export function NotifyDefault() {
  return <MyNotify />;
}
