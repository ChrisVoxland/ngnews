app.factory('Post', function($resource){
  return $resource('https://burning-fire-4791.firebaseio.com/posts:id.json')
})