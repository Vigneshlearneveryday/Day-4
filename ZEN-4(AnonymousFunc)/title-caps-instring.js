let str = function () {
    let arr = "hello there how are you"
    let titlecase = arr.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
    console.log(titlecase)
  }
  str()
  
    
    
    