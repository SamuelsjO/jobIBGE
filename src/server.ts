import app from './app';
import './ibge/ibgeJob';
import './database'

app.listen(3333, () => console.log("Server is running on port 3333"));