// Github api urls for specific Repositories
// 1. https://api.github.com/repos/yatharth1706/Imdb_Scraper
// 2. https://api.github.com/repos/yatharth1706/chrome-extension-easy-notes
// 3. https://api.github.com/repos/yatharth1706/laravel-bakeryEcom
// 4. https://api.github.com/repos/yatharth1706/angular-music-app
// 5. https://api.github.com/repos/yatharth1706/Scribe-Angular-Web-Application-
// 6. https://api.github.com/repos/yatharth1706/chat-app-nodejs

const projects = []

function Imdb(){
    return fetch("https://api.github.com/repos/yatharth1706/Imdb_Scraper");
}

function chrome(){
    return fetch("https://api.github.com/repos/yatharth1706/chrome-extension-easy-notes");
}

function bakery(){
    return fetch("https://api.github.com/repos/yatharth1706/laravel-bakeryEcom");
}

function music(){
    return fetch("https://api.github.com/repos/yatharth1706/angular-music-app");
}

function scribe(){
    return fetch("https://api.github.com/repos/yatharth1706/Scribe-Angular-Web-Application-");
}

function chatApp(){
    return fetch("https://api.github.com/repos/yatharth1706/chat-app-nodejs");
}

Imdb().then((res)=>{
    return (res.json());
}).then((result) => {
    const temp = {}
    temp.name = result.name;
    temp.desc = result.description; 
    temp.stars = result.stargazers_count;
    temp.language = result.language;
    temp.updatedAt = result.updated_at;
    temp.url = result.html_url;

    projects.push(temp);

    chrome().then((res)=>{
        return (res.json());
    }).then((result) => {
        const temp = {}
        temp.name = result.name;
        temp.desc = "This chrome extension will let users take notes easily while surfing web sites. 📄"; 
        temp.stars = result.stargazers_count;
        temp.language = result.language;
        temp.updatedAt = result.updated_at;
        temp.url = result.html_url;
        
        projects.push(temp);
        
        scribe().then((res)=>{
            return (res.json());
        }).then((result) => {
            const temp = {}
            temp.name = result.name;
            temp.desc = result.description; 
            temp.stars = result.stargazers_count;
            temp.language = result.language;
            temp.updatedAt = result.updated_at;
            temp.url = result.html_url;
            
            projects.push(temp);

            music().then((res)=>{
                return (res.json());
            }).then((result) => {
                const temp = {}
                temp.name = result.name;
                temp.desc = "🎵 Created music application which gives easy access to music and all the features including searching for albums and artist along with playing music and video"; 
                temp.stars = result.stargazers_count;
                temp.language = result.language;
                temp.updatedAt = result.updated_at;
                temp.url = result.html_url;
                
                projects.push(temp);

                chatApp().then((res)=>{
                    return (res.json());
                }).then((result) => {
                    const temp = {}
                    temp.name = result.name;
                    temp.desc = "💬 Learning socket.io to make a persistent connection between clients and server by building a small chat application"; 
                    temp.stars = result.stargazers_count;
                    temp.language = result.language;
                    temp.updatedAt = result.updated_at;
                    temp.url = result.html_url;
                    
                    projects.push(temp);

                    bakery().then((res)=>{
                        return (res.json());
                    }).then((result) => {
                        const temp = {}
                        temp.name = result.name;
                        temp.desc = result.description; 
                        temp.stars = result.stargazers_count;
                        temp.language = result.language;
                        temp.updatedAt = result.updated_at;
                        temp.url = result.html_url;
                        
                        projects.push(temp);
                        
                        // creating dynamic elements
                        var parentCards = document.querySelector(".project-section");
                        projects.forEach((project) => {
                            const artic = document.createElement('article');
                            artic.className = "project-article";
                    
                            const card = document.createElement('div');
                            card.className = "project-card";
                    
                            const title = document.createElement("div");
                            title.className = "project-title";
                            
                            const githuburl = document.createElement("a");
                            githuburl.href = project.url;
                            githuburl.target = "_blank";
                            const globeicon = document.createElement("i");
                            

                            globeicon.className = "fas fa-globe github-link";

                            const h3 = document.createElement("h3");
                            h3.innerText = project.name;
                            githuburl.appendChild(globeicon);
                            title.appendChild(h3);
                            title.appendChild(githuburl);
                            const probody = document.createElement("div");
                            probody.className = "project-body";
                            const p = document.createElement("p");
                            p.innerText = project.desc;

                            const timeSpan = document.createElement("span");
                            const timeIcon = document.createElement("i");

                            timeIcon.className = "fas fa-clock timeIcon";
                            
                            timeSpan.appendChild(timeIcon);
                            timeSpan.appendChild(document.createTextNode(" Last Updated At: "+moment(project.updatedAt).format('d/MMM/YYYY')));

                            probody.appendChild(p);
                            probody.appendChild(timeSpan);

                            const features = document.createElement("div");
                            features.className = "project-features";

                            const star = document.createElement("span");

                            const starIcon = document.createElement("i");
                            starIcon.className = "fas fa-star star-icon";

                            const lang = document.createElement("span");
                            const prolang = document.createTextNode(project.language);
                            const langIco = document.createElement("i");
                            langIco.className = "fas fa-code langIcon";
                            lang.appendChild(langIco);
                            lang.appendChild(prolang);
                            star.appendChild(starIcon);
                            star.appendChild(document.createTextNode(project.stars));
                            features.appendChild(star);
                            features.appendChild(lang);

                            card.appendChild(title);
                            card.appendChild(features);
                            card.appendChild(probody);
                            artic.appendChild(card);
                            parentCards.appendChild(artic);
                        })
                    })
                })
            })
        })
    })

})









