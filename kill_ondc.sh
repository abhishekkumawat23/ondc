#!/bin/bash

# Define the ports to check
ports=(8080 9090 9080)

# Iterate over the ports
for port in "${ports[@]}"; do
  # Run netstat command and grep for the current port
  output=$(netstat -vanp tcp | grep "$port")

  # Extract the process IDs from the output
  p_ids=($(echo "$output" | awk '{print $9}'))

  # Check if any process IDs are found
  if [ ${#p_ids[@]} -gt 0 ]; then
    # Iterate over the process IDs and kill each process using kill -9
    for p_id in "${p_ids[@]}"; do
      kill -9 "$p_id"
      echo "Process with ID $p_id using port $port killed."
    done
  else
    echo "No process found using port $port."
  fi
done
