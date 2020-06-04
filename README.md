# react-native-blogpost
This is a boilerplate of react native with context, provider, calling api with axios / json-server

# install json-server
## Run npm install ngrok json-server --save
## Create db.json file with this content:
    {
    "blogposts": [
        {
        "title": "test title",
        "content": "test content",
        "id": 2
        },
        {
        "title": "8888",
        "content": "88888",
        "id": 8
        }
    ]
    }
## package.json script:
    "scripts": {
        "db" : "json-server -w db.json",
        "tunnel": "ngrok http 3000"
    },
## Open 2 terminals: 
    npm run tunnel
    npm run db
