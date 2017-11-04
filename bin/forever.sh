#!/bin/bash
DATE=$(date +%s)
forever start -l dict-${DATE}.log -e err.log -o out.log server.js
