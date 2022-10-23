#!/bin/sh

# SVGs lifted from https://github.com/devicons/devicon

cd svgs
for svg_file in *.svg; do
  /Applications/Inkscape.app/Contents/MacOS/inkscape \
    --export-type png \
    --export-filename ../tinified/"${svg_file}.png" \
    -w 427 \
    "${svg_file}"
done

