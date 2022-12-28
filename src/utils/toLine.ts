// 小驼峰转短横
export const toLine = (name: string) => {
  return name.replace(/(A-Z)g/, '-$1').toLocaleLowerCase();
};
