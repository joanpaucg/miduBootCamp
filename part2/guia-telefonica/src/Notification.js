export const Notification=({notification})=>{
    if(notification.message===null || notification.name===null){
        return null
    }
    return(<>
        <div className={notification.name}>
          <h2>{notification.message}</h2>
        </div>
        
    </>)
}