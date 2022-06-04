#!/usr/bin/env node
const open = require('open')
const { exec, spawn } = require('child_process')
exec('npx webpack --mode="development"', () => {
    // spawn('node', [ 'webpack', '--watch', '--mode="development"' ], { stdio: 'inherit' });
    spawn('node', ['index.js'], {
        env: {
            NODE_ENV: 'production',
            PATH: process.env.PATH
        }
    })
    open('./public/index.html')
    console.log('Watching for changes in "./src"')
})