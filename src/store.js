let ID = 0;

const store = {
  user: {
    id: 1,
    username: "Dina",
    email: "dina@core.com",
    picture:
      "https://images.rappi.pe/restaurants_background/a26642bb-e0c0-4fc1-8cd6-1646889b3fba-1610229527822.jpeg?d=128x80&e=webp",
  },
  colaborators: [
    {
      id: 2,
      username: "Susan",
      email: "susan@core.com",
      picture:
        "https://images.rappi.pe/restaurants_background/a26642bb-e0c0-4fc1-8cd6-1646889b3fba-1610229527822.jpeg?d=128x80&e=webp",
    },
    {
      id: 3,
      username: "Susan",
      email: "susan@core.com",
      picture:
        "https://images.rappi.pe/restaurants_background/a26642bb-e0c0-4fc1-8cd6-1646889b3fba-1610229527822.jpeg?d=128x80&e=webp",
    },
    {
      id: 4,
      username: "Susan",
      email: "susan@core.com",
      picture:
        "https://images.rappi.pe/restaurants_background/a26642bb-e0c0-4fc1-8cd6-1646889b3fba-1610229527822.jpeg?d=128x80&e=webp",
    },
  ],
  boards: [
    {
      id: ID++,
      title: "Todo for today",
      myBoards: true,
      colaboratorsPic: [
        
      ],
    },
    {
      id: ID++,
      title: "Todo for today 2",
      myBoards: false,
    },
    {
      id: ID++,
      title: "Newww one",
      myBoards: true,
    },
    {
      id: ID++,
      title: "Newww false one",
      myBoards: false,
    },
    {
      id: ID++,
      title: "Todo for today 3",
      myBoards: true,
    },
    {
      id: ID++,
      title: "Todo for today 4",
      myBoards: false,
    },
  ],
  lists: [
    {
      id: 67,
      boardId: 1,
      title: "Comida",
      // cards inicia
      cards: [
        {
          title: "new title",
          description: "none",
          tag: ["home", "hacer", "now"],
          comments: [
            {
              commentId: 1,
              listId: 1,
              colaboratorId: 1,
              body: "a new comment",
            },
          ],
        },
      ],
      // cards fin
    },
  ],
};

export { store };
