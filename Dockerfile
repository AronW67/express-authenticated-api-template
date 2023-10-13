### Use if you want to run app inside its own container ###
FROM node:19 as development

# Working Dir
WORKDIR /usr/src/app

# Copy Package Json Files
COPY package*.json ./

# Npm Install
RUN npm install

# Copy source files
COPY . .

# Build
RUN npm run build

# Run the Prisma Client generation
RUN npx prisma generate

# Run Prisma migrations during image build
RUN npx prisma migrate deploy
RUN npx prisma db push

# Expose the API Port
EXPOSE 3100

CMD ["node", "build/app.js"]