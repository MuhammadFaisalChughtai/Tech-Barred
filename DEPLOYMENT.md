# techbarred - Docker Deployment Guide

This guide will help you deploy the techbarred application on your Contabo server using Docker.

## Prerequisites

- Contabo server with Docker and Docker Compose installed
- SSH access to your server
- Domain name (optional, but recommended)

## Installation Steps

### 1. Install Docker (if not already installed)

```bash
# Update package index
sudo apt update

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo apt install docker-compose -y

# Add your user to docker group (optional, to run without sudo)
sudo usermod -aG docker $USER
```

### 2. Upload the ZIP file to your server

```bash
# On your local machine, upload the zip file
scp techbarred-deployment.zip user@your-server-ip:/home/user/

# SSH into your server
ssh user@your-server-ip

# Extract the zip file
unzip techbarred-deployment.zip
cd techbarred
```

### 3. Build and Run with Docker Compose

```bash
# Build and start the container
sudo docker-compose up -d --build

# Check if container is running
sudo docker-compose ps

# View logs
sudo docker-compose logs -f
```

### 4. Access Your Application

- Open your browser and navigate to `http://your-server-ip`
- If you have a domain, point it to your server IP and update nginx configuration

## Managing the Application

### Stop the application
```bash
sudo docker-compose down
```

### Restart the application
```bash
sudo docker-compose restart
```

### View logs
```bash
sudo docker-compose logs -f techbarred
```

### Update the application
```bash
# Pull latest changes or upload new zip
sudo docker-compose down
sudo docker-compose up -d --build
```

## Custom Domain Setup

If you want to use a custom domain:

1. Point your domain's DNS A record to your Contabo server IP
2. Update `nginx.conf` and change `server_name localhost;` to `server_name yourdomain.com www.yourdomain.com;`
3. Rebuild the container: `sudo docker-compose up -d --build`

## SSL Certificate (HTTPS)

For production, you should add SSL certificate:

1. Install Certbot:
```bash
sudo apt install certbot python3-certbot-nginx -y
```

2. Get SSL certificate:
```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

3. Certbot will automatically configure nginx and set up auto-renewal

## Troubleshooting

### Port 80 already in use
```bash
# Check what's using port 80
sudo lsof -i :80

# Stop the service or change the port in docker-compose.yml
# Change "80:80" to "8080:80" to use port 8080 instead
```

### Container won't start
```bash
# Check logs
sudo docker-compose logs

# Check container status
sudo docker ps -a
```

### Need to rebuild
```bash
sudo docker-compose down
sudo docker-compose build --no-cache
sudo docker-compose up -d
```

## Production Checklist

- [ ] Domain configured
- [ ] SSL certificate installed
- [ ] Firewall configured (allow ports 80 and 443)
- [ ] Regular backups configured
- [ ] Monitoring setup
- [ ] Update contact email in Privacy Policy

## Support

For issues or questions, refer to the Docker and nginx documentation.
