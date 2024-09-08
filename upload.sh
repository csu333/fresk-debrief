#!/bin/bash

# Load environment variables from a file
source env_file.sh

cd html
FILES=`find . -type f`
echo $FILES

MKDIR=`for directory in $FOLDERS; do echo "mkd \"${directory}\""; done`
DELETE=`for file in $DFILES; do echo "delete \"${file}\""; done`
ATTACH=`for file in $FILES; do echo "put $file"; done`


IFS=$ORIGIFS
# Send updates to server
    ftp -nv <<EOF
    open $FTPHOST
    user $FTPUSER $FTPPASS
    binary
    cd $FTPDIR
    $MKDIR
    $ATTACH
    quit
 EOF