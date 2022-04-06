const showvideo = document.getElementById("showvideo");
let vdata=JSON.parse(localStorage.getItem("videoid"));
let pvdata=JSON.parse(localStorage.getItem("provideoid"));

console.log(`work${vdata}`);

//appendVideo(vdata)

const video=(vdata)=>{
    vdata.map((el)=>{

        console.log("el",el)
        showvideo.innerHTML="";
        let iframe = document.createElement("iframe");
        iframe.setAttribute("id","iframe")  
                
        iframe.src = `https://www.youtube.com/embed/${el.videoId}?autoplay=1"  `;
       
    
        iframe.allow = "fullscreen";
         
    
         let name = document.createElement('h5');
         name.innerText = el.title;
    
         let n = document.createElement('h5');
         n.innerText = `Channel: ${el.cnannel}`;
    
        showvideo.append(iframe,name,n);
    })
    
}
video(vdata);


const popular=(pvdata)=>{
    pvdata.map((e)=>{

        console.log("ep",e)
        showvideo.innerHTML="";
        let iframe = document.createElement("iframe");
        iframe.setAttribute("id","iframe")  
                
        iframe.src = `https://www.youtube.com/embed/${e.videoId}?autoplay=1"  `;
       
    
        iframe.allow = "fullscreen";
         
    
         let name = document.createElement('h5');
         name.innerText = e.title;
    
         let n = document.createElement('h5');
         n.innerText = `Channel: ${e.cnannel}`;
    
        showvideo.append(iframe,name,n);
    })
}


popular(pvdata);


