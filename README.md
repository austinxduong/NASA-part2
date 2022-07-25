## 📰  Cited Sources && Attributions:

- https://easyscienceforkids.com
- https://solarsystem.nasa.gov/planets/overview/
- https://www.universetoday.com/
 
## [🍨  Front-End: Repository](https://github.com/austinxduong/NASA-part1)
## [📸  (Netlify) Front-End: See it LIVE Here](https://nasa-galaxy.netlify.app/)

#### Back-End Technologies:
- RESTful API
- Javascript
- Node.js
- Heroku
- Express.js
- PostgreSQL
- Jest/Supertest

#### Bugs Fixed (and things I've discovered):

``` diff
+ March 30, 2022: server response blocked by CORS, because client + server have different cross-origins [resolved]
  - this means any enduser making requests from any client to the server, should ignore CORS policy
```
#### Bug Not Fixed:
``` diff 
- July 24th, 2022: cors policy block again 😪
 - notes: send client request (front-end) through proxy, and have cors applied when received by server (backend).
```
