let rect = document.querySelector(".rect");

rect.addEventListener("mousemove" , (data) => {
    let rectLocation = rect.getBoundingClientRect()
    let insideLocation = data.x - rectLocation.left;
    if(insideLocation < rectLocation.width/2 )
    {
        let blue = gsap.utils.mapRange(0,rectLocation.width/2,255,0,insideLocation);
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${blue})`,
            ease:Power4
        })
    }
    else{
        let red = gsap.utils.mapRange(rectLocation.width/2,rectLocation.width,0,255,insideLocation);
        gsap.to(rect,{
            backgroundColor:`rgb(${red},0,0)`,
            ease:Power4
        })
        
    }
});