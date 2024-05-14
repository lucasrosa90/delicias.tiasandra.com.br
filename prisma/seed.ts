/* eslint-disable complexity */
/* eslint-disable max-len */
import { fakerPT_BR as faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create categories
  const categories = []
  const createCategories = ['Frango', 'Carne', 'Sopas', 'Porções', 'Bolos']
  for (let i = 0; i < createCategories.length; i++) {
    categories.push({
      id: faker.string.uuid(),
      name: createCategories[i],
    })
  }
  await prisma.category.createMany({ data: categories })

  // Create tags
  const tags = []
  const createTags = ['Sem glúten', 'Sem leite', 'Sem lactose']
  for (let i = 0; i < createTags.length; i++) {
    tags.push({
      id: faker.string.uuid(),
      name: createTags[i],
    })
  }
  await prisma.tag.createMany({ data: tags })

  // Create products
  const products = []
  const createProducts = [
    // Frango
    [
      'Purê de Mandioca com Picadinho de Frango',
      'Purê Mandioca (120g) + Picadinho de Frango (180g)',
      '18.90',
      categories[0].id,
      'Peito de frango, mandioca, creme de leite sem lactose, manteiga sem lactose, tomate, cebola, alho, colorau, páprica picante, pimenta preta, sal, azeite oliva e salsinha.',
      [tags[0].id, tags[2].id],
    ],
    [
      'Purê de Mandioca com Picadinho de Frango e Legumes',
      'Purê Mandioca (100g) + Picadinho de Frango (150g) + Legumes (50g)',
      '18.90',
      categories[0].id,
      'Peito de frango, mandioca, legumes (cenoura, vagem, brócolis), creme de leite sem lactose, manteiga sem lactose, tomate, cebola, alho, colorau, páprica picante, pimenta preta, sal, azeite oliva e salsinha.',
      [tags[0].id, tags[2].id],
    ],
    [
      'Purê de Batata Doce com Picadinho de Frango',
      'Purê Batata doce (120g) + Picadinho de Frango (180g)',
      '18.90',
      categories[0].id,
      'Peito de frango, batata doce, creme de leite sem lactose, manteiga sem lactose, tomate, cebola, alho, colorau, páprica picante, pimenta preta, sal, azeite oliva e salsinha.',
      [tags[0].id, tags[2].id],
    ],
    [
      'Arroz integral, Feijão, Legumes e Frango',
      'Arroz integral c/ feijão (120g) + Picadinho de Frango (130g) + Legumes (50g)',
      '18.90',
      categories[0].id,
      'Peito de frango, arroz integral, feijão, legumes (cenoura, vagem, brócolis), tomate, cebola, alho, colorau, páprica picante, sal, pimenta, azeite oliva e salsinha.',
      [tags[0].id, tags[2].id],
    ],
    [
      'Strogonoff de Frango com Arroz integral',
      'Arroz integral (120g) + Estrogonofe de frango (180g)',
      '18.90',
      categories[0].id,
      'Peito de frango, arroz integral, tomate, creme de leite sem lactose, cebola, alho, azeite de oliva, pimenta preta e sal.',
      [tags[0].id, tags[2].id],
    ],
    [
      'Crepioca de Frango',
      'Crepioca (120g) + Frango desfiado (180g)',
      '18.90',
      categories[0].id,
      'Peito de frango, ovo, tapioca, creme de leite sem lactose, tomate, cebola, alho, páprica picante, sal, pimenta, azeite oliva e salsinha.',
      [tags[0].id, tags[2].id],
    ],

    // Carne
    [
      'Purê de Mandioquinha com Carne de Panela',
      'Purê Mandioquinha (120g) + Carne de Panela (180g)',
      '20.90',
      categories[1].id,
      'Acém bovino, mandioquinha (batata baroa), creme de leite sem lactose, manteiga sem lactose, tomate, cebola, alho, colorau, páprica picante, sal, azeite oliva e salsinha',
      [tags[0].id, tags[2].id],
    ],
    [
      'Purê de Mandioquinha com Carne de Panela e Legumes',
      'Purê Mandioquinha (100g) + Carne de Panela (150g) + Legumes (50g)',
      '20.90',
      categories[1].id,
      'Acém bovino, mandioquinha (batata baroa), legumes (cenoura, vagem, brócolis), creme de leite sem lactose, manteiga sem lactose, tomate, cebola, alho, colorau, páprica picante, sal, azeite oliva e salsinha.',
      [tags[0].id, tags[2].id],
    ],
    [
      'Purê de Mandioca com Picadinho de Carne',
      'Purê Mandioca (120g) + Picadinho de carne (180g)',
      '20.90',
      categories[1].id,
      'Patinho bovino, mandioca, creme de leite sem lactose, manteiga sem lactose, tomate, cebola, alho, colorau, páprica picante, sal, azeite oliva e salsinha.',
      [tags[0].id, tags[2].id],
    ],
    [
      'Purê de Mandioca com Picadinho de Carne e Legumes',
      'Purê Mandioca (100g) + Picadinho de carne (150g) + Legumes (50g)',
      '20.90',
      categories[1].id,
      'Patinho bovino, mandioca, legumes (cenoura, vagem, brócolis), creme de leite sem lactose, manteiga sem lactose, tomate, cebola, alho, colorau, páprica picante, sal, azeite oliva e salsinha.',
      [tags[0].id, tags[2].id],
    ],
    [
      'Espaguete sem glúten com Patinho Moído ao Sugo',
      'Espaguete integral (150g) + Carne moida ao sugo(150g)',
      '19.90',
      categories[1].id,
      'Patinho moído, espaguete de arroz, tomate, cebola, alho, colorau, páprica picante, sal, pimenta, azeite oliva e salsinha.',
      [tags[0].id, tags[2].id],
    ],
    [
      'Penne sem glúten com Almôndegas ao Sugo',
      'Espaguete integral (120g) + Almondegas ao sugo (180g)',
      '19.90',
      categories[1].id,
      'Patinho bovino, penne de arroz integral, tomate, cebola, ovo, farinha de aveia, aveia em flocos, alho, pimenta preta, salsinha, sal e azeite de oliva.',
      [tags[0].id, tags[2].id],
    ],
    [
      'Crepioca de Patinho Moído',
      'Crepioca (120g) + Carne moída (180g)',
      '19.90',
      categories[1].id,
      'Patinho bovino, ovo, tapioca, tomate, cebola, alho, colorau, páprica picante, sal, pimenta, azeite oliva e salsinha.',
      [tags[0].id, tags[2].id],
    ],
    [
      'Arroz integral, Feijão, Legumes e Picadinho de Carne',
      'Arroz integral c/ feijão (120g) + Picadinho de carne (130g) + Legumes (50g)',
      '19.90',
      categories[1].id,
      'Patinho bovino, arroz integral, feijão, legumes (cenoura, vagem, brócolis), tomate, cebola, alho, colorau, páprica picante, sal, pimenta, azeite oliva e salsinha.',
      [tags[0].id, tags[1].id],
    ],
    [
      'Escondidinho de Mandioca com Carne de Panela',
      'Escondidinho de Mandioca (150g) + Carne de Panela (150g)',
      '22.90',
      categories[1].id,
      'Acém bovino, mandioca, creme de leite sem lactose, manteiga sem lactose, queijo muçarela sem lactose, tomate, cebola, alho, colorau, páprica picante, sal, azeite oliva e salsinha.',
      [tags[0].id, tags[2].id],
    ],
    [
      'Strogonoff de Carne com Arroz integral',
      'Arroz integral (120g) + Estrogonofe de Carne (180g)',
      '19.90',
      categories[1].id,
      'Patinho bovino, arroz integral, tomate, creme de leite sem lactose, cebola, alho, azeite de oliva, pimenta preta e sal.',
      [tags[0].id, tags[2].id],
    ],

    // Sopas
    [
      'Canja de Galinha',
      '',
      '16.00',
      categories[2].id,
      'Arroz branco, sobrecoxa de frango, cebola, alho, salsinha, azeite de oliva e sal. ',
      [tags[0].id, tags[1].id],
    ],
    [
      'Sopa de Legumes com Carne',
      '',
      '18.00',
      categories[2].id,
      'Abóbora, mandioca, batata inglesa, cenoura, chuchu, brócolis, abobrinha, vagem, acém bovino, tomate, cebola, alho, páprica picante, páprica doce, salsinha, azeite de oliva e sal',
      [tags[0].id, tags[1].id],
    ],
    [
      'Sopa de Legumes com Frango',
      '',
      '18.00',
      categories[2].id,
      'Abóbora, mandioca, batata inglesa, cenoura, chuchu, brócolis, abobrinha, vagem, peito de frango, tomate, cebola, alho, páprica picante, páprica doce, salsinha, azeite de oliva e sal',
      [tags[0].id, tags[1].id],
    ],
    [
      'Sopa de Legumes Vegetariana',
      '',
      '15.00',
      categories[2].id,
      'Abóbora, mandioca, batata inglesa, cenoura, chuchu, brócolis, abobrinha, vagem, couve mineira, tomate, cebola, alho, salsinha, azeite de oliva e sal',
      [tags[0].id, tags[1].id],
    ],
    [
      'Creme de Mandioca com Calabresa e Bacon',
      '',
      '20.00',
      categories[2].id,
      'Mandioca, calabresa, bacon, cebola, alho, salsinha, azeite de oliva e sal.',
      [tags[0].id, tags[1].id],
    ],
    [
      'Creme Verde com Calabresa',
      '',
      '16.00',
      categories[2].id,
      'Batata Inglesa, couve mineira, calabresa, cebola, alho, salsinha, azeite de oliva e sal.',
      [tags[0].id, tags[1].id],
    ],
    [
      'Creme de Abóbora com Carne Seca',
      '',
      '20.00',
      categories[2].id,
      'Abóbora cabotiá, carne seca, cebola, alho, salsinha, azeite de oliva e sal.',
      [tags[0].id, tags[1].id],
    ],
    [
      'Creme de Mandioquinha com Alho poró e Bacon',
      '',
      '20.00',
      categories[2].id,
      'Mandioquinha (batata baroa), bacon, cebola, alho poró, salsinha, azeite de oliva e sal.',
      [tags[0].id, tags[1].id],
    ],

    // Porções
    [
      'Feijão Vegano (180ml)',
      '',
      '8.00',
      categories[3].id,
      'Feijão vermelho, cebola, alho, pimenta preta, sal, salsinha e azeite de oliva. ',
      [tags[0].id, tags[1].id],
    ],
    [
      'Mix de Legumes (100g)',
      '',
      '8.00',
      categories[3].id,
      'Cenoura, vagem, brócolis, salsinha e azeite de oliva',
      [tags[0].id, tags[1].id],
    ],
    [
      'Farofa funcional',
      '',
      '5.00',
      categories[3].id,
      'Farinha de mandioca, semente de abóbora, semente de girassol, gergelim, linhaça dourada, linhaça preta, oléo de algodão, colorau e sal.',
      [tags[0].id, tags[1].id],
    ],

    // Bolos
    ['Bolo de Chocolate sem glúten e sem açúcar', '', '6.00', categories[4].id, '', [tags[0].id, tags[2].id]],
    [
      'Bolo de Banana sem glúten e sem açúcar',
      '',
      '6.00',
      categories[4].id,
      'Banana, maçã, uva passas, ovos, farinha de aveia, aveia em flocos, óleo de algodão, canela, fermento químico.',
      [tags[0].id, tags[1].id],
    ],
    ['Bolo de Milho sem glúten', '', '6.00', categories[4].id, '', []],
    [
      'Bolo de Cenoura sem glúten com Cobertura de Chocolate 70%',
      '',
      '6.00',
      categories[4].id,
      '',
      [tags[0].id, tags[2].id],
    ],
  ] as const
  for (let i = 0; i < createProducts.length; i++) {
    const product = {
      name: createProducts[i][0],
      description: createProducts[i][1],
      ingredients: createProducts[i][4],
      image: faker.image.url(),
      price: createProducts[i][2],
      categoryId: createProducts[i][3],
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    }
    const createdProduct = await prisma.product.create({
      data: product,
    })

    // Connect product with tags
    await prisma.product.update({
      where: { id: createdProduct.id },
      data: { tags: { connect: createProducts[i][5].map(tagId => ({ id: tagId })) } },
    })

    products.push(createdProduct)
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
