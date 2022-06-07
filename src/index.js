import express from 'express';
const app = express();

const PORT = 3000

app.use((req, res, next) => {
    // res.set("Access-Control-Allow-Origin", "*");
    res.set("Cross-Origin-Opener-Policy", "same-origin");
    res.set("Cross-Origin-Embedder-Policy", "require-corp");
    next();
});

app.use(express.static('.'))

const server = app.listen(PORT, function () {
    console.log(`Listening to http://localhost:${PORT}/`)
});