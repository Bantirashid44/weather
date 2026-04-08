import axios from "axios";
import readline from "readline"
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question('enter city name ',async(name)=>{
    const keyName='22f369ab4697322faa2d293234e7d528'
   // const url=`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={keyName}&units=metric`
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${keyName}&units=metric`

    try {
        const res=await axios.get(url)
       
        console.log(`tour city temp${name} is ${res.data.main.temp}`)
    } catch (error) {
        console.log(error.message)
    }
    finally{
        rl.close()
    }
})