function fill_template(){
    var data = {
        title: "why handlebars is cool",
        list: [
            {name: "reason one"},
            {name: "reason two"},
        ],
        footer: "this is a footer"
    };
    var template = handlebars.compile(document.querySelector("#template").innerHTML);
    var filled = template(data)
    document.querySelector("#output").innerHTML = filled
};