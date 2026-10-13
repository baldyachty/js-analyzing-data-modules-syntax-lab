require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: [],
    merge_date: Date.today().toString("M/d/yyyy")
  };
  for (const arg of args) {
    combinedObject.users = [...combinedObject.users, ...arg];
  }
  return combinedObject;
}



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};