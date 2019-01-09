#!/usr/bin/env bash
#
widgets=(
	"analogdisplay" "analogwatch" "calendar"
	"compass" "direction" "jumbo" "ledpanel"
	"marquee" "rain" "raw" "skymap" "splitflap"
	"temperature" "windangle" "worldmap"
	"boatoverview" "sunpath" "slideshow"
)
#
HOME=$PWD
echo -e "Working from $HOME"
#
for dir in "${widgets[@]}"
do
  echo -e "-------------------------"
  echo -e "Processing ${dir}"
  echo -e "-------------------------"
  cd $dir
  #
  yarn
  yarn build
  #
  cd ..
  echo -e "👉 Distrib generated in ../lib/$dir"
  # echo -e "👉>> From $PWD"
  # Generate the package.json (can be used for npm link)
  cat ../../publish.utils/packagejson.part.01.txt > ../lib/$dir/package.json
  echo -e "  \"name\": \"$dir\"," >> ../lib/$dir/package.json
  cat ../../publish.utils/packagejson.part.02.txt >> ../lib/$dir/package.json
  echo -e "👉 Done with $dir"
done
#
echo -e "Done"
