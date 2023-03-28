# github-blog
My first personal blog!

<img width="1309" alt="Captura de Tela 2023-03-28 às 19 22 04" src="https://user-images.githubusercontent.com/62719629/228380179-3d35b02d-0dd5-465d-b05e-1b1950fcb89a.png">

A blog based in Github's API.<br/>
All blog posts are just issues from this repository.

### Github API
Github API is used to get user info and and issues.

```javascript
// User data
  const response = await axios.get(`https://api.github.com/users/${username}`)
```


```javascript
// Issues list
  const response = await axios.get(`https://api.github.com/search/issues?q=${query}repo:${username}/${repo}`)
```

```javascript
// Issue
  const response = await axios.get(`https://api.github.com/repos/${username}/${repo}/issues/${slug}`)
```
