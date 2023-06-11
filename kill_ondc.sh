#!/bin/bash

declare -a ports
# "buyer_app"
ports[0]=9090
# "gateway"
ports[1]=9080
# "registry"
ports[2]=9070
# "seller_app/retail"
ports[3]=9060

processTermination() {
  port="$1"
  echo $port

  if [ -n "$port"]; then
    echo "returning"
    return
  fi

  # Run netstat command and grep for the specified port
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
}

# port=""
# if [ -n "$1" ]; then
#   name="$1"
#   echo "name is: ${name}"
#   for ((i = 0; i < ${#ports[@]}; i += 2)); do
#     if [ "${ports[$i]}" = "$name" ]; then
#       port="${ports[$((i + 1))]}"
#       echo $port
#       break
#     fi
#   done
# fi

port=${1}
echo "Port is:"
echo "$port"

# Check if an input port key is provided
if [ -n "$port" ]; then
  echo "Killing $port"
  processTermination "$port"
else
  # Process termination for all ports
  for port in "${ports[@]}"; do
    # port="${ports[i]}"
    echo "Killing $port"
    processTermination "$port"
  done
fi

# #!/bin/bash


# declare -A ports
# ports["buyer_app"]=9090
# ports["gateway"]=9080
# ports["registry"]=9070

# # Iterate over the ports
# for port in "${ports[@]}"; do
#   # Run netstat command and grep for the current port
#   output=$(netstat -vanp tcp | grep "$port")

#   # Extract the process IDs from the output
#   p_ids=($(echo "$output" | awk '{print $9}'))

#   # Check if any process IDs are found
#   if [ ${#p_ids[@]} -gt 0 ]; then
#     # Iterate over the process IDs and kill each process using kill -9
#     for p_id in "${p_ids[@]}"; do
#       kill -9 "$p_id"
#       echo "Process with ID $p_id using port $port killed."
#     done
#   else
#     echo "No process found using port $port."
#   fi
# done


