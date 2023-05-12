# Loopbin Meet V2

Rebuild of Loopbin Meet with Flask(python), TailwindCSS.

#### Reason?
- The website need an update 
- Why not?

#### What's new?
- New UI
- New features
- New backend
- New bugs
- New everything

#### Stack
- Flask
- TailwindCSS
- NodeJS?
- Docker
- Google Cloud Platform
  - Cloud Build
  - Cloud Storage
  - Cloud Run
- GitHub Actions

#### Deployment

##### Docker
`Dockerfile.simple` is not optimized for production. It's just for testing purpose.
`Dockerfile` is optimized for production. It's using multi-stage build to reduce image size.

##### Cloud Build
I use Cloud Build to build and push the image to Google Container Registry.
I have 2 scripts: dev and prod.

##### Cloud Run
I use Cloud Run to deploy the image to production.
I have 2 scripts: dev and prod with 2 different services and domains.
