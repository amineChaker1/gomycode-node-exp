const posts = [
  {
    id: 1,
    title: "post1",
    desc: "this is post1",
  },
  {
    id: 2,
    title: "post2",
    desc: "this is post2",
  },
  {
    id: 3,
    title: "post3",
    desc: "this is post3",
  },
];
import bcrypt from "bcrypt";

export const getAllPosts = (req, res) => {
  try {
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      location: "error on getAllPosts controller",
      message: error.message,
    });
  }
};
export const addPost = async (req, res) => {
  try {
    const newPost = req.body;
    const hashedId = await bcrypt.hash(newPost.desc, 10);
    const hashedPosts = { ...posts, id: hashedId };
    posts.push(hashedPosts);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      location: "error on addPost controller",
      message: error.message,
    });
  }
};
