#!/bin/bash

mkdir logs
mkdir logs/seller_app

# Kill all ports(if in use) before starting
bash '/Users/akumawat/Desktop/ondc/kill_ondc.sh'

# Set the root path
root="${1:-/Users/akumawat/Desktop/ondc}"

# Log current directory function
log_current_directory() {
  current_dir=$(pwd)
  echo "Current directory: $current_dir"
}

# Step 1: Change directory to root path
cd $root
log_current_directory

# Step 2 and 3: Process registry/client folder
process_client_folder() {
  folder=$1
  cd $folder
  log_current_directory
  # npm uninstall babel
  # npm install babel
  npx babel src --out-dir dist
  cd $root
  log_current_directory
}

process_client_folder "registry/client/"
process_client_folder "gateway/client/"
process_client_folder "buyer_app/client/"
# process_client_folder "seller_app/logistics"
process_client_folder "seller_app/retail1/client/"
process_client_folder "seller_app/retail2/client/"
process_client_folder "seller_app/retail_client/"

# Step 5: Change directory back to root path
cd $root
log_current_directory

# Step 6 and 7: Process registry/server folder
process_server_folder() {
  folder=$1
  cd $folder/server/
  log_current_directory
  npm start > $root/logs/${folder}_server_logs.log 2>&1 &
  cd $root
  log_current_directory
}

mkdir -p "${root}/logs"
process_server_folder "registry"
process_server_folder "gateway"
process_server_folder "buyer_app"
# process_server_folder "seller_app/logistics"
process_server_folder "seller_app/retail1"
process_server_folder "seller_app/retail2"

# Step 8: Change directory back to root path
cd $root
log_current_directory