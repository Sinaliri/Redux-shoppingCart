export const shorten=(string)=>{
    const array=string.split(" ");
    const name1=array[0]
    const name2=` ${array[1]}`
    const newname=name1.concat(name2)

    return newname
}