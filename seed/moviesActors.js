const db = require(`../db`)
const { Movie, Actor, Review } = require(`../models`)

db.on(`error`, console.error.bind(console, `MongoDB connection error:`))

const main = async () => {

  await Movie.deleteMany()

    const movie1 = await new Movie({
      title: `Inception`,
      runtime: 8880,
      rating: `PG-13`,
      releaseDate: `July 16, 2010`,
      description: `A skilled thief is offered a chance to erase his criminal record by planting an idea in someone’s mind through shared dreams.`
    })
    movie1.save()

    const movie2 = await new Movie({
      title: `The Dark Knight`,
      runtime: 9120,
      rating: `PG-13`,
      releaseDate: `July 18, 2008`,
      description: `Batman faces his greatest psychological and physical challenge when a criminal mastermind known as The Joker plunges Gotham City into chaos`
    })
    movie2.save()

    const movie3 = await new Movie({
      title: `La La Land`,
      runtime: 7680,
      rating: `PG-13`,
      releaseDate: `December 9, 2016`,
      description: `A jazz musician and an aspiring actress cross paths in Los Angeles while persuing their dreams, navigating the highs and lows of their careers and love lives`
    })
    movie3.save()

    const movie4 = await new Movie({
      title: `Avengers: Endgame`,
      runtime: 10800,
      rating: `PG-13`,
      releaseDate: `April 26, 2019`,
      description: `The remaining Avengers must figure out a way to bring back their allies for an epic showdown against Thanos, who decimated half the universe`
    })
    movie4.save()

    const movie5 = await new Movie({
      title: `Interstellar`,
      runtime: 10140,
      rating: `PG-13`,
      releaseDate: `November 7, 2014`,
      description: `A group of explorers travels through a wormhole in space in an attempt to ensure humanity's survival as Earth faces an ecological crisis`
    })
    movie5.save()

    const actors = [
        {
          name: `Leonardo DiCaprio`,
          age: 49,
          deceased: false,
          movie: movie1._id
        },
        {
          name: `Joseph Gordon-Levitt`,
          age: 43,
          deceased: false,
          movie: movie1._id
        },
        {
          name: `Christian Bale`,
          age: 50,
          deceased: false,
          movie: movie2._id
        },
        {
          name: `Heath Ledger`,
          age: 28,
          deceased: true,
          movie: movie2._id
        },
        {
          name: `Ryan Gosling`,
          age: 43,
          deceased: false,
          movie: movie3._id
        },
        {
          name: `Emma Stone`,
          age: 35,
          deceased: false,
          movie: movie3._id
        },
        {
          name: `Robert Downey Jr.`,
          age: 59,
          deceased: false,
          movie: movie4._id
        },
        {
          name: `Chris Evans`,
          age: 42,
          deceased: false,
          movie: movie4._id
        },
        {
          name: `Matthew McConaughey`,
          age: 54,
          deceased: false,
          movie: movie5._id
        },
        {
          name: `Anne Hathaway`,
          age: 41,
          deceased: false,
          movie: movie5._id
        }
    ]

    const reviews = [
      {
        score: 9,
        comment: `Mind-bending and visually stunning, Inception is one of the most original blockbusters in years`,
        movie: movie1._id
      },
      {
        score: 8,
        comment: `Great concept and execution, though the complex narrative may lose some viewers`,
        movie: movie1._id
      },
      {
        score: 10,
        comment: `A masterpiece. Ledger's Joker is chilling, and the story is both intense and deeply engaging.`,
        movie: movie2._id
      },
      {
        score: 9,
        comment: `Arguably the best superhero movie ever made. Dark, brooding, and emotionally charged.`,
        movie: movie2._id
      },
      {
        score: 10,
        comment: `The perfect conclusion to over a decade of storytelling in the Marvel Universe. Full of emotional payoffs and thrilling action.`,
        movie: movie4._id
      },
      {
        score: 9,
        comment: `A triumphant end, though a bit overwhelming in scope at times. Still, a must-watch for fans.`,
        movie: movie4._id
      }
    ]

    await Actor.deleteMany()
    await Review.deleteMany()

    await Actor.insertMany(actors)
    console.log(`Created actors!`)

    await Review.insertMany(reviews)
    console.log(`Created reviews!`)
}



const run = async () => {
    await main()
    db.close()
}

run()