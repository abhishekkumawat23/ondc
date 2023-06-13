#!/bin/bash

# Set the root path
root="${1:-/Users/akumawat/Desktop/ondc}"
name="${2:-buyer_app}"

# Declare the map
declare -a ports
ports[0]="buyer_app"
ports[1]=9090
ports[2]="gateway"
ports[3]=9080
ports[4]="registry"
ports[5]=9070
ports[4]="seller_app/retail1"
ports[5]=9060
ports[6]="seller_app/retail2"
ports[7]=9050

echo $name
for ((i = 0; i < ${#ports[@]}; i += 2)); do
  if [ "${ports[$i]}" = "$name" ]; then
    port="${ports[$((i + 1))]}"
    echo $port
    # Kill the port
    echo "Calling '/Users/akumawat/Desktop/ondc/kill_ondc.sh' $port"
    bash '/Users/akumawat/Desktop/ondc/kill_ondc.sh' $port
    break
  fi
done


# Log current directory function
log_current_directory() {
  current_dir=$(pwd)
  echo "Current directory: $current_dir"
}

cd $root
cd ${name}/server
log_current_directory

mkdir -p "${root}/logs"
npm start > $root/logs/${name}_server_logs.log 2>&1 &

cd $root
log_current_directory