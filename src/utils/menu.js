/**
 * 删除数据里面的空children
 * @param {*} menu
 * @returns
 */
const generateMenu = (menu) => {
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].children && menu[i].children.length <= 0) {
      delete menu[i].children
    }
    if (menu[i].children && menu[i].children.length > 0) {
      generateMenu(menu[i].children)
    }
  }
  return menu
}

/**
   * 过滤出去除空children的数据
   * @param {*} menu
   * @returns
   */
export const filterMenuData = (menu) => {
  const menuList = generateMenu(menu)
  return menuList
}
