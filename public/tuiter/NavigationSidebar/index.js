const NavigationSidebar = () => {
    return (`
   <div class="list-group">
      <a class="list-group-item" href="/">
      <i class="fab fa-twitter"></i></a>
      <!-- continue rest of list, e.g.,
           Home, Explore, Notifications,  Messages, etc. -->
      <!--Home-->
      <a class="list-group-item list-group-item-action" href="/">
         <i class="fas fa-home"></i>
         <span class="d-none d-xl-inline">Home</span>
      </a>
      
      <a href="/"
         class="list-group-item list-group-item-action active">
         <i class="fas fa-hashtag"></i>
         <span class="d-none d-xl-inline">Explore</span>
      </a>
      <!--notifications-->
      <a
        href="/"
        class="list-group-item list-group-item-action">
        <i class="fas fa-bell"></i>
        <span class="d-none d-xl-inline">Notifications</span>
      </a>
      <!--messages-->
      <a
        href="/"
        class="list-group-item list-group-item-action">
        <i class="fas fa-envelope"></i>
        <span class="d-none d-xl-inline">Messages</span>
      </a>
      <!--bookmarks-->
      <a
        href="/"
        class="list-group-item list-group-item-action">
        <i class="fas fa-bookmark"></i>
        <span class="d-none d-xl-inline">Bookmarks</span>
      </a>
      <!--lists-->
      <a
        href="/"
        class="list-group-item list-group-item-action">
        <i class="fas fa-list"></i>
        <span class="d-none d-xl-inline">Lists</span>
      </a>
      <!--profile-->
      <a
        href="/"
        class="list-group-item list-group-item-action">
        <i class="fas fa-user"></i>
        <span class="d-none d-xl-inline">Profile</span>
      </a>
      <!--more-->
      <a
        href="/"
        class="list-group-item list-group-item-action">
        <i class="fas fa-ellipsis-h"></i>
        <span class="d-none d-xl-inline">More</span>
      </a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
};
export default NavigationSidebar;