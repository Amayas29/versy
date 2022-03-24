import database from "./database.json";
const DATA_BASE_NAME = "database.json";

const dumpDatabase = () => {
  return new Promise((resolve, reject) => {
    fs.writeFile(DATA_BASE_NAME, JSON.stringify(database), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

const getUser = (id) => {
  return database.data.users[id];
};

const getUserMessages = (id) => {
  return database.data.messages[id];
};

const getUserStats = (id) => {
  return database.data.stats[id];
};

const addUser = (user) => {
  database.data.users[user.id] = user;
  dumpDatabase();
};

const addUserMessage = (message, userId) => {
  const userMessages = database.data.messages[userId] || [];
  userMessages.unshift(message);
  database.data.messages[userId] = userMessages;
  dumpDatabase();
};

const editUser = (user) => {
  database.data.users[user.id] = user;
  dumpDatabase();
};

const deleteMessage = (messageId, userId) => {
  const userMessages = database.data.messages[userId] || [];
  const newMessages = userMessages.filter(
    (message) => message.id !== messageId
  );
  database.data.messages[userId] = newMessages;
  dumpDatabase();
};

const commentMessage = (messageId, userId, comment) => {
  const userMessages = database.data.messages[userId] || [];
  const newMessages = userMessages.map((message) => {
    if (message.id === messageId) {
      message.comments.unshift(comment);
    }
    return message;
  });
  database.data.messages[userId] = newMessages;
  dumpDatabase();
};
