export const BACKEND_URL = process.env.BACKEND_API_URL || 'http://localhost:8080';

export const API_URL = `${BACKEND_URL}/api`;

export const ENDPOINTS = {
  student: {
    login: 'student/login',
    isAuth: 'student/isAuth',
  },
  training: {
    new: 'training/new',
    getStatus: 'training/status',
    getLevel: 'training/level',
    levelComplete: 'training/levelComplete',
  },
};
