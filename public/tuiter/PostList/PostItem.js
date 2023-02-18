const PostItem = (post) => {
  return `<div class="list-group-item">
        <div class="row">
        
        <div class="col-1" style="padding-left: 7px">
            <img
            style="width: 40px; height: 40px; border-radius: 50%"
            src="${post.image}"
            />
        </div>
        
        
        <div class="col col-11">
            <p class="mb-0 text-secondary">${post.topic}</p>
            <p class="mb-0">
            ${post.userName} <i class="fas fa-check-circle"></i>
            <span class="text-secondary">- ${post.time}</span>
            </p>
            
            <p>
            ${post.title}
            </p>
            
            <img
            style="width: 100%; height: 300px; border-radius: 2%"
            src="${post.image}"
            />
                
            <div style="border: 1px solid lightgray;">
              <img
              style="width: 40px; height: 40px; border-radius: 50%"
              src="${post.image}"
              />
              <p>
              ${post.title}
              </p>
            </div>
        </div>

        </div>
        </div>`;
};

export default PostItem;