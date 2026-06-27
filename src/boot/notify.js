export default ({ app }) => {
  app.config.globalProperties.$notify = (message, color = 'primary') => {
    app.config.globalProperties.$q.notify({
      message,
      color
    })
  }
}