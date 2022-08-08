module.exports = {
  routes: [
   {
      method: "GET",
      path: "/comments/:idModul",
      handler: "comments.find",
   },
   {
      method: "PUT",
      path: "/comments/:idModul",
      handler: "comments.update",
   }
  ],
}
