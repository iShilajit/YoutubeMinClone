
const search_results_div = document.querySelector(`.search_results`);
let videoId = [];
const apikey=`AIzaSyBeTaSgyhDaAEPaJ1KmB1lAyzUJZuD3aMQ`;


const searchVideos = async () => {
    try {

        let inp = document.getElementById("search-input").value;

        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${inp}&key=${apikey}&maxResults=20`)

        let data = await res.json();
        console.log("data:", data)

        let videos = data.items;

        appendVideos(videos);
        return videos;


    } catch (error) {
        console.log("error:", error);
    }
}
///most popular in india
const popularVideos = async () => {
    try {

     

        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&key=${apikey}&maxResults=20`)

        let data = await res.json();
        console.log("populardata:", data)

        let videos = data.items;

        appendPopularVideos(videos);
        return videos;


    } catch (error) {
        console.log("error:", error);
    }
}

popularVideos();






const appendVideos = (data) => {
    search_results_div.innerHTML="";
    try {
        data.forEach(({ snippet: { title },snippet:{channelTitle}, id: { videoId }, snippet: { thumbnails: { high: { url } } } },index) => {
            let div = document.createElement('div');
                div.setAttribute("id","setdiv")
            let name = document.createElement('h5');
            name.innerText = title;

            let n = document.createElement('h5');
            n.innerText = ` ${channelTitle}`;

            let iframe = document.createElement("iframe");
            
            
            iframe.src = `https://www.youtube.com/embed/${videoId}`;
           

            iframe.allow = "fullscreen";


            let th = document.createElement("img");
            th.setAttribute("id", "thumbnails")
            th.src = url;
            th.addEventListener("click",()=>{
                
                console.log(index,videoId);

                let vid=[];

                let yt = new Ytcon(title,channelTitle,videoId);
                console.log("yt",yt)
                vid.push(yt);
                console.log("vid",vid)
                localStorage.setItem("videoid",JSON.stringify(vid));
                
                
                
                
                
              window.location.href="./playvideo.html ";

            })

            div.append(th, title,n);
            search_results_div.append(div)
        });
    } catch (error) {
        console.log("error:", error)
    }

}

///most popular in india
const appendPopularVideos=(data)=>{
    search_results_div.innerHTML="";
    try {
        data.forEach(({ snippet: { title },snippet:{channelTitle}, id, snippet: { thumbnails: { high: { url } } } },index) => {
            let div = document.createElement('div');
                div.setAttribute("id","setdiv")
            let name = document.createElement('h5');
            name.innerText = title;

            let n = document.createElement('h5');
            n.innerText = ` ${channelTitle}`;

            let iframe = document.createElement("iframe");
            
            
            iframe.src = `https://www.youtube.com/embed/${id}`;
           

            iframe.allow = "fullscreen";


            let th = document.createElement("img");
            th.setAttribute("id", "thumbnails")
            th.src = url;
            th.addEventListener("click",()=>{
                
                console.log(index,id);

                let pvid=[];

                let ytp = new Ytpcon(title,channelTitle,id);
                console.log("yt",yt)
                pvid.push(ytp);
                console.log("pvid",pvid)
                localStorage.setItem("provideoid",JSON.stringify(pvid));
                
                
                
                
                
               window.location.href="./playvideo.html ";

            })

            div.append(th, title,n);
            search_results_div.append(div)
        });
    } catch (error) {
        console.log("error:", error)
    }
}





function Ytcon(t,ct,vi){
    this.title = t;
    this.cnannel = ct;
    this.videoId = vi;
}
///most popular in india
function Ytpcon(t,ct,vi){
    this.title = t;
    this.cnannel = ct;
    this.id = vi;
}