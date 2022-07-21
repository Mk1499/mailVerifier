const codeGenerator = () => {
    let code = Math.floor(Math.random() * 100000) + 100000;
    console.log("Generated Code : ", code);
    return code;
  };
  
  module.exports = codeGenerator;