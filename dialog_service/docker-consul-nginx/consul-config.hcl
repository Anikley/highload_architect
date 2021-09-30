consul {
    address = "172.18.0.6:8500"
    retry {
        enabled = true
        attempts = 12
        backoff = "250ms"
    }
}