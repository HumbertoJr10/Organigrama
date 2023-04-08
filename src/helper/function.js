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

    const totalEmpleados2 = arr.filter(e=> e.Mes == (mes*1 - 1) + "-2020")
    const evaluar = totalEmpleados2.map( e => ({
        id: e["ID"],
        salary: e["Sueldo  bruto"],
        nombre: e["Nombre "]
    })) 
    
    const promovidos = []

    for (let f=0; f<empleadosSalary.length; f++) {
        for ( let i=0; i<evaluar.length; i++) {
            if (
                empleadosSalary[f].id == evaluar[i].id && 
                empleadosSalary[f].salary * 1  > evaluar[i].salary * 1
                ) {
                promovidos.push(empleadosSalary[f])
            }
        }
    }
    
    const format = promovidos.map(e => e.nombre)


    return format

}

export const handlerprint = () => {
    window.print()
  }

export const monthSelector = (month, Lan) => {
    if (Lan == 'ES') {
        if (month == 1) return 'Enero'
        if (month == 2) return 'Febrero'
        if (month == 3) return 'Marzo'
        if (month == 4) return 'Abril'
        if (month == 5) return 'Mayo'
        if (month == 6) return 'Junio'
        if (month == 7) return 'Julio'
        if (month == 8) return 'Agosto'
        if (month == 9) return 'Septiembre'
        if (month == 10) return 'Octubre'
        if (month == 11) return 'Noviembre'
        if (month == 12) return 'Diciembre'
    } else {
        if (month == 1) return 'January'
        if (month == 2) return 'February'
        if (month == 3) return 'March'
        if (month == 4) return 'April'
        if (month == 5) return 'May'
        if (month == 6) return 'June'
        if (month == 7) return 'July'
        if (month == 8) return 'August'
        if (month == 9) return 'September'
        if (month == 10) return 'October'
        if (month == 11) return 'November'
        if (month == 12) return 'December'
    }
}