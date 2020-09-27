module.exports = {
  async redirects() {
    return [
      {
        source: '/apply',
        destination: '/apply/chapter',
        permanent: true,
      },
    ];
  },
};
