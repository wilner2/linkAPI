# LinkApi
Uma integração entre as plataformas Pipedrive e Bling( A integração deve buscar as oportunidades com status igual a ganho no Pipedrive, depois inseri-las como pedido no Bling).

 Foi criado ma collection no banco de dados MongoDB agregando as oportunidades inseridas noBling por dia e valor total.



## Tecnologias e Bibliotecas utilizadas
* MongoDB 
* Eslint 
* Express 
* Mongoose 
* MongoDB 
* axios
* js2xmlparser
* Atlas

## Instalando

    npm install


# API

## Lista os negocios/oportunidades no PipeDrive

### Request

`GET /api/negocios/`

    curl -i -H 'Accept: application/json' http://localhost:7000/api/negocios/

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    [  {
    "id": 1,
    "creator_user_id": {
      "id": 12444262,
      "name": "wilner bruno",
      "email": "wilnertestes@gmail.com",
      "has_pic": 0,
      "pic_hash": null,
      "active_flag": true,
      "value": 12444262
    },
    "user_id": {
      "id": 12444262,
      "name": "wilner bruno",
      "email": "wilnertestes@gmail.com",
      "has_pic": 0,
      "pic_hash": null,
      "active_flag": true,
      "value": 12444262
    },
    "person_id": {
      "active_flag": true,
      "name": "LinkAPI",
      "email": [
        {
          "label": "work",
          "value": "3123232323",
          "primary": true
        }
      ],
      "phone": [
        {
          "label": "work",
          "value": "3121212121",
          "primary": true
        }
      ],
      "owner_id": 12444262,
      "value": 1
    },
    "org_id": {
      "name": "LinkAPI",
      "people_count": 1,
      "owner_id": 12444262,
      "address": null,
      "active_flag": true,
      "cc_email": "linkapi3@pipedrivemail.com",
      "value": 1
    },
    "stage_id": 4,
    "title": "LinkAPI",
    "value": 1000,
    "currency": "BRL",
    "add_time": "2021-07-10 20:44:54",
    "update_time": "2021-07-10 23:32:28",
    "stage_change_time": "2021-07-10 23:32:21",
    "active": false,
    "deleted": false,
    "status": "won",
    "probability": null,
    "next_activity_date": null,
    "next_activity_time": null,
    "next_activity_id": null,
    "last_activity_id": null,
    "last_activity_date": null,
    "lost_reason": null,
    "visible_to": "3",
    "close_time": "2021-07-10 23:32:28",
    "pipeline_id": 1,
    "won_time": "2021-07-10 23:32:28",
    "first_won_time": "2021-07-10 23:32:28",
    "lost_time": null,
    "products_count": 0,
    "files_count": 0,
    "notes_count": 0,
    "followers_count": 1,
    "email_messages_count": 0,
    "activities_count": 0,
    "done_activities_count": 0,
    "undone_activities_count": 0,
    "participants_count": 1,
    "expected_close_date": "2021-07-10",
    "last_incoming_mail_time": null,
    "last_outgoing_mail_time": null,
    "label": null,
    "renewal_type": "one_time",
    "stage_order_nr": 3,
    "person_name": "LinkAPI",
    "org_name": "LinkAPI",
    "next_activity_subject": null,
    "next_activity_type": null,
    "next_activity_duration": null,
    "next_activity_note": null,
    "group_id": null,
    "group_name": null,
    "formatted_value": "R$ 1.000",
    "weighted_value": 1000,
    "formatted_weighted_value": "R$ 1.000",
    "weighted_value_currency": "BRL",
    "rotten_time": null,
    "owner_name": "wilner bruno",
    "cc_email": "linkapi3+deal1@pipedrivemail.com",
    "org_hidden": false,
    "person_hidden": false}]


## Integrando os negocios/oportunidades no Bling e salva no banco de dados(mongo)

### Request

`GET /api/negocios/integracao`

    curl -i -H 'Accept: application/json' http://localhost:7000/api/negocios/integracao

### Response
200

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2
    
    {
        "status": 200,"msg": 
        "Integração feita com sucesso"
    }
500

    {
        "status": 500,
        "msg": "Erro ao fazer a integração"
    }    

## Lista todos os pedidos salvos no banco

### Request

`GET /api/pedidos/`

    curl -i -H 'Accept: application/json' http://localhost:7000/api/pedidos/

### Response
200

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2
    
    [
        {
            "_id": "60eb55510e9e3308e4fe0bd5",
            "id": "1",
            "pessoa": "LinkAPI",
            "titulo": "LinkAPI",
            "organizacao": "LinkAPI",
            "valor": 1000,
            "__v": 0
        },
        {
            "_id": "60eb55510e9e3308e4fe0bd9",
            "id": "2",
            "pessoa": "LinkAPI2",
            "titulo": "Negócio LinkAPI2",
            "organizacao": "LinkAPI2",
            "valor": 2000,
            "__v": 0
        }
    ]

## Lista um pedido salvo no banco

### Request

`GET /api/pedidos/id/:id`

    curl -i -H 'Accept: application/json' http://localhost:7000/api/pedidos/id/1

### Response
200

    [
        {
            "_id": "60eb55510e9e3308e4fe0bd5",
            "id": "1",
            "pessoa": "LinkAPI",
            "titulo": "LinkAPI",
            "organizacao": "LinkAPI",
            "valor": 1000,
            "__v": 0
        }
    ]

## Lista todos as oportunidades inseridas no Bling por dia e valor total.

### Request

`GET /api/pedidos/data/`

    curl -i -H 'Accept: application/json' http://localhost:7000/api/pedidos/data/

### Response
200

    [
        {
            "_id": "60eb555252e6a5bead92d4fc",
            "data": "2021-07-10T00:00:00.000Z",
            "__v": 0,
            "quantidade": 1,
            "valor": 1000
        },
        {
            "_id": "60eb555352e6a5bead92d54c",
            "data": "2021-07-11T00:00:00.000Z",
            "__v": 0,
            "quantidade": 1,
            "valor": 2000
        }
    ]


## Lista oportunidades inseridas no Bling por dia e valor total no dia informado.

### Request

`GET /api/pedidos/data/:data`

    curl -i -H 'Accept: application/json' http://localhost:7000/api/pedidos/data/2021-07-11

### Response
200

    [
        {
            "_id": "60eb555352e6a5bead92d54c",
            "data": "2021-07-11T00:00:00.000Z",
            "__v": 0,
            "quantidade": 1,
            "valor": 2000
        }
    ]


