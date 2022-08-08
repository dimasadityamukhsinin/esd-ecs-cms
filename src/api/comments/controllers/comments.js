// 'use strict'

// /**
//  *  modul controller
//  */

// const { createCoreController } = require('@strapi/strapi').factories

// module.exports = createCoreController('api::modul.modul', ({ strapi }) => ({
//   async comments(ctx) {
//     const { id } = ctx.params

//     const comment = await strapi.entityService.findOne('api::modul.modul', 1, {
//       fields: ['Title'],
//       populate: {
//         Comments: { populate: {
//             User_Comment: true
//         } },
//       },
//     })

//     console.log(id)

//     console.log(comment)

//     ctx.body = comment
//   },
// }))

'use strict'

/**
 * api/password/controllers/password.js
 */

module.exports = {
  find: async (ctx) => {
    const { idModul } = ctx.params

    let comment = await strapi.entityService.findOne(
      'api::modul.modul',
      idModul,
      {
        populate: {
          Comments: {
            populate: {
              User_Comment: true,
            },
          },
        },
      },
    )

    if (comment) {
      ctx.body = comment
    } else {
      ctx.body = {
        message: 'Comments Not Found',
      }
    }
  },
  update: async (ctx) => {
    const userId = ctx.request.body.IdUser
    const Username = ctx.request.body.Username
    const Email = ctx.request.body.Email
    const Comment = ctx.request.body.Comment
    const { idModul } = ctx.params

    // try {
      let comment = await strapi.entityService.findOne(
        'api::modul.modul',
        idModul,
        {
          populate: {
            Comments: true,
          },
        },
      )

      let createComment = await strapi.entityService.update(
        'api::modul.modul',
        idModul,
        {
          populate: {
              Comments: true,
          },
          data: {
            Comments: [
              ...comment.Comments,
              {
                IdUser: userId,
                Username: Username,
                Email: Email,
                Comment: Comment,
              },
            ],
          },
        },
      )

      // user = await strapi.query('plugin::modul.modul').update({
      //   where: { id: idModul },
      //   data: {
      //     Comments: [
      //       {
      //         id: 10,
      //         idUser: userId,
      //         Username: Username,
      //         Email: Email,
      //         Comment: Comment,
      //       },
      //     ],
      //   },
      // })
      console.log({
        id: 10,
        idUser: userId,
        Username: Username,
        Email: Email,
        Comment: Comment,
      })

      ctx.body = {
        message: 'Comment Inserted'
      }
    // } catch (error) {
    //   ctx.badRequest('Something went wrong', { error })
    // }
  },
}
