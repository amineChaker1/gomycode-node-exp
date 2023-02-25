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

const getAllPosts = async (req, res) => {
  try {
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      location: "getAllPosts error",
      message: error.message,
    });
  }
};
