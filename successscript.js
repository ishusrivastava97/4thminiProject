let navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};
let searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  
};
//reload per video remove karna hai

let button = document.getElementById("open-file");
let video = document.getElementById("video-player");


window.addEventListener("load", function() {
  
  video.style.display = "none";
  
  button.style.display = "block";
});


//video upload karna hai 
                        
                        let buttons = document.getElementById("open-file");
                        let fileInput = document.getElementById("file-input");
                        let videoPlayer = document.getElementById("video-player");
                        let imageView = document.getElementById("image-viewer");

                        
                        buttons.addEventListener("click", function () {
                            
                            fileInput.click();
                        });

                        
                        fileInput.addEventListener("change", function () {
                            
                            let file = fileInput.files[0];
                            
                            if (file && file.type.startsWith("video/")) {
                                
                                let url = URL.createObjectURL(file);
                                
                                videoPlayer.src = url;
                                
                                videoPlayer.style.display = "block";
                                
                                buttons.style.display = "none";
                                
                                imageView.style.display = "none";
                                
                                videoPlayer.play();
                            } else if (file && file.type.startsWith("image/")) {
                                
                                let url = URL.createObjectURL(file);
                                
                                imageView.src = url;
                                
                                imageView.style.display = "none";
                                
                                buttons.style.display = "none";
                                
                                videoPlayer.style.display = "block";
                                
                                videoPlayer.pause();
                            } else {
                                
                                alert("Please select a video or image file.");
                            }
                        });
                    


