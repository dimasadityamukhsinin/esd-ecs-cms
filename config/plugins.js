module.exports = ({ env }) => ({
  ckeditor: true,
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // comments: {
  //   enabled: true,
  //   config: {
  //     badWords: false,
  //     moderatorRoles: ["Authenticated"],
  //     approvalFlow: ["api::modul.modul"],
  //   },
  // },
})
