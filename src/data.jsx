import React from 'react';
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
    iconName: 'FaHome',
  },
  {
    id: 2,
    url: '/team',
    text: 'team',
    icon: <FaUserFriends />,
    iconName: 'FaUserFriends',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    icon: <FaFolderOpen />,
    iconName: 'FaFolderOpen',
  },
  {
    id: 4,
    url: '/calendar',
    text: 'calendar',
    icon: <FaCalendarAlt />,
    iconName: 'FaCalendarAlt',
  },
  {
    id: 5,
    url: '/documents',
    text: 'documents',
    icon: <FaWpforms />,
    iconName: 'FaWpforms',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
    iconName: 'FaFacebook',
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
    iconName: 'FaLinkedin',
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
    iconName: 'FaBehance',
  },
  {
    id: 5,
    url: 'https://www.twitter.com',
    icon: <FaSketch />,
    iconName: 'FaSketch',
  },
];
