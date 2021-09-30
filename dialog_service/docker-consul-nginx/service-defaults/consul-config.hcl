consul {
    address = "172.18.0.3:8500"
    retry {
        enabled = true
        attempts = 12
        backoff = "250ms"
    }
}

max_stale = "10m"
log_level = "warn"


vault {
    address = "http://172.18.0.3:8200"
}

template {
    source      = "templates/service.ctmpl"
} 