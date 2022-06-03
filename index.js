
//const drivers = []
function findMatching(drivers, name){
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}
const fuzzyMatch = (drivers, string) => {
    return drivers.filter(driver => driver.startsWith(string))
  }
function matchName(drivers, string){
    const result = drivers.filter(driver => driver.name === string)
    return result
}
