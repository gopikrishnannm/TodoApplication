# Full Stack Application with Spring Boot and React

## Running the Application

- REST API - Import into Eclipse as Maven Project. Run `com.gk.rest.webservices.restfulwebservices.RestfulWebServicesApplication` as a Java Application. Check Authentication and REST API Sections for executing REST APIs.
- React Application - Import `frontend/todo-app` into Visual Studio Code. Run `npm install` followed by `npm start`
- http://localhost:3000/ with credentials gk/gk

> Look at  `Creating New Users` section for creating new users.

## Deploying Front End to AWS

### Change /04-frontend/todo-app/src/components/todo/api/ApiClient.js

```
export const apiClient = axios.create(
    {
        baseURL: 'http://localhost:5000' //#CHANGE
    }
);


```

### Create Production Build

`npm run build`


### S3 Access for Static Content

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AddPerm",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
        }
    ]
}
```

## Authentication

All REST API are protected by JWT Authentication with Spring Security. 

POST to http://localhost:5000/authenticate

```
{
  "username":"gk",
  "password":"gk"
}
```

Response
```
{
"token": "xxx"
}
```

Use the token in the headers for all subsequent requests.

`Authorization` : `Bearer ${token}`



## Creating New Users


```
INSERT INTO USER (ID, USERNAME, PASSWORD, ROLE) 
VALUES (3, 'USERNAME', 'BCRYPT_ENCRyPTED_PASSWORD','ROLE_USER');
```


## Hello World URLS

- http://localhost:5000/hello-world

```txt
Hello World
```

- http://localhost:5000/hello-world-bean

```json
{"message":"Hello World - Changed"}
```

- http://localhost:5000/hello-world/path-variable/gk

```json
{"message":"Hello World, gl"}
```

## TODO Resource Details

- GET - http://localhost:5000/users/gk/todos

```
[
  {
    "id": 10001,
    "username": "gk",
    "description": "Learn JPA",
    "targetDate": "2025-06-27T06:30:30.696+0000",
    "done": false
  },
  {
    "id": 10002,
    "username": "gk",
    "description": "Learn Data JPA",
    "targetDate": "2025-06-27T06:30:30.700+0000",
    "done": false
  },
  {
    "id": 10003,
    "username": "gk",
    "description": "Learn Microservices",
    "targetDate": "2025-06-27T06:30:30.701+0000",
    "done": false
  }
]
```

#### Retrieve a specific todo

- GET - http://localhost:5000/users/gk/todos/10001

```
{
  "id": 10001,
  "username": "gk",
  "description": "Learn DSA",
  "targetDate": "2019-06-27T06:30:30.696+0000",
  "done": false
}
```

#### Creating a new todo

- POST to http://localhost:5000/users/gk/todos with BODY of Request given below

```
{
  "username": "gk",
  "description": "Learn AWS",
  "targetDate": "2026-11-09T10:49:23.566+0000",
  "done": false
}
```

#### Updating a new todo

- http://localhost:5000/users/gk/todos/10001 with BODY of Request given below

```
{
  "id": 10001,
  "username": "gk",
  "description": "Learn AWS",
  "targetDate": "2025-11-09T10:49:23.566+0000",
  "done": false
}
```

#### Delete todo

- DELETE to http://localhost:5000/users/gk/todos/10001

## H2 Schema - Created by Spring Boot Auto Configuration

```
Hibernate: drop table todo if exists
Hibernate: drop table user if exists
Hibernate: drop sequence if exists hibernate_sequence
Hibernate: drop sequence if exists user_seq
Hibernate: create sequence hibernate_sequence start with 1 increment by 1
Hibernate: create sequence user_seq start with 1 increment by 1
Hibernate: create table todo (id bigint not null, description varchar(255), is_done boolean not null, target_date timestamp, username varchar(255), primary key (id))
Hibernate: create table user (id bigint not null, password varchar(100) not null, role varchar(100) not null, username varchar(50) not null, primary key (id))
Hibernate: alter table user add constraint UK_sb8bbouer5wak8vyiiy4pf2bx unique (username)
```


## H2 Console

- http://localhost:5000/h2-console
- Use `jdbc:h2:mem:testdb` as JDBC URL 

