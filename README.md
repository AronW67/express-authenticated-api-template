# Express & Prisma Authentication Template
This project is a template for an authenticated express JS api project using Prisma DB.
The endpoint /api/token uses basic auth. Users and passwords need to be seeded to the database first.
The token endpoint returns JWT token which can be assigned to 'jwt' header for access to /api/user endpoint.

## Environment Varables
copy .env-sample and rename .env

## Start database for development
docker-compose up -d

## Migrate Prisma changes (Update DB schemas)
npx prisma migrate dev --name init

## Generate Prisma TS types for use in app
npx prisma generate

## Seed initial database users
npx prisma db seed

## Run app
npm run start


