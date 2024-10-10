import express from "express";
import bodyParser from "body-parser";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(
    import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, 'views', 'contact.html'));
});

app.post("/submit", (req, res) => {
    res.sendFile(join(__dirname, 'views', 'response.html'));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});