exports.home = (req, res) =>{
    res.send("Home Controller"); //respond ข้อมูลออกมาให้เห็นใน web browser
};

exports.about = (req, res) =>{
    res.send("About Controller");
};

exports.contact = (req, res) =>{
    res.send("Contact Controller");
};