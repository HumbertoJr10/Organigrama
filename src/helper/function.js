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

    // const recientes = arr.filter( e => e["Mes"][0] == 5)

    // const result = [];
    // const ids = new Set(); // Conjunto para almacenar los IDs únicos
    // for (const obj of recientes) {
    //   if (!ids.has(obj.ID)) { // Si el ID no ha sido agregado previamente
    //     ids.add(obj.ID); // Agregar el ID al conjunto
    //     result.push(obj); // Agregar el objeto al resultado
    //   }
    // }
    // return result;
  }