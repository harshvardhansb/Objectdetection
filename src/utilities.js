export const drawRect = (detection , ctx) =>{
     detection.forEach(prediction=>{
        
        //get prediction result from array 
        const[x,y,width,height]= prediction['bbox'];
        const text = prediction['class'];

        //Some styling

        const color = '#' + Math.floor(Math.random()*16777215).toString(16)
        ctx.strokeStyle= color
        ctx.font = '18px Arial'
        ctx.fllStyle = color
        


        //Reactangle & Text
        ctx.beginPath()
        ctx.fillText(text,x,y)
        ctx.rect(x,y,width,height)
        ctx.stroke()
     })
}