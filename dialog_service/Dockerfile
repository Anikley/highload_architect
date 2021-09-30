FROM golang:1.16-alpine AS build_base

# Same exposed ports than consul
EXPOSE 8301 8301/udp 8302 8302/udp 8500 8600 8600/udp 8300

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

#CMD ["su", "zabbix", "-s", "/bin/bash", "-c", "/zbx_env/zabbix_agentd -f"]
EXPOSE 8080
CMD ["./main"] 

RUN apk --update add consul \
     && rm -rf /var/cache/apk/*


