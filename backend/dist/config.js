"use strict";

var _require = require('dotenv'),
    config = _require.config;

config(); //const baseURL = process.env.REACT_APP_BASE_URL;

module.exports = {
  db: {
    user: 'bot',
    password: '[#"d+Y_6GnSt_x?*',
    server: '192.168.20.5',
    database: 'AFAP_Gestion',
    database2: 'SOLO_ACTIVIDAD'
  } //baseURL: baseURL

};