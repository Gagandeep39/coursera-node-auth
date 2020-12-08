# Express Generator

- Auto generate Express code
- Skaffolds a basic express code

## Steps

1. `express <dicrectory-name>` or `express ./`
2. `npm intall` **NOTE** `npm i mongoose-currency --legacy-peer-deps ` If there is an error for mongoose-currency
3. `npm start`

## Importing dummy data
1. docker cp path/to/file/dummy.json <container_name>:/tmp/dummy.json
2. docker exec 41d7141eea2e mongoimport -d gagan -c dishes --file /tmp/dummy.json
