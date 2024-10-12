# Workshop Jest

## Setup

### Pre-requisites:

- Docker
- docker-compose

#### Docker

Install Docker for your platform.

- Mac: https://store.docker.com/editions/community/docker-ce-desktop-mac
- Windows: https://store.docker.com/editions/community/docker-ce-desktop-windows
- Linux: Please see your distributions package management system

#### docker-compose

Install docker-compose for your platform.

- Mac: Included with Docker
- Windows: Included with Docker
- Linux: Please see your distributions package management system

### Misc.

We are using Node through Docker. In order to use tools like Yarn through Docker, we must pass our commands to the Docker container. This is a really long command:

`docker-compose -f docker-compose.cli.yml run --rm npm install`

Because of this, it is recommended to create an alias for `docker-compose -f docker-compose.cli.yml run --rm` and call it `dcli` (Docker CLI).

### Installation

First we need to clone the project.

```bash
cd ~/code # or whatever directory you keep your projects in

git clone git@github.com:MiguelTzab/workshop-jest.git
cd workshop-jest
```

Now that we have the application configured, we need to install our dependencies. Before doing that though we need the docker images we use.

```bash
docker-compose pull
```

Now we can install our dependencies.

```bash
dcli yarn install
```

# Estructura del Proyecto

```bash
workshop-jest
├── Dockerfile
├── README.md
├── docker-compose.cli.yml
├── package.json
├── src/
├── tests/
└── yarn.lock
```

### Descripción de archivos y directorios
- **Dockerfile**: Archivo de configuración para construir una imagen Docker.
- **README.md**: Documentación del proyecto, contiene información básica y guías.
- **docker-compose.cli.yml**: Archivo de configuración para Docker Compose, definiendo comandos específicos (_Yarn_).
- **package.json**: Archivo que describe las dependencias y scripts del proyecto.
- **src/**: Directorio que contiene el código fuente de la aplicación.
- **tests/**: Directorio con las pruebas del proyecto.
- **yarn.lock**: Archivo de bloqueo de dependencias para garantizar que se instalen las mismas versiones.

### Running the tests

To run the tests, run this command:

```bash
dcli yarn test
```