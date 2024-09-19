module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Cards',
      [
        {
          title: 'Card 1',
          description: 'Description for card 1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Card 2',
          description: 'Description for card 2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Card 3',
          description: 'Description for card 3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Card 4',
          description: 'Description for card 4',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cards', null, {});
  },
};
