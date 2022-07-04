const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  tagsview: state => state.tagsview.tagsView
}

export default getters
