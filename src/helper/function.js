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

export function calculatePromotion(arr, mes) {
    const totalEmpleados = arr.filter( e=> e.Mes == mes + "-2020")
    const empleadosSalary = totalEmpleados.map( e => {
        return {
            id: e["ID"],
            salary: e["Sueldo  bruto"],
            nombre: e["Nombre "]
        }
    })

    const totalEmpleados2 = arr.filter(e=> e.Mes == (mes*1 + 1) + "-2020")
    const evaluar = totalEmpleados2.map( e => ({
        id: e["ID"],
        salary: e["Sueldo  bruto"],
        nombre: e["Nombre "]
    })) 

    const promovidos = []

    for (let f=0; f<empleadosSalary.length; f++) {
        for ( let i=0; i<evaluar.length; i++) {
            if (empleadosSalary[f].id == evaluar[i].id && empleadosSalary[f].salary< evaluar[i].salary) {
                promovidos.push(empleadosSalary[f])
            }
        }
    }
    
    const format = promovidos.map(e => e.nombre)


    return format

}