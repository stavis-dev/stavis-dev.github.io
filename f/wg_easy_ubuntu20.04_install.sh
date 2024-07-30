#!/bin/bash

apt update -y
apt install apt-transport-https ca-certificates curl software-properties-common -y
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
apt update
apt install docker-ce -y
systemctl enable docker
echo "docker installed successfully"
sleep 1


PASSWG=`openssl rand -hex 16`
IPVPS=`ip addr show $ETH | grep global | sed -En -e 's/.*inet ([0-9.]+).*/\1/p' | head -n1`


docker run -d --name=wg-easy -e WG_HOST=$IPVPS -e PASSWORD=$PASSWG -v ~/.wg-easy:/etc/wireguard -p 51820:51820/udp -p 51821:51821/tcp --cap-add=NET_ADMIN --cap-add=SYS_MODULE --sysctl="net.ipv4.conf.all.src_valid_mark=1" --sysctl="net.ipv4.ip_forward=1"  --restart unless-stopped  weejewel/wg-easy


echo "------------------------------------------"
echo "WEB interface Wireguard WG-EASY IP: http://"$IPVPS":51821"
echo "WEB interface Wireguard WG-EASY password" $PASSWG