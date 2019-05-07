#!/bin/bash
# Use this script when the JPG extensions have replaced the jpg ones.
# This happens some times on Docker...
#
for image in *.JPG
do
  mv "$image" "$basename "$image" .JPG).jpg"
done
