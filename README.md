# Chipstack

System for managing in-person poker tables, with chip and rule administration, built with Fastify and SOLID architecture.

## Table of Contents

- [Stacks](#stacks)
- [Features](#features)
  - [General Flow](#general-flow)
- [Folder Structure](#folder-structure)
- [Installation](#installation-coming-soon)
- [Notes](#notes)
- [Routes](#routes)
- [Author](#author)

## Stacks

- Fastify
- Socket.io (real-time communication)
- Zod (validations)
- TypeScript
- SOLID Architecture (Use Cases, Repositories, Controllers, Errors)

## Features

### General Flow

1. A player can:
   - Create a table (name + player name)
   - Search for a table by token
2. Table returns a QR Code + access token.
3. Players join only with the token.
4. Table owner manually approves entrants.
5. Maximum of 8 players per table.
6. Owner decides when to start the game.
7. After starting, no one can join or leave.
8. Owner can kick players before the game starts.
9. Table can be paused with the owner's permission.
10. Players have 60 seconds per move.
11. Automatic bets (small/big blinds).
12. Wallets updated in real-time.
13. Ties and pots follow poker rules.
14. Players with zero chips remain as spectators.

## Folder Structure

```
src/
├── core/              # Entities, business rules, and domain logic
├── routes/            # HTTP routes
├── controllers/       # Controllers handling HTTP input
├── use-cases/         # Use cases
├── repositories/      # Data access abstraction
├── errors/            # Custom errors and status code mapping
├── env/               # Environment variable validation and loading
└── server.ts          # Fastify initialization
```

## Application Goal

- Create and join poker tables via access token
- Manage players and game start
- Handle bets, blinds, and chip distribution logic
- Manage rounds and actions with a timer
- Provide game visibility and control through business rules

⚠️ This application is backend-only. The frontend will be developed separately after the backend is complete and hosted.

## Installation (Coming Soon)

```bash
git clone https://github.com/SantiagoMoras/poker-table-app
cd mesa-poker-app
npm install
npm run server
```

## Notes

- Tables are not public.
- Tokens are unique and used for access.
- Data is stored in memory for now.
- Future integration with Redis or a database is possible.

## Routes

- POST: `./table` - To create a table and an owner (the first player)

## Author

- GitHub - [Felipe Santiago Morais](https://github.com/SantiagoMorais)
- LinkedIn - [Felipe Santiago](https://www.linkedin.com/in/felipe-santiago-873025288/)
- Instagram - [@felipe.santiago.morais](https://www.instagram.com/felipe.santiago.morais)
- Email - [contatofelipesantiago@gmail.com](mailto:contatofelipesantiago@gmail.com)
- [WhatsApp](https://api.whatsapp.com/send?phone=5531996951033&text=Hi%2C%20Felipe%21%20I%20got%20your%20contact%20from%20your%20github.)
