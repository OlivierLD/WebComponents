#!/usr/bin/env bash
#
# Publish to an npm registry
#
# To generate a package.json, 'npm init' is an option
# To get your own local npm registry (https://www.npmjs.com/package/local-npm) :
# $ npm set registry https://registry.npmjs.org
# $ cd WebComponents
# $ npm install [-g] local-npm
# The local registry must be running:
# $ local-npm [&]
# Make sure you've set the registry to the local one:
# $ npm set registry http://127.0.0.1:5080
# To switch back to what it was :
# $ npm set registry https://registry.npmjs.org (or whatever it was, like "http://artifactory-slc.oraclecorp.com/artifactory/api/npm/npm-virtual")
#
# To browse the local registry:
#  http://localhost:5080/_browse
#
# WARNING: local-npm does not always work... version mismatch and such shit.
#
widgets=(
  "analogdisplay" "analogwatch" "calendar" "compass" "direction"
  "jumbo" "ledpanel" "marquee" "rain" "raw" "skymap" "splitflap"
  "temperature" "windangle" "worldmap" "boatoverview" "sunpath"
  "slideshow" "compass.2" "satelliteplotter" "knob" "graph"
)
#
echo -e "+-------------------------+"
echo -e "+-- P U B L I S H I N G --+"
echo -e "+-------------------------+"
echo -e "|  1. AnalogDisplay       |"
echo -e "|  2. AnalogWatch         |"
echo -e "|  3. CalendarDisplay     |"
echo -e "|  4. Compass             |"
echo -e "|  5. Direction Display   |"
echo -e "|  6. Jumbo Display       |"
echo -e "|  7. Led Panel           |"
echo -e "|  8. Marquee Panel       |"
echo -e "|  9. Rain Meter          |"
echo -e "| 10. 16 Points Display   |"
echo -e "| 11. Sky Map             |"
echo -e "| 12. Split Flap          |"
echo -e "| 13. Thermometer         |"
echo -e "| 14. Wind Angle          |"
echo -e "| 15. World Map           |"
echo -e "| 16. Boat Overview       |"
echo -e "| 17. Sun Path            |"
echo -e "| 18. Slide Show          |"
echo -e "| 19. Compass Display     |"
echo -e "| 20. Satellite Plotter   |"
echo -e "| 21. Knob and Display    |"
echo -e "| 22. Graph Display       |"
echo -e "| ...                     |"
echo -e "+-------------------------+"
echo -e "| Q to quit               |"
echo -e "+-------------------------+"
echo -en "- You choose > "
read response
#
case "$response" in
  "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" )
    echo -e "--- npm config ---"
    npm config list
    #
    CompDir=${widgets[$response - 1]}
    echo -e "👉 Widget in $CompDir"
    cd $CompDir
#   npm publish . --dry-run
    yarn
    yarn build
    # npm publish .
    cd ..
    echo -e "🌟 Distrib generated in ../lib/$CompDir"
    # echo -e "👉>> From $PWD"
    cat ../../publish.utils/packagejson.part.01.txt > ../lib/$CompDir/package.json
    echo -e "  \"name\": \"$CompDir\"," >> ../lib/$CompDir/package.json
    cat ../../publish.utils/packagejson.part.02.txt >> ../lib/$CompDir/package.json
    echo -e "🚚 $CompDir ready to ship"
    ;;
  "q" | "Q")
    ;;
   *)
    echo -e "What? Unknown or un-implemented command [$response]"
    ;;
esac
