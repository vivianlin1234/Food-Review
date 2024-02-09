import path from "path";

class PageController {
    static getHomePage(req,res) {
        res.sendFile(path.resolve() + "/index.html");
    }

    static getfood(req,res) {
        res.sendFile(path.resolve() + "/food.html");
    }
}

export default PageController;
