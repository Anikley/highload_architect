FROM golang:1.16-alpine AS build_base

# Move to working directory /build
WORKDIR /app

# Copy and download dependency using go mod
COPY go.mod .
COPY go.sum .
RUN go mod download

# Copy the code into the container
COPY . .
# Build the Go app
RUN GIN_MODE=debug CGO_ENABLED=0 go build -o main .

RUN apk --update add zabbix-agent \
     && rm -rf /var/cache/apk/*

#CMD ["su", "zabbix", "-s", "/bin/bash", "-c", "/zbx_env/zabbix_agentd -f"]
EXPOSE 8080
CMD ["./main"] 

# Command to run the executable
CMD ["/usr/sbin/zabbix_agentd", "--foreground", "-c", "/app/zbx_env/zabbix_agentd.conf"] 
EXPOSE 10050



