const PostItem = (post) => {
  return `<div class="list-group-item">
        <div class="row">
        
        <div class="col-1" style="padding-left: 7px">
            <img
            style="width: 40px; height: 40px; border-radius: 50%"
            src="${post.avatar}"
            />
        </div>
        
        <div class="col col-11">
            <p class="mb-0">
              ${post.userName} <i class="fas fa-check-circle"></i>
              <span class="text-secondary">- ${post.time}</span>
            </p>
            
            <p>
              ${post.content}
            </p>
            
            <img
              style="width: 100%; height: 300px; border-radius: 2%"
              src="${post.image}"
            />    
            
            <div style="border: 1px solid gray; border-radius: 2%; display: flow">
              <img
                style="width: 100%; height: 300px; 
                       border-top-left-radius: 2%; 
                       border-top-right-radius: 2%; 
                       border-bottom: 1px solid gray;"
                src="${post.linkImage}"
              />
              <p>
                ${post.linkContent}
              </p>
            </div>
            
            <div class="d-flex justify-content-start">
                <a href="#" ><i class="fa-regular fa-message fa-lg wd-icon-color" style="font-size:20px;">      <span class="wd-icon-num">100</span></i></a>  
                <a href="#" ><i class="fa-solid fa-retweet fa-lg wd-icon-color  ms-3" style="font-size:20px;">    <span class="wd-icon-num">109</span></i></a>
                <a href="#"><i class="fa-solid fa-heart fa-lg wd-icon-red  ms-3" style="font-size:20px;">            <span class="wd-icon-num"><em class="wd-icon-red">27</em></span></i></a>
                <a href="#" ><i class="fa-sharp fa-solid fa-arrow-up-from-bracket fa-lg wd-icon-color  ms-3" style="font-size:20px;"></i></a>
            </div>
            
        </div>
        



        </div>
        </div>`;
};

export default PostItem;