export function removeDuplicates(arr, key) {

    const incluidos = []
    const unicos = []

    for (let f=0; f<arr.length; f++) {
        if (incluidos.includes(arr[f][key])) {
            incluidos.push(arr[f][key])
        } else {
            unicos.push(arr[f])
            incluidos.push(arr[f][key])
        }

    }
    return unicos

}

export function calculateTotal(arr, mes) {
    const totaldepagos = arr.filter( e => e.Mes[0] == mes) 
    let acumulado = 0

    console.log(mes)

    for (let f=0; f<totaldepagos.length; f++) {
        acumulado = (totaldepagos[f]["Sueldo  bruto"] * 1) + acumulado
    }
    
    return acumulado
}

export function calculateContratation(arr, mes) {
    
    const totalEmpleados = arr.filter( e=> e.Mes == mes + "-2020")
    const idsEmpleados = totalEmpleados.map( e=> e["Nombre "])
    let contratados = []
    

    const totalEmpleados2 = arr.filter(e=> e.Mes == (mes*1 - 1) + "-2020")
    const evaluar = totalEmpleados2.map( e=> e["Nombre "])
   

    if (!evaluar.length) return []


    for (let f=0; f<idsEmpleados.length; f++) {
        if (!evaluar.includes(idsEmpleados[f])) {
            contratados.push(idsEmpleados[f])
            
        }
    }
 
    return contratados
}