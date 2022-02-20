exports.notfound = async (req, res) => {
    try{
        res.status(404).json({
            responseCode: 404,
            responseDesc: "Not Found!"
        });
    }catch(err){
        res.status(200).json(response.bad(err.message));
    }
}