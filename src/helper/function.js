export function removeDuplicates(arr) {

    const incluidos = []
    const unicos = []

    for (let f=0; f<arr.length; f++) {
        if (incluidos.includes(arr[f]["ID"])) {
            incluidos.push(arr[f]["ID"])
        } else {
            unicos.push(arr[f])
            incluidos.push(arr[f]["ID"])
        }

    }
    return unicos

  }