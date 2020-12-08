# Express Generator

- Auto generate Express code
- Skaffolds a basic express code

## Steps

1. `express <dicrectory-name>` or `express ./`
2. `npm intall` **NOTE** `npm i mongoose-currency --legacy-peer-deps ` If there is an error for mongoose-currency
3. `npm start`

## Importing dummy data

1. docker cp path/to/file/dishes.json <container_name>:/tmp/dishes.json
2. docker exec 41d7141eea2e mongoimport -d gagan -c dishes --file /tmp/dishes.json
3. docker cp path/to/file/leaders.json <container_name>:/tmp/leaders.json
4. docker exec 41d7141eea2e mongoimport -d gagan -c leaders --file /tmp/leaders.json
5. docker cp path/to/file/promos.json <container_name>:/tmp/promos.json
6. docker exec 41d7141eea2e mongoimport -d gagan -c promos --file /tmp/promos.json
