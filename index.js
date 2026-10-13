function combineUsers(...args) {
  const combinedObject = {
    users: [],
    merge_date: Date.today().toString("M/d/yyyy")
  };
  for (const arg of args) {
    combinedObject.users = [...combinedObject, ...args]
  }
}
return combinedObject;


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};