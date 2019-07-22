# Adonis API

A example of AdonisJS API using Authentication, Redis, Lucid ORM and much more :sunglasses:

In this project, you can register tasks and users, assigned these tasks to some users and alert them when some assigns happened through emails.

## Versions

AdonisJS | NodeJS  | NPM   |
---------|---------|-------|
4.1.0    | 10.16.0 | 6.9.0 |

## Dependencies

You must need to use [Redis](https://redis.io) and [PostgreSQL](https://www.postgresql.org) to run this project. You can choose between download them or using [Docker](https://www.docker.com). To run them using Docker, execute the following example commands:

#### Redis

```sh
$ docker container run --name redis -p 6379:6379 -d -t redis:alpine
```

#### PostgreSQL

```sh
$ docker container run -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=adonis -p 7777:5432 postgres
```

You need to configure .env file to connect to PostgreSQL database that was created. You can use .env.example as a example to your .env file.

## Getting Started

To install all dependencies with NPM, you can use the following command:

```sh
$ npm install
```

To run this project on development environment after install all dependencies, you need to use the following command:

```sh
$ adonis serve --dev
```

## Routes

To list all routes, you can run the following command inside project folder:

```sh
$ adonis route:list
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/gabriel-hahn/adonis-api/tags).

## Authors

[Gabriel Hahn Schaeffer](https://github.com/gabriel-hahn/) | [Rocketseat Course](https://github.com/Rocketseat)

See also the list of [contributors](https://github.com/gabriel-hahn/adonis-api/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details
