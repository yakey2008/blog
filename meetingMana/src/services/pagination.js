export default {
  init: () => {
    return {
      Index: 0,
      Size: 10,
      Total: 0
    }
  },
  getPageTotal: (pagination) => {
    return pagination.Total % pagination.Size === 0 ? pagination.Total / pagination.Size : pagination.Total / pagination.Size
  }
}
