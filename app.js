const express = require("express");
const cors = require("cors");
const Movie = require("./Movie");
const port = 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.post("/movies", async (req, res) => {
  const movie = new Movie(req.body);
  await movie.save();
  res.send(movie);
});

app.get("/movies", async (req, res) => {
  const movies = await Movie.find();
  res.send(movies);
});

app.get("/movies/:id", async (req, res) => {
  const movie = await Movie.findOne({ id: parseInt(req.params.id, 10) });
  if (movie) {
    res.send(movie);
  } else {
    res.status(404).send({ message: "Film non trouvé" });
  }
});

app.put("/movies/:id", async (req, res) => {
  const movie = await Movie.findByIdAndUpdate(req.params.id, req.body);
  res.send(movie);
});

app.put("/movies/:id", async (req, res) => {
  const movieId = parseInt(req.params.id, 10);
  const movie = await Movie.findOneAndUpdate({ id: movieId }, req.body, {
    new: true,
  });
  if (movie) {
    res.send(movie);
  } else {
    res.status(404).send({ message: "Film non trouvé" });
  }
});

app.listen(port, () =>
  console.log(`Serveur ON : http://localhost:${port}/movies`)
);
