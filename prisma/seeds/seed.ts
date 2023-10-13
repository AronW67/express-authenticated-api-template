import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const seedUsers = async () => {
  try {
    await prisma.user.createMany({
      data: [
        { 
            name: 'Alice', 
            email: 'alice24@gmail.com',
            password: 'duck123',

        },
        { 
            name: 'Bob',
            email: 'theBuilder@gmail.com',
            password: 'canhefixit'
        },
        { 
            name: 'admin',
            email: 'admin52@admin.com',
            password: 'password'
        },
      ],
    });

    console.log('Seed data successfully inserted.');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedUsers();

