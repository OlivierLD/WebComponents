#!/usr/bin/env bash
#
# Use to clean after publication, remove all the node_modules to save space.
#
echo -e "Will cleanup the following:"
find . -type d -name node_modules -maxdepth 2
echo -en "Proceed y|[n] ? > "
read resp
if [[ ! ${resp} =~ ^(yes|y|Y)$ ]]
then
  echo "Canceled."
  exit 0
fi
echo -e "Cleaning..."
find . -type d -name node_modules -maxdepth 2 -exec rm -rf {} \;
echo "Done"
