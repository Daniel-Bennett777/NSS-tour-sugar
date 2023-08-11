const database = {
    members : [
      {
        firstName : "Daniel",
        lastName : "Bennett",
        yearborn : 1995,
        bandRole : "drummer",
        bandName: "Crystal Waves"
      },
      {
        firstName : "ry",
        lastName : "star",
        yearborn : 1993,
        bandRole : "singer",
        bandName: "Rocket Pumpkins"
      },
      {
        firstName : "shy",
        lastName : "paloof",
        yearborn : 1998,
        bandRole : "drummer",
        bandName: "Electric Tigers"
      },
      {
        firstName : "foofoo",
        lastName : "gas",
        yearborn : 1995,
        bandRole : "singer",
        bandName: "Electric Tigers"
      },
      {
        firstName : "shamana",
        lastName : "raunchy",
        yearborn : 1999,
        bandRole : "guitar",
        bandName: "Electric Tigers"
      },
      {
        firstName : "choold",
        lastName : "munch",
        yearborn : 1980,
        bandRole : "drummer",
        bandName: "Neon Groove"
      },
      {
        firstName : "falafel",
        lastName : "Bennett",
        yearborn : 1995,
        bandRole : "singer",
        bandName: "Crystal Waves"
      },
      {
        firstName : "papa",
        lastName : "mentoli",
        yearborn : 1966,
        bandRole : "drummer",
        bandName: "Sonic Pulse"
      },
      {
        firstName : "harry",
        lastName : "mud",
        yearborn : 1949,
        bandRole : "guitar",
        bandName: "Sonic Pulse"
      },
      {
        firstName : "punch",
        lastName : "charge",
        yearborn : 1989,
        bandRole : "singer",
        bandName: "Sonic Pulse"
      },
      {
        firstName : "polly",
        lastName : "shore",
        yearborn : 1995,
        bandRole : "drummer",
        bandName: "Lunar Echo"
      },
      {
        firstName : "donna",
        lastName : "tarkoff",
        yearborn : 1995,
        bandRole : "guitar",
        bandName: "Lunar Echo"
      },
      {
        firstName : "Barry",
        lastName : "Sanders",
        yearborn : 1976,
        bandRole : "drummer",
        bandName: "Pop Slappers"
      },
      {
        firstName : "Shack",
        lastName : "Oneal",
        yearborn : 1976,
        bandRole : "drummer",
        bandName: "Pop Slappers"
      },
    ],

    bands : [
  { 
    genre : "rock",
    name: "Rocket Pumpkins",
    members: 1,
    yearFormed: 2010,
  },
  { 
    genre : "rock",
    name: "Electric Tigers",
    members: 3,
    yearFormed: 2012,
  },
  { 
    genre : "rock",
    name: "Neon Groove",
    members: 1,
    yearFormed: 2015,
  },
  { 
    genre : "rock",
    name: "Crystal Waves",
    members: 2,
    yearFormed: 2018,
  },
  { 
    genre : "rock",
    name: "Sonic Pulse",
    members: 3,
    yearFormed: 2013,
  },
  { 
    genre : "rock",
    name: "Lunar Echo",
    members: 2,
    yearFormed: 2016,
  },
  {
    genre : "rock",
    name: "Pop Slappers",
    members: 2,
    yearFormed: 2019,
  }
],
venues : [
  { 
    
    name: "The Cellar Moss",
    address: "123 Main Street",
    squareFootage: 1500,
    maximumOccupancy: 100,
  },
  { 
    
    name: "Neon Lounge",
    address: "456 Oak Avenue",
    squareFootage: 1200,
    maximumOccupancy: 80,
  },
  { 
    
    name: "Electric Pavilion",
    address: "789 Elm Road",
    squareFootage: 1800,
    maximumOccupancy: 120,
  },
  { 
    
    name: "Starlight Café",
    address: "101 Pine Lane",
    squareFootage: 1000,
    maximumOccupancy: 60,
  },
],
    bookings : [
      {
        bandsName: "Crystal Waves",
        venuesName: "Electric Pavilion",
        date: "12/06/2023",
    },
    {
        bandsName: "Rocket Pumpkins",
        venuesName: "Neon Lounge",
        date: "12/07/2023",
    },
    {
        bandsName: "Electric Tigers",
        venuesName: "The Cellar Moss",
        date: "12/08/2023",
    },
    {
        bandsName: "Neon Groove",
        venuesName: "Starlight Café",
        date: "12/09/2023",
    },
    {
        bandsName: "Sonic Pulse",
        venuesName: "Electric Pavilion",
        date: "12/10/2023",
    },
    {
        bandsName: "Lunar Echo",
        venuesName: "Neon Lounge",
        date: "12/11/2023",
    },
    {
        bandsName: "Rocket Pumpkins",
        venuesName: "Electric Pavilion",
        date: "12/12/2023",
    },
    {
        bandsName: "Electric Tigers",
        venuesName: "Starlight Café",
        date: "12/13/2023",
    },
    {
        bandsName: "Neon Groove",
        venuesName: "The Cellar Moss",
        date: "12/14/2023",
    },
    {
        bandsName: "Crystal Waves",
        venuesName: "Neon Lounge",
        date: "12/15/2023",
    },
    {
        bandsName: "Sonic Pulse",
        venuesName: "Electric Pavilion",
        date: "12/16/2023",
    },
    {
        bandsName: "Lunar Echo",
        venuesName: "Starlight Café",
        date: "12/17/2023",
    },
    {
        bandsName: "Pop Slappers",
        venuesName: "The Cellar Moss",
        date: "12/18/2023",
    },
    {
        bandsName: "Rocket Pumpkins",
        venuesName: "Neon Lounge",
        date: "12/19/2023",
    },
    {
        bandsName: "Electric Tigers",
        venuesName: "Electric Pavilion",
        date: "12/20/2023",
    },
],
};

export const getBookings = () => {
  return database.bookings.map(booking => ({...booking}))
}

export const getVenues = () => {
  return database.venues.map(venue => ({...venue}))
}

export const getBands = () => {
  return database.bands.map(band => ({...band}))
}
export const getMembers = () => {
  return database.members.map(member => ({...member}))
}