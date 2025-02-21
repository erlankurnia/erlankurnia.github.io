# Setup Websocket Service (Node.js) and Subdomain on VPS

> Assume the subdomain to be used is `websocket.krlan2789.com`, the VPS IP is `10.0.27.89`, and project path at `/root/repositories/WebSocket-Service`

#### **1. Add DNS Record for subdomain :**

| Type | Name      | Points to  | TTL   |
| ---- | --------- | ---------- | ----- |
| A    | websocket | 10.0.27.89 | 14400 |

#### **2. Create a certificate for subdomain using certbot :**

```bash
sudo certbot certonly --webroot -w /root/repositories/WebSocket-Service -d websocket.krlan2789.com
```

#### **3. Activate the required module :**

```bash
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod proxy_wstunnel
```

#### **4. Create Apache config for subdomain :**

```ruby
<VirtualHost *:80>
    ServerName websocket.krlan2789.com

    Redirect permanent / https://websocket.krlan2789.com
</VirtualHost>

<IfModule mod_ssl.c>
    <VirtualHost *:443>
    ServerName websocket.krlan2789.com

    ProxyPreserveHost On
    RewriteEngine On

    # Upgrade connections to WebSockets
    RewriteCond %{HTTP:Upgrade} =websocket [NC]
    RewriteRule /(.*) ws://localhost:8765/$1 [P,L]

    # Redirect http to https
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

    # Everything else forwards as HTTP to the node app.
    ProxyPass / http://localhost:8765/
    ProxyPassReverse / http://localhost:8765/

    DocumentRoot /root/repositories/WebSocket-Service
    ErrorLog /var/log/apache2/websocket.krlan2789.com-error.log
    CustomLog /var/log/apache2/websocket.krlan2789.com-access.log combined

    # SSL Certificate file location
    SSLEngine On
    SSLCertificateFile /etc/letsencrypt/live/websocket.krlan2789.com/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/websocket.krlan2789.com/privkey.pem
    </VirtualHost>
</IfModule>
```

#### **5. Verify to ensure the Apache config file is correct :**

```bash
sudo apache2ctl configtest
```

#### **6. Enable subdomain Apache config :**

```bash
sudo a2ensite websocket.krlan2789.com.conf
```

#### **7. Restart/reload Apache service :**

```bash
sudo service apache2 restart
```

Or

```bash
sudo systemctl reload apache2
```

#### **8. Check the Apache service is running without any errors :**

```bash
systemctl status apache2.service
```

#### **9. Run a Node.js app using PM2 to automatically run it when the application crashes until the system reboots/restarts :**

```bash
npm i -g pm2

# Start the app
pm2 start /root/repositories/WebSocket-Service/app.js --name 'Websocket-Service-App' --watch

# Stop the app
pm2 stop 'Websocket-Service-App'
# Or
pm2 stop 0 # index of the app

pm2 save -f
pm2 startup systemd
```
