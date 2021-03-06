import { opine } from "https://deno.land/x/opine@2.1.2/mod.ts";

const app = opine();

app.get("/", function (req, res) {
    res.send("Hello World");
});

const port = 3000

app.listen(
    port,
    () => console.log(`server has started on http://localhost:${port} 🚀`),
);