import express from 'express';
const app = express();
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import fs from 'fs';
const redditData = JSON.parse(
    await fs.promises.readFile('./data.json', 'utf-8')
);


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

// ...existing code...


const subredditList = Object.keys(redditData);


app.get('/', (req, res) => {
    res.render('index', { subredditList });
});

// Update /r/:subreddit route
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data, subredditList });
    } else {
        res.render('notfound', { subreddit, subredditList });
    }
});



app.get('/r/:subreddit' ,(req ,res)=>{
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    if(data){
        res.render('subreddit' ,{...data})
    }else{
        res.render('notfound',{subreddit})
    }
})

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});