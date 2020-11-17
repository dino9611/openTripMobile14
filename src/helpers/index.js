export const API_URL=`http://192.168.1.104:5000`


export const dateformat=(n)=>{
    var today = new Date(n);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
  
    today =dd + '-' + mm + '-' + yyyy;
    return today
}