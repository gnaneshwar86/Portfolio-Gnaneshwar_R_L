const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  swcMinify: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "cdn.hashnode.com",
    ],
  },
});
