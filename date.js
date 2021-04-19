exports.getDate = getDate;


function getDate(){
    const today = new Date();
   
    const options = {
      weekday: "long",
      day: "numeric",
      month: "short",
    };
   
    let day = today.toLocaleDateString("en-US", options);

    return day;
}

