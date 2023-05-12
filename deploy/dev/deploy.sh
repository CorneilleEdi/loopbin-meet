set -e

APP_NAME=loopbin-meet
CLOUDBUILD_PATH=./deploy/dev/cloudbuild.yaml
DOCKERFILE_PATH=Dockerfile
PROJECT_ID=$(gcloud config list --format 'value(core.project)' 2>/dev/null)

VERSION_FILE="version"
VERSION=$(grep "^dev==" "$VERSION_FILE" | sed 's/.*==//')

echo "Building version: $VERSION"

echo "Building docker image"
IMAGE=gcr.io/$PROJECT_ID/$APP_NAME:$VERSION

gcloud builds submit --config $CLOUDBUILD_PATH \
  --substitutions _IMAGE=$IMAGE,_VERSION=$VERSION,_DOCKERFILE_PATH=$DOCKERFILE_PATH \
  .

echo "✅ Image build successfully. ${IMAGE}"