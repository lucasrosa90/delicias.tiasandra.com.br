/* eslint-disable complexity */
import { fakerPT_BR as faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create 10 categories
  const categories = []
  for (let i = 0; i < 10; i++) {
    categories.push({
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    })
  }
  await prisma.category.createMany({ data: categories })

  // Create 10 allergens
  const allergens = []
  for (let i = 0; i < 10; i++) {
    allergens.push({
      id: faker.string.uuid(),
      name: faker.lorem.word(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    })
  }
  await prisma.allergen.createMany({ data: allergens })

  // Create 10 tags
  const tags = []
  for (let i = 0; i < 10; i++) {
    tags.push({
      id: faker.string.uuid(),
      name: faker.lorem.word(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    })
  }
  await prisma.tag.createMany({ data: tags })

  // Create 10 clients
  const clients = []
  for (let i = 0; i < 10; i++) {
    clients.push({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    })
  }
  await prisma.client.createMany({ data: clients })

  // Create 10 products with random categories, allergens, and tags
  const products = []
  for (let i = 0; i < 10; i++) {
    const categoryId = categories[faker.number.int({ min: 0, max: 9 })].id
    const product = {
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      ingredients: faker.lorem.words(5),
      image: faker.image.url(),
      price: faker.finance.amount({ min: 10, max: 500, dec: 2 }),
      categoryId,
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    }
    const createdProduct = await prisma.product.create({
      data: product,
    })

    // Connect product with random allergens
    const allergenConnections = faker.helpers.arrayElements(allergens).map(a => ({ id: a.id }))
    await prisma.product.update({
      where: { id: createdProduct.id },
      data: { allergens: { connect: allergenConnections } },
    })

    // Connect product with random tags
    const tagConnections = faker.helpers.arrayElements(tags).map(t => ({ id: t.id }))
    await prisma.product.update({
      where: { id: createdProduct.id },
      data: { tags: { connect: tagConnections } },
    })

    products.push(createdProduct)
  }

  // Seed Production
  const productions = []
  for (let i = 0; i < 10; i++) {
    const productId = products[faker.number.int({ min: 0, max: 9 })].id
    productions.push({
      productId,
      quantity: faker.number.int({ min: 1, max: 100 }),
      productionDate: faker.date.past(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    })
  }
  await prisma.production.createMany({ data: productions })

  // Seed ClientContact
  const clientContacts = []
  for (let i = 0; i < 10; i++) {
    const clientId = clients[faker.number.int({ min: 0, max: 9 })].id
    clientContacts.push({
      clientId,
      contactType: faker.helpers.arrayElement(['Email', 'Phone']),
      contactValue:
        faker.helpers.arrayElement(['Email', 'Phone']) === 'Email' ? faker.internet.email() : faker.phone.number(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    })
  }
  await prisma.clientContact.createMany({ data: clientContacts })

  // Seed Address
  const addresses = []
  for (let i = 0; i < 10; i++) {
    const clientId = clients[faker.number.int({ min: 0, max: 9 })].id
    addresses.push({
      clientId,
      address: faker.location.streetAddress(),
      number: faker.number.int({ min: 1, max: 1000 }).toString(),
      complement: faker.helpers.arrayElement([faker.location.secondaryAddress(), null]),
      reference: faker.helpers.arrayElement([faker.company.name(), null]),
      city: faker.location.city(),
      state: faker.location.state({ abbreviated: true }),
      zipCode: faker.location.zipCode(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    })
  }
  await prisma.address.createMany({ data: addresses })

  // Seed Sale, SaleDetail, and SaleHistory
  const sales = []
  for (let i = 0; i < 10; i++) {
    const clientId = clients[faker.number.int({ min: 0, max: 9 })].id
    const sale = await prisma.sale.create({
      data: {
        clientId,
        address: faker.location.streetAddress(),
        number: faker.number.int({ min: 1, max: 1000 }).toString(),
        complement: faker.helpers.arrayElement([faker.location.secondaryAddress(), null]),
        reference: faker.helpers.arrayElement([faker.company.name(), null]),
        city: faker.location.city(),
        state: faker.location.state({ abbreviated: true }),
        zipCode: faker.location.zipCode(),
        saleDate: faker.date.past(),
        paymentStatus: faker.helpers.arrayElement(['Paid', 'Pending', 'Cancelled']),
        paymentMethod: faker.helpers.arrayElement(['Cash', 'Credit Card', 'PayPal']),
        deliveryStatus: faker.helpers.arrayElement(['Delivered', 'In Transit', 'Cancelled']),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
      },
    })
    sales.push(sale)

    // Create SaleDetail for each Sale
    for (let j = 0; j < faker.number.int({ min: 1, max: 5 }); j++) {
      const productId = products[faker.number.int({ min: 0, max: 9 })].id
      await prisma.saleDetail.create({
        data: {
          saleId: sale.id,
          productId,
          quantity: faker.number.int({ min: 1, max: 20 }),
          salePrice: faker.finance.amount({ min: 10, max: 500, dec: 2 }),
          createdAt: faker.date.past(),
          updatedAt: faker.date.recent(),
        },
      })
    }

    // Create SaleHistory for each Sale
    await prisma.saleHistory.create({
      data: {
        saleId: sale.id,
        status: faker.helpers.arrayElement(['Payment Pending', 'Payment Completed']),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
      },
    })
  }
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
