import { Model, createServer } from "miragejs";
import { BOOKS, MOVIES } from "./fake-database";

export const server = createServer({
    models: {
        book: Model,
        movie: Model,
    },
    seeds(server) {
        server.db.loadData({
            books: BOOKS,
            movies: MOVIES,
        });
    },
    routes() {
        // Book routes
        this.get("/api/books",);
        this.get("/api/books/:id");
        this.delete("/api/books/:id")
        this.post("/api/books", (schema, request) => {
            const newBook = JSON.parse(request.requestBody);
            return schema.books.create(newBook);
        });
        this.put("/api/books/:id", (schema, request) => {
            const id = request.params.id;
            const bookData = JSON.parse(request.requestBody);
            return schema.books.find(id).update(bookData);
        });

        // Movie routes
        this.get("/api/movies",);
        this.get("/api/movies/:id");
        this.delete("/api/movies/:id")
        this.post("/api/movies", (schema, request) => {
            const newMovie = JSON.parse(request.requestBody);
            return schema.movies.create(newMovie);
        });
        this.put("/api/movies/:id", (schema, request) => {
            const id = request.params.id;
            const movieData = JSON.parse(request.requestBody);
            return schema.movies.find(id).update(movieData);
        });
    }
});