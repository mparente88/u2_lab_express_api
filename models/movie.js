const { Schema } = require(`mongoose`)

const movieSchema = new Schema(
    {
        title: { type: String, required: true },
        runtime: { type: Number, required: true },
        rating: {type: String, required: true },
        releaseDate: {type: String, required: true },
        description: {type: String, required: true}
    },
    { timestamps: true }
)

module.exports = movieSchema