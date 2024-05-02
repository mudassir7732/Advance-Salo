const LocalStorageService=(function(){
    let service;
    function _getService(){
    if(!service){
      service=this;
      return service;
    }
    return service;
  }
  function _setCurrentUser(userObj){
    localStorage.setItem("current_user", JSON.stringify(userObj))
  }
  function _getCurrentUser(){
    return JSON.parse(localStorage.getItem("current_user"))
  }
  function _setAccessToken(token){
    localStorage.setItem('access_token', token)
  }
  function _getAccessToken(){
    return localStorage.getItem('access_token')
  }
  function _setUserType(userType){
    localStorage.setItem('user_type', userType)
  }
  function _getUserType(){
    return localStorage.getItem('user_type')
  }
  return{
    setCurrentUser: _setCurrentUser,
    getCurrentUser: _getCurrentUser,
    setAccessToken: _setAccessToken,
    getAccessToken: _getAccessToken,
    setUserType: _setUserType,
    getUserType: _getUserType,
  }
})()
export default LocalStorageService;