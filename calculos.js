function tensaoMedia(){
    let vp = document.getElementById("vp").value
    let ang = document.getElementById("ang").value
    try {
        let Vm =vp*(1+Math.cos((ang*Math.PI)/180))/(2*Math.PI)
        document.getElementById("vp")
        document.getElementById("ang").innerHTML=''
        return document.getElementById("response").innerHTML= Vm
    } catch (error) {
        return document.getElementById("response").innerHTML=error
    }
}

function tensaoEficaz(){
    let vp = document.getElementById("vp").value
    let ang = document.getElementById("ang").value
    try {
        let Vrms = vp*Math.sqrt(1/4 - ang/720 + Math.sin(((2*ang)*Math.PI/180))/(8*Math.PI))
        return  document.getElementById('response').innerHTML= Vrms 
    } catch (error) {
        return document.getElementById('response').innerHTML=error
    }
}


