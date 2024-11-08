// const app = require("./server"); 
import { app } from "./server.js"
const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});