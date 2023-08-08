const database = {
    bands : [
  { 
    id:1,
    name: "Rocket Pumpkins",
    members: 4,
    yearFormed: 2010,
  },
  { 
    id:2,
    name: "Electric Tigers",
    members: 3,
    yearFormed: 2012,
  },
  { 
    id:3,
    name: "Neon Groove",
    members: 5,
    yearFormed: 2015,
  },
  { 
    id:4,
    name: "Crystal Waves",
    members: 2,
    yearFormed: 2018,
  },
  { 
    id:5,
    name: "Sonic Pulse",
    members: 3,
    yearFormed: 2013,
  },
  { 
    id:6,
    name: "Lunar Echo",
    members: 4,
    yearFormed: 2016,
  },
  {
    id:7,
    name: "Pop Slappers",
    members: 10,
    yearFormed: 2019,
  }
],
venues : [
  { 
    id:1,
    name: "The Cellar Moss",
    address: "123 Main Street",
    squareFootage: 1500,
    maximumOccupancy: 100,
  },
  { 
    id:2,
    name: "Neon Lounge",
    address: "456 Oak Avenue",
    squareFootage: 1200,
    maximumOccupancy: 80,
  },
  { 
    id:3,
    name: "Electric Pavilion",
    address: "789 Elm Road",
    squareFootage: 1800,
    maximumOccupancy: 120,
  },
  { 
    id:4,
    name: "Starlight Café",
    address: "101 Pine Lane",
    squareFootage: 1000,
    maximumOccupancy: 60,
  },
],
    bookings : [
    {
      bandsId: 4,
      venuesId: 1,
      date: "12/06/2023",
    },
    {
      bandsId: 1,
      venuesId: 2,
      date: "12/07/2023",
    },
    {
      bandsId: 2,
      venuesId: 3,
      date: "12/08/2023",
    },
    {
      bandsId: 2,
      venuesId: 4,
      date: "12/09/2023",
    },
    {
      bandsId: 5,
      venuesId: 4,
      date: "12/10/2023",
    },
    {
      bandsId: 6,
      venuesId: 2,
      date: "12/11/2023",
    },
    {
      bandsId: 1,
      venuesId: 3,
      date: "12/12/2023",
    },
    {
      bandsId: 2,
      venuesId: 4,
      date: "12/13/2023",
    },
    {
      bandsId: 3,
      venuesId: 1,
      date: "12/14/2023",
    },
    {
      bandsId: 4,
      venuesId: 2,
      date: "12/15/2023",
    },
    {
      bandsId: 5,
      venuesId: 3,
      date: "12/16/2023",
    },
    {
      bandsId: 6,
      venuesId: 4,
      date: "12/17/2023",
    },
    {
      bandsId: 7,
      venuesId: 1,
      date: "12/18/2023",
    },
    {
      bandsId: 1,
      venuesId: 2,
      date: "12/19/2023",
    },
    {
      bandsId: 2,
      venuesId: 3,
      date: "12/20/2023",
    },
  ],
};
