const username = process.env.username;
const password = process.env.password;

export const connectionSRT =
  'mongodb+srv://' +
  username +
  ':' +
  password +
  '@cluster0.eted0lc.mongodb.net/formosData?retryWrites=true&w=majority&appName=Cluster0';
