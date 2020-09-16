# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
airlines = Airline.create([
    { 
      name: "United Airlines",
      image_url: "https://open-flights.s3.amazonaws.com/United-Airlines.png"
    }, 
    { 
      name: "Southwest",
      image_url: "https://open-flights.s3.amazonaws.com/Southwest-Airlines.png"
    },
    { 
      name: "Delta",
      image_url: "https://open-flights.s3.amazonaws.com/Delta.png" 
    }, 
    { 
      name: "Alaska Airlines",
      image_url: "https://open-flights.s3.amazonaws.com/Alaska-Airlines.png" 
    }, 
    { 
      name: "JetBlue",
      image_url: "https://open-flights.s3.amazonaws.com/JetBlue.png" 
    }, 
    { 
      name: "American Airlines",
      image_url: "https://open-flights.s3.amazonaws.com/American-Airlines.png" 
    }
  ])
  reviews = Review.create([
    {
      title: "Great airline",
      description: "great food",
      score:  5,
      airline: airlines.first
    },
    {
      title: "Bad airline",
      description: "bad food",
      score:  1,
      airline: airlines.first
    }
  ])