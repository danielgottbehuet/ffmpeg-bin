'use strict';
const path = require('path');
const BinWrapper = require('bin-wrapper');

module.exports = new BinWrapper()
	.src('https://github.com/eugeneware/ffmpeg-static/releases/download/b4.4/darwin-x64', 'darwin')
	.dest(path.join(__dirname, './vendor'))
	.use('darwin-x64');