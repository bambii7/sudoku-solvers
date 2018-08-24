#!/usr/bin/env bash

tail -11 puzzles/blank.puzzle | paste -sd "," - | sed 's/[^0-9]*//g'
