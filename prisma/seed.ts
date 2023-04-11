import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const event = await prisma.event.create({
    data: {
      id: '',
      title: 'Mein Event',
      date: '2023-03-06T11:42:18+00:00',
      deleted: false,
      streetName: 'Teststraße',
      streetNumber: '55',
      postalcode: '51147',
      city: 'Dortmund',
      country: 'Timbuktu',
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
