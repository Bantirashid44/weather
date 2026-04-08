import express from "express"
import axios from "axios";
const app=express()
app.get("/",(req,res)=>{
    return res.send(`<h1>Weather App</h1>
    <form action="/weather" method="GET">
      <input type="text" name="city" placeholder="Enter city" required />
      <button type="submit">Get Weather</button>
    </form>`)
})
app.get("/weather",async (name,res)=>{
    const keyName='22f369ab4697322faa2d293234e7d528'
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${keyName}&units=metric`
        
         try {
        const res=await axios.get(url)
        const temp1=res.data.main.temp
            } catch (error) {
        console.log(error.message)
    }
        return res.send(`<>
         <h1>tour city temp${name} is ${temp1}</h1>

    </>`)

})
app.listen(7000,()=>{
    console.log("server called")
})