#!/bin/bash

# We just start the nginx service and then leave consul-template running on the foreground.
# Here we use the CONSUL_URL environment variable that we defined before. Consul template
# expects to find a service.ctmpl file in /templates. This is the template that we would
# mount as a volume from our host. The result is then placed in /etc/nginx/conf.d/service.conf
# where Nginx will be able to read from. Finally, every time the template is re-rendered we
# do a service nginx reload in order to read the new configuration.
# Note: & added so that nginx runs in a separate process and consul-template runs in this process
# sh -c service ningx -s reload

consul-template -template 'templates/service.ctmpl:/etc/nginx/conf.d/nginx.conf:service nginx reload' -consul-addr '172.18.0.4:8500' -log-level debug && cat /etc/nginx/conf.d/nginx.conf && service nginx start