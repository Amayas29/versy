import avatar from "../assets/images/avatar.jpg";
import a from "../assets/images/a.jpg";
import b from "../assets/images/b.jpg";
import c from "../assets/images/c.png";
import d from "../assets/images/d.png";

let userIdCpt = 0;
let messageIdCpt = 0;

const names = [
  "Amayas",
  "Hamid",
  "Rayane",
  "Amine",
  "Julien",
  "John",
  "Jane",
  "Cylia",
  "Julia",
  "Marie",
  "Lucas",
  "Lucie",
];

const avatars = [avatar, a, b, c, d];

const bios = [
  "Hello world",
  "J'ai rien d'spécial",
  "Never give up on something that you can’t go a day without thinking about",
];

const generateUser = () => {
  const name = names[Math.floor(Math.random() * names.length)];

  let followers = [];
  for (let i = 0; i < Math.floor(Math.random() * userIdCpt); i++)
    followers.push(Math.floor(Math.random() * userIdCpt));

  let following = [];
  for (let i = 0; i < Math.floor(Math.random() * userIdCpt); i++)
    following.push(Math.floor(Math.random() * userIdCpt));

  const id = userIdCpt++;
  return {
    id: id,
    avatar: avatars[Math.floor(Math.random() * avatars.length)],
    name: name,
    username: `@${name.toLowerCase()}${id}`,
    bio: bios[Math.floor(Math.random() * bios.length)],
    birthday: new Date(2001, 4, 29),
    location: "Paris, France",
    joinedDate: new Date(2019, 6, 1),
    followers: followers,
    following: following,
  };
};

const generateStats = () => {
  return {
    profileVisitsPerMonth: {
      "2022-03": Math.floor(Math.random() * 100) + 90,
      "2022-02": Math.floor(Math.random() * 50) + 20,
      "2022-01": Math.floor(Math.random() * 20) + 5,
    },

    postsPerMonth: {
      "2022-03": Math.floor(Math.random() * 100) + 90,
      "2022-02": Math.floor(Math.random() * 50) + 20,
      "2022-01": Math.floor(Math.random() * 20) + 5,
    },

    newFollowersPerMonth: {
      "2022-03": Math.floor(Math.random() * 100) + 90,
      "2022-02": Math.floor(Math.random() * 50) + 20,
      "2022-01": Math.floor(Math.random() * 20) + 5,
    },
  };
};

const generateMessages = (user) => {
  const _messages = [];

  for (let i = 0; i < Math.floor(Math.random() * 10) + 2; i++) {
    const img =
      Math.random() > 0.6
        ? ""
        : avatars[Math.floor(Math.random() * avatars.length)];

    const date = Math.random() > 0.5 ? new Date() : user.joinedDate;

    let likes = [];
    for (let j = 0; j < Math.floor(Math.random() * userIdCpt); j++)
      likes.push(Math.floor(Math.random() * userIdCpt));

    _messages.push({
      id: messageIdCpt++,
      content: "Hello world Hey",
      image: img,
      user: user,
      publishDate: date,
      likes: likes,
      // Todo
      comments: [],
    });
  }

  return _messages;
};

const users = [
  generateUser(),
  generateUser(),
  generateUser(),
  generateUser(),
  generateUser(),
  generateUser(),
];

let stats = {};
users.forEach((user) => {
  stats[user.id] = generateStats();
});

const messages = {};
users.forEach((user) => {
  messages[user.id] = generateMessages(user);
});

const getUser = (id) => {
  return users.find((user) => user.id == id);
};

const getUserStats = (id) => {
  return stats[id];
};

const getUserMessages = (id) => {
  return messages[id];
};

export { getUser, getUserStats, getUserMessages };
