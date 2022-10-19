export const traeMonitores = async () =>{
    const response = await fetch(`./DB/productos.json`)
    const data = await response.json()
    return data
} 