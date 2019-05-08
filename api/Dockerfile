FROM golang:1.11 as builder

WORKDIR /go/src/server

COPY . .

# Download dependencies
RUN go get -d -v ./...

# Build the Go app
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o /go/bin/server .

######## Start a new stage #######
FROM alpine:latest

RUN apk --no-cache add ca-certificates

WORKDIR /root/

COPY --from=builder /go/bin/server .

EXPOSE 8080

CMD ["./server"]
