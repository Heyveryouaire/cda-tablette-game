function get(path){
    return new Promise(async (resolve, reject) => {
        fetch(path)
        .then(rep => {
            if(rep.status !== 200){
                reject("Can't fetch")
            }
          return rep.json()
        })
        .then(results => resolve(results))
    })
} 

const API = {
    example: () => {
        return get("http://localhost:3000")
    }
}

export default API