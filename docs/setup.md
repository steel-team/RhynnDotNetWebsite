# Setup guide

## Install nginx

### Dependencies

```bash
sudo apt install nginx git
sudo apt install certbot python3-certbot-nginx
```

### Add required sites

```bash
sudo nano /etc/nginx/sites-available/rhynn.net.conf
# put content from rhynn.net.conf
sudo ln /etc/nginx/sites-available/rhynn.net.conf /etc/nginx/sites-enabled
```

### Install website

```bash
# Create user
sudo adduser website2nd # enter password and other info at that step
sudo usermod -aG sudo website2nd
sudo su website2nd
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# Install nodejs
nvm install 25

# Build and deploy app with github.com/steel97/deploy.rs
# see config example at deploy-assets/deploy.cfg.example
pnpm install
pnpm run build # this might be done on pc instead of target server, also see ./build.sh or ./build.ps1
deploy deploy.cfg
# note, if you deploying using website user, please do that before
sudo visudo
website2nd ALL=(ALL) NOPASSWD: ALL # put this at the end of file
```

### Install systemd service

```bash
cd /home/website2nd
sudo systemctl link ./website2nd.service
sudo systemctl enable website2nd
sudo service website2nd start
```

```bash
sudo certbot --nginx
```
